/**Para crear el primer componente necesito importar a React esta importacion siempre
 *  debe ir asi hagas muchos componentes 
 */

import React, { Component } from "react";
/**este tipo de clase con la palabra export antes de class se usa para una exportacion
 * nombrada
 * Esta clase se puede usar dentro de la clase principal que es la que se exporta por 
 * default
 */
export class Flag extends Component{
   
    render(){
        return(
            <div>
                <h1>bandera</h1>
            </div>
        );
    }
}

/**
 * Esta clase se puede usar dentro de la clase principal que es la que se exporta por 
 * default
 */
export class Ingredients extends Component{
   
    render(){
        return(
            <div>
                <h1>ingredientes</h1>
            </div>
        );
    }
}

/**se genera la primera clase del componente
 * se recomienda crear la clase con el mismo nombre del archivo para
 * identificar facil
 * Recordar todos los nombres de clase empiezan con mayuscula
 */

class Dish extends Component{
    //para crear el componente usar el metodo render con su respectivo return
    //dentro del cual se escriben las etiquetas html
    render(){
        return(
            <div>
                <h1>platillos</h1>
                <Ingredients />
            </div>
        );
    }
}
/**Se deja expuesto el componente para ser exportado con el comando
 * export default nombre de la clase.
 * esta es una exportacion por default se importa directamente 
 * con el nombre de su clase
*/
export default Dish;