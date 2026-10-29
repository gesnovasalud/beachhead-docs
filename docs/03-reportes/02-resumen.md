---
title: "Reportes"
navigation:
    priority: 31
---

# Reportes

## Descripción General
El módulo Reportes permite consultar y exportar información sobre la actividad quirúrgica, el uso de pabellones, las suspensiones y la atención prequirúrgica. Los permisos del usuario y el establecimiento activo determinan el acceso y los datos visibles en cada reporte.

## Funcionalidades Principales

- **Consultar información**: Seleccionar el reporte y el período que se desea revisar.
- **Filtrar resultados**: Aplicar los filtros disponibles, como fechas, paciente, especialidad o tipo de reintervención, según el reporte.
- **Exportar datos**: Generar archivos en Excel o CSV, de acuerdo con las opciones de cada reporte.

## Reportes Disponibles

| Reporte | Descripción breve | Filtros y salida |
|---|---|---|
| **REM-21. Quirófanos y otros recursos hospitalarios** | Consolida información mensual de quirófanos, actividad y suspensiones. Incluye las secciones A, E y F, sus detalles y los encuentros excluidos de la sección A. | Mes y año. Genera un Excel con siete pestañas en segundo plano. |
| **REM SBS-B. Intervenciones Quirúrgicas** | Exporta el reporte REM SBS-B de intervenciones quirúrgicas. | Mes, año y día opcional. Exportación en Excel en segundo plano. |
| **REM B-17. Intervenciones Quirúrgicas** | Exporta la sección L del REM B-17, correspondiente a intervenciones quirúrgicas. | Mes y año. Exportación en Excel en segundo plano. |
| **REM 24. Atención Obstétrica y del Recién Nacido** | Exporta las secciones del REM 24 relacionadas con atención obstétrica y recién nacidos. | Mes, año y día opcional. Exportación en Excel en segundo plano. |
| **Uso de Pabellones** | Resume por pabellón y semana las cirugías, los tiempos de subprogramación y los retrasos de la primera cirugía. Permite consultar el detalle. | Rango de fechas, por defecto el mes actual. Exportación en Excel. |
| **Estado Mensual de Quirófanos** | Muestra por establecimiento la dotación de pabellones y cuántos están habilitados, no habilitados, en trabajo o sin trabajo. | Rango de fechas, por defecto el mes actual. Exportación en Excel en segundo plano. |
| **Informe de Suspensiones Usuarios** | Detalla cirugías suspendidas y pacientes que no se presentaron, con causal, servicio, tipo de solicitud e intervención propuesta. | Rango de fechas y búsqueda por paciente. Exportación en Excel. |
| **Suspensiones por especialidad** | Cuenta cirugías programadas y suspendidas por día y especialidad. | Mes y año. Exportación en Excel en segundo plano. |
| **Cirugías por rango de fechas** | Agrupa suspensiones por fecha y hospital, desglosadas por causal y subcausal. | Rango de fechas. No aparece en el menú de navegación. |
| **Cirugías Realizadas** | Lista intervenciones finalizadas con datos del paciente, fecha y prestaciones realizadas. | Rango de fechas y búsqueda por nombre o identificación. Exportación en Excel. |
| **Estadístico Cesárea** | Presenta datos de cesáreas, grupo Robson, esterilización, causal y profesionales asociados. Algunos campos dependen de la configuración del establecimiento. | Rango de fechas o mes y año. Exportación en Excel. |
| **Estadístico Pabellón** | Lista encuentros finalizados o cancelados con paciente, fecha, pabellón, tipo de procedimiento y estado de agenda. | Rango de fechas. Exportación en Excel. |
| **Atención Prequirúrgica** | Detalla entrevistas prequirúrgicas finalizadas, sus horarios, entrevistador, diagnósticos e intervenciones propuestas. | Rango de fechas y búsqueda por nombre, identificación o especialidad. Exportación en Excel. |
| **General de Intervenciones** | Reúne datos de intervenciones finalizadas: paciente, servicio, especialidad, cirugías propuestas y realizadas, profesionales, anestesia y tiempos quirúrgicos, entre otros. | Rango de fechas y búsqueda en las columnas disponibles. Exportación en Excel. |
| **Indicador tiempos** | Resume por pabellón la cantidad de cirugías con entrada y salida registradas, las horas totales y los promedios de uso. Permite consultar el detalle por pabellón. | Rango de fechas, por defecto el mes actual. Exportación del resumen y del detalle en Excel o CSV. |
| **Tiempos Qx. por Procedimientos** | Compara los tiempos agendados y reales por cirugía. Informa tiempos por especialidad y diferencias frente a lo agendado y al estándar. | Rango de fechas y búsqueda por cirujano, pabellón o procedimiento. Exportación en Excel. |
| **Reporte Reintervención** | Detalla reintervenciones con información del paciente, tipo, intervenciones y diagnósticos pre y postoperatorios. | Rango de fechas y tipo de reintervención. Exportación en Excel. |

## Consideraciones de Consulta y Exportación

- Los filtros de fechas aplican los límites seleccionados.
- Los reportes REM y algunas tablas consolidadas generan sus archivos en segundo plano. El sistema notifica cuando comienza la exportación.
- Los filtros y formatos de exportación varían según el reporte seleccionado.
