import { useNavigation } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { RouteProps } from '../navigation/types'
import { theme } from '../theme'
import { getSticker } from '../utils/calculationUtils'
import { useAppDispatch } from '../hooks/hooks'
import { claimReward } from '../state/challenge'

export const ModalScreen: FC<RouteProps<'Modal'>> = ({ route }) => {
  const { id } = route.params
  const { goBack } = useNavigation()
  const dispatch = useAppDispatch()
  const [claimed, setClaimed] = useState(false)

  const stickerPath = getSticker()

  useEffect(() => {
    if (id && !claimed) {
      setClaimed(true)
      dispatch(claimReward({ documentId: id, sticker: stickerPath }))
    }
  }, [id, dispatch, stickerPath, claimed])

  return (
    <Modal>
      <TransparentContainer onPress={goBack} />
      <Container>
        <Title>Bra jobbat!</Title>
        <StickerContainer>
          <StickerFrame source={{ uri: stickerPath }} resizeMode="contain" />
        </StickerContainer>

        <SmallTitle>Du kan placera det här klistermärket i din dagbok</SmallTitle>
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
  justify-content: center;
  align-items: center;
`

const StickerContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${theme.spacing.large}px;
`

const StickerFrame = styled.Image`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: ${theme.fontSize.xlarge}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.white};
`

const SmallTitle = styled(Title)`
  font-size: ${theme.fontSize.default}px;
  font-family: ${theme.fontFamily.light};
`
