import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Pesquisar from './Pesquisar';

export default function Header() {
    return (
        <LinearGradient
            // Degrade
            colors={['#131313', '#4c4c4c']}  // Defina as cores do degradê aqui
            start={[1, 0]}  // Posição inicial do gradiente (superior esquerda)
            end={[0, 1]}    // Posição final do gradiente (inferior)
            style={estilos.topo}
        >
            <Text style={estilos.tituloHeader}>Location:</Text>
            <Text style={estilos.subtitulo}>São Paulo, Brazil</Text>
            <Image
                source={require('../Images/perfil-man.png')}
                style={estilos.imagem}
            />
            <Pesquisar />
        </LinearGradient>
    );
}

const estilos = StyleSheet.create({
    topo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 160,
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
        paddingTop: 75,
        zIndex: 10,
    },

    tituloHeader: {
        color: "#B7B7B7",
    },

    subtitulo: {
        color: "#DDDDDD",
        fontWeight: "bold",
    },

    imagem: {
        height: 100,
        width: 50,
        position: 'absolute',
        right: 40,
        top: 40,
    },
    texto: {
        padding: 20,
        fontSize: 18,
    },
});