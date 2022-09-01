import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

const persistedState = createPersistedState({
	key: 'felted_creatures'
})

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {},
	plugins: [persistedState]
});