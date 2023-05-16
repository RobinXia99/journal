import { FC } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { useAppSelector } from '../hooks/hooks'
import { selectUser } from '../state/user'

import { Title } from '../components/Text'

export const ProfileScreen: FC = () => {
  const user = useAppSelector(selectUser)
  return (
    <ScreenBase>
      <Title>{user.firstName}</Title>
    </ScreenBase>
  )
}
