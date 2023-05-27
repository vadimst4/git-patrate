const main = document.querySelector('.main');

const btn = document.querySelector('.btn');

btn.addEventListener('click',(ev)=>{
    const div = document.createElement('div')
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.classList.add('patrat');
    main.append(div)
    console.log(randomColor);
    div.style.background = '#' + randomColor
})

