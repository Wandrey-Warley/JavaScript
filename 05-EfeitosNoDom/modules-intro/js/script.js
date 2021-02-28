//Script principal que importa todos os modulos e os inicializa
import initScroolSuave from './modules/scroll-suave.js';
import initScrollAnimated from './modules/scroll-animation.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabNav.js'; 
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initAnimaNumeros from './modules/animaNumeros.js';
import initFuncionamento from './modules/funcionamento.js';

window.onload = () => {
    console.log("Start Script");
    initScroolSuave();
    initScrollAnimated();
    initAccordion(); 
    initTabNav();
    initModal();
    initTooltip();
    initDropDownMenu();
    initMenuMobile();
    initAnimaNumeros();
    initFuncionamento();
}
