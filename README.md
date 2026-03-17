# Documentación de Beach Head


# Ejemplos de formato

Este es un ejemplo completo de todas las opciones de formato Markdown disponibles.

## Títulos (Headings)

# Título Nivel 1
## Título Nivel 2
### Título Nivel 3
#### Título Nivel 4
##### Título Nivel 5
###### Título Nivel 6

## Énfasis de Texto

**Texto en negrita** o __también negrita__

*Texto en cursiva* o _también cursiva_

***Texto en negrita y cursiva***

~~Texto tachado~~

## Listas

### Lista No Ordenada

- Primer elemento
- Segundo elemento
- Tercer elemento
  - Sub-elemento A
  - Sub-elemento B
    - Sub-sub-elemento 1
    - Sub-sub-elemento 2
- Cuarto elemento

### Lista Ordenada

1. Primer paso
2. Segundo paso
3. Tercer paso
   1. Sub-paso 3.1
   2. Sub-paso 3.2
4. Cuarto paso

### Lista de Tareas

- [x] Tarea completada
- [x] Otra tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente

## Enlaces (Links)

[Enlace a Google](https://www.google.com)

[Enlace a documentación interna](escritorio.html)

[Enlace con título](https://www.github.com "Visitar GitHub")

Enlace automático: <https://www.ejemplo.com>

## Imágenes

![Ejemplo imagen](assets/images/logo_sitgeq.png "Texto opcional")

## Tablas

| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Celda A1  | Celda B1  | Celda C1  |
| Celda A2  | Celda B2  | Celda C2  |
| Celda A3  | Celda B3  | Celda C3  |

### Tabla con alineación

| Izquierda | Centrado | Derecha |
|:----------|:--------:|--------:|
| Texto     | Texto    | Texto   |
| Más texto | Más      | 100     |
| Último    | Final    | 999     |

### Tabla de datos reales

| Estado      | Cantidad | Porcentaje |
|-------------|----------|------------|
| Pendiente   | 45       | 30%        |
| En proceso  | 80       | 53%        |
| Completado  | 25       | 17%        |
| **Total**   | **150**  | **100%**   |

## Citas (Blockquotes)

> Esta es una cita simple.

> Esta es una cita más larga que puede
> extenderse en múltiples líneas para
> mostrar cómo se renderiza el texto.

> ### Cita con título
> 
> Puedes incluir otros elementos dentro de las citas.
> 
> - Elemento de lista
> - Otro elemento

> Citas anidadas:
>> Esta es una cita dentro de otra cita.
>>> Y esta es una tercera cita anidada.

## Líneas Horizontales

---

***

___

## Saltos de Línea

Primera línea con dos espacios al final.  
Segunda línea después del salto.

O usar una línea en blanco para separar párrafos.

Nuevo párrafo aquí.

## Combinaciones

### Ejemplo Completo: Creación de Solicitud

Para crear una nueva solicitud quirúrgica, siga estos pasos:

1. **Acceder al módulo**
   - Haga clic en el menú principal
   - Seleccione *"Solicitudes"*

2. **Completar el formulario**

   | Campo | Descripción | Requerido |
   |-------|-------------|-----------|
   | Paciente | RUT y nombre completo | ✓ |
   | Diagnóstico | CIE-10 | ✓ |
   | Prioridad | Urgente/Normal | ✓ |
   | Observaciones | Notas adicionales | ✗ |

3. **Validar información**
   - [ ] Verificar datos del paciente
   - [ ] Confirmar diagnóstico
   - [ ] Revisar prioridad

4. **Guardar solicitud**

   Haga clic en el botón `Guardar` para crear la solicitud.

> **Nota importante:** Asegúrese de que todos los campos requeridos estén completos antes de guardar.

![Formulario de solicitud](/media/menu.jpeg "Ejemplo de formulario")

Para más información, consulte la [documentación completa](index.html) o contacte al ***soporte técnico***.


## Código

### Código en línea

Usa la función `console.log()` para imprimir en consola.

### Bloques de código

```javascript
function crearSolicitud() {
    const solicitud = {
        paciente: "Juan Pérez",
        fecha: new Date(),
        tipo: "Cirugía"
    };
    return solicitud;
}
```

```python
def crear_solicitud(paciente, fecha):
    solicitud = {
        "paciente": paciente,
        "fecha": fecha,
        "tipo": "Cirugía"
    }
    return solicitud
```

```php
function crearSolicitud($paciente, $fecha) {
    $solicitud = [
        'paciente' => $paciente,
        'fecha' => $fecha,
        'tipo' => 'Cirugía'
    ];
    return $solicitud;
}
```

---

**Última actualización:** marzo 2026  
**Versión:** 1.0.0
