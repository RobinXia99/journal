import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import styled from 'styled-components/native'
import { RouteProps } from '../navigation/types'
import { theme } from '../theme'
import { useAppDispatch } from '../hooks/hooks'

export const AddStickerModalScreen: FC<RouteProps<'AddStickerModal'>> = ({ route }) => {
  const { id } = route.params
  const { goBack } = useNavigation()
  const dispatch = useAppDispatch()

  return (
    <Modal>
      <TransparentContainer onPress={goBack} />
      <Container>
        <Title>Välj ett klistermärke</Title>
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

const StickerContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${theme.spacing.large}px;
`

const Title = styled.Text`
  font-size: ${theme.fontSize.large}px;
  font-family: ${theme.fontFamily.regular};
  color: ${theme.color.white};
`
