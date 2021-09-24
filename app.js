const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const log = console.log;
const sidebar = document.querySelector('.sidebar');
const mainslide = document.querySelector('.main-slide');
const slide_count = mainslide.querySelectorAll('div').length;
const container = document.querySelector('.container')
log(slide_count);
let active_slide_index = 0;

sidebar.style.top = `-${(slide_count-1)*100}vh`;

upBtn.addEventListener('click', ()=>changeSlide('up'));

downBtn.addEventListener('click', ()=>changeSlide('down'));

function changeSlide(direction){
    if(direction === 'up'){
        log(active_slide_index);
        active_slide_index++;
        active_slide_index %= slide_count;
        log(active_slide_index);
    }else if(direction ==='down'){
        log(active_slide_index);
        if(active_slide_index === 0) {active_slide_index = slide_count - 1;} else active_slide_index--;
        log(active_slide_index);
    }

    const height = container.clientHeight; 

    mainslide.style.transform = `translateY(-${height*active_slide_index}px)`;
    sidebar.style.transform = `translateY(${height*active_slide_index}px)`;
}


