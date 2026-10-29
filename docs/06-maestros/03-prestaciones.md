---
title: "Prestaciones"
navigation:
    priority: 63
---

# Prestaciones

## Descripción General
El módulo Prestaciones permite administrar el catálogo de actividades y procedimientos de salud utilizado en solicitudes y encuentros clínicos. También permite asociar especialidades, definir lateralidad y mantener equivalencias con otros sistemas.

## Visualización del Listado
La tabla muestra el estado activo, el código, la glosa, el tipo de actividad, el nivel de pabellón, el grupo, las áreas y las homologaciones **MAI**, **MLE** y **SIGGES**.

Se puede buscar y ordenar por código y glosa, además de filtrar por tipo de actividad, subgrupo y registros eliminados. Desde el listado se pueden crear, editar y eliminar prestaciones.

## Crear o Editar una Prestación

### Identificación y Clasificación
- **Activo**: Indica si la prestación está disponible. Al crear, se propone como activa.
- **Código**: Obligatorio, único y compuesto solo por dígitos.
- **Glosa**: Obligatoria, de entre 5 y 1.000 caracteres.
- **Código Adicional (CA)**: Opcional, numérico y no negativo.
- **Tipo de Actividad**: Obligatorio. Clasifica la prestación, por ejemplo, como cirugía mayor, cirugía menor o procedimiento.
- **Nivel de Pabellón**: Nivel opcional asociado a la prestación.
- **Grupo y Subgrupo**: Clasificación jerárquica. Los grupos corresponden al establecimiento activo y los subgrupos dependen del grupo seleccionado.
- **Área**: Permite asociar una o más áreas, como quirúrgica, ambulatoria, hospitalizado, urgencia o ADT.
- **Especialidades**: Permite asociar una o más especialidades.

También se puede indicar si la prestación pertenece a la cartera de servicios y si requiere homologación estadística.

### Lateralidad
Al activar **Aplica Lateralidad**, se habilitan las opciones de plano anatómico y extremidad.

## Homologaciones
Las secciones **MAI**, **MLE** y **SIGGES** permiten relacionar la prestación con los códigos o glosas de esos catálogos. Cada equivalencia puede incluir fechas **Desde** y **Hasta**. La opción **Sin fecha límite definida** permite dejar la fecha de término sin límite.

Estas equivalencias relacionan el catálogo local con las nomenclaturas utilizadas en gestión y estadísticas.

## Consideraciones
- El código debe ser único en el catálogo.
- El filtro de registros eliminados permite consultar prestaciones eliminadas lógicamente.
- El listado muestra las homologaciones como códigos; su mantenimiento se realiza en la ficha de edición.
