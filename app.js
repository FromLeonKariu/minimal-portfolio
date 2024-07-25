console.log("HELLO BROWSER!!");

function calculate_rem () {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('Enter a value (px): ', (number) => {
        console.log(`You entered: ${number} px`);
        readline.close()
        let input;
        readline.question('Enter a value (px): ', (answer) => {
            input = answer;
            console.log(`You entered: ${input} px`);
            readline.close()
        })

        console.log(input)

    })
}

calculate_rem();