document.getElementById('deposit-button').addEventListener('click',function(){
   const inputField=document.getElementById('input-deposit');
   const newDepositText=inputField.value;
   const newDepositAmount=(newDepositText);
   console.log(newDepositAmount)
  // console.log(userAmount); 
   const totalDeposit=document.getElementById('total-deposit');
  const previousDepositText=totalDeposit.innerText;
  const previousDepositAmount=(previousDepositText);
  const newDepositTotal=parseFloat (previousDepositAmount)+parseFloat(newDepositAmount );
 totalDeposit.innerText=newDepositTotal;
 const depositBalanceTotal=document.getElementById('balance-total');
 const depositBalanceText=depositBalanceTotal.innerText;
 //const depositBalanceAmount= (depositBalanceText);
 const newTotalAdd=parseFloat(depositBalanceText) + parseFloat(newDepositAmount);
 console.log(newTotalAdd);
 depositBalanceTotal.innerText=newTotalAdd;

 inputField.value='';

})
//withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawInput=document.getElementById('input-withdrow');
   const inputWithdrawText=withdrawInput.value;
   const inputWithdrawAmount=(inputWithdrawText);
   console.log(inputWithdrawAmount);

   const totalWithdraw=document.getElementById('withdraw-total');
   const totalWithdrawText=totalWithdraw.innerHTML;
   const totalWithdrawAmount=(totalWithdrawText);
   const newWithdrawTotal= parseFloat(inputWithdrawAmount)  + parseFloat(totalWithdrawAmount)  ;
   totalWithdraw.innerText=newWithdrawTotal;
 
   const balanceTotal=document.getElementById('balance-total');
   const balanceTotalText=balanceTotal.innerText;
   const balanceTotalAmount= parseFloat(balanceTotalText);
   const newBalanceTotal=balanceTotalAmount - parseFloat(inputWithdrawAmount);
   balanceTotal.innerText=newBalanceTotal;

   withdrawInput.value='';
   
})