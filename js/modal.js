const buttons=document.querySelectorAll('.btn-donate');
for(const button of buttons){
    button.addEventListener('click',function(){
        const modal = getAnElementById('modal');
        modal.classList.remove('hidden');
        getAnElementById('donation-cards').classList.add('blur');
    })
    getAnElementById('modal-close').addEventListener('click',function(){
        getAnElementById('modal').classList.add('hidden');
        getAnElementById('donation-cards').classList.remove('blur');
    })
}