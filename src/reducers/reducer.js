import action_names from "../action_names";

const {
  REMOVE_PUN,
  FILTER_PUN,
  ADD_PUN
} = action_names;

export default (state, action) => {
  switch (action.type) {

    case REMOVE_PUN:
      return {
        ...state,
        puns: state.puns.filter((el) => el.id !== action.punId)
      };

    case FILTER_PUN:
      return {
        ...state, 
        filterText: action.filterText.toLowerCase()
      }

    case ADD_PUN:
      return {
        ...state, 
        puns: [...state.puns,{ 
          id: state.puns.length ? state.puns.length : 0,
          pun: action.pun
        }]
      }

    default:
      return state;
  }
};
