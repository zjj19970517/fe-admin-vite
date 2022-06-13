/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import type { State } from '../src/store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
