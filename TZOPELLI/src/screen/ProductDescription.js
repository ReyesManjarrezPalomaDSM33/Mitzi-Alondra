import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import Navigator from "../router/Navigator";

export default function ProductDescription({ route, navigation }) {
  const { product } = route.params;
  //   console.log(product);
  const [cart, setCart] = useState([]);

  const Helados = [
    {
      id: 1,
      title: "Helado de Coco",
      description: "Helado de coco con trozos de chocolate cubierto de lechera",
      price: 25,
    },
    {
      id: 2,
      title: "Helado de Fresa",
      description: "Helado de fresa con trozos de fresa cubierto con chocolate",
      price: 25,
    },
    {
      id: 3,
      title: "Helado de Vainilla",
      description: "Helado de vainilla con trozos de vainilla, especialidad de la casa",
      price: 30
    },
    {
      id: 4,
      title: "Helado de Menta",
      description: "Helado de menta con trozos de menta con chispas de chocolate",
      price: 20,

    },
    {
      id: 5,
      title: "Helado de Capuchino",
      description: "Helado de piña desde su copa cubierto de chocolate",
      price: 50
    },
    {
      id: 6,
      title: "Helado de Tequila",
      description: "Helado de tequila con copa cubierto de chispas de chocolate",
      price: 50,

    },
  ];

  const Dulces = [
    {
      id: 1,
      title: "Dulce de Cajeta",
      description: "Dulce de Cajeta con trozos de nuez y chocolate",
      price: 25,
    },
    {
      id: 2,
      title: "Amaranto de Fresa",
      description: "Amaranto de fresa combinado con chocolate",
      price: 20,
    },
    {
      id: 3,
      title: "Jalea de Vainilla",
      description: "Dulce de vainilla estilo jalea",
      price: 25,
    },
    {
      id: 4,
      title: "Dulce de leche",
      description: "Dulce de leche con trozos de nuez",
      price: 30,
    },
    {
      id: 5,
      title: "Obleas de Cafe",
      description: "Dulce de cafe con trozos de cafe estilo oblea",
      price: 25,
    },
    {
      id: 6,
      title: "Amaranto de Menta",
      description: "Amaranto de menta combinado con chocolate",
      price: 10,
    },
  ];

  const Artesanias = [
    {
      id: 1,
      title: "Alebriges",
      description: "Alebriges hecho a mano con pinturas artesanales",
      price: 200,
    },
    {
      id: 2,
      title: "Caja",
      description: "Caja de madera pintada a mano",
      price: 240,
    },
    {
      id: 3,
      title: "Candelabros",
      description: "Candelabros de madera, tipo rustico",
      price: 280,
    },
    {
      id: 4,
      title: "Carpinteria",
      description: "Carpinteria de madera con tallos de piedra, barnizado",
      price: 190,
    },
    {
      id: 5,
      title: "Figura de Cobre",
      description: "Figura de Cobre detallada con tallos de Pancho Villa",
      price: 360,
    },
    {
      id: 6,
      title: "Carro Mustang de Ceramica",
      description: "Carro azul pintado a mano, barnizado",
      price: 290,
    },
    
  ];

  const Galeria = [
    {
      id: 1,
      title: "Pintura",
      description: "Pintura de madera",
      price: 290,
    },
    {
      id: 2,
      title: "Escultura",
      description: "Escultura de madera",
      price: 220,
    },
    {
      id: 3,
      title: "Dibujo",
      description: "Dibujo de madera",
      price: 270,
    },
    {
      id: 4,
      title: "Fotografia",
      description: "Fotografia de madera",
      price: 560,
    },
    {
      id: 5,
      title: "Cuadro Pintura Artesanal",
      description: "Cuadro pintado a mano con detalles de pinturas silvestres",
      price: 670,
    },
    {
      id: 6,
      title: "Fotografia de Antiguedad",
      description: "Fotografia de madera con detalles antiguos",
      price: 560,
    },
  ];

  useEffect(() => {
    const getCart = async () => {
      const cart = await AsyncStorage.getItem("cart");
      if (cart) {
        setCart(JSON.parse(cart));
      }
    };
    getCart();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/Fondo_app.png")}
        style={styles.image}
      >
        <View style={styles.header}>
          <ImageBackground
            source={require("../img/Fondo_titulo.png")}
            style={styles.logo}
          >
            <Text style={styles.titleHeader}>{product.title}</Text>
          </ImageBackground>
        </View>
        {product.id === 1
          ? Helados.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))
          : product.id === 2
          ? Dulces.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))
          : product.id === 3
          ? Artesanias.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))
          : Galeria.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    width: 410,
    height: 810,
  },
  product: {
    width: 160,
    height: 180,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffbf00",
    width: 110,
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  header: {
    flexDirection: "row",
    zIndex: 1,
  },
  logo: {
    width: Dimensions.get("window").width - 90,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  titleHeader: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
    zIndex: 1,
  },
});
