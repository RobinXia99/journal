import { theme } from '../theme'

export const streakColor = (streak: number) => {
  if (streak < 5) return theme.color.darkerGreen
  if (streak >= 5 && streak < 10) return theme.color.darkGreen
  if (streak >= 10 && streak < 15) return theme.color.green
  return theme.color.lightGreen
}
