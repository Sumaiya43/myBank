document.getElementById("btn-withdraw").addEventListener("click", function(){
    //get input field numbers
    const withdrawField = document.getElementById("withdraw");
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    
   //get withdraw numbers and calculate
   const withdrawTotalElm = document.getElementById("withdraw-total");
   const prevWithdrawString = withdrawTotalElm.innerText;
   const prevWithdraw = parseFloat(prevWithdrawString);


   //add new and prev withdraw
   const currentWithdraw = newWithdraw + prevWithdraw;

   //show the total withdraw on the screen
   withdrawTotalElm.innerText = currentWithdraw;


   //NOW TOTAL BALANCE....**********
   //get BALANCE numbers and calculate
   const balanceTotalElm = document.getElementById("balance-total");
   const prevBalanceString = balanceTotalElm.innerText;
   const prevBalance = parseFloat(prevBalanceString);

   //************************* */
   const newBalance = prevBalance - newWithdraw;
   balanceTotalElm.innerText = newBalance;

   //remove input value
   withdrawField.value = "";

   


})