---
title: "Catálogo de Equipamientos"
navigation:
    priority: 68
---

# Catálogo de Equipamientos

## Descripción General
El módulo Catálogo de Equipamientos permite organizar el equipamiento por nombre y tipo para un establecimiento. Cada elemento del catálogo puede tener una o más unidades físicas asociadas, que representan equipos concretos.

## Visualización del Listado
La tabla muestra el nombre, el tipo, la cantidad de unidades físicas, el estado activo, el establecimiento y la fecha de creación.

Se puede buscar y ordenar por nombre, tipo, cantidad y establecimiento. Desde el listado se pueden crear elementos del catálogo y editar los existentes.

## Crear o Editar un Elemento del Catálogo
El formulario incluye:

- **Nombre**: Obligatorio.
- **Tipo**: Obligatorio. Se selecciona entre los tipos de equipamiento disponibles.
- **Activo**: Indica si el elemento está habilitado. Al crear, se propone como activo.

El tipo clasifica el elemento y permite agrupar unidades físicas compatibles.

## Unidades Físicas
Desde la ficha se administran las **Unidades Físicas** asociadas al elemento. Cada unidad permite registrar:

- **Código** y **nombre**: Obligatorios.
- **Fabricante** y **número de serie**.
- **Ubicación**: Se selecciona entre las ubicaciones de tipo pabellón.
- **Activo**, **Instalado** y **Es móvil**: Estados y condición del equipo.
- **Catálogo de destino**: Permite mover la unidad a otro elemento del mismo establecimiento y tipo.

La tabla de unidades permite buscar por código, nombre, serie o fabricante y muestra la ubicación y los estados. Desde esta sección se pueden crear, editar y eliminar unidades físicas.

## Consideraciones
- El catálogo identifica una agrupación de equipos; cada unidad física conserva sus propios códigos y datos de inventario.
- Al crear una unidad desde un elemento, se asignan automáticamente el establecimiento y el tipo de equipamiento de ese catálogo.
- Para mover una unidad, el catálogo de destino debe pertenecer al mismo establecimiento y tener el mismo tipo.
