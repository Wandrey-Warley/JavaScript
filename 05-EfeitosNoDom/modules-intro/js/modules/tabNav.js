//Essa função alterna os textos da section ao clicar nas imagens
export default function initTabNav(){
    const activeClass = 'ativo';
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
   
    if(tabMenu.length && tabContent.length){
        
        tabContent[0].classList.add(activeClass);
        
        function activeTab(index){
            const direcao = tabContent[index].dataset.anime
            tabContent.forEach((section) => {
                section.classList.remove(activeClass, direcao);
            });
            tabContent[index].classList.add(activeClass, direcao);
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () =>{
                activeTab(index); 
            });
        });
    }
}
