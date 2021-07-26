const getTemplate = () => {
    const template = document.querySelector('#volume-controller');
    return template.content.firstElementChild.cloneNode(true);
};

export default (targetElement, state, dispatch) => {
    const newVolumeController = targetElement.cloneNode(true);

    const controller = getTemplate();
    controller.value = state.volume;

    newVolumeController.appendChild(controller);

    return newVolumeController;
};