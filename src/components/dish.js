/**Para crear el primer componente necesito importar a React esta importacion siempre
 *  debe ir asi hagas muchos componentes 
 */

import React, { Component, Fragment } from "react";
/**este es una importacion de material-ui */
import Button from '@material-ui/core/Button';
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
 * las clase tambien se pueden generar con codigo nativo de react pero es un poco
 * mas facil con el de jsx
 * aqui un ejemplo 
 * las clases funcionan igual con las dos formas
 */

/*export class Ingredients extends Component{
   
    render(){
        return React.createElement("h1", {}, "ingredientes");
    }
}*/
/**revisar la documentacion para aclara el concepto fragment
 * https://es.reactjs.org/docs/fragments.html
 * 
 */
export class Ingredients extends Component{
   
    render(){
        return(
            <Fragment >
                {/* estos son comentarios jxs que van dentro de las etiquetas */}
                <h4>ingredientes</h4>
                <h4>ingredientes</h4>
                
            </Fragment>
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
            /**este nombre de clase se usa para dar forma con los archivos css */
            <div className="dish">
                {/**para acceder a la informacion se le coloca la propieda props con n cantidad
                 * de atributos 
                 */}
                <h1>{ this.props.name }</h1>
                <Ingredients />
                <Button variant="contained">Default</Button>
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