import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    contenedor_general: {
        flex: 1,
        backgroundColor: 'lightgray',
        margin: 10,
        borderWidth: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      boton: {
        width: 180,
        height: 40,
        margin: 5,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10
      },
      boton_nombre: {
        fontSize: 13, 
        fontWeight: 'bold'
      },
      registro: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
      },
      contenedor_asignatura: {
        display: 'flex', 
        flexDirection: 'row', 
        marginTop: 30
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
      mensaje_error: {
        marginTop: 230, 
        color: 'red', 
        fontSize: 18, 
        fontWeight: 'bold', 
        position: 'absolute'
      },
      contendor_lista: {
        marginVertical: 10, 
        padding: 10,
        width: 350, 
        borderWidth: 5, 
        borderRadius: 20, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 15, 
        marginTop: 10,
        backgroundColor: 'white'
      },
      busqueda_resultado: {
        display: 'flex', 
        flexDirection: 'row'
      },
      resultado: {
        fontSize: 18, 
        textAlign: 'center', 
        fontWeight: 'bold'
      }

  });
  
export { styles }