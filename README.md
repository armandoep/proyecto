# Proyecto #

## Contexto ##
La empresa de seguros TK-U, ubicada en la ciudad Jedha, realiza cientos de cotizaciones a diario para sus posibles clientes/asegurados.  El inconveniente que se tiene hasta la fecha es que las cotizaciones se realizan de forma manual, lo cual hace que las personas pierdan mucho tiempo y que se generen como máximo 50 cotizaciones al día.

Esto está causando un gran atraso para la entrega de las cotizaciones y posiblemente están perdiendo una gran cantidad de posibles clientes.

Dado que usted ya tiene los conocimientos necesarios para poder realizar un cotizador automático para la empresa de seguros TK-U, se requiere que usted complete los siguientes requisitos en el programa que se encuentra en el siguiente link: <link>

## Requisitos ##

Debe realizar las siguientes validaciones para aplicar los recargos en la cotización:

1.	Recargos por edad:
    *	El asegurado principal debe ser mayor de 18 años, de lo contrario no se le puede asegurar.
    *	Si el asegurado principal es menor a 21 años, no se le aplican recargos por edad.
    *	Si el asegurado principal se encuentra entre los 21 y 25 años, se le aplica un recargo del 1% del precio base.
    *	Si el asegurado principal se encuentra entre los 25 y 30 años, se le aplica un recargo del 2% del precio base.
    *	Si el asegurado principal se encuentra entre los 30 y 40 años, se le aplica un recargo del 5% del precio base.
    *	Si el asegurado principal se encuentra entre los 40 y 50 años, se le aplica un recargo del 8% del precio base.
    *	Si el asegurado principal se encuentra entre los 50 y 65 años, se le aplica un recargo del 12% del precio base.
    *	Si el asegurado principal es mayor de 65 años, no se le puede asegurar.
2. Recargos por cónyuge: Si el asegurado principal tiene cónyuge, se debe verificar la edad del cónyuge y aplicar recargo dependiendo de la edad de la siguiente forma:
    *	Menor de 30 años: Aplicar recargo del 1% del precio base.
    *	Mayor o igual a 30 pero menor a 40 años: Aplicar recargo del 2% del precio base.
    *	Mayor o igual a 40 pero menor a 50 años: Aplicar recargo del 3% del precio base.
    *	Mayor o igual a 50 pero menor a 70 años: Aplicar recargo del 5% del precio base.
3. Recargos por cantidad de hijos:
    * Aplicar recargo del 1% del precio base por cada hijo menor de 21 años que desea asegurar.

Al final debe mostrar en pantalla lo siguiente:
*	Datos del cliente
*	Desglose de los cargos aplicados
*	Total a pagar

## Puntos extra ##
Se aceptarán los puntos extra únicamente si se realizan todas las validaciones solicitadas en los requerimientos del proyecto.

* En lugar de prompts para solicitar los datos del cliente, utilizar formularios HTML y para ejecutar el cálculo, utilizar un botón que ejecute los cálculos necesarios para generar la cotización y/o el monto a pagar mensualmente.
* Puede mejorar la visualización con css.
* Permitir que se pueda generar un PDF por cotización. El texto a enviar al PDF debe tener formato.
* Permitir que se pueda imprimir la cotización en una hoja tamaño carta. El texto a imprimir debe tener.

## Nota importante ##
Recuerde que cada persona piensa distinto y que no existen dos respuestas iguales. Para este proyecto se tomará en cuenta la política de copia establecida desde el inicio del curso. No copie.

## Dudas ##
Si tiene dudas las puede colocar en el foro de la Unidad 4, las puede realizar por correo o vía Slack.
