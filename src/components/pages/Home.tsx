//import librerias
import React from 'react';

//import componentes
import { CategoriasIniciales } from '../homeComponents/CategoriasIniciales';


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs home component
*/
export function Home(props: JSON) {

    const state_home = ((Object(props).properties)['home-styles'])['0'];

    return (
        <>
           <CategoriasIniciales properties={state_home} />
        </>
    );

}

