
let friends = ['Mike', 'Shaun', 'Chug', 'Viren', 'Tam'];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");
    for (num = 99; num > 0; num--) {
        if (num === 2) {
            console.log(num + "lines of code in the file" + num + "lines of code;" + friends[i] + "strikes one out, clears it all out." + (num - 1) + "lines of code in the file.")
        } else if (num === 1) {
            console.log(num + " lines of code in the file," + num + "line of code;" + friends[i] + "strikes one out, clears it all out." + (num - 1) + "lines of code in the file.")
        } else {
            console.log(num + "lines of code in teh file," + num + "lines of code;" + friends[i] + "strikes one out, clears it all out," + (num - 1) + "lines of code in the file.")
        }

    }           
}