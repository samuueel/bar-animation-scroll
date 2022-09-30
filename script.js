const bar = document.querySelector('.barra');
const main = document.querySelector('.main-container');

const animateProgress = ( ) => {
    const heightScroll = -main.getBoundingClientRect().top
    const widthProgress = (heightScroll/ (main.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100
    const value = Math.floor(widthProgress)
    bar.style.width = value + '%'
}


window.addEventListener('scroll', animateProgress)