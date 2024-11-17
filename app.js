const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
        
    });
});
const hiddenEliment = document.querySelectorAll('.custom');
hiddenEliment.forEach((el) => observer.observe(el));