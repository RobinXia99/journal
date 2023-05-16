import { FC } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { useAppSelector } from '../hooks/hooks'
import { selectUser } from '../state/user'

import { Title } from '../components/Text'
import styled from 'styled-components/native'
import { theme } from '../theme'

export const ProfileScreen: FC = () => {
  const user = useAppSelector(selectUser)
  return (
    <Container>
      <Header>
        <ProfileFrame>
          <ProfileLabel>{user.firstName[0]}</ProfileLabel>
        </ProfileFrame>
      </Header>
      <ProfileBodyContainer>
        <Title>{user.firstName}</Title>
      </ProfileBodyContainer>
    </Container>
  )
}

const Container = styled.View`
  align-items: center;
  background-color: ${theme.color.green};
`

const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xlarge}px;
`

const ProfileFrame = styled.View`
  border-radius: 100px;
  width: 150px;
  height: 150px;
  border: 5px solid ${theme.color.white};
  background-color: ${theme.color.lightGray};
  justify-content: center;
  align-items: center;
`

const ProfileLabel = styled.Text`
  color: ${theme.color.darkGray};
  font-family: ${theme.fontFamily.bold};
  font-size: 100px;
`

const ProfileBodyContainer = styled.View`
  height: 100%;
  width: 100%;
  padding: ${theme.spacing.large}px;
  background-color: ${theme.color.white};
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`
