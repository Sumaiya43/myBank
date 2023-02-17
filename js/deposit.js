document.getElementById("btn-deposit").addEventListener("click", function(){
    //get input field of deposit
    const depositField = document.getElementById("deposit");
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);
    
    
    //get the total amount of deposit text on the top of the website
    const depositTotalElm = document.getElementById("deposit-total");
    const prevDepositTotalString = depositTotalElm.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalString);
    
    const currentDepositTotal = prevDepositTotal + newDeposit;

    depositTotalElm.innerText = currentDepositTotal;

    //NOW TOTAL BALANCE....**********
   //get BALANCE numbers and calculate
   const balanceTotalElm = document.getElementById("balance-total");
   const prevBalanceString = balanceTotalElm.innerText;
   const prevBalance = parseFloat(prevBalanceString);

   //************************* */
   const newBalance = prevBalance + newDeposit;
   balanceTotalElm.innerText = newBalance;

    //clear input field value 
    depositField.value = "";
    

})