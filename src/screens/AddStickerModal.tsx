import { useNavigation } from '@react-navigation/native'
import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { RouteProps } from '../navigation/types'
import { theme } from '../theme'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { placeSticker, selectJournalById } from '../state/journal'
import { selectUser } from '../state/user'
import { updateUserStickers } from '../state/user'

export const AddStickerModalScreen: FC<RouteProps<'AddStickerModal'>> = ({ route }) => {
  const { id, onChangeSticker } = route.params
  const { goBack } = useNavigation()

  const user = useAppSelector(selectUser)
  const journal = useAppSelector(selectJournalById(id || ''))
  const uniqueStickers = [...new Set(user.stickers)]
  const [placedSticker, setPlacedSticker] = useState(false)

  const dispatch = useAppDispatch()

  const handlePlaceSticker = async (sticker: string) => {
    if (!placedSticker) {
      setPlacedSticker(true)
      await dispatch(
        placeSticker({
          documentId: journal?.documentId,
          sticker,
        })
      )
      onChangeSticker(sticker)
    }
    goBack()
  }

  return (
    <Modal>
      <TransparentContainer onPress={goBack} />
      <Container>
        <Title>Välj ett klistermärke</Title>
        <FlexBox>
          {uniqueStickers &&
            uniqueStickers.length > 0 &&
            uniqueStickers.map((sticker, index) => {
              const count = user.stickers.filter((item) => item === sticker).length
              return (
                <StickerContainer key={index} onPress={() => handlePlaceSticker(sticker)}>
                  <Sticker source={{ uri: sticker }} resizeMode="contain" />
                  <StickerLabel>x{count}</StickerLabel>
                </StickerContainer>
              )
            })}
        </FlexBox>
      </Container>
    </Modal>
  )
}

const Modal = styled.View`
  flex: 1;
  justify-content: center;
`

const TransparentContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`

const FlexBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: ${theme.spacing.large}px ${theme.spacing.medium}px;
`

const StickerContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 70px;
  margin: 0 ${theme.spacing.small}px;
`

const Sticker = styled.Image`
  width: 50px;
  height: 50px;
`

const StickerLabel = styled.Text`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.bold};
`

const Title = styled.Text`
  font-size: ${theme.fontSize.large}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.white};
`
