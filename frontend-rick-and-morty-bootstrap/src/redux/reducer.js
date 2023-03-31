import { SET_GLOBAL_ERROR } from "./actions";

// Inicial State
const inicialState = {
    allCharacters: [],
    favoritesCards: [],
    globalError: "",
};

// Redux reducer
const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.payload,
            };
        default:
            return { ...state };
    }
};

export default rootReducer;
