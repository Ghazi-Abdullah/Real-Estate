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


    // Get the span element
let dateAndTime = document.querySelector('.listing-date');

// Get the current date and time
let date = new Date();

// Format the date and time (e.g., "2025-04-13 14:30:00")
/*let formattedDate = date.getFullYear() + '-' +
    String(date.getMonth() + 1).padStart(2, '0') + '-' +
    String(date.getDate()).padStart(2, '0') + ' ' +
    String(date.getHours()).padStart(2, '0') + ':' +
    String(date.getMinutes()).padStart(2, '0') + ':' +
    String(date.getSeconds()).padStart(2, '0');**/

// Set the formatted date and time in the span
dateAndTime.textContent = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    //hour: '2-digit',
    //minute: '2-digit',
    //second: '2-digit',
    //hour12: false
});



    
