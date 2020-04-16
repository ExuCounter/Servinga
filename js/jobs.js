let jobsLabels = document.querySelectorAll('.jobs__block');

jobsLabels.forEach((label)=>{
    label.addEventListener('click', ()=>{
        label.classList.toggle('active');
    })
})