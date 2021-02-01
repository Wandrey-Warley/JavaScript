window.onload = () =>{
    console.log('Start script 2');
    initTabNav();
    initAccordion();
    initScroolSuave();
    initScrollAnimated();
}
const activeClass = 'ativo';
//Fazer a pagina Funcionar com tabs 

function initTabNav(){

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    
    if(tabMenu.length && tabContent.length){
        
        tabContent[0].classList.add(activeClass);
        
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () =>{
                activeTab(index); 
            });
        });
    }
}

// Criar slid no faq

function initAccordion(){

    const accordionLista = document.querySelectorAll('.js-accordion dt');
    
    if(accordionLista.length){

        function activeAccordion(event){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
            
        }
        accordionLista.forEach((item) =>{
            item.addEventListener('click', activeAccordion);
        })
    }
}

function initScroolSuave() {  
   
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
                
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        /* Forma alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });*/
    }   
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

function initScrollAnimated(){

    const sections = document.querySelectorAll('.js-scroll');
    if(sections){
        
        function animaScroll() {  
            console.log('Sim');
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.8);
                console.log(sectionTop);
                if(sectionTop < 0){
                    section.classList.add(activeClass);
                } else {
                    section.classList.remove(activeClass);
                }
            });
            
        }
        
        window.addEventListener('scroll', animaScroll);
    }
}