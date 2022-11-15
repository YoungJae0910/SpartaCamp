const search_history = document.getElementById('search_history');
const search_input = document.getElementById('search_input');

function onclick_arrow(){
    search_history.classList.toggle('hide_bar');
};

search_input.addEventListener('click', onclick_arrow);
