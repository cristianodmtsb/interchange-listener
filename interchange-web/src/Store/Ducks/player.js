import Sound from "react-sound";

export const Types = {
  LOAD: "player/LOAD",
  PLAY: "player/PLAY",
  PAUSE: "player/PAUSE",
  PREV: "player/PREV",
  NEXT: "player/NEXT",
  PLAYING: "player/PLAYING",
  HANDLE_POSITION: "player/HANDLE_POSITION",
  SET_POSITION: "player/SET_POSITION",
  SET_VOLUME: "player/SET_VOLUME"
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  duration: null,
  position: null,
  volume: 100,
  positionShown: null
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING,
        position: action.payload.position
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.PREV: {
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );
      const prev = state.list[currentIndex - 1];

      if (prev) {
        return {
          ...state,
          currentSong: prev,
          status: Sound.status.PLAYING,
          position: 0
        };
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );
      const next = state.list[currentIndex + 1];

      if (next) {
        return {
          ...state,
          currentSong: next,
          status: Sound.status.PLAYING,
          position: 0
        };
      }

      return state;
    }
    case Types.PLAYING:
      return {
        ...state,
        position: action.payload.position,
        duration: action.payload.duration
      };
    case Types.HANDLE_POSITION:
      return {
        ...state,
        positionShown: state.duration * action.payload.percent
      };
    case Types.SET_POSITION:
      return {
        ...state,
        position: state.duration * action.payload.percent,
        positionShown: null
      };
    case Types.SET_VOLUME:
      return { ...state, volume: action.payload.volume };
    default:
      return state;
  }
}

export const Creators = {
  loadSong: (song, list, position) => ({
    type: Types.LOAD,
    payload: { song, list, position }
  }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  prev: () => ({ type: Types.PREV }),
  next: () => ({ type: Types.NEXT }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration }
  }),
  handlePosition: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent }
  }),
  setPosition: percent => ({
    type: Types.SET_POSITION,
    payload: { percent }
  }),
  setVolume: volume => ({
    type: Types.SET_VOLUME,
    pauload: { volume }
  })
};
