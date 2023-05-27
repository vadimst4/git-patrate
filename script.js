const main = document.querySelector('.main');

const btn = document.querySelector('.btn');

btn.addEventListener('click',(ev)=>{
    const div = document.createElement('div')
    div.classList.add('patrat');
    main.append(div)
})