import { useEffect, useState } from 'react'
import { getAsyncStorageItem, storeAsyncStorageItem } from '../utils/asyncStorageHelper'

export const useAppHasLaunched = () => {
  const HAS_LAUNCHED = 'HAS_LAUNCHED'

  const [hasLaunched, setHasLaunched] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const hasLaunched = await getAsyncStorageItem(HAS_LAUNCHED)
      if (hasLaunched) {
        setHasLaunched(true)
      } else {
        await storeAsyncStorageItem(HAS_LAUNCHED, 'true')
      }
    } catch (error) {
      console.log('ERROR_GET_LAUNCH_DATA', error)
    }
  }
  return { hasLaunched, setHasLaunched }
}
