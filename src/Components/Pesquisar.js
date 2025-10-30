import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Pesquisar() {
    return (
        <View style={style.container}>
            <Icon name="search" size={20} color="black" style={style.icon} />
            <TextInput
                placeholder="Pesquisar"
                placeholderTextColor="#989898"
                style={style.barraPesquisa}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 25,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 3,
        elevation: 5,
    },
    icon: {
        marginRight: 8, 
    },
    barraPesquisa: {
        flex: 1, 
        fontSize: 16,
    },
});
