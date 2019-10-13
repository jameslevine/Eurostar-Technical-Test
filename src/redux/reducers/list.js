const initialState = {
  total: 200
};

function totalCount(state, action) {
  return {
    total: action.payload
  };
}

const actions = {
  TOTAL_COUNT: totalCount
};

export default {
  initialState,
  actions
};
