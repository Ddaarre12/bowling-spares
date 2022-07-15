let values = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
function pressCheck(clickValue, clickID) {
    
    const button = document.getElementById(clickID);
    const nextButton = document.getElementById(String(Number(clickID) + 1))
    if (clickValue == 'off' && nextButton.value == 'off') {
        button.value = 'on';
        button.style.backgroundColor = 'green';
        button.style.border = '1px solid gray';
        button.style.borderRadius = '1px';
        button.style.color = 'white';
        values[Number(button.className) - 1].push('check');
    }

    if (clickValue == 'off' && nextButton.value == 'on') {
        button.value = 'on';
        button.style.backgroundColor = 'green';
        button.style.border = '1px solid gray';
        button.style.borderRadius = '1px';
        button.style.color = 'white';
        values[Number(button.className) - 1].push('check');
        nextButton.value = 'off';
        nextButton.style = 'initial';
        values[Number(button.className) - 1].splice(values[Number(button.className) - 1].indexOf('x'), 1);
    }

    else if (clickValue == 'on') {
        button.value = 'off';
        button.style = 'initial';
        values[Number(button.className) - 1].splice(values[Number(button.className) - 1].indexOf('check'), 1);
    }
    calc(clickID);
}

function pressX(clickValue, clickID) {
    const button = document.getElementById(clickID);
    const prevButton = document.getElementById(String(Number(clickID) - 1))
    if (clickValue == 'off' && prevButton.value == 'off') {
        button.value = 'on';
        button.style.backgroundColor = 'red';
        button.style.border = '1px solid gray';
        button.style.borderRadius = '1px';
        button.style.color = 'white';
        values[Number(button.className) - 1].push('x')
    }

    if (clickValue == 'off' && prevButton.value == 'on') {
        button.value = 'on';
        button.style.backgroundColor = 'red';
        button.style.border = '1px solid gray';
        button.style.borderRadius = '1px';
        button.style.color = 'white';
        values[Number(button.className) - 1].push('x')
        prevButton.value = 'off';
        prevButton.style = 'initial';
        values[Number(button.className) - 1].splice(values[Number(button.className) - 1].indexOf('check'), 1);
    }

    else if (clickValue == 'on') {
        button.value = 'off';
        button.style = 'initial';
        values[Number(button.className) - 1].splice(values[Number(button.className) - 1].indexOf('x'), 1);
    }
    calc(clickID);
}

function calc(clickID) {
    let checks = 0;
    let xs = 0;
    let percent = 0;
    const button = document.getElementById(clickID);
    //check the values of each button
    for (let i = 0; i < values[Number(button.className) - 1].length; i++) {
        if (values[Number(button.className) - 1][i] == 'check') {
            checks++;
        }
        if (values[Number(button.className) - 1][i] == 'x') {
            xs++;
        }
        percent = (checks / values[Number(button.className) - 1].length).toFixed(2) * 100;
    document.getElementById('spare' + button.className).innerHTML = percent + "%";
    
    }
    if (values[Number(button.className) - 1].length == 0) {
        document.getElementById('spare' + button.className).innerHTML = '';
    }
}

const clearButton = document.getElementById('clear');
function clear() {
    let button = document.querySelectorAll('button');
    let percent = document.querySelectorAll('.percent');
    button.forEach(x => { x.style = 'initial'; x.value = 'off'});
    percent.forEach(x => x.innerHTML = '');
    values = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
}
clearButton.addEventListener('click', clear);