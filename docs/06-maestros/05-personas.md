---
title: "Personas"
navigation:
    priority: 65
---

# Personas

## Descripción General
El módulo Personas permite administrar los datos de identificación y contacto de las personas registradas. Una persona puede ser usuario del sistema, prestador de salud o ambos. Su ficha concentra los datos comunes y permite consultar registros clínicos y administrativos relacionados.

## Visualización del Listado
El listado se ordena por nombre completo y permite buscar por nombres, apellidos o identificador. Inicialmente muestra el nombre, el RUN u otra identificación y la previsión.

Se pueden habilitar columnas adicionales, como nombre social, tipo de identificación, edad, datos demográficos, pertenencia cultural, discapacidad, educación, teléfonos y correo.

Desde cada registro se accede a su edición. También se pueden abrir registros eliminados lógicamente, aunque esta pantalla no permite eliminarlos ni restaurarlos.

## Información Personal
La ficha incluye nombres, apellidos, nombre social, fecha de nacimiento y tipo de identificador.

- Al seleccionar **RUN**, se solicita un RUN válido y único.
- Al seleccionar otro tipo, se solicita el identificador alternativo.
- El formulario muestra y guarda solo el identificador correspondiente al tipo seleccionado.
- La fecha de nacimiento no puede ser futura y es obligatoria para personas que no son usuarios del sistema.

El número de ficha puede mostrarse como dato de solo lectura, según la configuración del establecimiento.

## Configuración del Sistema
Esta sección permite indicar si la persona es usuario y/o prestador:

- Al marcar **Es prestador de salud**, también se activa su condición de usuario.
- Si ya participa en agendamientos o encuentros quirúrgicos, no se permite quitarle la condición de prestador.
- La configuración de usuario habilita la gestión de roles y establecimientos autorizados. Para prestadores, estos establecimientos se mantienen mediante sus asignaciones clínicas.

Desde la edición se puede abrir la ficha del [prestador asociado](04-prestadores.md). También se ofrece una acción de fusión de personas y, cuando existe una cuenta de usuario, una acción para cambiar su clave.

## Datos Complementarios
La ficha permite completar las siguientes secciones:

- **Características demográficas**: Sexo registral y biológico, género, fecha de nacimiento y estado civil.
- **Pertenencia y cultura**: Nacionalidad, país de origen, pertenencia a pueblo indígena o afrodescendiente, pueblo específico y religión o culto.
- **Situación de discapacidad**: Presencia, origen, nivel y observaciones. Los campos específicos aparecen al indicar que existe una situación de discapacidad.
- **Educación y Ocupación**: Nivel de instrucción, situación ocupacional, ocupación y detalle. La ocupación se solicita cuando la situación es activa.
- **Previsión de Salud**: Sistema y ley previsional. Para FONASA, también incluye tramo y modalidad de atención.
- **Información de Contacto**: Teléfonos móvil, fijo y alternativo, titular del teléfono alternativo y correo electrónico.
- **Dirección y Ubicación**: Una o más direcciones con comuna, provincia, región, área urbano-censal, tipo y nombre de vía, número y anexo.

## Información Relacionada
En la edición se pueden consultar las solicitudes, los agendamientos prequirúrgicos y quirúrgicos, y los encuentros prequirúrgicos, quirúrgicos y postquirúrgicos asociados a la persona. También se puede revisar la auditoría de cambios.

## Consideraciones
Los datos disponibles y los requisitos de la ficha varían según el tipo de persona y la configuración de campos del establecimiento.
