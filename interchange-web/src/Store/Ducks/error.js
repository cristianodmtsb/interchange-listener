export const Types = {
  SET: "error/SET",
  HIDE: "error/HIDE"
};

const INITIAL_STATE = {
  visible: false,
  message: null
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
      break;
    case Types.HIDE:
      return { ...state, visible: false };
      break;

    default:
      return state;
      break;
  }
}

export const Creators = {
  setError: message => ({ type: Types.SET, payload: { message } }),

  getPlaylistsSuccess: () => ({ type: Types.HIDE })
};
