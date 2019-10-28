// Create a method on the object!!
const account = {
    name: 'John',
    expenses:[],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        return `${this.name} has $${totalExpenses} in expenses.`
    }
}

// Expense -> prop1: Description prop2: Amount

// two methods/ Functions that need be created
// addExpense(description, amount)
// getAccountSummary
    // Total up expenses. Andrew Mead has $X,XXX in expenses
    // use forEach()



    account.addExpense('Rent', 950)
    account.addExpense('coffee', 2)
    

    console.log(account.getAccountSummary())

    // NOTES
        // Create methods on the objects. Use this. to access the properties within that method. account.addExpense, account.getAccountSummary
        // When adding an object to an array... the function will take in the arguments and you format them via object property:value notation as needed
        // description: argumentName,
        // amount: argumentAmount,