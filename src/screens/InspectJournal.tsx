import { Dimensions } from 'react-native'
import { ScreenBase } from '../components/ScreenBase'
import { useAppSelector } from '../hooks/hooks'
import { selectJournalById } from '../state/journal'
import { FC, useEffect } from 'react'
import { RouteProps } from '../navigation/types'
import { Title } from '../components/Text'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import styled from 'styled-components/native'

export const InspectJournalScreen: FC<RouteProps<'InspectJournal'>> = ({ route }) => {
  const { height, width } = Dimensions.get('screen')
  const { setOptions } = useNavigation()

  const { id } = route.params

  const journal = useAppSelector(selectJournalById(id))

  useEffect(() => {
    setOptions({
      title: format(new Date(journal?.created_at || ''), 'yyyy-MM-dd'),
    })
  }, [setOptions, journal])

  return (
    <Container style={{ flex: 1 }}>
      <Canvas style={{ width, height, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient start={vec(0, 0)} end={vec(0, height)} colors={[theme.color.lightGray, theme.color.white]} />
        </Rect>
      </Canvas>
      <Card>
        <ImageFrame resizeMode="cover" source={{ uri: journal?.photo }} />
        <ImageTextContainer>
          <ImageText>{journal?.photoText}</ImageText>
        </ImageTextContainer>
      </Card>
      <ScreenBase backgroundColor={theme.color.transparent}>
        <TitleText>Vad ser jag fram emot idag?</TitleText>
        <BodyText>{journal?.morningJournal}</BodyText>
        <TitleText>Vad är jag stolt/tacksam över idag?</TitleText>
        <BodyText>{journal?.nightJournal}</BodyText>
      </ScreenBase>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

const Card = styled.View`
  background-color: ${theme.color.white};
  border-radius: 5px;
  width: 100%;
  height: 250px;
  margin-bottom: ${theme.spacing.medium}px;
`

const ImageFrame = styled.Image`
  width: 100%;
  height: 100%;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const ImageTextContainer = styled.View`
  padding: ${theme.spacing.xsmall}px;
  align-items: center;
`

const ImageText = styled.Text`
  color: ${theme.color.black};
  font-family: ${theme.fontFamily.light};
`

const TitleText = styled(Title)`
  font-size: ${theme.fontSize.large}px;
  padding: ${theme.spacing.medium}px 0;
`

const BodyText = styled(Title)`
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.light};
`
