// Code your solutions in this file

function writeCards(names, adj) {
    const array = []
    for (let i = 0; i < names.length; i++ ) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`);
    }
    return array;
};

function countDown(i) {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}