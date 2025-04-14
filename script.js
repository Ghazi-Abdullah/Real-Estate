let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('active');

}

// هيك جكيت لما اكبس على الصورة الصغيرة حطها محل الكبيرة تبديل يعني
    document.querySelectorAll('.view-property .details .thumb .small-img img').
    forEach(images => {
        images.onclick = () =>{

            src = images.getAttribute('src')
            document.querySelector('.view-property .details .thumb .big-img img').
            src =src;
        }

});


    document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{

        headings.onclick = () =>{
            headings.parentElement.classList.toggle('active');
        }
    });
