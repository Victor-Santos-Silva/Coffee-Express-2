import { Image, StyleSheet, Text, View } from "react-native";

const ProductDetails = ({ title, imageSource }) => (
  <View style={styleProductDetails.detailsContainer}>
    <Image source={imageSource} style={styleProductDetails.image} />
    <Text style={styleProductDetails.title}>{title}</Text>
  </View>
);

const styleProductDetails = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
});

export default ProductDetails;
