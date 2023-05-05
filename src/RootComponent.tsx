import { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './state/store'
import * as SplashScreen from 'expo-splash-screen'
import { Navigation } from './navigation'
import { injectStore } from './state/injectStore'

SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

export const RootComponent: FC = () => {
  injectStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
