document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const newdepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newdepositeAmountText);

    //new deposite totall
    const depositeTotall = document.getElementById('deposite-totall');
    const previousDEpositeText = depositeTotall.innerText;
    const previousDepositeAmount = parseFloat(previousDEpositeText);
    const newDEpositeTotall = newDepositeAmount + previousDepositeAmount;
    depositeTotall.innerText = newDEpositeTotall;


    //new balance added
    const balanceTotall = document.getElementById('balance-totall');
    const balanceTotallText = balanceTotall.innerText;
    const previosBalanceTotall = parseFloat(balanceTotallText);
    const newBalanceTotall = previosBalanceTotall + newDepositeAmount;
    balanceTotall.innerText = newBalanceTotall;




    //clear value from box
    depositeInput.value = '';
})