const getNoteElement = note => {
    const noteElement = document.createElement('div');
    noteElement.className = 'music-maker__note'
    if(note) noteElement.classList.add('music-maker__note--selected');

    return noteElement;
};

const getLineElement = line => {
    const lineElement = document.createElement('div');
    lineElement.className = 'music-maker__line';

    line
        .map(getNoteElement)
        .forEach(element => lineElement.appendChild(element));

    return lineElement;
};
const getPageElement = page => {
    const pageElement = document.createElement('div');
    pageElement.className = 'music-maker__page';

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

    return newSheet;
};
