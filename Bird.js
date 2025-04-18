
var France = document.querySelector('.France');
var Germany = document.querySelector('.Germany');
var England = document.querySelector('.England');
const ar = [France, Germany, England];
var Sect_buttons_catalog = document.querySelector('.sect-buttons-catalog')



Sect_buttons_catalog.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        var active_but = document.querySelector('.button-active');
        active_but.classList.remove('button-active');
        active_but.classList.add('button-not-active');

        event.target.classList.remove('button-not-active');
        event.target.classList.add('button-active');
        
        if(event.target.classList.contains('Germany')){
            document.getElementById('Germany').style.display = 'flex';
            document.getElementById('France').style.display = 'none';
            document.getElementById('England').style.display = 'none';
            
        }
        if(event.target.classList.contains('France')){
            document.getElementById('Germany').style.display = 'none';
            document.getElementById('France').style.display = 'flex';
            document.getElementById('England').style.display = 'none';
        }
        if(event.target.classList.contains('England')){
            document.getElementById('Germany').style.display = 'none';
            document.getElementById('France').style.display = 'none';
            document.getElementById('England').style.display = 'flex';
        }
    }
  })

