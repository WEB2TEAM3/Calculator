let display = document.querySelector('#display-result');
let buttons = Array.from(document.querySelectorAll('.button'));

document.addEventListener('keypress', (event) => {
    console.log(event)
    if (event.key == '=') {
        display.innerText = eval(display.innerText);
    }
    else if (event.key === "Backspace" || event.key === "Delete") {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText += event.key;
    }
})


buttons.map(button => {
    button.addEventListener('click', (e) => {
        // console.log('clicked'); //(listens for click and logs clicked)
        // console.log(e.target); //(logs the clicked element)
        // console.log(e.target.innerText); //(logs the content of the element)
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '⟲':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);

                } catch {
                    display.innerText = 'Error!';
                }
                break;

            default:
                display.innerText += e.target.innerText;

        }
    })
})