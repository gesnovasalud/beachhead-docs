# Estructura del proyecto

Este proyecto está construido sobre Laravel con una mezcla de panel administrativo en Filament, frontend en Inertia + Vue, y una organización de dominio orientada a módulos clínicos y quirúrgicos.

## Vista general

```text
app/
  Actions/           # Acciones de aplicación, por ejemplo integración con Fortify
  Enums/             # Enumeraciones del dominio
  Filament/          # Recursos, páginas, formularios y widgets del panel
  Http/              # Controladores, middleware y requests HTTP
  Jobs/              # Tareas en cola
  Models/            # Modelos Eloquent
  Notifications/     # Notificaciones
  Policies/          # Autorización
  Providers/         # Service providers
  Services/          # Lógica de negocio reutilizable

bootstrap/
  app.php            # Configuración principal de la aplicación
  providers.php      # Registro de providers

config/              # Configuración por componente
database/            # Migraciones, factories, seeders e imports
docs/                # Documentación interna del proyecto
lang/                # Traducciones
public/              # Entrada pública y assets compilados
resources/
  css/               # Estilos fuente
  js/                # Frontend Vue/Inertia
  views/             # Vistas Blade
routes/              # Definición de rutas web, API y consola
storage/             # Logs, caché y archivos temporales
tests/               # Pruebas con Pest
```

## Capa backend

### `app/Models`

Aquí viven las entidades principales del dominio y sus relaciones.

Ejemplo real:

- `TiemposQuirurgicos.php` modela los timestamps asociados a un encuentro quirúrgico.
- Usa `casts()` para convertir campos a `datetime` y `boolean`.
- Define relaciones Eloquent, por ejemplo `encuentro(): BelongsTo`.

Patrón típico:

```php
class TiemposQuirurgicos extends Model
{
    protected $table = 'tiempos_quirurgicos';

    protected function casts(): array
    {
        return [
            'hora_entrada' => 'datetime',
            'riesgo_vital' => 'boolean',
        ];
    }

    public function encuentro(): BelongsTo
    {
        return $this->belongsTo(EncuentroQuirurgico::class, 'encuentro_id');
    }
}
```

### `app/Services`

Contiene lógica de negocio que no conviene dejar dentro de un controlador, modelo o recurso Filament.

Ejemplos reales del proyecto:

- `SolicitudService.php`
- `TiemposHabilesService.php`
- `HISService.php`
- `OpenAiGateway.php`

Caso de uso concreto:

- La página `InformeIntervencionesQX` usa `TiemposHabilesService` para calcular minutos hábiles y no hábiles entre el ingreso y la salida de pabellón.

### `app/Actions`

Se usa para encapsular acciones reutilizables o integraciones puntuales. Actualmente destaca:

- `Actions/Fortify/`, asociado al flujo de autenticación.

### `app/Enums`

El proyecto usa muchos enums para representar reglas del dominio. Esto reduce strings sueltos y hace más legible el código.

Ejemplos frecuentes:

- `EstadoEncuentro`
- `TipoPrestacion`
- `TipoParticipante`
- `Prevision`

## Panel administrativo con Filament

La mayor parte de la operación interna vive bajo `app/Filament`.

```text
app/Filament/
  Actions/
  Forms/
  Infolists/
  Pages/
  Resources/
  Schemas/
  Widgets/
```

### `app/Filament/Resources`

Representa módulos CRUD del panel. Cada recurso suele tener su propia carpeta.

Ejemplos reales:

- `Solicitudes/`
- `EncuentrosQuirurgicos/`
- `Prestadores/`
- `Ubicaciones/`

Qué suele haber dentro de un recurso:

- `Pages/` para páginas como listar, crear o editar.
- `Schemas/` o formularios asociados.
- Configuración de tabla, filtros, acciones y permisos.

### `app/Filament/Pages`

Aquí viven páginas personalizadas que no necesariamente son un CRUD estándar.

