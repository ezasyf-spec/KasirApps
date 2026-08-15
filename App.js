import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { initDB } from './database';
import DashboardScreen from './DashboardScreen';

const Tab = createBottomTabNavigator();

// Layar sementara untuk menu yang belum kita buat kodenya
const LayarKosong = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <Text style={{ fontSize: 18, color: '#555' }}>Layar {route.name} Segera Hadir</Text>
  </View>
);

export default function App() {
  useEffect(() => {
    // Jalankan database saat aplikasi dibuka
    initDB();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        tabBarActiveTintColor: '#2980b9',
        headerShown: false,
        tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 }
      }}>
        <Tab.Screen name="Beranda" component={DashboardScreen} />
        <Tab.Screen name="Kasir" component={LayarKosong} />
        <Tab.Screen name="Barang" component={LayarKosong} />
        <Tab.Screen name="Laporan" component={LayarKosong} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
