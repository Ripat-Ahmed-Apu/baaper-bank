document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);

    //update deposite totall
    const depositeTotall = document.getElementById('deposite-totall');
    const previousDepositeAmountText = depositeTotall.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
    const newDepositeTotall = previousDepositeAmount + newDepositeAmount;
    depositeTotall.innerText = newDepositeTotall;


    //update totall balance
    const balanceTotall = document.getElementById('balance-totall');
    const balanceTotallText = balanceTotall.innerText;
    const previousBalanceTotall = parseFloat(balanceTotallText);
    const newBalanceTotall = previousBalanceTotall + newDepositeAmount;
    balanceTotall.innerText = newBalanceTotall;

    //clear input value
    depositeInput.value = '';
})

//add widthraw totall
document.getElementById('Withdrow-button').addEventListener('click', function () {
    const widthrawInput = document.getElementById('Withdrow-input');
    const widthrawAmountText = widthrawInput.value;
    const newWidthrawAmount = parseFloat(widthrawAmountText);
    console.log(newWidthrawAmount);

    //set widthraw
    const widthrawTotall = document.getElementById('widthraw-totall');
    const previousWidthrawText = widthrawTotall.innerText;
    const previousWidthrawTotall = parseFloat(previousWidthrawText);
    const newWidthrawTotall = previousWidthrawTotall + newWidthrawAmount;
    widthrawTotall.innerText = newWidthrawTotall;


    //update balance
    const balanceTotall = document.getElementById('balance-totall');
    const previousBalanceText = balanceTotall.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotall = previousBalance - newWidthrawAmount;
    balanceTotall.innerText = newBalanceTotall;





    //clear input value
    widthrawInput.value = '';

})

