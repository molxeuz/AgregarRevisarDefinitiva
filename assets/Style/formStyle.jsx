import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    app: {
      flex: 1
    },
    contenedor_general: {
      flex: 1,
      backgroundColor: 'lightgray',
      margin: 10,
      borderWidth: 5,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    titulo_registro: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
      height: 50,
      width: 250,
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 4,
      paddingStart: 20,
      fontSize: 18,
      marginTop: 5
    },
    contenedor_asignatura: {
      width: 350, 
      borderWidth: 5, 
      borderRadius: 20, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 15, 
      marginTop: 10
    },
    contenedor_notas: {
      display: 'flex', 
      flexDirection: 'row'
    },
    desplazar_asignatura: {
      width: 50,
      height: 40,
      margin: 5,
      borderWidth: 4,
      borderRadius: 20,
      borderColor: 'black',
      backgroundColor: 'white',
      justifyContent: 'center', 
      alignItems: 'center'
    },
    flechas: {
      fontSize: 30, fontWeight: 'bold'
    },
    mensaje_error: {
      marginTop: 245, 
      color: 'red', 
      fontSize: 18, 
      fontWeight: 'bold', 
      position: 'absolute'
    },
    contenedor_definitiva: {
      alignItems: 'center', 
      marginRight: 235, 
      marginTop: 30 
    },
    definitiva: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black', 
      fontSize: 21, 
      fontWeight: 'bold', 
      marginTop: 20
    },
    nota_definitiva: {
      height: 90,
      width: 90,
      borderWidth: 4, 
      borderRadius: 10, 
      backgroundColor: 'white', 
      justifyContent: 'center'
    },
    nota_mensaje: {
      fontSize: 30, 
      textAlign: 'center', 
      fontWeight: 'bold'
    },
    contenedor_observacion: {
      alignItems: 'center', 
      marginTop: -118, 
      marginLeft: 130
    },
    observacion: {
      color: 'black', 
      fontSize: 21, 
      fontWeight: 'bold'
    },
    observacion_definitiva: {
      borderWidth: 4, 
      borderRadius: 10, 
      backgroundColor: 'white', 
      justifyContent: 'center', 
      height: 50, 
      width: 200
    },
    observacion_mensaje: {
      fontSize: 22, 
      textAlign: 'center', 
      fontWeight: 'bold'
    },
    contenedor_botones: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: 10, 
      marginLeft: 125
    },
    boton: {
      width: 70,
      height: 40,
      margin: 5,
      borderWidth: 4,
      borderRadius: 20,
      borderColor: 'black',
      backgroundColor: 'white',
      justifyContent: 'center', 
      alignItems: 'center'
    },
    boton_nombre: {
      fontSize: 13, 
      fontWeight: 'bold'
    }

  });
  
export { styles }