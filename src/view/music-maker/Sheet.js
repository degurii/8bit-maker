import {activateNote, deactivateNote} from '../../reducer';
import {KEYS, COLORS_FOR_PITCH} from "../../constants";

const getNoteElement = (note, index) => {
    const noteElement = document.createElement('div');

    noteElement.dataset.index = index;
    noteElement.className = 'music-maker__note'

    if (note) {
        const pitch = KEYS[index].slice(0, 1),
            color = COLORS_FOR_PITCH[pitch];

        noteElement.classList.add(`music-maker__cell--${color}`);
    }

    return noteElement;
};

const getLineElement = (line, index) => {
    const lineElement = document.createElement('div');
    lineElement.className = 'music-maker__line';
    lineElement.dataset.index = index;

    line
        .map(getNoteElement)
        .forEach(element => lineElement.appendChild(element));

    return lineElement;
};
const getPageElement = (page, index) => {
    const pageElement = document.createElement('div');
    pageElement.className = 'music-maker__page';
    pageElement.dataset.index = index;

    page
        .map(getLineElement)
        .forEach(element => pageElement.appendChild(element));

    return pageElement;
};

export default (targetElement, state, dispatch) => {
    const newSheet = targetElement.cloneNode(true);
    newSheet.innerHTML = '';

    state.sheet
        .map(getPageElement)
        .forEach(element => newSheet.appendChild(element));

    const onToggleNote = e => {
        const {target} = e;
        if (!target.classList.contains('music-maker__note')) return;

        const line = target.parentElement,
            page = line.parentElement;

        const noteIndex = target.dataset.index,
            lineIndex = line.dataset.index,
            pageIndex = page.dataset.index;

        const noteValue = state.sheet[pageIndex][lineIndex][noteIndex];

        if (noteValue) {
            dispatch(deactivateNote(pageIndex, lineIndex, noteIndex));
        } else {
            dispatch(activateNote(pageIndex, lineIndex, noteIndex));
        }
    };

    newSheet.addEventListener('click', onToggleNote);
    return newSheet;
};
