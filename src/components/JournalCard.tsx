import { FC } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'

interface JournalCardProps {
  img: string
  date: string
  id: string
}

export const JournalCard: FC<JournalCardProps> = ({ img, date, id }) => {
  return (
    <Container>
      <Card key={id}>
        <ImageFrame
          source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/09/3e/f4/riverside-by-aahma.jpg' }}
        />
        <DecorationFrame>
          <DecorationStickerRow>
            <DecorationSticker />
          </DecorationStickerRow>
          <DecorationLinesContainer>
            <DecorationLine />
            <DecorationLine style={{ marginVertical: 5 }} />
            <DecorationLine />
          </DecorationLinesContainer>
        </DecorationFrame>
      </Card>
      <CardLabel>{date}</CardLabel>
    </Container>
  )
}

const Container = styled.View`
  width: 50%;
  align-items: center;
`

const Card = styled.TouchableOpacity`
  width: 90%;
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.white};
  border-radius: 2px;
  margin: ${theme.spacing.medium}px;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const ImageFrame = styled.Image`
  width: 80px;
  height: 85px;
  border-radius: 2px;
  margin-left: 3px;
`

const DecorationFrame = styled.View`
  height: 85px;
  width: 80px;
`

const DecorationStickerRow = styled.View`
  width: 95%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`

const DecorationSticker = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-color: ${theme.color.lightGray};
`

const DecorationLinesContainer = styled.View`
  width: 95%;
  height: 65px;
  justify-content: center;
  align-items: center;
`

const DecorationLine = styled.View`
  width: 60%;
  height: 5px;
  background-color: ${theme.color.lightGray};
  border-radius: 2px;
`

const CardLabel = styled.Text`
  font-size: ${theme.fontSize.small}px;
  color: ${theme.color.darkerGreen};
`