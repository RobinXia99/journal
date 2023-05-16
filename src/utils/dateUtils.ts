import { sv } from 'date-fns/locale'
import { Journal, UniqueMonthJournals } from '../state/journal'
import { format } from 'date-fns'

export const groupedJournalsByMonth = (data: Journal[]) => {
  const sortedJournals = data
    .slice()
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  const uniqueMonths = [
    ...new Set(sortedJournals.map((item) => format(new Date(item.created_at), 'LLLL YYY', { locale: sv }))),
  ]

  const groupedJournals = uniqueMonths.map((month) => {
    const uniqueMonthJournal: UniqueMonthJournals = {
      date: month.toUpperCase(),
      maxStreak: 0,
      journals: [],
    }
    sortedJournals.map((journal) => {
      if (format(new Date(journal.created_at), 'LLLL YYY', { locale: sv }) === month) {
        uniqueMonthJournal.journals.push(journal)
      }
    })
    return uniqueMonthJournal
  })
  return groupedJournals
}
