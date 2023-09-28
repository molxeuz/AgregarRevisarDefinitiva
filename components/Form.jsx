import React, { useState, useLayoutEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../assets/Style/formStyle';

export default function Form() {

  const [id_estudiante, set_id_estudiante] = useState('');
  const [nombre_estudiante, set_nombre_estudiante] = useState('');
  const [asignatura_estudiante, set_asignatura_estudiante] = useState('');
  const [nota_uno_estudiante, set_nota_uno_estudiante] = useState('');
  const [nota_dos_estudiante, set_nota_dos_estudiante] = useState('');
  const [nota_tres_estudiante, set_nota_tres_estudiante] = useState('');
  const [definitiva_estudiante, set_definitiva_estudiante] = useState('');
  const [observacion_estudiante, set_observacion_estudiante] = useState('');
  const [observacion_color, set_observacion_color] = useState('');
  const [mensaje_error, set_mensaje_error] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();
  const navigateToAdvanceSearch = () => {
    navigation.navigate('AdvanceSearch', { estudiantes });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const calcular_nota_definitiva = () => {
    if (!id_estudiante || !nombre_estudiante || !asignatura_estudiante || !nota_uno_estudiante || !nota_dos_estudiante || !nota_tres_estudiante) {
      set_mensaje_error('Todos los campos son obligatorios');
      return;
    }
    const nota_uno = parseFloat(nota_uno_estudiante);
    const nota_dos = parseFloat(nota_dos_estudiante);
    const nota_tres = parseFloat(nota_tres_estudiante);
    if (nota_uno >= 0 && nota_uno <= 5 && nota_dos >= 0 && nota_dos <= 5 && nota_tres >= 0 && nota_tres <= 5) {
      const estudiante_existente = estudiantes.find(
        (estudiante) => estudiante.id_estudiante.toLowerCase() === id_estudiante.toLowerCase() && estudiante.asignatura_estudiante === asignatura_estudiante 
        && estudiante.observacion_color.toLowerCase() === observacion_color.toLowerCase()
      );

      if (estudiante_existente) {
        set_mensaje_error('Identificación y asignatura registradas');
      } else {
        const nota_definitiva = nota_uno * 0.3 + nota_dos * 0.35 + nota_tres * 0.35;
        const nota_definitiva_formateada = nota_definitiva.toFixed(2);
        set_definitiva_estudiante(nota_definitiva_formateada);
        let observacion = '';
        let color = '';
        if (nota_definitiva >= 3) {
          observacion = 'Ganaste';
          color = 'green';
        } else if (nota_definitiva < 2) {
          observacion = 'Perdiste';
          color = 'red';
        } else {
          observacion = 'Habilitaste';
          color = 'orange';
        }

        set_observacion_estudiante(observacion);
        set_observacion_color(color);
        set_mensaje_error('');

        const nuevoEstudiante = {
          id_estudiante, nombre_estudiante, asignatura_estudiante, nota_uno_estudiante, nota_dos_estudiante, nota_tres_estudiante,
          definitiva_estudiante: nota_definitiva_formateada, observacion_estudiante: observacion, observacion_color: color,
        };
        setEstudiantes([...estudiantes, nuevoEstudiante]);
      }
    } else {
      set_definitiva_estudiante('');
      set_observacion_estudiante('');
      set_observacion_color('');
      set_mensaje_error('Las notas deben estar entre 0 y 5');
    }
  };

  const Limpiar_formulario = () => {
    set_id_estudiante('');
    set_nombre_estudiante('');
    set_asignatura_estudiante('');
    set_nota_uno_estudiante('');
    set_nota_dos_estudiante('');
    set_nota_tres_estudiante('');
    set_definitiva_estudiante('');
    set_observacion_estudiante('');
    set_observacion_color('');
  };

  const buscarEstudiante = () => {
    const resultado = estudiantes.filter((estudiante) => estudiante.id_estudiante.toLowerCase() === id_estudiante.toLowerCase());
    if (resultado.length > 0) {
      setCurrentIndex(0);
      const currentEstudiante = resultado[0];
      set_nombre_estudiante(currentEstudiante.nombre_estudiante);
      set_asignatura_estudiante(currentEstudiante.asignatura_estudiante);
      set_nota_uno_estudiante(currentEstudiante.nota_uno_estudiante);
      set_nota_dos_estudiante(currentEstudiante.nota_dos_estudiante);
      set_nota_tres_estudiante(currentEstudiante.nota_tres_estudiante);
      set_definitiva_estudiante(currentEstudiante.definitiva_estudiante);
      set_observacion_estudiante(currentEstudiante.observacion_estudiante);
      set_observacion_color(currentEstudiante.observacion_color);
      set_mensaje_error('');
    } else {
      set_id_estudiante('');
      set_nombre_estudiante('');
      set_asignatura_estudiante('');
      set_nota_uno_estudiante('');
      set_nota_dos_estudiante('');
      set_nota_tres_estudiante('');
      set_definitiva_estudiante('');
      set_observacion_estudiante('');
      set_observacion_color('');
      set_mensaje_error('Estudiante no encontrado');
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const currentEstudiante = estudiantes.filter((estudiante) => estudiante.id_estudiante.toLowerCase() === id_estudiante.toLowerCase())[currentIndex - 1];
      set_nombre_estudiante(currentEstudiante.nombre_estudiante);
      set_asignatura_estudiante(currentEstudiante.asignatura_estudiante);
      set_nota_uno_estudiante(currentEstudiante.nota_uno_estudiante);
      set_nota_dos_estudiante(currentEstudiante.nota_dos_estudiante);
      set_nota_tres_estudiante(currentEstudiante.nota_tres_estudiante);
      set_definitiva_estudiante(currentEstudiante.definitiva_estudiante);
      set_observacion_estudiante(currentEstudiante.observacion_estudiante);
      set_observacion_color(currentEstudiante.observacion_color);
    }
  };

  const handleNext = () => {
    if (currentIndex < estudiantes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const currentEstudiante = estudiantes.filter((estudiante) => estudiante.id_estudiante.toLowerCase() === id_estudiante.toLowerCase())[currentIndex + 1];
      set_nombre_estudiante(currentEstudiante.nombre_estudiante);
      set_asignatura_estudiante(currentEstudiante.asignatura_estudiante);
      set_nota_uno_estudiante(currentEstudiante.nota_uno_estudiante);
      set_nota_dos_estudiante(currentEstudiante.nota_dos_estudiante);
      set_nota_tres_estudiante(currentEstudiante.nota_tres_estudiante);
      set_definitiva_estudiante(currentEstudiante.definitiva_estudiante);
      set_observacion_estudiante(currentEstudiante.observacion_estudiante);
      set_observacion_color(currentEstudiante.observacion_color);
    }
  };

  return (
    <View style={ styles.contenedor_general }>
      <Text style={styles.titulo_registro}>Registra y busca tu nota</Text>
      <TextInput style={[styles.input, { marginTop: 15 }]} onChangeText={(id) => set_id_estudiante(id)}
        value={id_estudiante} placeholder="Identificación" />
      <TextInput style={ styles.input } onChangeText={(nombre) => set_nombre_estudiante(nombre)}
        value={nombre_estudiante} placeholder="Nombre completo" />
      <View style={ styles.contenedor_asignatura }>
        <View style={ styles.contenedor_notas }>
          <TouchableOpacity style={ styles.desplazar_asignatura } onPress={handlePrevious}>
            <Text style={[ styles.flechas, { marginLeft: -7 }]}> ◀ </Text>
          </TouchableOpacity>
          <TextInput style={[styles.input, { width: 200 }]} onChangeText={(asignatura) => set_asignatura_estudiante(asignatura)} 
            value={asignatura_estudiante} placeholder="Asignatura" />
          <TouchableOpacity style={ styles.desplazar_asignatura } onPress={handleNext}>
            <Text style={[ styles.flechas, { marginLeft: 3 }]}> ▶ </Text>
          </TouchableOpacity>
        </View>
        <TextInput style={ styles.input } onChangeText={(nota) => set_nota_uno_estudiante(nota)}
          value={nota_uno_estudiante} placeholder="Nota momento uno" />
        <TextInput style={ styles.input } onChangeText={(nota) => set_nota_dos_estudiante(nota)}
          value={nota_dos_estudiante} placeholder="Nota momento dos" />
        <TextInput style={ styles.input } onChangeText={(nota) => set_nota_tres_estudiante(nota)}
          value={nota_tres_estudiante} placeholder="Nota momento tres" />
      </View>
      {mensaje_error !== '' && ( <Text style={ styles.mensaje_error }>{mensaje_error}</Text> )}
      <View style={ styles.contenedor_definitiva }>
        <Text style={ styles.definitiva }> Definitiva </Text>
        <View style={ styles.nota_definitiva }>
          <Text style={[ styles.nota_mensaje, { color: observacion_color }]}>{definitiva_estudiante}</Text>
        </View>
      </View>
      <View style={ styles.contenedor_observacion }>
        <Text style={ styles.observacion }>Observación</Text>
        <View style={ styles.observacion_definitiva } >
          <Text style={[ styles.observacion_mensaje, { color: observacion_color  }]}>{observacion_estudiante}</Text>
        </View>
      </View>
      <View style={ styles.contenedor_botones }>
        <TouchableOpacity style={ styles.boton } onPress={calcular_nota_definitiva} >
          <Text style={ styles.boton_nombre }>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.boton } onPress={Limpiar_formulario} >
          <Text style={ styles.boton_nombre }>Limpiar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.boton } onPress={buscarEstudiante} >
          <Text style={ styles.boton_nombre }>Buscar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.boton, { width: 180, marginLeft: 135 }]} onPress={navigateToAdvanceSearch}>
        <Text style={ styles.boton_nombre }>Buscar por Asignatura</Text>
      </TouchableOpacity>
    </View>
  );
}