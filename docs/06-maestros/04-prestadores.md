---
title: "Prestadores"
navigation:
    priority: 64
---

# Prestadores

## Descripción General
El módulo Prestadores permite administrar la información profesional de quienes participan en la atención clínica. Cada prestador está vinculado a una persona y puede asociarse a uno o más establecimientos.

## Visualización del Listado
La tabla muestra el nombre completo, el identificador, los teléfonos, el número de registro, los establecimientos asociados y el último ingreso. Los títulos profesionales también están disponibles como columna.

Se puede buscar por nombres, apellidos, identificador o establecimientos. Desde cada fila se accede a la edición; la ficha permite abrir el registro de la persona asociada y consultar las auditorías de cambios.

## Datos del Prestador

### Información Personal y Profesional
La sección personal incluye nombres, apellidos, nombre social, fecha de nacimiento y tipo de identificador. Según el tipo seleccionado, se solicita un RUN válido y único o una identificación alternativa. También se puede asociar una referencia externa.

El perfil profesional permite registrar el número de registro **RNPI** y una firma.

### Títulos y Especialidades
Se pueden registrar varios títulos profesionales, con los siguientes datos:

- **Título profesional** y **mención**.
- **Institución emisora** o **institución extranjera**.
- **Fecha de emisión**.

También se pueden registrar varias especialidades, seleccionando el tipo y la especialidad correspondiente. La institución emisora y la fecha de emisión son opcionales. Al editar, los títulos y especialidades existentes se pueden actualizar o retirar.

## Asignación a Establecimientos
Un prestador puede estar asociado a varios establecimientos, con estado activo y fechas de inicio y término para cada asociación.

Si al crear un prestador este ya existe en el sistema, se agrega su asignación al establecimiento actual sin duplicar la persona ni su registro profesional. Si ya está asignado, el sistema informa que la asociación existente no se duplica.

Las asignaciones se sincronizan con los establecimientos autorizados de su usuario asociado.

## Consideraciones
- Los datos de identidad pertenecen a la [persona asociada](05-personas.md); el módulo Prestadores agrega la información profesional.
- La creación y las asignaciones se realizan en el contexto del establecimiento seleccionado.
- El listado no dispone de acciones de eliminación masiva.
