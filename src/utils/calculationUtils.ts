import { theme } from '../theme'

export const streakColor = (streak: number) => {
  if (streak < 5) return theme.color.darkerGreen
  if (streak >= 5 && streak < 10) return theme.color.darkGreen
  if (streak >= 10 && streak < 15) return theme.color.green
  return theme.color.lightGreen
}

export enum StickerEnum {
  s1 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fballoons.png?alt=media&token=619f800b-fa60-42b8-ac96-2378ee2bd507',
  s2 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fnature.png?alt=media&token=b1d6c8ee-955d-4c0b-abda-a756c12d1457',
  s3 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fsky.png?alt=media&token=9a4c36f5-0d20-487e-bc0f-6c38dea78f47',
  s4 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Ftree.png?alt=media&token=a9db05bf-69a3-4438-ae9e-2721679c4b48',
  s5 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fokay.png?alt=media&token=0945afaf-3bbc-43bf-8911-4695c9a50dd4',
  s6 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Focean.png?alt=media&token=2253ba39-572d-44a1-90f1-5768c1001d4c',
  s7 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fheart.png?alt=media&token=b3e2e41e-9839-43e4-96fa-a598f62a2b80',
  s8 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fgem.png?alt=media&token=a04e61f8-f07e-4291-8a60-11ffe9a15e1f',
  s9 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Fflower.png?alt=media&token=ca25e550-960a-4c66-ac68-5572341de31f',
  s10 = 'https://firebasestorage.googleapis.com/v0/b/mentaljournal-e53a1.appspot.com/o/stickers%2Ffruit.png?alt=media&token=fc012a49-c23f-4fdc-9fca-28d088316431',
}

export const getSticker = () => {
  const enumValues = Object.values(StickerEnum)
  const numItems = enumValues.length
  const randomIndex = Math.floor(Math.random() * numItems)

  return enumValues[randomIndex]
}
