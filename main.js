function check() {
    const value = input.value.trim(); // removes extra spaces

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
