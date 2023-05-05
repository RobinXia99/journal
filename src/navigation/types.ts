/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = HomeStackParams &
  CL & {
    Root: NavigatorScreenParams<RootTabParamList> | undefined
    LoggedOutStart: undefined
  }

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type RouteProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  HomeTab: undefined
  LeaderboardTab: undefined
  JournalTab: undefined
  ProfileTab: undefined
}

export type HomeStackParams = {
  Home: undefined
}
type CL = {
  ComponentLibrary: undefined
  Button: undefined
  Input: undefined
  DeviceComponents: undefined
  StatsComponents: undefined
  Components: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>
