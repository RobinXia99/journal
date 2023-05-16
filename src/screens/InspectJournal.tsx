import { Dimensions } from 'react-native'
import { ScreenBase } from '../components/ScreenBase'
import { useAppSelector } from '../hooks/hooks'
import { selectJournalById } from '../state/journal'
import { FC, useEffect, useState } from 'react'
import { RouteProps } from '../navigation/types'
import { Title } from '../components/Text'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import styled from 'styled-components/native'

export const InspectJournalScreen: FC<RouteProps<'InspectJournal'>> = ({ route }) => {
  const { height, width } = Dimensions.get('screen')
  const { navigate, setOptions } = useNavigation()

  const { id } = route.params

  const journal = useAppSelector(selectJournalById(id))

  const [selectedSticker, setSelectedSticker] = useState<string>(journal?.sticker || '')

  useEffect(() => {
    setOptions({
      title: journal?.created_at ? format(new Date(journal?.created_at), 'yyyy-MM-dd') : '',
    })
  }, [setOptions, journal])

  const handlePlaceSticker = () => {
    if (!journal?.sticker) {
      navigate('AddStickerModal', { id, onChangeSticker: setSelectedSticker })
    }
  }

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
        <StickerContainer>
          <StickerFrame onPress={() => handlePlaceSticker()}>
            {selectedSticker ? (
              <Sticker source={{ uri: selectedSticker }} />
            ) : (
              <AddStickerLabel>Placera klistermärke</AddStickerLabel>
            )}
          </StickerFrame>
        </StickerContainer>
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
`

const ImageFrame = styled.Image`
  width: 100%;
  height: 100%;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const ImageTextContainer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${theme.color.black};
  opacity: 0.8;
  border-top-right-radius: 15px;
`

const ImageText = styled.Text`
  color: ${theme.color.white};
  font-family: ${theme.fontFamily.light};
  padding: ${theme.spacing.xsmall}px;
`

const TitleText = styled(Title)`
  font-size: ${theme.fontSize.large}px;
  padding: ${theme.spacing.medium}px 0;
`

const BodyText = styled(Title)`
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.light};
`

const StickerContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xlarge}px;
`

const StickerFrame = styled.TouchableOpacity`
  width: 130px;
  height: 130px;
  background-color: ${theme.color.lightGray};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const AddStickerLabel = styled.Text`
  font-family: ${theme.fontFamily.regular};
  font-size: ${theme.fontSize.small}px;
  color: ${theme.color.black};
`

const Sticker = styled.Image`
  width: 120px;
  height: 120px;
`
