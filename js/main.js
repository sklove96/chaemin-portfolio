// 메뉴 활성화
const menus = document.querySelectorAll(".menu > li > a")
const nav = document.querySelector(".menu")
const sections = document.querySelectorAll(".section-flag");

// 스크롤 시 내비게이션에 배경 생기도록
window.addEventListener("scroll", function(){
    nav.classList.toggle("menu_fixed",window.scrollY > 0);
})

// 스크롤 위치에 따라 섹션에 애니메이션 넣어주기
window.addEventListener("scroll", ()=> {
    let current="";
    
    sections.forEach(section => {
        const sectionTop = window.pageYOffset + section.getBoundingClientRect().top
        const sectionHeight = section.clientHeight;
        // var height = document.body.clientHeight - (window.scrollY + window.innerHeight)
        
        if(window.pageYOffset >= sectionTop - sectionHeight/4) {
            current = section.getAttribute("id");
        }

        // profile에 스크롤 왔을 때
        if(current=="profile"){
            const profile_box = document.querySelector(".profile-column-wrap");
            profile_box.classList.add("slide-right");
        }
        
        // work에 스크롤 왔을 때
        if(current=="works"){
            const boxes = document.querySelectorAll(".box_work")
            boxes.forEach(box => {
                const boxTop = window.pageYOffset + box.getBoundingClientRect().top;
                const boxHeight = box.clientHeight;
                if(window.pageYOffset >= boxTop - boxHeight*1.5) {
                    box.classList.add("slide-in-right");
                }
            })

            // menu on 비활성화 후 현재 메뉴 class on
            // let menu_off = document.querySelectorAll(".menu_btn");
            // if(menu_off.className.includes("on")) {
            //     menu_off.classList.remove("on");
            // }
            // let menu_on = document.querySelector(".works_menu");
            // menu_on.classList.add("on");
        }
        
        // about에 스크롤 왔을 때
        if(current=="about"){
            const profile_box = document.querySelector(".about-column-wrap");
            profile_box.classList.add("about_fade_in");
        }

        // about에 스크롤 왔을 때
        if(current=="contact"){
            const profile_box = document.querySelector(".contact-column");
            profile_box.classList.add("contact_fade_in");
        }
    })

})
