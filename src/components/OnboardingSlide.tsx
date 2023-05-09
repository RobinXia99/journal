import { FC } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { RenderItem } from './Onboarding'
import { theme } from '../theme'

export const OnboardingSlide: FC<RenderItem> = ({ item }) => {
  const { height, width } = Dimensions.get('screen')

  return (
    <Container height={height} width={width}>
      <ColoredCircle width={width} height={width} background={item.color}>
        <CircleText>{item.text}</CircleText>
      </ColoredCircle>
    </Container>
  )
}

const Container = styled.View<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;

  justify-content: center;
  align-items: center;
`

const ColoredCircle = styled.View<{ height: number; width: number; background: string }>`
  background-color: ${(props) => props.background};
  height: ${(props) => props.height - theme.spacing.medium}px;
  width: ${(props) => props.width - theme.spacing.medium}px;
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const CircleText = styled.Text`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.large}px;
  font-family: ${theme.fontFamily.light};
`
