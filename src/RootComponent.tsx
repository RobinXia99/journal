import { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './state/store'
import { Navigation } from './navigation'
import { injectStore } from './state/injectStore'
import { firebase } from '@react-native-firebase/auth'
import { firebaseConfig } from './config/firebase'
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications

export const RootComponent: FC = () => {
  injectStore(store)

  // firebase.initializeApp(firebaseConfig)

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
