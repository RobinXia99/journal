import { FC } from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'

interface JournalCardProps {
  img: string
  sticker: string
  date: string
  id: string
}

export const JournalCard: FC<JournalCardProps> = ({ img, sticker, date, id }) => {
  const { navigate } = useNavigation()
  return (
    <Container>
      <Card key={id} onPress={() => navigate('InspectJournal', { id })}>
        <ImageFrame
          source={{
            uri: img,
          }}
        />
        <DecorationFrame>
          <DecorationLinesContainer>
            <DecorationLine />
            <DecorationLine />
            {sticker ? (
              <DecorationSticker source={{ uri: sticker }} />
            ) : (
              <>
                <DecorationLine />
                <DecorationLine />
              </>
            )}
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
  justify-content: center;
  align-items: center;
`

const DecorationSticker = styled.Image`
  width: 40px;
  height: 40px;
  shadow-opacity: 0.15;
  shadow-radius: 3px;
  shadow-offset: 0px 0px;
`

const DecorationLinesContainer = styled.View`
  width: 95%;
  height: 65px;
  justify-content: center;
  align-items: center;
`

const DecorationLine = styled.View`
  width: 80%;
  height: 5px;
  background-color: ${theme.color.lightGray};
  border-radius: 2px;
  margin: ${theme.spacing.tiny}px 0;
`

const CardLabel = styled.Text`
  font-size: ${theme.fontSize.small}px;
  color: ${theme.color.darkerGreen};
`
