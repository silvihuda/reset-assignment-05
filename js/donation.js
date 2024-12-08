document.getElementById('btn-naoakhali-donate').
addEventListener('click',function(){
    const noakhaliAmount =  getInputFieldValueById('noakhali-donate-amount');
    if(noakhaliAmount <=0 || isNaN(noakhaliAmount)){
        alert('invalid donation amount');
        return;
    };
    const noakhaliAddedAmount = getAmountById('noakhali-added-amount');
    const availableBalance = getAmountById('available-balance');
    const total = noakhaliAddedAmount + noakhaliAmount;
    const newBalance = availableBalance - noakhaliAmount;
    document.getElementById('noakhali-added-amount').innerText = total;
    document.getElementById('available-balance').innerText = newBalance;
    console.log(newBalance);
})