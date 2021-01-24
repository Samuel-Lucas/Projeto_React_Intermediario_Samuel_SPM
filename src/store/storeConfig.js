import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numero1: function(state, action) {

        switch(action.type) {
            case 'INPUT_1_ALTERADO':
                return {
                    min: action.payload
                }
                default:
                    return {
                        min: 0,
                        ...state
                    }
        }
    },
    numero2: function(state, action) {

        switch(action.type) {
            case 'INPUT_2_ALTERADO':
                return {
                    max: action.payload
                }
                default:
                    return {
                        max: 0,
                        ...state
                    }
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig