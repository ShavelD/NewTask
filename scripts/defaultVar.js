const {
    log
} = console;
const createTaskForm = document.forms.createTask;
const newTaskBtn = document.querySelector('#newTaskBtn');
const newTaskFormWrap = document.querySelector('#newTaskForm');
const boards = {
    backlog: document.querySelector('#backlog-board'),
    toDo: document.querySelector('#to-do-board'),
    inProgress: document.querySelector('#in-progress-board'),
    done: document.querySelector('#done-board'),
};
const defaultDevelopers = {
    Pep: {
        fullName: 'Pep Pepov',
        iconSrc: './assets/icons/pikachu.svg',
    },
    Pop: {
        fullName: 'Pop Popov',
        iconSrc: './assets/icons/snorlax.svg',
    },
    Pap: {
        fullName: 'Pap Papov',
        iconSrc: './assets/icons/abra.svg',
    },
    Pip: {
        fullName: 'Pip Pipov',
        iconSrc: './assets/icons/mew.svg',
    },
    Pup: {
        fullName: 'Pup Pupov',
        iconSrc: './assets/icons/weedle.svg',
    },
    Pyp: {
        fullName: 'Pyp Pypov',
        iconSrc: './assets/icons/rattata.svg',
    }
};

const popUpEnum = {
    'addTask': document.querySelector('#newTaskForm'),
}


function getDefaultTasks() {

    return [{
            title: 'New task 1',
            description: 'Create few tasks.',
            devs: defaultDevelopers.Pap,
            label: 'Web',
            id: uniqueId(),
            status: 'toDo',
            priority: '1',
        },
        {
            title: 'New task 2',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, excepturi! Repellendus ea reiciendis eveniet eligendi consequuntur.',
            devs: defaultDevelopers.Pip,
            label: 'Web',
            id: uniqueId(),
            status: 'inProgress',
            priority: '0',
        },
        {
            title: 'New task 3',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            devs: defaultDevelopers.Pep,
            label: 'Web',
            id: uniqueId(),
            status: 'done',
            priority: '3',
        },
        {
            title: 'New task 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus inventore!',
            devs: defaultDevelopers.Pop,
            label: 'Web',
            id: uniqueId(),
            status: 'toDo',
            priority: '2',
        },
    ];
}

const tilePriorityColors = [
    '#C61F33',
    "#A37034",
    "#239E43",
    "#C340A1",
    "#1862C6",
]
