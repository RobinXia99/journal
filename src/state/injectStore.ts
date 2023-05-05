import { AsyncThunk } from '@reduxjs/toolkit'
import type { store as Store } from './store'

// The following functions are injected rather than just imported in order to avoid dependency cycles.
// The redux store has a lot of dependant modules which makes importing from store.ts nearly impossible.
// For more info redux docs: https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files

export let store: typeof Store | null = null
export let logOut: AsyncThunk<void, void, object>

export const injectStore = (_store: typeof Store) => {
  store = _store
}
