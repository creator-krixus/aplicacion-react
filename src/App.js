/**Los componentes creados con anterioridad se importan a esta clase */

import React, { Component } from 'react';

/**Asi se deben importar todos los componentes creados 
 * import nombre de la clase que tu creaste from "ruta donde se aloja la clase"
 * esta es una exportacion por default
 * recuerda que todas las sentecias terminan en ;
*/
//exportacion por default
import Header from "./components/header";

//exportacion nombrada= import nombre de la clase,{nombre de la clase exportada} esta
//clase se encuentra dentro de la clase exportada por default from "la ruta";

import Dish, { Flag, Ingredients } from "./components/dish";

import './styles/App.css';
/**para agregar un stilo de css debemos importar los archivos
 *  desde donde se encuentren */

/*import './styles/dish.css';*/

/**Esta funcion tambien se puede cambiar
 * por una clase que extienda de components
 */

function App() {
  /**declaramos una variable */
  var dish = "tacos";
  /**se daclara un arreglo */
  var dishes = new Array ("tacos", "ceviche", "paella");
  return (
    /**dentro del div se colocan cada uno de los componentes que yo he creado
     * con la forma de una etiqueta de html pero cerrada
     */
    
    <div className="App">
      <Header />
      {/**le damos un name o el nombre que desees a la clase Dish para poderle
       *  pasar componentes
       * de otra clase y llamamos el e+archivo desde el cual va recibir la propiedad
      */}
      <Dish name={dish}/>
      yo como {dish}
      <ul>
        {dishes.map(dish=>(<li>{dish}</li>))}
      </ul>
    </div>
  );
}

export default App;
/*lo que esta dentro de la funcion App se retorna en html 
lo que esta dentro del div que es una etiqueta padre*/

/** */