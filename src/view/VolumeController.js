import {changeVolume} from '../reducer';

const getTemplate = () => {
    const template = document.querySelector('#volume-controller');
    return template.content.firstElementChild.cloneNode(true);
};

export default (targetElement, state, dispatch) => {
    const newVolumeController = targetElement.cloneNode(true);

    const controller = getTemplate();
    const controllerInput = controller.firstElementChild;

    const onChangeVolume = e => dispatch(changeVolume(e.target.value));
    controllerInput.value = state.volume;
    controllerInput.addEventListener('input', onChangeVolume);

    newVolumeController.appendChild(controller);

    return newVolumeController;
};