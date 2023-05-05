/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from './types'
import { useAppSelector } from '../hooks/hooks'
import { selectIsAuthenticated } from '../state/user'

const linkingLoggedIn: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              HomeScreen: 'home',
            },
          },
        },
      },
    },
  },
}

const linkingLoggedOut: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('')],
  config: {
    screens: {
      Root: {},
    },
  },
}

const LinkingConfig = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  return isAuthenticated ? linkingLoggedIn : linkingLoggedOut
}

export default LinkingConfig
