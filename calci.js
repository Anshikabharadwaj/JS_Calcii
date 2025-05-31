function appendvalue(value) {
    document.getElementById("inp").value += value;
}
function result() {
    let result = eval(document.getElementById("inp").value);
    document.getElementById("inp").value = result;
}
function fact() {
    let inp = document.getElementById("inp").value;
    let fa = 1;
    for (let i = 1; i <= inp; i++) {
        fa *= i
    }
    document.getElementById("inp").value = fa;
}
function squre() {
    let input = document.getElementById("inp").value;
    let i = input * input;
    document.getElementById("inp").value = i;
}
function cube() {
    let input = document.getElementById("inp").value;
    let i = input ** input;
    document.getElementById("inp").value = i;
}

function clearScreen() {
    document.getElementById("inp").value = "";
}