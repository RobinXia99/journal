import { useEffect } from 'react'
import { Stack, modalOptions } from '../../navigationUtils'
import { BottomTabNavigator } from './BottomTabNavigator'
import { useAppDispatch } from '../../../hooks/hooks'
import { getChallenges } from '../../../state/challenge'
import { emptyState, getJournals } from '../../../state/journal'
import { ModalScreen } from '../../../screens/Modal'
import { AddStickerModalScreen } from '../../../screens/AddStickerModal'

export const LoggedInRoutes = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(emptyState())
    dispatch(getChallenges())
    dispatch(getJournals())
  }, [dispatch])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ ...modalOptions }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="AddStickerModal" component={AddStickerModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
