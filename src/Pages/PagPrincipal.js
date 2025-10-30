import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Principal() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/principal.png')} style={styles.image} />
            <View>
                <Text style={styles.titulo}>Hora de uma pausa para o café....</Text>
                <Text style={styles.texto}>Use o script para atrair nossos clientes, não se esqueça de ser gentil e educado,
                    sempre lembrar de desejar um ótimo dia a eles, e que você também tenha um!
                </Text>
                <View>
                    <Text style={styles.pontinhos}>...</Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.buyButtonText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38241D',
    },
    image: {
        width: '100%',
        height: 500,
    },
    titulo: {
        color: "white",
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
        color: "#bfbfbf",
        textAlign: "center",
        paddingLeft: 12,
        paddingRight: 12
    },
    pontinhos: {
        color: "white",
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 20
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20
    },
    buyButton: {
        backgroundColor: '#D2691E',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    }
});