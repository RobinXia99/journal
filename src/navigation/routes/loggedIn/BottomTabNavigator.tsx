/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { BottomTab } from '../../navigationUtils'
import { HomeStack } from './tabs/Home'
import { theme } from '../../../theme'
import { Home } from '../../../components/icons/Home'

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: theme.color.lightPink,
        tabBarInactiveTintColor: theme.color.grey,
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.color.darkPurple, paddingTop: theme.spacing.small },
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) => <Home width={30} height={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) => <Home width={30} height={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) => <Home width={30} height={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) => <Home width={30} height={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
