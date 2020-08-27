import action_names from "../action_names";

const { 
  REMOVE_PUN, 
  FILTER_PUN,
  ADD_PUN
} = action_names;

export const removePun = (punId) => {
  return {
    type: REMOVE_PUN,
    punId
  };
};

export const filterPun = (filterText) => {
  return {
    type: FILTER_PUN,
    filterText
  }
}

export const addPun = (pun) => {
  return {
    type: ADD_PUN,
    pun
  }
}