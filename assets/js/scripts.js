// Accordion javascript

const items = document.querySelectorAll('.accordion a.question');

function toggleAccordion(){
    this.classList.toggle('active');
    for(let item of items) {
        if(item !== this) {
            item.classList.remove('active');
            item.nextElementSibling.classList.remove('active');
        }
    }
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));