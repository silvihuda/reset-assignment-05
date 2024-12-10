getAnElementById('modal-close').addEventListener('click',function(){
    getAnElementById('modal').classList.add('hidden');
    getAnElementById('donation-cards').classList.remove('blur');
})