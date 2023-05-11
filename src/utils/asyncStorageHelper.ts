import AsyncStorage from '@react-native-async-storage/async-storage'

export const getAsyncStorageItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value) return value
  } catch (error) {
    console.log('Error getting data', error)
  }
  return false
}

export const storeAsyncStorageItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log('Error storing data', error)
  }
}
