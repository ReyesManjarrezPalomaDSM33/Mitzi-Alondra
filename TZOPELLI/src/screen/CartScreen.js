import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
      setCart([]);
    }
  };

  useEffect(() => {
    getCart().then((res) => {
      setCart(res);
    });
  }, []);

  console.log("This product is: ", cart);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/Fondo_app3.png")}
        style={styles.image}
      >
        <View style={styles.header}>
          <ImageBackground
            source={require("../img/Carrito.png")}
            style={styles.logo}
          >
            <Text style={styles.titleHeader}>Canasta</Text>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          {cart ? (
            <View style={styles.card} key={cart.id}>
              <Text style={styles.title}>
                Los productos que desea comprar son los siguientes:
              </Text>
              <Text style={styles.title}>{cart.title}</Text>
              <Text style={styles.des}>{cart.description}</Text>
              <Text style={styles.price}>${cart.price}</Text>
            </View>
          ) : (
            <Text style={styles.title}>No hay productos en el carrito</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const sale = async () => {
              try {
                //guarda la venta en el historial
                await AsyncStorage.removeItem("cart");
              } catch (e) {
                console.log(e);
              }
            };
            navigation.navigate("HomeTab");
          }}
        >
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCancelar}
          onPress={() => {
            const removeCart = async () => {
              try {
                await AsyncStorage.removeItem("cart");
                setCart(null);
              } catch (e) {
                console.log(e);
              }
            };
            removeCart();
            navigation.navigate("HomeTab");
          }}
        >
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    flexWrap: "wrap",
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    width: 410,
    height: 820,
    padding:8,
  },
  header: {
    flexDirection: "row",
    zIndex: 1,
    
  },
  logo: {
    width: Dimensions.get("window").width - 50,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    padding:10,
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 30,
    left: 10,
    right: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  des: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: Dimensions.get("window").width - 50,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    width: Dimensions.get("window").width - 50,
    height: 50,
    backgroundColor: "#ffbf00",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonCancelar: {
    width: Dimensions.get("window").width - 50,
    height: 50,
    backgroundColor: "tomato",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
