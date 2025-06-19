const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
}
function check() {
    const value = input.value.trim(); // Remove spaces

    if (value === "") {
        alert("Please enter a word to check.");
        return;
    }

    const reverse = reverseString(value);
    if (value === reverse) {
        alert("It is a Palindrome");
    } else {
        alert("No, It's not.");
    }

    input.value = "";
}
