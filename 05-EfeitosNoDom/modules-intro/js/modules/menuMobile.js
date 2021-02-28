//Essa função cria um menu para tela touch ao clicar em SOBRE
import outsideClick from './dropDownMenu.js'

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu = "button"]');
    const menuList = document.querySelector('[data-menu = "list"]');
    const events = ["click", 'touchstart'];

    if(menuButton){
        function openMenu(event) {
            menuList.classList.toggle('active');
            menuButton.classList.toggle('active');
            outsideClick(menuList, events, () => {
                menuList.classList.remove('active');
                menuButton.classList.remove('active');
            })
        }
        events.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));
    }
}

