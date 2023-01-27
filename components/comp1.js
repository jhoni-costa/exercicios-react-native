import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Estilos from '../styles/estilos.js';

export default function (props) {
    return (
        <Text style={Estilos.textoCursos}>Curso de {props.curso} - {props.nota}</Text>
    );
};