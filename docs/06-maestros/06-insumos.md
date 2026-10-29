---
title: "Insumos"
navigation:
    priority: 66
---

# Insumos

## Descripción General
El módulo Insumos permite administrar el inventario de insumos del establecimiento activo y asociarlos, de forma opcional, a una ubicación.

## Visualización del Listado
La tabla muestra **Código**, **Nombre**, **Tipo**, **Cantidad**, **Ubicación**, **Activo** y **Establecimiento**.

Se puede buscar y ordenar por código y nombre, además de ordenar por las demás columnas indicadas. Desde el listado se pueden crear insumos y editar los existentes.

## Crear o Editar un Insumo
El formulario incluye:

- **Código**: Opcional, de hasta 255 caracteres. Si se ingresa, debe ser único dentro del establecimiento activo.
- **Nombre**: Obligatorio, de hasta 255 caracteres.
- **Fabricante** y **N° de serie**: Datos opcionales de identificación.
- **Tipo**: Obligatorio. Clasifica el insumo según las opciones del catálogo.
- **Cantidad**: Obligatoria, numérica y no negativa. Al crear, se propone `0`.
- **Ubicación**: Opcional. Se selecciona entre las ubicaciones del establecimiento activo.
- **Activo**: Indica si el insumo está habilitado. Al crear, se propone como activo.

## Consideraciones
- Las ubicaciones disponibles corresponden al establecimiento activo.
- El listado no dispone de filtros adicionales; la búsqueda se realiza principalmente por código y nombre.
