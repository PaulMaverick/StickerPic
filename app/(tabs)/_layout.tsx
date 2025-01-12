import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { globals } from '@/constants/global';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
                backgroundColor: globals.secondaryBGColor
            },
            headerShadowVisible: false,
            headerTintColor: globals.textColorDefault,
            tabBarStyle: {
                backgroundColor: globals.secondaryBGColor,
            }
        }}
    >
      <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Home',
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }} 
        />
      <Tabs.Screen 
            name="about" 
            options={{ 
                title: 'About',
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                )
            }} 
        />
    </Tabs>
  );
}