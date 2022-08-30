/**
 *  @decs import libs
*/
import React from 'react';
import { App }  from './App';
import { createRoot } from 'react-dom/client';

/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs render the app
*/

// create container
var container = document.getElementById('root');

// create root
var root = createRoot(container);

// render app 
root.render(<App />);