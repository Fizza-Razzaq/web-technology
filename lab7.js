
document.getElementById("task1Btn").onclick = function () {
    const username = prompt("Enter your name:");
    const regId = prompt("Enter your Registration ID:");
    alert(`My name is: ${username}\nRegistration ID: ${regId}`);
};

document.getElementById("task2Btn").onclick = function () {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    const sum = n1 + n2;
    const sub = n1 - n2;
    const mul = n1 * n2;
    const div = n1 / n2;

    document.getElementById("sum").textContent = "Sum: " + sum;
    document.getElementById("sub").textContent = "Subtraction: " + sub;
    document.getElementById("mul").textContent = "Multiplication: " + mul;
    document.getElementById("div").textContent = "Division: " + div;
    document.getElementById("comp").textContent =
        "Is first number greater? " + (n1 > n2);
};
