export const Types = {
  GET_REQUEST: "playlists/GET_REQUEST",
  GET_SUCCESS: "playlists/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function playlists(state = INITIAL_STATE, action) {
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
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
