import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SizeSelector = ({ selectedSize, onSelectSize }) => {
  const sizes = ["P", "M", "G"];

  return (
    <View style={styles.sizeContainer}>
      <Text style={styles.sizeTitle}>Tamanho</Text>
      <View style={styles.sizeOptions}>
        {sizes.map((size, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelectSize(size)}
            style={[
              styles.sizeOption,
              selectedSize === size && styles.sizeSelected,
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && styles.sizeTextSelected,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderColor: "#D2691E",
  },
  sizeText: {
    color: "#333",
    fontWeight: "500",
  },
  sizeTextSelected: {
    color: "#D2691E",
    fontWeight: "bold",
  },
});

export default SizeSelector;
