(function(){
    const tittleQuestions= [...document.querySelectorAll('.questions-tittle')];
    console.log(tittleQuestions);

    tittleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions-padding--add');

            question.children[0].classList.toggle('questions-arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();