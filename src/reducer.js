const initialState = {
    sheet: [Array.from(Array(16), v => Array(8).fill(false))],
    numSheetPage: 1,
    numLinesPerPage: 16,
    numNotesPerLine: 8,
    volume: 0.5,
    isPlaying: false,
};
export default (state = initialState, action) => {
    switch (action) {
        default:
            return state;
    }
};