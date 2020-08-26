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

/**Esta funcion tambien se puede cambiar
 * por una clase que extienda de components
 */

function App() {
  return (
    /**dentro del div se colocan cada uno de los componentes que yo he creado
     * con la forma de una etiqueta de html pero cerrada
     */
    <div className="App">
      <Header />
      <Dish />
      <Flag />
    </div>
  );
}

export default App;
/*lo que esta dentro de la funcion App se retorna en html 
lo que esta dentro del div que es una etiqueta padre*/

/** */