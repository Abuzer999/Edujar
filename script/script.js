const buttons = document.querySelectorAll('[data-tab]');
const content = document.querySelectorAll('[data-tab-content]');

buttons.forEach(e => {
    e.addEventListener('click', function() {

        content.forEach(e => {
            e.classList.add('hidden')
        })

        buttons.forEach(e => {
            e.classList.remove('active')
        })

        const conts = document.querySelector('#' + this.dataset.tab)
        conts.classList.remove('hidden')
        e.classList.add('active')
    })

});

const burger = document.querySelector('.burger-block__burger');
const menu = document.querySelector('.burger-block__burger-menu')
const navigation = document.querySelector('.burger-block__navigation');
const aMob = document.querySelectorAll('.header__link');
const body = document.body;

burger.addEventListener('click', () => {
  navigation.classList.toggle('actives');
  body.classList.toggle('hidden')
  menu.classList.toggle('active')
  if (navigation.classList.contains('actives')) {
    body.style.overflow = 'hidden';
} else {
    body.style.overflow = 'auto';
}

});



aMob.forEach(e => {
  e.addEventListener('click', () => {
    navigation.classList.remove('actives');
    body.classList.remove('hidden')
    menu.classList.toggle('hidden')
  })
});



