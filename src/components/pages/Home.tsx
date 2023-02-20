//import librerias
import { Typography } from '@material-ui/core';
import React from 'react';

//import componentes
import { CategoriasIniciales } from '../homeComponents/CategoriasIniciales';
import { Header } from '../homeComponents/Header';
import { Footer } from '../homeComponents/Footer';


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs home component
*/
export function Home(props: JSON) {
    
    const state_home = ((Object(props).properties)['home-styles'])['0'];

    return (
        <>
            <Header properties={state_home} />  
            <CategoriasIniciales properties={state_home} />
            <Footer properties={state_home} />
        </>
    );

}

