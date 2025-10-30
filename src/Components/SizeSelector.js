import { StyleSheet, Text, View } from "react-native";

const SizeSelector = () => (
  <View style={stylesSizeSelector.sizeContainer}>
    <Text style={stylesSizeSelector.sizeTitle}>Tamanho</Text>
    <View style={stylesSizeSelector.sizeOptions}>
      {["P", "M", "G"].map((size, index) => (
        <Text
          key={index}
          style={[
            stylesSizeSelector.sizeOption,
            size === "M" && stylesSizeSelector.sizeSelected,
          ]}
        >
          {size}
        </Text>
      ))}
    </View>
  </View>
);

const stylesSizeSelector = StyleSheet.create({
  sizeContainer: {
    padding: 10,
  },
  sizeTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sizeOption: {
    paddingVertical: 9,
    paddingHorizontal: 35,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  sizeSelected: {
    backgroundColor: "#FFE5B4",
    color: "#D2691E",
    borderColor: "#D2691E",
  },
});

export default SizeSelector;
