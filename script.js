var box = document.getElementById('display');

function input(x) {
    box.value += x;
    if (x === 'c') {
        box.value = '';
    }

    if (box.value === 'error' + x) {
        box.value = x;
    }

    if (box.value === '/') {
        box.value = '';
    }

    if (box.value === '+') {
        box.value = '';
    }

    if (box.value === '*') {
        box.value = '';
    }

    if (box.value === '--') {
        box.value = '-';
    }

    if (box.value === '..') {
        box.value = '.';
    }

    var num = box.value;
}

function equals() {
    x = box.value;
    x = eval(x);
    box.value = x;

    if (x === undefined) {
        box.value = 'error';
    }
}

function backspace() {
    if (box.value === 'error') {
       box.value = '';
    } else {
        var num = box.value;
        var len = num.length - 1;
        var newNum = num.substring(0,len);
        box.value = newNum;

        if (newNum.length < 1) {
           box.value = '';
        }
    }
}