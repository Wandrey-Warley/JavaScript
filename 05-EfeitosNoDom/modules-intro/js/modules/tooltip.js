/* Essa função cria uma caixa que segue o mouse enquanto ele esta sobre o mapa*/

export default function initTooltip(){
    const tooltip = document.querySelectorAll('[data-tooltip]');

    tooltip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event){
        const tooltipBox = criarTooltipBox(this);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);
        
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }
    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = (event.pageY + 22) + 'px';
            this.tooltipBox.style.left = (event.pageX + 15) + 'px';
        }
    }

    const onMouseLeave = { 
        handleEvent() {
            this.tooltipBox.remove();
        }
    }

    function criarTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);

        return tooltipBox;
    }
}

