document.getElementById('btn-quota-donation').addEventListener('click',function(){
    const quotaAmount = getInputFieldValueById('quota-donation-amount');
    const availableBalance = getAmountById('available-balance');
    if(quotaAmount<=0 || isNaN(quotaAmount)){
        alert('invalid donation amount');
        return;
    };
    if(quotaAmount > availableBalance){
        alert('insufficient balance for donation');
        return;
    };
    const quotaAddedAmount = getAmountById('quota-added-amount');
    const total = quotaAddedAmount + quotaAmount;
    const newBalance = availableBalance - quotaAmount;
    document.getElementById('quota-added-amount').innerText = total;
    document.getElementById('available-balance').innerText = newBalance;

     // add to history
     const name = getInnerTextById('quota-headline');
     const div = document.createElement('div');
     div.classList.add('border','rounded-2xl','p-8','my-4');
     div.innerHTML = `
        <h2 class="txt-4xl font-semibold"> ${quotaAmount} Taka is donated for ${name}</h2>
        <p>Date: ${new Date().toString()} </p>
     `;
     document.getElementById('donation-history').appendChild(div);
})
   