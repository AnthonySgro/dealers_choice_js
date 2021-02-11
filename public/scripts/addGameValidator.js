const form = document.getElementById('form');
const btn = document.getElementById('btn');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const eventName = document.getElementById('eventName');
const place = document.getElementById('place');
const content = document.getElementById('content');
const embedLink = document.getElementById('embedLink');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email validity
function checkLink(input) {
    const re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if (input.value.includes('*')) {
        showError(input, 'Fill in remaining asterisks');
    } else if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Link is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Form event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([player1, player2, eventName, place, content, embedLink]);
    checkLength(player1, 5, 50);
    checkLength(player2, 5, 50);
    checkLength(eventName, 3, 50);
    checkLength(place, 3, 40);
    checkLength(content, 20, 10000);
    checkLink(embedLink);

    let allValid = true;

    const entries = [...form.querySelectorAll('div')];
    console.log(entries);
    entries.forEach(entry => {
        if ([...entry.classList].includes('error')) {
            allValid = false;
        }
    })

    if (allValid) {
        form.submit();
    }
})
