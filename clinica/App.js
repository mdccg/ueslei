import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// importação das telas
import HomeScreen from './src/pages/HomeScreen';
import NewScreen from './src/pages/NewScreen';
import { paleta } from './src/styles/paleta';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';
import Wrapper from './Wrapper';

const Tab = createBottomTabNavigator();

export default function App() {
  const { data, setData } = useContext(UserContext);

  return (
    <Wrapper>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
            tabBarInactiveBackgroundColor: paleta.cinza,
            tabBarActiveBackgroundColor: paleta.preto,
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#fff',
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen 
            name="Home"
            children={(props) => (
              <HomeScreen {...props} />
            )} 
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name='home' size={size} color={color} />
              )
            }}
          />
          <Tab.Screen 
            name="New" 
            children={(props) => (
              <NewScreen {...props} />
            )}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome name='plus-circle' size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
}