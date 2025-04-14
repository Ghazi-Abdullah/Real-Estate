
const imagecontaner = document.querySelector(".image-contaner");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

//لتغير حجم المسافة بين الصور 
//للتحكم في الرقم الموجود في ( rotateY(0deg) )الموجود في (css)
let x = 0;


let timer;
prevEl.addEventListener("click", () => {
    //للتحريك الي اليسار او اليمين يجب الانتباه الى الاشارة الموجودة في المعادلة 
    x = x + 45;
    clearTimeout(timer)
    updateGallary();
});

nextEl.addEventListener("click", () => {
    //للتحريك الي اليسار او اليمين يجب الانتباه الى الاشارة الموجودة في المعادلة 
    x = x - 45;
    clearTimeout(timer)
    updateGallary();
});

function updateGallary() {
    //الربط في (css)
    imagecontaner.style.transform = `perspective(1000px)  rotateY(${x}deg)`;

    //سويت تايمير عشان يصير يقلب لحالة كل ثلاث ثواني 
    timer = setTimeout(()=>{
        x = x - 45
        updateGallary()
    },3000)
}

updateGallary()