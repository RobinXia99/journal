import * as React from 'react'
import { Path, Rect, Svg } from 'react-native-svg'
import { IconInterface } from './types'
export const Gift = ({ height, width, color = '#222', props, style }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 64 64" {...props} style={style}>
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M44.14 17.16a9.4 9.4 0 0 0 1.13-.68c2.92-2.05 3.82-5.82 2-8.4s-5.66-3-8.58-.93-4.42 5.73-6.05 10zM8.7 30.46h46.61v23.7a4 4 0 0 1-4 4H12.7a4 4 0 0 1-4-4v-23.7h0z"
    />
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M26.15 30.46h11.7v27.7h-11.7zM19.86 17.16a8.57 8.57 0 0 1-1.12-.68c-2.92-2.05-3.83-5.82-2-8.4s5.66-3 8.59-.93 4.41 5.73 6.05 10Z"
    />
    <Rect
      width={51}
      height={13.3}
      x={6.5}
      y={17.16}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      rx={3}
    />
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M25.09 17.16h13.83v13.3H25.09z"
    />
  </Svg>
)
