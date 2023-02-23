var modalCreateWindow = document.querySelector('#modalCreateWindow');
var signBtn = document.querySelector('#signBtn');

signBtn.addEventListener('click', () => {
    modalCreateWindow.style = 'opacity: 1;';
});

document.addEventListener('mousedown', (e) => {
    var modalCreateWindowEl = e.composedPath().includes(modalCreateWindow);
    if (!modalCreateWindowEl && !e.composedPath().includes(signBtn)) {
        modalCreateWindow.style = 'opacity: 0;';
    }
});
