function addMoney() {
    const amount = prompt("Enter amount to add:");
    if (amount && !isNaN(amount)) {
        const balanceElement = document.getElementById('balance');
        let currentBalance = parseFloat(balanceElement.innerText);
        currentBalance += parseFloat(amount);
        balanceElement.innerText = currentBalance;
        updateTransactions(`Added Money - ₹${amount} - Credit`);
    } else {
        alert("Please enter a valid amount.");
    }
}

function withdrawMoney() {
    const amount = prompt("Enter amount to withdraw:");
    if (amount && !isNaN(amount)) {
        const balanceElement = document.getElementById('balance');
        let currentBalance = parseFloat(balanceElement.innerText);
        if (currentBalance >= amount) {
            currentBalance -= parseFloat(amount);
            balanceElement.innerText = currentBalance;
            updateTransactions(`Withdrawn Money - ₹${amount} - Debit`);
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid amount.");

    }
}

function updateTransactions(transaction) {
    const transactionList = document.querySelector('.transaction-list');
    const newTransaction = document.createElement('li');
    newTransaction.innerText = transaction;
    transactionList.prepend(newTransaction);
}

