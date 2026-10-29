---
title: "Ubicaciones"
navigation:
    priority: 55
---

# Ubicaciones

## Descripción General
El módulo Ubicaciones permite configurar los espacios físicos y operativos de cada establecimiento, incluidos los pabellones y otras ubicaciones utilizadas en las agendas y los encuentros quirúrgicos.

## Visualización del Listado
La tabla permite buscar y ordenar por nombre y especialidad. Muestra el tipo y el estado activo; el tipo de pabellón, el piso o sector y las fechas de registro están disponibles como columnas opcionales.

El filtro **Tipo** permite limitar los resultados. Desde el listado se puede crear una ubicación y, desde cada fila, editarla.

## Crear o Editar una Ubicación
La ficha permite configurar los siguientes datos:

- **Nombre** e **ID interno**: Identifican el espacio.
- **Especialidad** y **Piso / sector**: Información organizativa.
- **Tipo**: Clasificación principal de la ubicación. Es obligatorio.
- **Tipo pabellón**: Se muestra y es obligatorio únicamente cuando el tipo es **Pabellón**. Si se selecciona otro tipo, este dato se limpia.
- **Categoría**, **Nivel pabellón** y **Complejidad máxima**: Datos de clasificación según el uso de la ubicación.
- **Horario hábil (horas/semana)**: Cantidad numérica de horas, con un mínimo de cero.
- **Activo**: Indica si la ubicación está habilitada. Al crear, se propone como activa.

## Jornada y Vigencia
La sección **Jornada por día de la semana** permite registrar las horas de inicio y término de lunes a domingo. Los días están predefinidos y no se pueden agregar, eliminar ni reordenar desde el formulario.

También se pueden establecer las fechas **Vigencia desde** y **Vigencia hasta**. Al activar **Sin fecha límite definida**, se limpia la fecha de término y el campo **Vigencia hasta** queda deshabilitado.

## Eventos Asociados
La edición incluye un calendario de la ubicación y acciones para consultar eventos relacionados. El calendario se actualiza después de guardar los cambios.

## Consideraciones
- No se permite cambiar el tipo de una ubicación que tenga agendamientos o encuentros quirúrgicos asociados, incluidos los eliminados lógicamente. En ese caso, el sistema muestra un error de validación.
- Las ubicaciones se administran dentro del contexto del establecimiento. También se pueden crear y consultar desde la ficha de [Establecimientos](04-establecimientos.md).
