import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../assets/Style/AdvanceSearchStyle';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AdvanceSearch() {

  const [asignatura_estudiante, set_asignatura_estudiante] = useState('');
  const [mensaje_error, set_mensaje_error] = useState('');
  const [estudiantesEncontrados, setEstudiantesEncontrados] = useState([]);

  const navigation = useNavigation();

  const route = useRoute();
  const { estudiantes } = route.params;

  useLayoutEffect(() => {

    navigation.setOptions({

      headerShown: false,

    });

  }, [navigation]);

  const navigateToOtraPantalla = () => {
    
    navigation.navigate('Form');

  };

  const colorObservacionMap = {
    green: 'Ganaste',
    red: 'Perdiste',
    orange: 'Habilitaste',
  };

  useEffect(() => {

    const estudiantesConObservaciones = estudiantesEncontrados.map((estudiante) => {
      const observacion = colorObservacionMap[estudiante.observacion_color] || '';
      return {
        ...estudiante,
        observacion,
      };
    });
  
    setEstudiantesEncontrados(estudiantesConObservaciones);
  }, [estudiantesEncontrados]);

  const buscarEstudiante = () => {

    if (!asignatura_estudiante) {

      set_mensaje_error('Ingrese la asignatura');

      return;

    }

    const estudiantesPorAsignatura = estudiantes.filter(

      (estudiante) => estudiante.asignatura_estudiante.toLowerCase() === asignatura_estudiante.toLowerCase()

    );

    if (estudiantesPorAsignatura.length > 0) {

      set_mensaje_error('');

      setEstudiantesEncontrados(estudiantesPorAsignatura);

    } else {

      set_mensaje_error('No hay estudiante para la asignatura');

      setEstudiantesEncontrados([]);

    }

  };

  return (

    <View style={ styles.contenedor_general }>

      <TouchableOpacity style={[ styles.boton , { marginTop: 25 }]} onPress={navigateToOtraPantalla}>

        <Text style={ styles.boton_nombre }> Volver </Text>

      </TouchableOpacity>

      <Text style={ styles.registro }> Busca avanzadamente </Text>

      <View style={ styles.contenedor_asignatura }>
        
        <TextInput style={styles.input} onChangeText={(asignatura) => set_asignatura_estudiante(asignatura)} 
          value={asignatura_estudiante} placeholder="Asignatura" />

        <TouchableOpacity style={[ styles.boton, { width: 70, height: 40 }]} onPress={buscarEstudiante}>
          <Text style={ styles.boton_nombre }> Buscar </Text>
        </TouchableOpacity>

      </View>

      {mensaje_error !== '' && ( <Text style={ styles.mensaje_error }> {mensaje_error} </Text> )}

      {estudiantesEncontrados.length > 0 && (

        <ScrollView style={{ marginTop: 25 }}>

          <Text style={[ styles.registro, { fontSize: 25 }]}>Estudiantes encontrados:</Text>

          {estudiantesEncontrados.map((estudiante, index) => (

            <View key={index} style={ styles.contendor_lista }>

              <View style={ styles.busqueda_resultado }>
                <Text style={ styles.resultado }>Identificación: </Text>
                <Text style={ styles.resultado }> {estudiante.id_estudiante}</Text>
              </View>

              <View style={ styles.busqueda_resultado }>
                <Text style={ styles.resultado }>Nombre: </Text>
                <Text style={ styles.resultado }> {estudiante.nombre_estudiante}</Text>
              </View>

              <View style={ styles.busqueda_resultado }>
                <Text style={ styles.resultado }>Asignatura: </Text>
                <Text style={ styles.resultado }> {estudiante.asignatura_estudiante}</Text>
              </View>

              <View style={ styles.busqueda_resultado }>
                <Text style={ styles.resultado }>Definitiva: </Text>
                <Text style={[ styles.resultado, { color: estudiante.observacion_color }]}> {estudiante.definitiva_estudiante}</Text>
              </View>

              <View style={ styles.busqueda_resultado }>
                <Text style={ styles.resultado }>Observacion: </Text>
                <Text style={[ styles.resultado, { color: estudiante.observacion_color }]}> {estudiante.observacion_estudiante}</Text>
              </View>

            </View>

          ))}

        </ScrollView>

      )}

    </View>

  );

}
