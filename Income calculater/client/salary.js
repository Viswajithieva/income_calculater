function salary() {
    let MonthlyAmountInput = prompt("Enter the Mothly Amount:");
    let DayInput = prompt("Enter the totale Day of the Mothe:");

    let Amount= parseFloat(MonthlyAmountInput);
    let Day = parseFloat(DayInput);

    let APD = Amount / Day;

    document.getElementById ("result").innerHTML = `Per Day Amount is ${APD.toFixed(2)} `;
}

