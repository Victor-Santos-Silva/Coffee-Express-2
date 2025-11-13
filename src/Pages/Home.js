import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Navegacao from "../Components/Navegacao";
import { useEffect, useState } from "react";
import { getProduto } from "../api/ApiProduto";

const IMAGE_BASE_URL = "http://10.0.2.2:3000/uploads/";

export default function Home() {
  const navigation = useNavigation();

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProdutos = async () => {
    try {
      const data = await getProduto();

      if (data && Array.isArray(data.produtos)) {
        setProdutos(data.produtos);
        setError(null);
      }
    } catch (e) {
      setProdutos([]);
      setError(e);
      Alert.alert("Erro ao Carregar", e.message || "Verifique a conexão.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const centerStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  if (loading) {
    return (
      <View style={centerStyle}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Carregando produtos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={centerStyle}>
        <Text style={{ color: "red", fontSize: 16 }}>
          Houve um erro: {error.message}
        </Text>
        {console.error("Erro ao buscar produtos:", error)}
      </View>
    );
  }

  if (produtos.length === 0) {
    return (
      <View style={centerStyle}>
        <Text>Nenhum produto encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={estilo.pagina}>
      <Header />
      <ScrollView>
        <Menu />
        <View style={estilo.container}>
          {produtos.map((produto) => (
            <Card
              key={
                produto.idProduto
                  ? produto.idProduto.toString()
                  : Math.random().toString()
              }
              imageSource={{ uri: IMAGE_BASE_URL + produto.imagem }}
              title={produto.nome}
              description={produto.tipoDeProduto}
              money={produto.precoMedio}
              onPress={() => navigation.navigate("Descricao", produto)}
            />
          ))}
        </View>
      </ScrollView>
      <Navegacao />
    </View>
  );
}

const estilo = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    top: 200,
    bottom: 150,
    height: 1500,
  },
});
