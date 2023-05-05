import { useCallback, useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { persistor } from '../state/store'
import auth from '@react-native-firebase/auth'

export const useFirebaseAuth = () => {
  const dispatch = useAppDispatch()

  const getLoggedInUser = useCallback(async () => {
    // await dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = auth().onAuthStateChanged((user) => {
      if (user) getLoggedInUser()
      else persistor.purge()
    })

    return unsubscribeFromAuthStatusChanged
  }, [dispatch, getLoggedInUser])
}
