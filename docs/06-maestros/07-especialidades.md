---
title: "Especialidades"
navigation:
    priority: 67
---

# Especialidades

## Descripción General
El módulo Especialidades permite administrar el catálogo de especialidades médicas y sus equivalencias con los catálogos externos FHIR y Programación.

## Visualización del Listado
La pantalla incluye una pestaña **Todas** y una pestaña por cada tipo de especialidad. La tabla muestra nombre, tipo, código y homologaciones FHIR y Programación, con búsqueda por nombre y código.

Desde el listado se pueden crear y editar especialidades, además de eliminarlas, eliminarlas definitivamente o restaurar las eliminadas lógicamente.

## Crear o Editar una Especialidad
El formulario requiere:

- **Nombre de la Especialidad**: Nombre visible en el catálogo.
- **Código**: Obligatorio, de hasta 10 caracteres.
- **Tipo de Especialidad**: Clasificación que determina la pestaña en la que aparece el registro.

## Homologaciones
La sección **Homologaciones** permite registrar varias equivalencias para cada sistema:

- **FHIR**: Selección de elementos del catálogo FHIR.
- **Programación**: Selección de elementos del catálogo de programación.

Los selectores permiten buscar elementos y muestran su código y glosa como referencia al seleccionarlos. Las filas no se pueden reordenar desde el formulario.

## Consideraciones
- El catálogo es global y no se limita al establecimiento activo.
- Las opciones de homologación provienen de los catálogos correspondientes del sistema.