Ejemplo real:

- `Pages/Reportes/InformeIntervencionesQX.php`

Ese archivo:

- arma una tabla con columnas clínicas y quirúrgicas,
- define filtros por fecha,
- usa relaciones eager loaded,
- calcula campos derivados para el reporte.

Patrón típico de una página de reporte:

```php
public function table(Table $table): Table
{
    return $table
        ->query(Modelo::query()->with([...]))
        ->columns([
            TextColumn::make('fecha'),
        ])
        ->filters([
            Filter::make('fecha'),
        ]);
}
```

### `app/Filament/Schemas` y `app/Filament/Forms`

Se usan para desacoplar formularios complejos y reutilizar bloques de UI en distintos recursos.

Esto es especialmente útil en formularios clínicos donde un mismo conjunto de campos puede aparecer en varias pantallas.

## Rutas y entrada HTTP

### `routes/web.php`

Define rutas web tradicionales e Inertia.

Ejemplo real:

```php
Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
```

### `routes/api.php`

Se usa para endpoints API. Si agregas integraciones externas o consumo desde otros sistemas, normalmente irán aquí.

### `routes/settings.php`

Agrupa rutas de configuración de cuenta y preferencias del usuario.

### `app/Http`

Suele contener:

- `Controllers/`
- `Middleware/`
- `Requests/`

En este proyecto, por ejemplo, existe un flujo de procesamiento de dictado de voz expuesto vía controlador.

## Frontend con Inertia + Vue

El código cliente está en `resources/js`.

```text
resources/js/
  actions/      # Helpers de acciones o adaptadores
  components/   # Componentes reutilizables
  composables/  # Hooks/composables Vue
  layouts/      # Layouts de páginas
  lib/          # Utilidades del frontend
  pages/        # Páginas Inertia
  routes/       # Helpers o definiciones relacionadas a rutas
  types/        # Tipos TypeScript
  wayfinder/    # Integración de rutas tipadas
  app.ts        # Bootstrap del frontend
  ssr.ts        # Entrada para SSR, si aplica
```

### `resources/js/app.ts`

Es el punto de entrada del frontend. Inicializa Inertia y resuelve páginas Vue dinámicamente.

Ejemplo real:

```ts
createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob('./pages/**/*.vue'),
        ),
});
```

### `resources/js/pages`

Cada archivo representa una pantalla Inertia.

Ejemplos reales:

- `pages/Dashboard.vue`
- `pages/auth/Login.vue`
- `pages/settings/Profile.vue`
- `pages/settings/TwoFactor.vue`

Regla práctica:

- si la pantalla es del panel clínico/operativo principal, probablemente viva en Filament;
- si pertenece al flujo web del usuario autenticado o autenticación, probablemente viva en Inertia + Vue.

## Base de datos

### `database/migrations`

Contiene la historia estructural de la base de datos.

Ejemplos reales:

- `create_solicitudes_table.php`
- `create_encuentros_table.php`
- `create_tiempos_quirurgicos_table.php`
- `create_tiempos_post_quirurgicos_table.php`
- múltiples tablas `form_...` para formularios clínicos.

El nombre de varias migraciones deja ver una convención importante del proyecto:

- entidades núcleo: `solicitudes`, `encuentros`, `prestadores`, `ubicaciones`;
- formularios clínicos: tablas con prefijo `form_`.

### `database/factories`

Se usan para crear datos de prueba de manera consistente.

Ejemplo de uso común en tests:

```php
Solicitud::factory()->create([
    'prestador_id' => Prestador::factory()->create()->id,
]);
```

### `database/seeders`

Sirve para poblar datos base, catálogos o información inicial del sistema.

## Pruebas

El proyecto usa Pest y organiza pruebas en `tests/Feature` y `tests/Unit`.

```text
tests/
  Feature/
  Unit/
  Pest.php
  TestCase.php
```

