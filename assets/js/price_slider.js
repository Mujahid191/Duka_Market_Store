const price_slider = () =>{
    const min_input = document.querySelector('.min_range');
    const max_input = document.querySelector('.max_range');
    const min_icon = document.querySelector('.range_left');
    const max_icon = document.querySelector('.range_right');
    const progress_bar = document.querySelector('.progress_bar');

    min_input.addEventListener('input', () =>{
    if((max_input.value - min_input.value) <= 0){
        min_input.value = max_input.value;
    }else{
        min_icon.value = min_input.value;
        updateProgressBar();
    }
    })
    max_input.addEventListener('input', () =>{
    if((max_input.value - min_input.value) <= 0){
        max_input.value = min_input.value
    }else{
        max_icon.value = max_input.value;
    updateProgressBar();
    }
    })
    min_icon.addEventListener('input', () =>{
    if((max_icon.value - min_icon.value) <= 0){
        min_icon.value = max_icon.value
    }else{
        min_input.value = min_icon.value;
    updateProgressBar();
    }
    })
    max_icon.addEventListener('input', () =>{
    if((max_icon.value - min_icon.value) <= 0){
        max_icon.value = min_icon.value;
    }else{
        max_input.value = max_icon.value;
        updateProgressBar();
    }
    })

    function updateProgressBar() {
    const minValue = parseFloat(min_icon.value);
    const maxValue = parseFloat(max_icon.value);
    const totalRange = 1200;
    const minIconPosition = ((minValue) / totalRange) * 100;
    const maxIconPosition = ((maxValue) / totalRange) * 100;
    const progressBarWidth = maxIconPosition - minIconPosition;
    progress_bar.style.left = minIconPosition + '%';
    progress_bar.style.width = progressBarWidth + '%';
    }
    updateProgressBar();
}
price_slider();
/*--------------- Price filter Show on mobile ---------------*/
const price_filter_show = () =>{
    const show_filter = document.querySelector('.filter_section');
    show_filter.classList.toggle('filter_section_show');
}
/* document.querySelector('.fa-filter').addEventListener('click', price_filter_show);
document.querySelector('.filter_close').addEventListener('click', price_filter_show); */