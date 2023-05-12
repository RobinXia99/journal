import { FC } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { JournalCard } from '../components/JournalCard'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { Dimensions, View } from 'react-native'

export const JournalScreen: FC = () => {
  const { height, width } = Dimensions.get('screen')

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ width, height, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height)}
            colors={[theme.color.lighterGreen, theme.color.lightGray]}
          />
        </Rect>
      </Canvas>
      <ScreenBase backgroundColor={theme.color.transparent}>
        <Container>
          <DateContainer>
            <DateLabel>MAJ 2023 - Max Streak: 5</DateLabel>
          </DateContainer>
          <JournalCard img="" date="2023-05-10" id="123" />
          <JournalCard img="" date="2023-05-11" id="1234" />
          <JournalCard img="" date="2023-05-11" id="1234" />
          <JournalCard img="" date="2023-05-11" id="1234" />
          <JournalCard img="" date="2023-05-11" id="1234" />
        </Container>
      </ScreenBase>
    </View>
  )
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  height: 100%;
`

const DateContainer = styled.View`
  width: 100%;
  background-color: ${theme.color.darkerGreen};
  border-radius: 10px;
`

const DateLabel = styled.Text`
  color: ${theme.color.white};
  font-family: ${theme.fontFamily.bold};
  padding: ${theme.spacing.xsmall}px ${theme.spacing.medium}px;
`
