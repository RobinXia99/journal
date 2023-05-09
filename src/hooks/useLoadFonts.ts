import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

export const useLoadFonts = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'lato-light': require('../assets/fonts/Lato-Light.ttf'),
          'lato-regular': require('../assets/fonts/Lato-Regular.ttf'),
          'lato-bold': require('../assets/fonts/Lato-Bold.ttf'),
        })
      } catch (e) {
        console.log('Failed to load fonts')
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
