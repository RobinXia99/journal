import { FC } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Onboarding } from '../components/Onboarding'
import { useAppHasLaunched } from '../hooks/useAppHasLaunched'
import { Dimensions } from 'react-native'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'

export const LoggedOutStartScreen: FC = () => {
  const { hasLaunched, setHasLaunched } = useAppHasLaunched()
  const { height, width } = Dimensions.get('screen')

  const { navigate } = useNavigation()

  return (
    <Container>
      <Canvas style={{ width, height, position: 'absolute' }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height)}
            colors={[theme.color.darkerPurple, theme.color.darkPurple, theme.color.purple, theme.color.lightPurple]}
          />
        </Rect>
      </Canvas>
      <Title>Journal</Title>
      <Button
        text="Logga in"
        color={theme.color.purple}
        background={theme.color.white}
        onPress={() => navigate('SignIn')}
      />
      <Button
        text="Skapa konto"
        color={theme.color.white}
        background={theme.color.transparent}
        onPress={() => navigate('SignUp')}
      />
      {!hasLaunched && <Onboarding setFinishedOnboarding={setHasLaunched} />}
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
