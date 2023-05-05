import { registerRootComponent } from 'expo'
// This file wants to live here the root folder for expo builds to succeed.
// It's the entry point path for 'node_modules/expo/AppEntry.js'

import { RootComponent } from './src/RootComponent'

registerRootComponent(RootComponent)

export default RootComponent
