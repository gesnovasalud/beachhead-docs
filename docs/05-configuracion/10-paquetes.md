---
title: "Paquetes"
navigation:
    priority: 60
---

# Paquetes

## Descripción General
El módulo Paquetes permite agrupar prestaciones en conjuntos reutilizables para el establecimiento activo. Se accede desde **Configuración > Paquetes**.

## Visualización del Listado
La tabla muestra:

- **Estado**: Activo o inactivo.
- **Código**: Código opcional del paquete.
- **Nombre**: Identifica al paquete.
- **Descripción**: Texto informativo que se muestra abreviado cuando es extenso.
- **Prestaciones**: Cantidad de prestaciones asociadas, sin mostrar el detalle de todas ellas.

Se puede buscar en las columnas disponibles y consultar los registros eliminados mediante el filtro correspondiente.

## Crear o Editar un Paquete
El formulario incluye:

- **Código**: Opcional, con un máximo de 255 caracteres. Si se ingresa, debe ser único dentro del establecimiento activo.
- **Nombre**: Obligatorio, con un máximo de 255 caracteres.
- **Descripción**: Opcional. Admite texto en varias líneas.
- **Prestaciones del Paquete**: Selección obligatoria de una o más prestaciones. Se pueden buscar por código o glosa; las opciones muestran ambos datos.

Al guardar, se conserva la relación con las prestaciones seleccionadas.

## Acciones Disponibles
Desde el listado se puede editar un paquete y cambiar su estado:

- **Desactivar**: Conserva el paquete, pero lo marca como inactivo.
- **Activar**: Vuelve a marcar el paquete como activo.

Según el estado del registro, también se ofrecen acciones para eliminar, eliminar definitivamente o restaurar. La restauración está disponible para registros eliminados sin eliminación definitiva.

## Consideraciones
Los paquetes y las prestaciones disponibles se gestionan dentro del contexto del establecimiento seleccionado.
