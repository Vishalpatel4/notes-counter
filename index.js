const notesCount = (amount) => {
    console.log(amount, 'amount')
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
    let notesCounter = []
    let count = notes.length + 1;

    for (let i = 0; i < count; i++) {
        if (amount >= notes[i]) {
            // console.log(Math.floor(amount / notes[i]), notes[i])
            // console.log(amount % notes[i])
            notesCounter[i] = Math.floor(amount / notes[i])
            amount = amount % notes[i]
        }
    }

    for (let i = 0; i < count; i++) {
        if (notesCounter[i] !== undefined) {
            console.log(`${notes[i]} :=> ${notesCounter[i]}`)
        }
    }
}

notesCount(555)