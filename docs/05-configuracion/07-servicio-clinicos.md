---
title: "Servicios Clínicos"
navigation:
    priority: 57
---

# Servicios Clínicos

## Descripción General
El módulo Servicios Clínicos permite administrar las unidades organizativas clínicas de un establecimiento y asociarles unidades de hospitalización.

## Visualización del Listado
La tabla muestra **Código**, **Nombre** y **Establecimiento**, con búsqueda en estas columnas. Las fechas de creación y actualización están disponibles como columnas opcionales, ocultas inicialmente.

Desde el listado se puede crear un servicio y, desde cada fila, editarlo.

## Crear o Editar un Servicio
La ficha incluye:

- **Código**: Identificador opcional del servicio.
- **Nombre**: Denominación obligatoria.

Al crear un servicio, el sistema asigna automáticamente el establecimiento activo; no se selecciona manualmente en el formulario. La edición mantiene esa asociación.

## Unidades de Hospitalización Asociadas
La ficha del servicio incluye una sección **Unidades de Hospitalización**, que muestra el nombre, el tipo y el estado activo de cada unidad. Desde esta sección se puede:

- Asociar una unidad existente que no esté asignada a otro servicio clínico.
- Desasociar unidades de forma individual o mediante selección múltiple.

La acción **Desasociar** elimina el vínculo con el servicio, no la unidad. Para modificar sus datos, se debe ingresar al módulo [Unidades de Hospitalización](09-unidades-hospitalizacion.md).

## Consideraciones
Los servicios pertenecen al establecimiento seleccionado en el sistema. Las unidades disponibles para asociar son las que no tienen un servicio clínico asignado.
