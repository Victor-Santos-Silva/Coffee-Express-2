import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Navegacao from "../Components/Navegacao";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState(null);
  const [idAdmin, setIdAdmin] = useState(null);
  const navigation = useNavigation();

  // Buscar o idAdmin salvo no login
  useEffect(() => {
    const loadId = async () => {
      const id = await AsyncStorage.getItem("adminId");
      setIdAdmin(id);
    };
    loadId();
  }, []);

  // Buscar itens do carrinho quando o idAdmin existir
  useEffect(() => {
    if (!idAdmin) return;
    fetchCarrinho();
  }, [idAdmin]);

  const fetchCarrinho = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/api/carrinho/${idAdmin}`
      );
      setCarrinho(response.data);
    } catch (error) {
      console.error("Erro ao buscar carrinho:", error);
    }
  };

  const deleteProduto = async (produtoId, tamanho) => {
    try {
      await axios.delete(
        `http://10.0.2.2:3000/api/carrinho/${idAdmin}/${produtoId}/${tamanho}`
      );
      fetchCarrinho();
    } catch (error) {
      console.error("Erro ao remover item:", error);
    }
  };

  return (
    <View style={styles.pagina}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Produtos do Carrinho</Text>

          {!idAdmin ? (
            <Text>Carregando dados do usuário...</Text>
          ) : !carrinho ? (
            <Text>Carregando carrinho...</Text>
          ) : carrinho.items.length === 0 ? (
            <Text style={styles.noProducts}>Carrinho vazio.</Text>
          ) : (
            carrinho.items.map((produto, index) => (
              <View key={index} style={styles.produtoItem}>
                <Text style={styles.produtoName}>{produto.nome}</Text>

                <Text>
                  Preço unitário: R$ {produto.precoUnitario.toFixed(2)}
                </Text>
                <Text>Quantidade: {produto.quantidade}</Text>
                <Text>Subtotal: R$ {produto.subtotal.toFixed(2)}</Text>
                <Text>Tamanho: {produto.tamanho}</Text>

                <Button
                  title="Excluir"
                  color="red"
                  onPress={() =>
                    deleteProduto(produto.produtoId, produto.tamanho)
                  }
                />
              </View>
            ))
          )}

          {carrinho && carrinho.items.length > 0 && (
            <Text style={styles.total}>
              Total: R$ {carrinho.total.toFixed(2)}
            </Text>
          )}
        </View>
      </ScrollView>

      <Navegacao />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  produtoItem: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  produtoName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  produtoPrice: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  noProducts: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  navegacao: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});
