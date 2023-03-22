# Trabajo Práctico N°3
En este trabajo práctico realizamos diferentes ejercicios para aprender algunos conceptos básicos del lenguaje JavaScript.
Se resolvió haciendo uso de los conceptos aprendidos previamente en el Trabajo Práctico N°1, Trabajo Práctico N°2 y se integraron nuevos conocimientos:
* Arrays
    * Declaracion de un arreglo con varios elementos `array = [1,valor2,...,valorN]`
    * Asignación de un elemento al arreglo en una posicion específica con `array[i] = valor`
    * Añadir un elemento en la la última posición del arreglo con `array.push(valor)`
    * Acceso de la longitud del arreglo (cantidad de elementos) con `array.length`
* Funciones
    * Creación de funciones declarativas con `function nombreFuncion(parametro1,parametro2) { código a ejecutar }`
    * Llamado o invocación de funciones con `nombreFuncion(parametro1,parametro2)`
## Uso de GIT
Tomamos como base el Trabajo Práctico N°2, copiamos su estructura e hicimos el commit inicial. Se creó una rama `dev` a partir de la rama `main`. Luego por cada ejercicio se creo una rama `ejercicioNTema` donde se trabajó la resolución del ejercicio correspondiente a esa rama y luego se unieron los cambios a la rama `dev`. Una vez finalizados todos los ejercicios y comprobado que funcionan correctamente (se efectuaron algunas correcciones menores directamente en la rama `dev` por cuestiones prácticas), se unió la rama `dev` a la rama `main` para tener todos los cambios. 
## Ejercicios JavaScript
### Prácticas con arreglos y funciones
-------------------
#### Arrays

1. Crear un **array** llamado **meses** y que **almacene** el **nombre de los doce meses del año**. **Mostrar por pantalla** en forma de **lista**  los **doce nombres** del arreglo.

2. Crear un script que solicite al usuario mediante un **prompt** **el nombre de ciudades** y **almacenarlas en un arreglo**, cuando el **usuario selecciona cancelar** se debe **mostrar el arreglo generado**, luego realizar las siguientes acciones:

    * Mostrar la **longitud del arreglo.**
    * Mostrar en el documento web los **ítems** de las **posiciones** **primera**, **tercera** y **última**.
    * **Añade** en **última posición** la ciudad de **París**.
    * **Escribe por pantalla** el **elemento** que ocupa la **segunda posición**.
    * **Sustituye** el elemento que ocupa la **segunda posición** por la **ciudad de 'Barcelona'**.

3. Escribir un script que simule el **lanzamiento** de **dos dados**. Hacer uso de la función `Math.random` para obtener **números aleatorios entre 1 y 6** para **cada uno de los lanzamientos** de los dados. **Sumar el resultado de lanzar dos dados** y **anotar en un array el número de apariciones de dicha suma**, repitiendo **50 veces esta operación**.

Ejemplo de salida:
| Suma | Aparciciones |
| :----: | :------------: |
| 2 | 1 |
| 3 | 5 |
| 4 | 5 |
| 5 | 4 |
| 6 | 8 |
| 7 | 6 |
| 8 | 5 |
| 9 | 5 |
| 10 | 3 |
| 11 | 6 |
| 12 | 2 |

------------------
#### Funciones
1. Escribir el código de una **función** a la que se pasa como **parámetro** un **número entero** y devuelve como **resultado** una **cadena de texto** que indica **si el número es par o impar**. M**ostrar por pantalla** el resultado devuelto por la **función**.

2. Definir una **función** que muestre información sobre una **cadena de texto** que se le pasa como **argumento**. A partir de la cadena que se le pasa, la **función** determina **si esa cadena** está **formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas**.

3. Solicitar por pantalla al usuario **ingresar el valor** de los **lados de un rectángulo**, luego crear una **función** para **calcular su perímetro** y **mostrarlo** por pantalla. La fórmula del perímetro  es `p = 2*(a +b)`
4. Escriba un script que **muestre** la **tabla de multiplicar** de un **número ingresado** por pantalla, la **creación de la tabla** debe ser **realizada** con una **función** y **mostrar solo los resultados del 1 al 10** del **número elegido** por el usuario.

## Autor
[**César Luciano Angeleri**](https://www.linkedin.com/in/cesar-luciano-angeleri/)
## Tecnologías utilizadas
* HTML
* CSS
* **JavaScript**
*  GIT y GitHub