### `tests/Feature`

Aquí están las pruebas de comportamiento funcional.

Ejemplos reales:

- `SolicitudFilamentTest.php`
- `Reportes/Rem21QuirofanosYRecursosHospitalariosTest.php`
- `Settings/ProfileUpdateTest.php`

Patrón real del proyecto:

```php
Livewire::actingAs($this->user)
    ->test(ListSolicitudes::class)
    ->assertOk()
    ->assertCanSeeTableRecords($solicitudes);
```

Esto refleja que buena parte de la aplicación se valida mediante pruebas de componentes Filament/Livewire.

## Configuración y entorno

### `config/`

Agrupa la configuración de servicios y módulos del framework.

Ejemplos relevantes:

- `fortify.php` para autenticación,
- `inertia.php` para el bridge Laravel-Inertia,
- `ai.php` para capacidades relacionadas con IA,
- `filesystems.php` para discos locales o S3,
- `permission.php` para roles y permisos.

### `bootstrap/app.php`

En las versiones modernas de Laravel, aquí se centraliza la configuración de middleware, excepciones y arranque de la app.

## Assets y archivos públicos

### `resources/css` y `public/build`

- `resources/css` contiene los estilos fuente.
- `public/build` almacena assets compilados por Vite.

### `public/`

Contiene el front controller (`index.php`) y archivos públicos como:

- `robots.txt`
- `site.webmanifest`
- imágenes, fuentes y documentación estática publicada.

## Cómo orientarse rápido en este repositorio

Si necesitas ubicar algo, esta heurística suele funcionar bien:

1. Si buscas una tabla o relación de datos, empieza por `app/Models` y `database/migrations`.
2. Si buscas una pantalla del panel administrativo, revisa `app/Filament/Resources` o `app/Filament/Pages`.
3. Si buscas una pantalla Vue, entra en `resources/js/pages`.
4. Si buscas lógica transversal, revisa `app/Services`.
5. Si buscas endpoints, revisa `routes/` y luego `app/Http/Controllers`.
6. Si buscas cobertura funcional, revisa `tests/Feature`.

## Ejemplos de recorrido completos

### Ejemplo 1: reporte quirúrgico

Si quieres entender cómo se construye un reporte quirúrgico:

1. Revisa `app/Filament/Pages/Reportes/InformeIntervencionesQX.php`.
2. Identifica los modelos relacionados, por ejemplo `EncuentroQuirurgico` y `TiemposQuirurgicos`.
3. Busca la lógica auxiliar en `app/Services/TiemposHabilesService.php`.
4. Si necesitas validar comportamiento, revisa los tests de reportes en `tests/Feature/Reportes`.

### Ejemplo 2: autenticación y ajustes de usuario

Si quieres seguir el flujo de autenticación o perfil:

1. Revisa `routes/web.php` y `routes/settings.php`.
2. Mira las acciones en `app/Actions/Fortify`.
3. Revisa las pantallas Vue en `resources/js/pages/auth` y `resources/js/pages/settings`.
4. Valida con pruebas en `tests/Feature/Settings`.

## Convenciones visibles en este proyecto

- Se usan nombres de dominio en español para la mayoría de modelos, tablas y atributos.
- Filament concentra gran parte de la operación interna del sistema.
- Inertia + Vue cubre pantallas web complementarias, autenticación y ajustes.
- Los servicios encapsulan lógica reutilizable para no sobrecargar páginas o modelos.
- Pest se usa como framework principal de pruebas.

## Recomendación práctica para nuevos cambios

Antes de crear archivos nuevos, conviene revisar si ya existe un módulo equivalente en:

- `app/Filament/Resources` para CRUDs administrativos,
- `app/Filament/Pages` para reportes o pantallas especiales,
- `app/Services` para lógica compartida,
- `resources/js/components` para UI reutilizable,
- `tests/Feature` para seguir el patrón de pruebas existente.
