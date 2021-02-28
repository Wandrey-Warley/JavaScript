//Essa função faz a section aparecerem da esquerda para a direita animadas
export default function initScrollAnimated(){
    const activeClass = 'ativo';
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections){
        
        function animaScroll() {  
            // console.log('Sim');
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.8);
                // console.log(sectionTop);
                if(sectionTop < 0) {
                    if(!section.classList.contains(activeClass))
                    section.classList.add(activeClass);
                } else if(section.classList.contains(activeClass)){
                    section.classList.remove(activeClass);
                }
            });
            
        } 
        window.addEventListener('scroll', animaScroll);
    }
}