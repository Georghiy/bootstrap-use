window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.burger-btn').forEach(function(el){
    el.addEventListener('click', function(){
      document.querySelector('.header__nav-menu').classList.toggle('burger-active')
    })
  })

  this.document.querySelectorAll('.nav-menu__item').forEach(function(item){
    item.addEventListener('click', function(){
      document.querySelector('.header__nav-menu').classList.remove('burger-active')
    })
  })
})
