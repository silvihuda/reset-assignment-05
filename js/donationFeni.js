document.getElementById('btn-donate-feni').addEventListener('click',function(){
    const feniAmount = getInputFieldValueById('feni-donate-amount');
    const availableBalance = getAmountById('available-balance');
    if(feniAmount<=0 || isNaN(feniAmount)){
        alert('invalid donation amount');
        return;
    }
    if(feniAmount > availableBalance){
        alert('insufficient balance for donation');
        return;
    };
    const feniAddedAmount = getAmountById('feni-added-amount');
    const total = feniAddedAmount + feniAmount;
    const newBalance = availableBalance - feniAmount;
    document.getElementById('feni-added-amount').innerText = total;
    document.getElementById('available-balance').innerText = newBalance;

    // add to history
    const name = getInnerTextById('feni-headline');
    const div = document.createElement('div');
    div.classList.add('border','rounded-2xl','p-8','my-4');
    div.innerHTML = `
       <h2 class="txt-4xl font-semibold"> ${feniAmount} Taka is donated for ${name}</h2>
       <p>Date: ${new Date().toString()} </p>
    `;
    document.getElementById('donation-history').appendChild(div);
})