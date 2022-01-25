function checkLocalStoragTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        JSON.parse(tasks).forEach(item => {
            getTile(item);
        });
    } else {
        localStorage.setItem('tasks', JSON.stringify(getDefaultTasks()));
        JSON.parse(localStorage.getItem('tasks')).forEach(item => {
            getTile(item)
        });
    }
}

function checkLocalStoragDevs() {
    const devs = localStorage.getItem('devs');
    if (!devs) {
        localStorage.setItem('devs', JSON.stringify(defaultDevelopers));
    }
}

function getDevs() {
    return JSON.parse(localStorage.getItem('devs'));
}




function updateDevs() {
    const devs = getDevs();
    const elem = document.querySelector('#newTaskFormDev');
    elem.innerHTML = '';
    for (let dev in devs) {

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const devImg = document.createElement('img');
        const devName = document.createElement('div');

        devImg.src = devs[dev].iconSrc;
        devName.innerHTML = devs[dev].fullName;

        label.classList.add('radio-label');
        input.classList.add('radio-label__input');
        span.classList.add('dev-radio__item');
        devImg.classList.add('dev-radio__img');
        devName.classList.add('dev-radio__text');

        input.name = 'taskDev';
        input.type = 'radio';
        input.value = dev;

        span.append(devImg, devName);
        label.append(input, span);
        elem.append(label);
    }
}

checkLocalStoragTasks();
checkLocalStoragDevs();
updateDevs();

function setIncorrectInput(elem) {
    elem.classList.add('incorrect-input');
    elem.addEventListener('input', () => {
        elem.classList.remove('incorrect-input');
    })
}

function checkForm(form) {
    const length = form.elements.length;
    let res = true;
    for (let i = 0; i < length; i++) {
        if (!form.elements[i].value) {
            res = false;
            setIncorrectInput(form.elements[i]);
        }
    }
    return res;
}

function resetForm(form) {
    const length = form.elements.length;
    for (let i = 0; i < length; i++) {
        const elem = form.elements[i];
        if (elem.localName === 'input' && elem.type !== 'submit') elem.value = '';
        if (elem.localName === 'textarea') elem.value = '';
    }
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
