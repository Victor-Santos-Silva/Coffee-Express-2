import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductDetails from "../Components/ProductDetails";
import DescricaoCompletaProduto from "../Components/DescricaoCompletaProduto";
import SizeSelector from "../Components/SizeSelector";
import Footer from "../Components/Footer";
import { getProdutoId } from "../api/ApiProduto";
import { useRoute } from "@react-navigation/native";

const Descricao = () => {
  const { params } = useRoute();

  // 💡 O ID do produto virá dos parâmetros da navegação (params)
  const idProduto = params?.idProduto || params?.id;

  // Estado para guardar os dados do produto DEPOIS da requisição
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tamanho, setTamanho] = useState("M");

  // Função para buscar os detalhes
  useEffect(() => {
    if (!idProduto) {
      setError(new Error("ID do produto não encontrado nos parâmetros."));
      setLoading(false);
      return;
    }

    const fetchDetalhes = async () => {
      try {
        setLoading(true);
        // Chama a função de API com o ID
        const responseData = await getProdutoId(idProduto);

        // 🎯 DESESTRUTURAÇÃO AQUI!
        // Acessa o objeto 'produto' dentro da resposta
        const { produto: itemAPI } = responseData;

        if (itemAPI) {
          setProduto(itemAPI);
          setError(null);
        } else {
          // Trata caso a API retorne um objeto vazio ou erro, mas sem throw
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
  }, [idProduto]); // Roda sempre que o ID mudar

  // --- Renderização Condicional ---

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

  // 🎯 Dados da API agora estão em 'produto' e podem ser usados!
  return (
    <View style={styles.page}>
      <ProductDetails
        title={produto.nome}
        imageSource={{ uri: `http://10.0.2.2:3000/uploads/${produto.imagem}` }}
      />
      <DescricaoCompletaProduto descriptionComplet={produto.descricao} />
      <SizeSelector selectedSize={tamanho} onSelectSize={setTamanho} />
      <Footer
        onAdd={() => console.log("Adicionar produto")}
        loading={false}
        price={precoAtual}
      />
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
