import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { createNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, RootTabParamList } from './types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from '../theme'

export const defaultNavOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackVisible: false,
  headerTitleStyle: {
    fontFamily: theme.fontFamily.regular,
    color: theme.color.white,
    fontSize: theme.fontSize.default,
  },
  headerShown: true,
  headerStyle: { backgroundColor: theme.color.darkPurple },
}

export const modalOptions: NativeStackNavigationOptions = {
  headerShown: false,
  presentation: 'modal',
  contentStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: theme.spacing.xlarge,
  },
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

// This is a navigation helper for use outside of the context of a JSX component, for example inside a Redux action.
// Don't use this method when you have access to a navigation prop or useNavigation.
// https://reactnavigation.org/docs/navigating-without-navigation-prop/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const refNavigate = (name, params) => {
  if (navigationRef.isReady()) navigationRef.navigate(name, params)
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
export const Stack = createNativeStackNavigator<RootStackParamList>()

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
export const BottomTab = createBottomTabNavigator<RootTabParamList>()
