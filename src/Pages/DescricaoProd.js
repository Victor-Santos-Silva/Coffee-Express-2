import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductDetails from "../Components/ProductDetails";
import DescricaoCompletaProduto from "../Components/DescricaoCompletaProduto";
import SizeSelector from "../Components/SizeSelector";
import Footer from "../Components/Footer";
import { getProdutoId } from "../api/ApiProduto";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const Descricao = () => {
  const { params } = useRoute();

  const idProduto = params?.idProduto || params?.id;

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tamanho, setTamanho] = useState("M");

  useEffect(() => {
    if (!idProduto) {
      setError(new Error("ID do produto não encontrado nos parâmetros."));
      setLoading(false);
      return;
    }

    const fetchDetalhes = async () => {
      try {
        setLoading(true);
        const responseData = await getProdutoId(idProduto);
        const { produto: itemAPI } = responseData;

        if (itemAPI) {
          setProduto(itemAPI);
          setError(null);
        } else {
          throw new Error(responseData.msg || "Produto não encontrado.");
        }
      } catch (e) {
        console.error("Erro na busca do produto:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchDetalhes();
  }, [idProduto]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Buscando detalhes do produto...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red", fontSize: 16 }}>
          Erro ao carregar: {error.message || "Erro desconhecido."}
        </Text>
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.center}>
        <Text>Detalhes do produto indisponíveis.</Text>
      </View>
    );
  }

  const tamanhoCompleto =
    tamanho === "P" ? "Pequeno" : tamanho === "M" ? "Médio" : "Grande";

  const precoAtual =
    tamanhoCompleto === "Pequeno"
      ? produto.precoPequeno
      : tamanhoCompleto === "Médio"
      ? produto.precoMedio
      : produto.precoGrande;

  const handleAddCarrinho = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:3000/api/carrinho", {
        adminId: 1,
        produtoId: produto.idProduto,
        quantidade: 1,
        tamanho: tamanho,
      });

      Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
    } catch (error) {
      console.error(
        "Erro ao adicionar ao carrinho:",
        error.response?.data || error
      );
      Alert.alert("Erro", "Não foi possível adicionar ao carrinho.");
    }
  };

  return (
    <View style={styles.page}>
      <ProductDetails
        title={produto.nome}
        imageSource={{ uri: `http://10.0.2.2:3000/uploads/${produto.imagem}` }}
      />
      <DescricaoCompletaProduto descriptionComplet={produto.descricao} />
      <SizeSelector selectedSize={tamanho} onSelectSize={setTamanho} />
      <Footer onAdd={handleAddCarrinho} loading={false} price={precoAtual} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  center: {
    // Estilo para centralizar loading/erro
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Descricao;
