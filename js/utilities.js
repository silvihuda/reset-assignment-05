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