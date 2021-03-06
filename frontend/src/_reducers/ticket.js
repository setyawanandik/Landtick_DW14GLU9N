import { GET_TICKETS, RESET_TICKET, ADD_TICKET } from "../config/constants";

const initState = {
  data: null,
  loading: false,
  error: null
};

const ticket = (state = initState, action) => {
  switch (action.type) {
    case `${ADD_TICKET}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${ADD_TICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${ADD_TICKET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response
          ? action.payload.response.data.message
          : action.payload.message
      };
    case RESET_TICKET:
      return initState;
    default:
      return state;
  }
};

export default ticket;
