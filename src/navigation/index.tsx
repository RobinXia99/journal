import { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAppSelector } from '../hooks/hooks'
import { navigationRef } from './navigationUtils'
import { LoggedOutRoutes } from './routes/loggedOut/LoggedOutStack'
import { selectIsAuthenticated } from '../state/user'
import { LoggedInRoutes } from './routes/loggedIn/LoggedInStack'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'
import styled from 'styled-components/native'
import { useLoadFonts } from '../hooks/useLoadFonts'

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */

export const Navigation: FC = () => {
  useFirebaseAuth()

  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  const fontsLoaded = useLoadFonts()

  return (
    <AppContainer>
      {fontsLoaded && (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </NavigationContainer>
      )}
    </AppContainer>
  )
}

const AppContainer = styled.View`
  flex: 1;
`
