/**
 * @author jhlee012
 * 
 * Developed for GaonHS.Mathmatics Presentation
 * For Evaluating Time Complexity - Log2(N)
 */

const readline = require("readline"); //Input Master

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Time Complexity O(1)
function timetest(N) {
    return N + 1
}



//Time Complexity O(n)
function ntime(N) {
    let count = 0
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            count += i + j
        }
    }
    return count;
}

//Result Printer
function resprint(mid, to, len) {
    console.log(`Result : ${mid !== 0 ? "Success" : "Failed"}\n`);
    console.log(`Index Number = ${mid !== 0 ? mid : 'None'}\n`)
    console.log(`Total Calcs = ${to}\n`)
    console.log(`Time Complexity = ${Math.log2(len)}\n`)
}

//BST Algorithms - Time Complexity O(log2(N))
const BinarySearch = function (args, target) {
    let TO = 0;
    let start = 0;
    let end = args.length - 1;
    let mid;

    while (start <= end) {
        TO++;
        mid = Math.round((start + end) / 2)

        if (target === args[mid]) {
            resprint(mid, TO, args.length);
            return 1;
        }
        else {
            if (target < args[mid]) end = mid - 1;
            else start = mid + 1;
        }
    }

    resprint(0, TO, args.length)
    return -1
}

//Main Array 
let args = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // length 16

rl.on("line", (line) => {
    args = []; //Array Init

    for (let i = 0; i < 128; i ++) { //Array [0~127] : len 128
        args.push(i);
    }

    let N = Number(line)
    BinarySearch(args, N) //Run BST
    rl.close();
});

rl.on("close", () => {
    process.exit();
});
