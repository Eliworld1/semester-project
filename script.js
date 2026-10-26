
const expenseName = document.querySelector("#expenseName");
const expenseCategory = document.querySelector("#expenseCategory");
const expenseAmount = document.querySelector("#expenseAmount");
const addExpense = document.querySelector("#addExpense");
const feedback = document.querySelector("#feedback");
const expenseHistory = document.querySelector("#expenseHistory");

addExpense.addEventListener("click", function () {
    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    if (name === "" || category === "" ||
        expenseAmount.value === "" || amount <= 0) {
        feedback.textContent =
            "Please enter an expense name, category, and valid amount.";
    } else {
        const expenseItem = document.createElement("li");
        expenseItem.textContent =
            name + " - " + category + " - $" + amount.toFixed(2);
              expenseHistory.appendChild(expenseItem);

        if (amount <= 50) {
            feedback.textContent =
                "Expense added! This is a small expense.";
        } else {
            feedback.textContent =
                "Expense added! This is a large expense.";
        }

        expenseName.value = "";
        expenseCategory.value = "";
        expenseAmount.value = "";
    }
});


