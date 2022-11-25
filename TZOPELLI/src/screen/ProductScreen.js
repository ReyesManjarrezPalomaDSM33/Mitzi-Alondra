import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function ProductScreen({ navigation }) {
  const products = [
    {
      id: 1,
      title: "Helados Artesanales",
    },
    {
      id: 2,
      title: "Dulces Artesanales",
    },
    {
      id: 3,
      title: "Artesanias",
    },
    {
      id: 4,
      title: "Cuadros o Pinturas",
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/Fondo_app2.png")}
        style={styles.image}
      >


        {products.map((product) => (
          <TouchableOpacity
            onPress={() => {
              //   console.warn(product.title);
              navigation.navigate("ProductDetails", { product });
            }}
            key={product.id}
            style={styles.card}
          >
            {/* <View style={styles.card} key={product.id}> */}
            <ImageBackground
              source={require("../img/tem.png")}
              style={styles.imageCard}
              resizeMode="cover"
            >
              <Text style={styles.title}>{product.title}</Text>
            </ImageBackground >
            {/* </View> */}
          </TouchableOpacity>
        ))}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffbf00",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 411,
    height: 745,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 0 ,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 8,
    top:8,
  },
  imageCard: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  card: {
    width: 185,
    height: 185,
    margin: 5,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    top:70,
  },
  
});
