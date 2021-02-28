//Essa função faz o FAQ funcionar em forma de accordeon
export default function initAccordion(){
    const activeClass = 'ativo';
    const accordionLista = document.querySelectorAll('[data-anime="accordion"] dt');
    
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

