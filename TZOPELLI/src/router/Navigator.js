import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import CartScreen from "../screen/CartScreen";
import ProductScreen from "../screen/ProductScreen";
import ProductDescription from "../screen/ProductDescription";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffbf00",
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="#000" size={20} />,
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#000",
          },
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="barcode" color="#000" size={20} />,
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#000",
          },
          tabBarLabel: "Products",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="shopping-cart" color="#000" size={20} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#000",
          },
          tabBarLabel: "Cart",
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffbf00",
            fontSize: 40
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30
          },
          headerTitleAlign: "center",
          title: "@TZOPELLI"
          
        }}
        
      >
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
