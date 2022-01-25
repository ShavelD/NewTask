document.addEventListener('click', togglePopUp);

function togglePopUp(event) {
    const popUpTarget = event.target.dataset.popUpToggle;
    const popUp = popUpEnum[popUpTarget];
    if (popUp) {
        if (popUp.hidden) popUp.hidden = false;
        else popUp.hidden = true;
    }
}

// function devPopUp() {
//     const popUpwrap = document.createElement('div');
//     const devs = document.createElement('div');
//     const dev = document.createElement('div');
//     const devImg = document.createElement('img');

// }

// для создания попапа  в defaultVar.js в переменную popUpEnum
// добавляем ключ, который будет значением дата-атрибута "data-pop-up-toggle"
// (этоот атрибут нужно прописать в html в элементе, нажав на который будет 
// отрываться|закрываться попап)
// и значение - ссылка на ДОМ элемент, который нужно скрывать/показывать
