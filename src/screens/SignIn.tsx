import { FC, useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { InputField } from '../components/Input'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { validEmailExp } from '../utils/regularExpressions'
import { authSignIn } from '../utils/firebaseUtils'

export const SignInScreen: FC = () => {
  const { navigate } = useNavigation()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const validEmail = validEmailExp.test(email)
  const validPassword = password.length >= 6
  const validInput = validEmail && validPassword

  const signIn = async (email: string, password: string) => {
    console.log(email, password)
    try {
      setLoading(true)
      await authSignIn(email, password)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title>Logga in</Title>
      <InputField placeholder="E-post" input={email} onChangeText={setEmail}></InputField>
      <InputField placeholder="Lösenord" input={password} onChangeText={setPassword} secureTextEntry></InputField>
      <Button
        text="Logga in"
        background={theme.color.transparent}
        color={theme.color.darkerPurple}
        loading={loading}
        disabled={!validInput}
        onPress={() => signIn(email, password)}
      />
      <Divider />
      <View>
        <Label>
          Har du inget konto? <UnderlinedLabel onPress={() => navigate('SignUp')}>Skapa konto</UnderlinedLabel>
        </Label>
      </View>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.large}px;
`
const Title = styled.Text`
  color: ${theme.color.darkPurple};
  font-size: 48px;
  padding: ${theme.spacing.large}px;
`

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.darkerPurple};
  margin: ${theme.spacing.medium}px;
`

const Label = styled.Text`
  font-size: ${theme.fontSize.default}px;
  color: ${theme.color.darkPurple};
  text-align: center;
`

const UnderlinedLabel = styled.Text`
  text-decoration: underline;
`
