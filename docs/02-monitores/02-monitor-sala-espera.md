---
title: "Monitor Sala de Espera"
navigation:
    priority: 22
---

# Monitor Sala de Espera

## Descripción General
El Monitor Sala de Espera permite consultar el estado de los pacientes durante el proceso quirúrgico, desde su programación hasta el egreso. La información se organiza en dos secciones: **Pacientes en Pabellón** y **Pacientes en Recuperación**.

## Información Mostrada

### Datos del Paciente
Cada tarjeta identifica al paciente mediante sus iniciales y muestra:

- **Estado actual** dentro del proceso quirúrgico.
- **Cirujano** a cargo.
- **Ubicación** del paciente.
- **Horarios registrados** de ingreso a pabellón, inicio y fin de la intervención.

### Fecha y Actualización
En la parte superior se muestran la fecha, la hora actual y la cuenta regresiva para la siguiente recarga de la información.

## Estados del Paciente
La leyenda inferior explica las etapas y sus colores:

- **Programada**: Asignado, pendiente de ingreso. Se identifica en gris.
- **En Pabellón**: Ingresado, aún no inicia la intervención. Se identifica en azul.
- **En Cirugía**: Intervención en curso. Se identifica en naranja.
- **Salida de Quirófano**: En tránsito a recuperación. Se identifica en naranja.
- **En Recuperación**: En sala de recuperación. Se identifica en verde.
- **Egreso**: Alta para traslado a sala o alta. Se identifica en rojo.

## Visualización
Las tarjetas se agrupan según la ubicación del paciente en el proceso. Cuando no hay pacientes en recuperación, la sección correspondiente muestra el mensaje **Sin pacientes en recuperación**.

Para una vista resumida por paciente, se puede consultar el [Monitor Sala de Espera Pacientes](04-monitor-sala-espera-pacientes.md).
