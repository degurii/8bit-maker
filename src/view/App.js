const getTemplate = () => {
    const template = document.querySelector('#app');
    return template.content.firstElementChild.cloneNode(true);
};

export default (targetElement, state, dispatch) => {
    const newApp = targetElement.cloneNode(true);
    newApp.innerHTML = '';
    newApp.appendChild(getTemplate());

    return newApp;
};