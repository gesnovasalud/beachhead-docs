---
title: "Exámenes"
navigation:
    priority: 62
---

# Exámenes

## Descripción General
El módulo Exámenes permite administrar el catálogo de exámenes médicos, sus clasificaciones y la información necesaria para su vigencia y gestión de cobro.

## Visualización del Listado
La tabla muestra **Código**, **Descripción**, **Categoría**, **Subcategoría** y **Fecha de vigencia**. El subgrupo de cobro y las fechas de creación, actualización y eliminación están disponibles como columnas opcionales.

Se puede buscar y ordenar por código y descripción, además de filtrar por categoría, subcategoría, fecha de vigencia y registros eliminados. Desde el listado se pueden crear, editar y eliminar exámenes.

## Crear o Editar un Examen

### Identificación del Examen
- **Código**: Obligatorio, único, alfanumérico y de hasta 50 caracteres.
- **Vigente desde**: Fecha obligatoria desde la que el examen está vigente.
- **Descripción**: Obligatoria, con un máximo de 500 caracteres.

### Clasificación y Cobro
- **Categoría**: Obligatoria. Al crear, se propone **Exámenes de Laboratorio**.
- **Subcategoría**: Obligatoria. Sus opciones dependen de la categoría seleccionada; al cambiar la categoría, se limpia la subcategoría anterior.
- **Subgrupo de Cobro**: Opcional, con un máximo de 100 caracteres. Permite agrupar información relacionada con facturación y pagos.

## Consideraciones
- La vigencia corresponde a una fecha de inicio. El formulario no solicita una fecha de término.
- Las categorías y subcategorías provienen de catálogos definidos por el sistema.
