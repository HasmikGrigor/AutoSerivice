"use strict";
let rightBtn=document.querySelector(".fa-angles-right")
let leftBtn=document.querySelector(".fa-angles-left")
let carousel=document.querySelector(".carousel")
let servicesText=document.querySelector(".services-text")

let menu=document.querySelector(".menu")
let socialMedia=document.querySelector(".social-media")
let MiniMenu=document.querySelector(".mini-menu")
let menuBtn=document.querySelector(".menuBtn")
let faBars=document.querySelector(".fa-bars")
let faXmark=document.querySelector(".fa-xmark")
let weekDay=document.querySelector("weekDay")

let time=document.querySelector(".time")

let d=new Date()
let year=d.getFullYear()
let dayEng=["Monday", "Tuesday", "Wednesday", "Thursday"," Friday", "Saturday"," Sunday"]
let dayText=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
let month=d.getMonth()+1
let monthInfo=month<10? "0"+month:month
let date=d.getDate()
let dateInfo=date<10? "0"+date:date
let day=d.getDay()

let card=document.querySelector(".card")
let city

let allLang=["ru","en"]
let select=document.querySelector(".lang-site")

setInterval(function(){
    time.innerHTML=dateInfo+":"+monthInfo+":"+year+"   "
},1000)
const apiKey="a1011ac3d9a44bdb982170633243001"

