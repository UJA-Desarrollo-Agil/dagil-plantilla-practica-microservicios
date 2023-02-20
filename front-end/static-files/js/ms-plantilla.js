/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Plantilla = {};



/**
 * Función que muestra la info MS Plantilla al llamar a su Home
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.home = async function (callBackFn) {
    let response = null

    // Intento conectar con el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro la info que se han descargado
    let datosDescargados = null
    if (response) {
        datosDescargados = await response.json()
        callBackFn(datosDescargados.data)
    }
}


/**
* Función que muestra la info MS Plantilla al llamar a su ruta Acerda de
* @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
*/
Plantilla.acercade = async function (callBackFn) {
   let response = null

   // Intento conectar con el microservicio Plantilla
   try {
       const url = Frontend.API_GATEWAY + "/plantilla/acercade/"
       response = await fetch(url)

   } catch (error) {
       alert("Error: No se han podido acceder al API Gateway")
       console.error(error)
       //throw error
   }

   // Muestro la info que se han descargado
   let datosDescargados = null
   if (response) {
       datosDescargados = await response.json()
       callBackFn(datosDescargados.data)
   }
}
/**
 * Función principal para mostrar los datos enviados por la ruta "home" de MS Plantilla
 */
Plantilla.mostrarHome = function () {
    this.home();
}

/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS Plantilla
 */
Plantilla.mostrarAcercaDe = function () {
    this.acercade();
}



