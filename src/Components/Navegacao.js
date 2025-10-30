import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Navegacao() {
    const navigation = useNavigation();
    const route = useRoute(); // Obtem a rota atual

    // Verifica se a rota atual é 'Home' ou 'Carrinho'
    const isHome = route.name === 'Home';
    const isCarrinho = route.name === 'Carrinho';

    return (
        <View style={styles.navegacao}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons 
                    name="home" 
                    size={24} 
                    color={isHome ? '#E27D19' : '#B7B7B7'} // Cor dinâmica para Home
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
                <Ionicons 
                    name="cart" 
                    size={24} 
                    color={isCarrinho ? '#E27D19' : '#B7B7B7'} // Cor dinâmica para Carrinho
                />
            </TouchableOpacity>
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    navegacao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingVertical: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});