city="Дилижан";
    const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        card.innerHTML=`
        <strong>${data.current.temp_c}<sup>o</sup>C</strong>
        <img src="https:${data.current.condition.icon}" alt="wether" style="float:right">
        <p class="card-description">${data.current.condition.text}</p>  `
    })
    let langArr={
        "logo":{
            "ru":"АВТОСЕРВИС",
            "en":"AUTOSERVICE"
        },
        "diagnostic-header":{
            "ru":"О НАС",
            "en":"ABOUT US"
        },
        "services-brakeDiscs":{
            "ru":"УСЛУГИ",
            "en":"SERVICES"
        },
        "advantages":{
            "ru":"ПРЕИМУЩЕСТВА",
            "en":"ADVANTAGES"
        },
        "when-break":{
            "ru":"УКАЗАНИЯ",
            "en":"INSTRUCTIONS"
        },
        "diagnostic":{
            "ru":"Диагностика автомобилей",
            "en":"Cars diagnostic"
        },
        "diagnostic1":{
            "ru":"Большинство критических неисправностей по системам ABS, ESP, BAS, ABR или SBC вызывают соответствующую индикацию на приборной панели.",
            "en":"Most of critical faults in the ABS, ESP, BAS, ABR or SBC systems cause a corresponding indication on the dashboard."
        },
        "diagnostic2":{
            "ru":"Загоревшаяся лампочка Check Engine на приборной панели",
            "en":"Check Engine light on the dashboard"
        },
        "diagnostic3":{
            "ru":"Неровная работа мотора, шум и вибрации из-под капота",
            "en":"Rough engine operation, noise and vibrations from under the hood"
        },
        "diagnostic4":{
            "ru":"Рывки при переключении передач",
            "en":"Jerks during shifting transmission"
        },
        "diagnostic5":{
            "ru":"Густой дым из выхлопной трубы в теплую погоду",
            "en":"Thick smoke from the exhaust pipe in warm weather"
        },
        "diagnostic6":{
            "ru":"Перегрев двигателя",
            "en":"Engine overheating"
        },
        "diagnostic7":{
            "ru":"Быстрая разрядка аккумулятора",
            "en":"Battery drains quickly"
        },
        "brakeDiscs":{
            "ru":"Проточка тормозных дисков обычно включает в себя следующие шаги",
            "en":"Grinding brake discs usually involves the following steps:"
        },
        "text1":{
            "ru":"1.Демонтаж дисков: Снимите тормозные диски с автомобиля.",
            "en":"1. Removing discs: Remove the brake discs from the vehicle."
        },
        "text2":{
            "ru":"2.Оценка состояния: Оцените степень износа и толщину дисков. Проверьте наличие трещин или иных повреждений.",
            "en":"2. Condition assessment: Assess the degree of wear and thickness of the discs. Check for cracks or other damage."
        },
        "text3":{
            "ru":"3.Проточка: Используйте специальное оборудование для обработки поверхности дисков. Это восстанавливает ровность и равномерность тормозного воздействия.",
            "en":"3. Grooving: Use special equipment to process the surface of the discs. This restores the smoothness and uniformity of the braking effect."
        },
        "text4":{
            "ru":"4.Очистка: Тщательно очистите диски от стружки и пыли после проточки.",
            "en":"4. Cleaning: Thoroughly clean the discs from chips and dust after grooving."
        },
        "text5":{
            "ru":"5.	Монтаж: Установите отремонтированные диски обратно на автомобиль.",
            "en":"5. Installation: Install the repaired wheels back onto the car."
        },
        "when":{
            "ru":"ВИБРАЦИИ",
            "en":"VIBRATIONS"
        },
        "when-item-1":{
            "ru":"НА РУЛЕ И ПЕДАЛИ  ТОРМОЗАНА РУЛЕ  ",
            "en":"ON THE STEERING WHEEL AND PEDALS BRAKES  "
        },
        "when2":{
            "ru":"ПРИ ЗАМЕНЕ",
            "en":"DURING REPLACING"
        },
        "when-item-2":{
            "ru":"ТОРМОЗНЫХ  КОЛОДОК",
            "en":"BRAKE PADS"
        },
        "when3":{
            "ru":"РЖАВЧИНА",
            "en":"RUST"
        },
        "when-item-3":{
            "ru":"НА ТОРМОЗНОМ ДИСКЕ",
            "en":"ON THE BRAKE DISC"
        },
        "when4":{
            "ru":"ПРИ ПЕРЕГРЕВЕ",
            "en":"IN OVERHEATING"
        },
        "when-item-4":{
            "ru":"ТОРМОЗНЫХ ДИСКОВ",
            "en":"BRAKE DISCS"
        },
        "when5":{
            "ru":"ПОЯВИЛИСЬ БОРОЗДЫ",
            "en":"FROWS HAVE APPEARED"
        },
        "when-item-5":{
            "ru":"НА ТОРМОЗНОМ ДИСКЕ",
            "en":"ON THE BRAKE DISC"
        },
        "when6":{
            "ru":"НАЛИЧИЕ ФАСКИ",
            "en":"PRESENCE OF CHAMMER"
        },
        "when6":{
            "ru":"НАЛИЧИЕ ФАСКИ",
            "en":"PRESENCE OF CHAMMER"
        },
        "when-item-6":{
            "ru":"НА ТОРМОЗНЫХ ДИСКАХ",
            "en":"ON BRAKE DISCS"
        },
        "when7":{
            "ru":"МАШИНА ДОЛГО СТОЯЛА",
            "en":"THE CAR STANDED FOR A LONG TIME"
        },
        "when-item-7":{
            "ru":"ЗАРЖАВЕЛИ ТОРМОЗНЫЕ ДИСКИ",
            "en":"BRAKE DISCS RUSTED"
        },
        "advantages-header":{
            "ru":"ПРЕИМУЩЕСТВА нашего сервиса проточки",
            "en":"ADVANTAGES of our grooving service"
        },
        "advantages-header1":{
            "ru":"Этот процесс обработки поверхности дисков для удаления износа и восстановления равномерности тормозного воздействия.Оно улучшит эффективность тормозной системы и увеличит срок службы дисков.",
            "en":"This process treats the surface of the discs to remove wear and restore uniform braking action. It will improve the performance of the braking system and increase the life of the discs."
        },
        "advantages-header2":{
            "ru":"Наш специалист проходит стажировку по методам проточки тормозных дисков и регулярно повышет свою квалификацию. За его плечой большой опыт работы с различными моделями автомобилей!",
            "en":"Our specialist undergoes training in methods of turning brake discs and regularly improves his skills. He has a lot of experience working with various car models!"
        },
        "advantages-header3":{
            "ru":"В своей работе мы применяем самые современные станки для проточки от ведущих мировых производителей. Что гарантирует проточку Ваших тормозных дисков с 99% точностью!",
            "en":"In our work we use the most modern grooving machines from the world's leading manufacturers. This guarantees the cutting of your brake discs with 99% accuracy! In our work, we use the most modern cutting machines from the world's leading manufacturers. Which guarantees the cutting of your brake discs with 99% accuracy!"
        },
        "advantages-header4":{
            "ru":"Проточка обеспечивает долгий срок службы тормозных колодок и эффективное торможение на короткой дистанции, что повышает безопасность и управляемость в процессе остановки.",
            "en":"Grooving ensures long brake pad life and effective short-range braking, which improves safety and control when stopping."
        },
        "footer-about":{
            "ru":"О НАС",
            "en":"ABOUT US"
        },
        "footer-services":{
            "ru":"УСЛУГИ",
            "en":"SERVICES"
        },
        "footer-advantages":{
            "ru":"ПРЕИМУЩЕСТВА",
            "en":"ADVANTAGES"
        },
        "footer-break":{
            "ru":"УКАЗАНИЯ",
            "en":"INSTRUCTIONS"
        },
        "city":{
            "ru":"Дилижан",
            "en":"Dilijan"
        },
        "country":{
            "ru":"Армения",
            "en":"Armenia"
        },
        "time":{
            "ru":["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
            "en":["Monday", "Tuesday", "Wednesday", "Thursday"," Friday", "Saturday"," Sunday"]
        }
    
    
    }
   
    select.addEventListener("change",function(){
        let lang=select.value
        console.log(lang)
        location.href=window.location.pathname+"#"+lang
        console.log(window.location)
        
    })
    function changeLang(){
        let hash=window.location.hash;
        console.log(hash)
        hash=hash.slice(1)
        console.log(hash)
        if(!allLang.includes(hash)){
            location.href=window.location.pathname+"#ru"
        }
        window.onhashchange=function(){
            location.reload()
        }
        select.value=hash;
        for(let key in langArr){
           
            let elem=document.querySelector(`[data-lang=${key}]`)
            console.log(elem)
            if(elem){
                if(key=="time"){
                    elem.innerHTML=langArr[key][hash][day]
                    
                }else{
                    elem.innerHTML=langArr[key][hash]

                }    
            }
        }
    }
    changeLang()
let showMenu
menuBtn.addEventListener("click",function(){
    MiniMenu.classList.toggle("showMenu");
    socialMedia.classList.toggle("showMenu")
    faXmark.classList.toggle("showMenu");
    faBars.classList.toggle("hidden")
})

rightBtn.addEventListener("click",function(){
    let left
    
    if(carousel.getBoundingClientRect().right<document.documentElement.clientWidth){
        left=carousel.getBoundingClientRect().left
       
    }else{
        left=carousel.getBoundingClientRect().left-servicesText.offsetWidth-160;
    }
   
    console.log(left)

    carousel.style.transform=`translate(${left}px)`
})
leftBtn.addEventListener("click",function(){
    let right
   if(carousel.getBoundingClientRect().left<0){
    right=carousel.getBoundingClientRect().left+servicesText.offsetWidth+160;
   }else{
    right=0
   }
   
   carousel.style.transform=`translate(${right}px)`
})

document.body.onload=function(){
    setTimeout(function(){
        let preloader=document.querySelector(".preloader")
        preloader.classList.add("hidden")

    },1000)
   
}