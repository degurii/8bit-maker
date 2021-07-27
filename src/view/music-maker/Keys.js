import {KEYS, COLORS_FOR_PITCH} from '../../constants';

const getKeyElement = key => {
    const newKey = document.createElement('div');

    newKey.className = 'music-maker__key';
    newKey.textContent = key;

    return newKey;
};
export default (targetElement, state, dispatch) => {
    const newKeys = targetElement.cloneNode(true);
    newKeys.innerHTML = '';

    KEYS
        .map(getKeyElement)
        .forEach(element => newKeys.appendChild(element));

    return newKeys;
};