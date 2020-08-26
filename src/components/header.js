/**Para crear el primer componente necesito importar a React esta importacion siempre
 *  debe ir asi hagas muchos componentes 
 */

import React, { Component } from "react";

/**se genera la primera clase del componente
 * se recomienda crear la clase con el mismo nombre del archivo para
 * identificar facil
 * Recordar todos los nombres de clase empiezan con mayuscula
 */

class Header extends Component{
    //para crear el componente usar el metodo render con su respectivo return
    //dentro del cual se escriben las etiquetas html
    render(){
        return(
            <div>
                <h1>platillos tipicos</h1>

            </div>
        )
    }
}
/**Se deja expuesto el componente para ser importado con el comando
 * export default nombre de la clase.
*/
export default Header;