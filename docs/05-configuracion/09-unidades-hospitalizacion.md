---
title: "Unidades de Hospitalización"
navigation:
    priority: 59
---

# Unidades de Hospitalización

## Descripción General
El módulo Unidades de Hospitalización permite administrar las unidades del establecimiento activo, asociarlas a un servicio clínico y definir si están habilitadas. En el menú del sistema se identifica como **Unidad Hospitalizaciones**.

## Visualización del Listado
La tabla muestra:

- **Unidad de Hospitalización**: Nombre generado con el prefijo del tipo y el número de la unidad.
- **Tipo**: Clasificación de la unidad.
- **Servicio Clínico**: Servicio asociado, cuando corresponde.
- **Activo**: Estado de habilitación.

Se puede buscar por número o servicio y ordenar por unidad o servicio. Las fechas de creación y actualización están disponibles como columnas opcionales.

El listado permite crear y editar unidades, además de eliminar las seleccionadas mediante la acción masiva disponible.

## Crear o Editar una Unidad
El formulario incluye:

- **Tipo**: Obligatorio. Determina el prefijo utilizado en el nombre completo.
- **Número**: Obligatorio. Admite valores numéricos, alfanuméricos o fraccionarios, como `5`, `M1` o `10 1/2`.
- **Servicio clínico**: Opcional. Permite asociar un servicio o dejar la unidad sin asignar.
- **Activo**: Indica si la unidad está habilitada. Al crear, se propone como activa.

Cuando el número contiene solo dígitos, se agrega un cero a la izquierda cuando corresponde; por ejemplo, `5` se muestra como `05`, junto al prefijo del tipo. Los valores alfanuméricos o fraccionarios conservan su formato.

## Relación con Servicios Clínicos
La asociación se puede realizar desde el formulario de la unidad o desde la ficha de [Servicios Clínicos](07-servicio-clinicos.md). Desde esta última solo se ofrecen unidades que no están asignadas a otro servicio.

La acción **Desasociar** elimina el vínculo con el servicio, no la unidad.

## Consideraciones
- Las unidades se administran dentro del establecimiento activo.
- El número también permite localizar unidades mediante la búsqueda global del sistema.
