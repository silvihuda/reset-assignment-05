document.getElementById('btn-naoakhali-donate').
addEventListener('click',function(){
    const noakhaliAmount =  getInputFieldValueById('noakhali-donate-amount');
    const availableBalance = getAmountById('available-balance');
    if(noakhaliAmount <=0 || isNaN(noakhaliAmount)){
        alert('invalid donation amount');
        return;
    };
    if(noakhaliAmount > availableBalance){
        alert('insufficient balance for donation');
        return;
    }
    const noakhaliAddedAmount = getAmountById('noakhali-added-amount');
    const total = noakhaliAddedAmount + noakhaliAmount;
    const newBalance = availableBalance - noakhaliAmount;
    document.getElementById('noakhali-added-amount').innerText = total;
    document.getElementById('available-balance').innerText = newBalance;

    // add to history
    const name = getInnerTextById('noakhali-headline');
    const div = document.createElement('div');
    div.classList.add('border','rounded-2xl','p-8','my-4');
    div.innerHTML = `
       <h2 class="txt-4xl font-semibold"> ${noakhaliAmount} Taka is donated for ${name}</h2>
       <p>Date: ${new Date().toString()} </p>
    `;
    document.getElementById('donation-history').appendChild(div);
})