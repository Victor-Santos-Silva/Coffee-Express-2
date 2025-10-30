import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Menu() {
    return (
        <View style={style.container}>
            <Text style={style.textSelecionado}>Capuccino</Text>
            <Text style={style.text}>Machiato</Text>
            <Text style={style.text}>Latte</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row', // Alinha os itens horizontalmente
        justifyContent: 'space-around', // Distribui os itens uniformemente
        top: 200,
        alignItems: 'center'
    },
    textSelecionado: {
        color: '#fff', // Faz o texto ficar visível no fundo preto
        fontSize: 16,
        backgroundColor: '#C67C4E',
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        color: '#2F4B4E', // Faz o texto ficar visível no fundo preto
        fontSize: 16,
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,
        borderRadius: 10,
        fontWeight: 'bold',
    },
});

