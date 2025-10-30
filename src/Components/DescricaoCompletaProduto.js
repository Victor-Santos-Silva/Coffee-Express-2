import { StyleSheet, Text, View } from "react-native";

const DescricaoCompletaProduto = ({ descriptionComplet }) => (
  <View style={stylesDescriptComplet.descriptCompletContainer}>
    <Text style={stylesDescriptComplet.descriptCompletTitle}>Descricao:</Text>
    <Text style={stylesDescriptComplet.descriptCompletStyle}>
      {descriptionComplet}
    </Text>
  </View>
);

const stylesDescriptComplet = StyleSheet.create({
  descriptCompletContainer: {
    paddingLeft: 5,
    height: 180,
  },
  descriptCompletTitle: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 5,
  },
  descriptCompletStyle: {
    padding: 5,
  },
});

export default DescricaoCompletaProduto;
