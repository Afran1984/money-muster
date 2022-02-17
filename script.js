document.getElementById('calculatr-Amount').addEventListener('click', function () {
    const incomeAmount = document.getElementById('income-Amount');
    const totalAmount = incomeAmount.value;
    incomeAmount.value = ' ';


    const foodAmount = document.getElementById('food-Amount');
    const totalFoodAmount = foodAmount.value;
    foodAmount.value = ' ';

    const rentAmount = document.getElementById('rent-Amount');
    const totalRentAmount = rentAmount.value;
    rentAmount.value = ' ';

    const clothesAmount = document.getElementById('clothes-Amount');
    const totalClothesFoodAmount = clothesAmount.value;
    clothesAmount.value = '';

    // const totalExpenses = totalFoodAmount + totalRentAmount + totalClothesFoodAmount;

    // const totalBalance = totalExpenses - totalAmount;
    // console.log(totalBalance);
    console.log(totalFoodAmount + totalRentAmount + totalClothesFoodAmount);

})