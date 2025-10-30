import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

export default function Card(props) {
  return (
    <View style={estilos.card}>
      <Image source={props.imageSource} style={estilos.imagem} />
      <Text style={estilos.titulo}>{props.title}</Text>
      <Text style={estilos.descricao}>{props.description}</Text>
      <Text style={estilos.preco}>R$ {props.money}</Text>
      <View>
        <TouchableOpacity
          style={estilos.botaoSaibaMais}
          onPress={props.onPress}
        >
          <Text style={estilos.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    width: 180,
    height: 300,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    elevation: 5,
  },
  botaoSaibaMais: {
    backgroundColor: "#C67C4E",
    borderRadius: 13,
    width: 40,
    height: 40,
    left: 115,
    top: -25,
  },
  textoBotao: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  imagem: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  titulo: {
    color: "#2F2D2C",
    fontWeight: "bold",
    fontSize: 20,
    width: 180,
  },
  descricao: {
    color: "#9B9B9B",
    width: 150,
    height: "auto",
  },
  preco: {
    fontSize: 25,
    top: 10,
    fontWeight: "bold",
    color: "#2F4B4E",
  },
});
