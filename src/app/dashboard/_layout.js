import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen
                name="(tabs)" 
                options={{
                    drawerLabel: 'Home',
                    title: 'Dashboard',
                }}
            />
            <Drawer.Screen
                name="settings" 
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                }}
            />
      </Drawer>
    </GestureHandlerRootView>
  );
}
