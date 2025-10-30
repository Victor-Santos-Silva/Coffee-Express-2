import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Footer = ({ onAdd, loading, price }) => {
  // 1. Converte a prop 'price' (que pode ser string ou undefined) para um número (ou 0 se falhar)
  const numericPrice = parseFloat(price) || 0;

  // 2. Cria a string final com a formatação brasileira
  const priceDisplay = numericPrice.toFixed(2).replace(".", ",");

  return (
    <View style={stylesFotter.footer}>
      <Text style={stylesFotter.price}>R$ {priceDisplay}</Text>
      <TouchableOpacity
        style={stylesFotter.buyButton}
        onPress={onAdd}
        disabled={loading}
      >
        <Text style={stylesFotter.buyButtonText}>
          {loading ? "Carregando..." : "Adicionar Produto"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesFotter = StyleSheet.create({
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buyButton: {
    backgroundColor: "#E27D19",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 50,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#E27D19",
  },
});

export default Footer;
