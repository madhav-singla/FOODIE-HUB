function addMoney() {
    const amount = prompt("Enter amount to add:");
    if (amount && !isNaN(amount)) {
        const balanceElement = document.getElementById('balance');
        let currentBalance = parseFloat(balanceElement.innerText);
        currentBalance += parseFloat(amount);
        balanceElement.innerText = currentBalance;
}