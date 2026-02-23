let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
    const list = document.getElementById("transactionList");
    const balanceDisplay = document.getElementById("balance");

    list.innerHTML = "";

    let balance = 0;

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");

        li.classList.add(transaction.type);

        li.innerHTML = `
            ${transaction.description} - Ksh ${transaction.amount}
            <button onclick="deleteTransaction(${index})">X</button>
        `;

        list.appendChild(li);

        if (transaction.type === "income") {
            balance += transaction.amount;
        } else {
            balance -= transaction.amount;
        }
    });

    balanceDisplay.textContent = "Ksh " + balance;

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || isNaN(amount)) {
        alert("Please fill all fields correctly");
        return;
    }

    transactions.push({
        description,
        amount,
        type
    });

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    updateUI();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

updateUI();