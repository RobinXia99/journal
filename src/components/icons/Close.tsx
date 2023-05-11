import Svg, { G, Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Close = ({ height, width, color = '#fff', props }: IconInterface) => (
  <Svg width={width} height={height} fill={'none'} viewBox="0 0 16 16" {...props}>
    <G clipPath="url(#a)" stroke={color} strokeWidth={2}>
      <Path d="m1.5 1.5 14 14M1.5 15.5l14-14" />
    </G>
  </Svg>
)
