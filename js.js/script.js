
const $elements = document.querySelectorAll('.text');
const $broswerScreenPosition = window.innerHeight;

function scrollAppearAll(){
    
  $elements.forEach(element =>{
    if(element.getBoundingClientRect().top < $broswerScreenPosition){
      element.classList.add('text-appear');
    }else if(element.getBoundingClientRect().top > $broswerScreenPosition){
      element.classList.remove('text-appear');
    }
  })
}

window.addEventListener('scroll', scrollAppearAll);


