// Redux action types
const FILTER_CARDS = "FILTER_CARDS";
const ORDER_CARDS = "ORDER_CARDS";
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";

// Redux actions creators

const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender,
    };
};

const orderCards = (id) => {
    return {
        type: ORDER_CARDS,
        payload: id,
    };
};

const setGlobalError = (error) => {
    return {
        type: SET_GLOBAL_ERROR,
        payload: error,
    };
};

export {
    FILTER_CARDS,
    ORDER_CARDS,
    SET_GLOBAL_ERROR,
    filterCards,
    orderCards,
    setGlobalError,
};
