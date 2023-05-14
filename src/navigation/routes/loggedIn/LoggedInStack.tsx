import { useEffect } from 'react'
import { Stack } from '../../navigationUtils'
import { BottomTabNavigator } from './BottomTabNavigator'
import { useAppDispatch } from '../../../hooks/hooks'
import { getChallenges } from '../../../state/challenge'
import { getJournals } from '../../../state/journal'

export const LoggedInRoutes = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getChallenges())
    dispatch(getJournals())
  }, [dispatch])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
