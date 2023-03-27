# Trabajo Práctico N°4
En este trabajo práctico realizamos diferentes ejercicios para aprender algunos conceptos básicos del lenguaje JavaScript.
Se resolvió haciendo uso de los conceptos aprendidos previamente en el Trabajo Práctico anteriores y se integraron nuevos conocimientos:
* Objetos
    * Creación de objetos``
* Clases
    * ``
## Uso de GIT
Tomamos como base el Trabajo Práctico N°3, copiamos su estructura e hicimos el commit inicial. Se creó una rama `dev` a partir de la rama `main`. Luego por cada ejercicio se creo una rama `ejercicioN` donde se trabajó la resolución del ejercicio correspondiente a esa rama y luego se unieron los cambios a la rama `dev`. Una vez finalizados todos los ejercicios y comprobado que funcionan correctamente (se efectuaron algunas correcciones menores directamente en la rama `dev` por cuestiones prácticas), se unió la rama `dev` a la rama `main` para tener todos los cambios. 
## Ejercicios JavaScript
### Prácticas con Programación orientada a Objetos
-------------------
#### Creación de objetos

1. **Crea un objeto** llamado `auto` que tenga algunas características como el **color, marca, modelo** y **si está encendido o apagado**. **Crea los métodos** necesarios para **permitir encender y apagar el auto**.
    Output:
```
objeto.encender(); Auto encendido
objeto.apagar(); El auto se apagó
```

#### Modelando clases
##### Cuenta bancaria
2. Escribe un programa que **cree un objeto** `cuenta` con las siguientes propiedades:
*  Una **propiedad** `titular` con el valor "Alex".
* Una **propiedad** `saldo`, teniendo como **valor inicial 0**.
* Un **método** `ingresar()` que permita **añadir dinero** a la cuenta, pasando la cantidad como parámetro
* Un **método** `extraer()` que permita **retirar la cantidad pasada como parámetro**.
* Un **método** `informar()` que **retorne la información del estado de la cuenta**. 

    Utiliza este objeto para **mostrar la descripción, ingresar y extraer dinero** y volver a **mostrar la descripción del estado** de la cuenta.
#### Rectángulos
3. Escribe una **clase** que permita crear **distintos objetos** `rectángulos`, con las **propiedades** de `alto` y `ancho`, mas los **métodos** necesarios para **modificar** y *mostrar sus propiedades*, **calcular el perímetro y el área**
#### Producto
4. Escribe una **clase** `Producto` para **crear objetos**. Estos **objetos**, deben presentar las propiedades `código`, `nombre` y `precio`, además del **método** `imprime datos`, el cual **escribe** por pantalla los **valores** de sus **propiedades**.
Posteriormente, **cree tres instancias** de este objeto y **guárdalas en un array**.
Por último, utilice el **método** `imprime datos` para **mostrar** por pantalla los *valores* de **los tres objetos instanciados**.


#### Ejercicios Extra
1. **Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :** crear un script con toda la logica necesaria que **solicite al usuario un movimiento** (piedra - papel - tijera) la **PC** **elija aleatoriamente un movimiento** y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)
2. **Crear un objeto** persona que tenga las propiedades: 
    - Nombre. 
    - Apellido. 
    - Edad.
    - Un valor verdadero o falso que indique si es estudiante. 
    - Una lista de hobbies.
    - Este objeto debe contener los **métodos** para **presentar a la persona**, el cual **mostrará* todos los datos**, y los **métodos agregar, borrar y buscar un hobbie**.**Agregar** **por lo menos 3 hobbies** y **mostrarlos** por pantalla, luego **buscar** el **hobbie `viajar`** e **indicar si la persona lo tiene o no**. Por ultimo **eliminar** el **primer hobbie** y volver a **mostrar** todos por pantalla.

3. **Crear un objeto** `calculadora`, con las **propiedades** y **métodos** necesarios para realizar las operaciones de **suma, resta, multiplicación y división**. **Mostrar** por pantalla **2 operaciones con cada método**.

4. Con el siguiente array de objetos, **crear una funcion** que permita **dibujar** una **tabla** con las **columnas** **Producto - categoria - precio.** Realizar las siguientes tareas:

    * **Mostrar** la tabla completa
    
    * **Filtrar** el arreglo de productos por `Protectores solares` y **mostrar** la tabla filtrada.
    
    * **Buscar** un producto `serum` y **mostrarlo** por pantalla,
    
    * **Buscar** un producto `Bruma` y **mostrar** un mensaje adecuado para el usuario **si el producto no existe** en el array.
    ```
    let listaProductos = [
      {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
      },
      { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
      {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
      },
      {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
      },
      {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
      },
      {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
      },
      { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
      { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
      {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
      },
      {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
      },
      {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
      },
      { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
      { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
      { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
      {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
      },
      {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
      },
      { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
    ];
    ```
## Autor
[**César Luciano Angeleri**](https://www.linkedin.com/in/cesar-luciano-angeleri/)
## Tecnologías utilizadas
* HTML
* CSS
* **JavaScript**
*  GIT y GitHub
