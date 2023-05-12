/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

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
  ChallengesStackParams & {
    Root: NavigatorScreenParams<RootTabParamList> | undefined
    LoggedOutStart: undefined
    SignIn: undefined
    SignUp: undefined
  }

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type RouteProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  HomeTab: undefined
  ChallengeTab: undefined
  JournalTab: undefined
  ProfileTab: undefined
}

export type HomeStackParams = {
  Home: undefined
  StartOfDay: { id?: string }
  EndOfDay: { id?: string }
}
export type ChallengesStackParams = {
  Challenges: undefined
  CreateChallenge: undefined
}
export type JournalStackParams = {
  Journal: undefined
}
export type ProfileStackParams = {
  Profile: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>
