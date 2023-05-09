/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { BottomTab } from '../../navigationUtils'
import { HomeStack } from './tabs/Home'
import { theme } from '../../../theme'
import { Home } from '../../../components/icons/Home'
import { StreakStack } from './tabs/Streak'
import { JournalStack } from './tabs/Journal'
import { ProfileStack } from './tabs/Profile'
import { Profile } from '../../../components/icons/Profile'
import { Calendar } from '../../../components/icons/Calendar'
import { Stats } from '../../../components/icons/Stats'

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: theme.color.purple,
        tabBarInactiveTintColor: theme.color.grey,
        headerShown: true,
        headerStyle: { backgroundColor: theme.color.darkPurple },
        headerTitleStyle: { color: theme.color.white },
        tabBarStyle: { backgroundColor: theme.color.white, paddingTop: theme.spacing.small },
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
        name="StreakTab"
        component={StreakStack}
        options={{
          title: 'Streak',
          tabBarIcon: ({ color }) => <Stats width={30} height={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="JournalTab"
        component={JournalStack}
        options={{
          title: 'Dagbok',
          tabBarIcon: ({ color }) => <Calendar width={22} height={22} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <Profile width={30} height={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
