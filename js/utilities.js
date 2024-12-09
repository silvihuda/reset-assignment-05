function getInputFieldValueById(id){
    const donateAmount = document.getElementById(id).value;
    const donateAmountNumber = parseFloat(donateAmount);
    return donateAmountNumber;
    
}
function getAmountById(id){
    const addedAmount = document.getElementById(id).innerText;
    const addedAmountNumber = parseFloat(addedAmount);
    return addedAmountNumber;
}
function addBgColorById(id){
   document.getElementById('btn-donate').classList.remove('bg-lime-300');
   document.getElementById('btn-history').classList.remove('bg-lime-300');
   document.getElementById(id).classList.add('bg-lime-300');
};
function showAPageById(id){
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
function getInnerTextById(id){
    const text = document.getElementById(id).innerText;
    return text;
}
