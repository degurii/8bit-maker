import App from './view/App';
import Keys from './view/music-maker/Keys';
import Sheet from './view/music-maker/Sheet';
import VolumeController from './view/VolumeController';

import registry from './registry';

import {createStore} from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

registry.add('app', App);
registry.add('music-maker-keys', Keys);
registry.add('music-maker-sheet', Sheet);
registry.add('volume-controller', VolumeController);


const store = createStore(rootReducer,composeWithDevTools());

const render = () => {
    window.requestAnimationFrame(() => {
        const app = document.querySelector('#root');
        const newApp = registry.renderRoot(app, store.getState(), store.dispatch);

        app.replaceWith(newApp);
    });
};

store.subscribe(render);

render();

/*
const makeNoteSound = key => {
    const oscillator = audioCtx.createOscillator()
        , gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    oscillator.type = 'square';
    oscillator.frequency.value = FREQUENCY_FOR_KEY[key];

    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = state.volume;
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 2);

    oscillator.start();
};

const volumeController = document.querySelector('.volume-controller__input');
volumeController.addEventListener('input', e => {
    const {target} = e;
    state.volume = parseFloat(target.value);
});

const $box = document.querySelector('.box');
$box.addEventListener('click', e => {
    const {target} = e;
    if (target.parentElement.classList.contains('keys')) return;
    target.classList.toggle('selected');
    const $line = target.parentElement
        , $box = $line.parentElement;

    const lineIndex = [...$box.children].findIndex(v => v === $line) - 1
        , cellIndex = [...$line.children].findIndex(v => v === target);

    state.box[lineIndex][cellIndex] = !state.box[lineIndex][cellIndex];
});

const $play = document.querySelector('.play');
$play.addEventListener('click', e => {
    const {target} = e;
    if (state.isPlaying) {
        target.textContent = '▶';
        state.isPlaying = false;
        [...$box.children].forEach($line => $line.classList.remove('playing'));
    } else {
        target.textContent = '■';
        state.isPlaying = true;
        playMusic(0);
    }
});

const playMusic = lineIndex => {
    const {box, numBoxPage, isPlaying} = state;
    if (!isPlaying) return;

    if (lineIndex >= box.length) lineIndex %= box.length;
    // TODO:
    // 1. 현재 위치 표시
    // 2. 노트 출력
    const $line = $box.children[lineIndex + 1];
    $line.classList.add('playing');
    box[lineIndex].forEach((v, i) => {
        if (v) makeNoteSound(FREQUENCY_FOR_KEY[KEYS[i]]);
    });
    setTimeout(() => {
        $line.classList.remove('playing');
        playMusic(lineIndex + 1)
    }, 250);
};
*/