import { FC, Fragment } from 'react'
import { ScreenBase } from '../components/ScreenBase'
import { JournalCard } from '../components/JournalCard'
import styled from 'styled-components/native'
import { theme } from '../theme'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { Dimensions, View } from 'react-native'
import { useAppSelector } from '../hooks/hooks'
import { selectUniqueMonthJournals } from '../state/journal'
import { format } from 'date-fns'
import { EmptyState } from '../components/EmptyState'

export const JournalScreen: FC = () => {
  const { height, width } = Dimensions.get('screen')

  const uniqueMonthJournals = useAppSelector(selectUniqueMonthJournals)
  console.log(uniqueMonthJournals)

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ width, height, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient start={vec(0, 0)} end={vec(0, height)} colors={[theme.color.lightGray, theme.color.white]} />
        </Rect>
      </Canvas>
      <ScreenBase backgroundColor={theme.color.transparent}>
        <Container>
          {uniqueMonthJournals && uniqueMonthJournals.length > 0 ? (
            uniqueMonthJournals.map((month, index) => (
              <Fragment key={index}>
                <DateContainer>
                  <DateLabel>{month.date}</DateLabel>
                </DateContainer>
                {month.journals &&
                  month.journals.length > 0 &&
                  month.journals.map((journal) => (
                    <JournalCard
                      key={journal.documentId}
                      img={journal.photo}
                      date={format(new Date(journal.created_at), 'yyyy-MM-dd')}
                      id={journal.documentId}
                    />
                  ))}
              </Fragment>
            ))
          ) : (
            <EmptyState text="Din dagbok är tom!" />
          )}
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
  background-color: ${theme.color.green};
  border-radius: 50px;
  margin-top: ${theme.spacing.small}px;
`

const DateLabel = styled.Text`
  color: ${theme.color.white};
  font-family: ${theme.fontFamily.bold};
  padding: ${theme.spacing.xsmall}px ${theme.spacing.medium}px;
`
