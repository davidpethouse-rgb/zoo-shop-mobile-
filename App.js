import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogScreen from './screens/CatalogScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Catalog">
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Каталог' }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'Товар' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Корзина' }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Оформление' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
        <Stack.Screen name="Orders" component={OrdersScreen} options={{ title: 'Мои заказы' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
