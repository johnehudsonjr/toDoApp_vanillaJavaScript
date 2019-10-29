// Create a method on the object!!
const account = {
    name: 'John',
    expenses:[],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
   
    addIncome: function(description, income){
       
        this.income.push({
            description:description,
            amount: income
        })

    },

    getAccountSummary: function(){
        let totalIncome = 0
        let totalExpenses = 0
        let accountBalance = 0


        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has an account balance of $${accountBalance}. $${totalExpenses} in expenses and $${totalIncome}.`
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
    account.addIncome('job', 10000)
    

    console.log(account.getAccountSummary())

    // NOTES
        // Create methods on the objects. Use this. to access the properties within that method. account.addExpense, account.getAccountSummary
        // When adding an object to an array... the function will take in the arguments and you format them via object property:value notation as needed
        // description: argumentName,
        // amount: argumentAmount,


// ad Income array to account
//  Add Income method => description, amount
// Tweak getAccountSummary
// Andrew Mead has a balance of $10. 100 in in income and 90 in expense