import guid from 'uuid'
import create from 'zustand'
import produce from 'immer'
import * as elements from './elements'

const store = (set, get, api) => ({
  elements,
  plugins: {
    active: null,
    map: {},
    ids: [],
  },
  actions: {
    setActivePlugin(id) {
      set(state => {
        const oldActive = state.plugins.map[state.plugins.active]
        if (oldActive) {
          // Reset internal plugin state
          oldActive.state = oldActive.initialState
        }
        state.plugins.active = id
      })
    },
    async createPlugin(def, defaultId) {
      const { description, Root, View = () => null } = await def
      const id = defaultId !== void 0 ? defaultId : guid()
      set(state => {
        state.plugins.ids.push(id)
        state.plugins.map[id] = {
          id,
          visible: true,
          open: true,
          ...description,
          state: description.initialState || {},
          Root,
          View,
          set: fn => set(draft => void fn(draft.plugins.map[id].state)),
        }
      })
      return () =>
        set(draft => {
          delete draft.plugins.map[id]
          draft.plugins.ids = draft.plugins.ids.filter(i => i !== id)
          draft.plugins.active = null
        })
    },
  },
})

const immer = config => (set, get) => config(fn => set(produce(fn)), get)
const [useStore, api] = create(immer(store))

const usePlugin = (id, sel = t => t) => {
  return useStore(state => state.plugins.map[id] && sel(state.plugins.map[id]))
}

const useActivePlugin = (sel = t => t) => {
  const activePluginId = useStore(state => state.plugins.active)
  return useStore(state => state.plugins.map[activePluginId] && sel(state.plugins.map[activePluginId]))
}

export { api, useStore, usePlugin, useActivePlugin }
