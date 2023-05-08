import { FC } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'

export const LoggedOutStartScreen: FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Title>Journal</Title>
      <Button
        text="Logga in"
        color={theme.color.white}
        background={theme.color.transparent}
        onPress={() => navigate('SignIn')}
      />
      <Button
        text="Skapa konto"
        color={theme.color.white}
        background={theme.color.transparent}
        onPress={() => navigate('SignUp')}
      />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.purple};
  padding: ${theme.spacing.xlarge}px;
`

const Title = styled.Text`
  color: ${theme.color.white};
  font-size: 48px;
  padding: ${theme.spacing.large}px;
`
