---
title: "Establecimientos"
navigation:
    priority: 54
---

# Establecimientos

## Descripción General
El módulo Establecimientos permite administrar los datos institucionales, configurar los campos de los formularios y gestionar las ubicaciones asociadas a cada establecimiento.

## Visualización del Listado
La tabla muestra el avatar, el nombre, el código DEIS y la dirección. El teléfono y las fechas de creación, actualización y eliminación están disponibles como columnas opcionales, ocultas inicialmente.

Se puede buscar por los datos de texto visibles, crear un establecimiento desde el listado y acceder a la edición desde cada fila.

## Crear o Editar un Establecimiento
La ficha permite completar los siguientes datos:

- **Nombre**: Identifica al establecimiento en la aplicación.
- **Slug**: Identificador textual utilizado en las direcciones web o integraciones.
- **Código DEIS**: Código institucional que debe ser único.
- **Dirección** y **teléfono**: Datos de contacto.
- **Avatar del sistema**: Imagen cuadrada que se recorta y redimensiona para identificar al establecimiento en el sistema.
- **Logo de documentos**: Imagen utilizada en los documentos. Al editar, se conserva el logo actual si no se carga uno nuevo.

## Campos Parametrizados
La tabla de campos configurables permite definir si cada campo es **Visible**, **Requerido** o ambos. Esta configuración adapta la presentación y validación de los formularios al establecimiento, sin modificar el catálogo común de campos del sistema.

Desde la ficha de edición se encuentran las siguientes acciones:

- **Importar parametrización**: Copia la configuración predefinida de otro hospital o recupera la configuración predefinida del mismo hospital.
- **Revertir parametrización**: Restaura el respaldo anterior a la última importación. Solo aparece cuando existe ese respaldo.
- **Ver auditorías**: Permite consultar los cambios registrados.

Las acciones de importar y revertir parametrización están restringidas al rol **Dios**.

## Ubicaciones Asociadas
Desde la ficha del establecimiento se pueden consultar y administrar sus ubicaciones. Al crear una ubicación desde esta sección, queda asociada al establecimiento correspondiente.

Las opciones y restricciones de estos espacios se detallan en [Ubicaciones](05-ubicaciones.md).

## Consideraciones
Los establecimientos utilizan eliminación lógica: eliminar un registro no equivale a borrar permanentemente todos sus datos.
