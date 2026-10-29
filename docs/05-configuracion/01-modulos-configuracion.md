---
title: "Módulos de Configuración"
navigation:
    priority: 51
---

# Módulos de Configuración

## Descripción General
Los módulos de Configuración permiten administrar el acceso de los usuarios, los feriados, las etiquetas y los bloqueos de formularios. El acceso a sus funciones depende de los permisos del usuario y, cuando corresponde, del establecimiento activo.

## Seguridad y Acceso

### Permisos
El módulo Permisos mantiene el catálogo que utiliza el sistema para autorizar acciones y el acceso a las pantallas. Cada permiso tiene un nombre único y puede asociarse a un modelo del sistema.

El listado permite buscar permisos y filtrar por modelo. Desde esta sección se pueden crear y editar los permisos.

### Roles
El módulo Roles agrupa permisos para facilitar su asignación a los usuarios. El formulario incluye el nombre, la descripción y la selección de los permisos asociados.

Se pueden buscar y seleccionar varios permisos, además de activar o desactivar la selección en conjunto. El listado muestra los permisos de cada rol.

## Feriados
El módulo Feriados permite registrar fechas feriadas con su nombre y consultar los días no laborables configurados en el sistema. El listado permite buscar por nombre, ordenar por fecha y filtrar por año.

## Etiquetas
El módulo Etiquetas permite administrar las etiquetas mediante su nombre. El listado permite buscar por nombre y distingue las etiquetas personalizadas.

## Bloqueos de Formularios
Este módulo permite a los administradores revisar los bloqueos utilizados para evitar ediciones simultáneas de un formulario. El listado muestra:

- **Tipo de formulario** y **paciente**, cuando está disponible.
- **Usuario** que mantiene el bloqueo.
- **Inicio del bloqueo** y **última actividad**.
- **Estado del bloqueo**: Activo o expirado.

La acción **Liberar** elimina el bloqueo. Si ya expiró, la acción solo limpia su registro del listado.

## Configuración del Establecimiento
Los módulos con una ficha propia se describen en las siguientes páginas:

- [Establecimientos](04-establecimientos.md).
- [Ubicaciones](05-ubicaciones.md).
- [Servicios Clínicos](07-servicio-clinicos.md).
- [Unidades de Hospitalización](09-unidades-hospitalizacion.md).
- [Paquetes](10-paquetes.md).
