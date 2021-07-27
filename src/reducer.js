import {produce} from 'immer';

// ACTION TYPES
const ACTIVATE_NOTE = 'ACTIVATE_NOTE';
const DEACTIVATE_NOTE = 'DEACTIVATE_NOTE';
const PLAY_MUSIC = 'PLAY_MUSIC';
const STOP_MUSIC = 'STOP_MUSIC';
const CHANGE_VOLUME = 'CHANGE_VOLUME';

// ACTION CREATORS
export const activateNote = (pageIndex, lineIndex, noteIndex) => ({
    type: ACTIVATE_NOTE,
    payload: {
        pageIndex,
        lineIndex,
        noteIndex,
    },
});
export const deactivateNote = (pageIndex, lineIndex, noteIndex)=> ({
    type: DEACTIVATE_NOTE,
    payload: {
        pageIndex,
        lineIndex,
        noteIndex,
    },
});
export const playMusic = () => ({
    type: PLAY_MUSIC,
});
export const stopMusic = () => ({
    type: STOP_MUSIC,
});
export const changeVolume = volume => ({
    type: CHANGE_VOLUME,
    payload: volume,
});


// INITIAL STATE
const initialState = {
    sheet: [Array.from(Array(16), v => Array(8).fill(false))],
    volume: 0.5,
    isPlaying: false,
};

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_NOTE: {
            return produce(state, draft => {
                const {pageIndex, lineIndex, noteIndex} = action.payload;
                draft.sheet[pageIndex][lineIndex][noteIndex] = true;
            });
        }
        case DEACTIVATE_NOTE: {
            return produce(state, draft => {
                const {pageIndex, lineIndex, noteIndex} = action.payload;
                draft.sheet[pageIndex][lineIndex][noteIndex] = false;
            });
        }
        case PLAY_MUSIC: {
            return {
                ...state,
                isPlaying: true,
            };
        }
        case STOP_MUSIC: {
            return {
                ...state,
                isPlaying: false,
            };
        }
        case CHANGE_VOLUME: {
            return {
                ...state,
                volume: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};