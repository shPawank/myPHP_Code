let string = ""; // This will store the expression
let buttons = document.querySelectorAll('.button'); // Select all buttons with class 'button'

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            // Evaluate the expression and update the display
            try {
                string = string.replace('X', '*'); // Replace X with * for multiplication
                string = string.replace('%', '/100'); // Handle percentage calculation
                string = eval(string); // Evaluate the expression
                document.querySelector('#display').value = string;
            } catch (error) {
                document.querySelector('#display').value = 'Error';
                string = ''; // Reset on error
            }
        } else if (buttonText === 'C') {
            // Clear the expression
            string = "";
            document.querySelector('#display').value = string;
        } else {
            // Append the button text to the expression
            string += buttonText;
            document.querySelector('#display').value = string;
        }
    });
});
