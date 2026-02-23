//alert('Welcome to the page.');

document.addEventListener('DOMContentLoaded',() => {
    const container = document.querySelector('.container');
    const intro = document.querySelector('.js-separation');

    pageIntro (container);
    const submitButton = document.getElementById('js-button');
    //alert(submitButton.textContent);
    submitButton.addEventListener('click', () => {
        mainPage (intro, container);
        const transactionType = document.getElementById('js-select');
        const trnsType = transactionType.value;
        alert(trnsType);
    });
}
)

function pageIntro(container) {
    container.classList.add('hidden');
}


function mainPage(intro, container) {
    intro.classList.add('hidden');
    container.classList.remove('hidden');
}
