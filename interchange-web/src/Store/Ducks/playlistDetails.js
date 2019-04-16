export const Types = {
  GET_REQUEST: "playlistDtails/GET_REQUEST",
  GET_SUCCESS: "playlistDtails/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function playlistDtails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
      break;
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
      break;

    default:
      return state;
      break;
  }
}

export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
