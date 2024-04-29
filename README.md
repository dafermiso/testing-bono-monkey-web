Este README proporciona una guía detallada sobre cómo instalar las dependencias, ejecutar las pruebas y personalizar el comportamiento del script.


# Instrucciones de Ejecución

Este repositorio contiene un script de prueba automatizada utilizando Cypress para realizar pruebas aleatorias en la página web de Los Estudiantes. El script simula el comportamiento de un "monkey" que realiza acciones aleatorias en la página.


## Requisitos

- Node.js y npm deben estar instalados en tu sistema.
- Debes clonar este repositorio en tu máquina local.


## Instalación

1. Clona este repositorio en tu máquina local usando el siguiente comando:
git clone https://github.com/dafermiso/testing-bono-monkey-web.git

2. Navega al directorio del proyecto:
cd testing-bono-monkey-web

3. Instala las dependencias necesarias usando npm:
npm install


## Ejecución de las Pruebas

1. Una vez que todas las dependencias se hayan instalado correctamente, puedes ejecutar las pruebas automatizadas con Cypress.
2. Abre una terminal y navega al directorio del proyecto.
3. Ejecuta el siguiente comando para abrir la interfaz de Cypress:
npx cypress open
4. Cypress abrirá una ventana con las pruebas disponibles.
5. Haz clic en el archivo monkey_testing.cy.js para ejecutar las pruebas de los monos (random clicks).
6. Para ejecutar las pruebas de eventos aleatorios, puedes modificar el archivo monkey_testing.cy.js para incluir la función randomEvent() y luego ejecutar el archivo de la misma manera que se describió anteriormente.


### Personalización
Si deseas personalizar el número de clics aleatorios o eventos aleatorios, puedes modificar los parámetros dentro del archivo monkey_testing.cy.js. También puedes ajustar el tiempo de espera entre acciones cambiando el valor del método cy.wait().