import { createStore, combineReducers } from 'redux'

const mathReducer = (state = {
	result: 1,
	lastValues: []
},
action) => {
	switch (action.type) {
		case 'ADD':
			state = {
				...state,
				result: state.result + action.value,
				lastValues: [...state.lastValues, action.value]
			}
			break
		case 'SUBTRACT':
			state = {
				...state,
				result: state.result - action.value,
				lastValues: [...state.lastValues, action.value]
			}
			break
	}

	return state
}

const userReducer = (state = {
	name: 'Tiffany',
	age: 24
},
action) => {
	switch (action.type) {
		case 'SET_NAME':
			state = {
				...state,
				name: action.name
			}
			break
		case 'SET_AGE':
			state = {
				...state,
				age: action.age
			}
			break
	}

	return state
}

const store = createStore(combineReducers({ mathReducer, userReducer}))

store.subscribe(() => {
	console.log('Store updated', store.getState())
})

store.dispatch({ type: "ADD", value: 10 })

store.dispatch({ type: "ADD", value: 30 })

store.dispatch({ type: "SUBTRACT", value: 20 })

store.dispatch({ type: "SET_NAME", name: 'backstreat boys' })

store.dispatch({ type: "SET_AGE", age: 20 })
