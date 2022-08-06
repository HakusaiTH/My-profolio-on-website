let img_1 = document.getElementById('img_1');
let img_2 = document.getElementById('img_2');
let img_3 = document.getElementById('img_3');
let img_4 = document.getElementById('img_4');
let img_5 = document.getElementById('img_5');
let img_6 = document.getElementById('img_6');
let img_7 = document.getElementById('img_7');
let img_8 = document.getElementById('img_8');
let img_9 = document.getElementById('img_9');

let popup_img = document.getElementById('popup_img');

const com_img = {
    c_1:('/img/certificate (1).png'),
    c_2:('/img/Screenshot (1).png'),
    c_3:('/img/Screenshot 2022-08-03 193214.png')
}

const go_img = {
    g_1:('/img/นายภูวเดช สินสำอางค์-1.png'),
    g_2:('/img/ใบประกาศผู้เข้าร่วมการแข่งขันพูดเพื่ออาชีพ-1.png'),
    g_3:('/img/Screenshot (10).png')
}

const popup_head = document.getElementById('popup_head');
const popup_text = document.getElementById('popup_text');

let time = document.getElementById('time');

function com() {
    img_1.addEventListener('click',()=>{
        popup.style.display = "flex";
        popup_img.src = com_img.c_1;
        popup_head.innerHTML = "Devlab";
        popup_text.innerHTML = "เขียนโปรแกรมตอบโจทย์ปัญหาครบ 20ข้อจาก devlab";
        time.innerText = "18/03/2022";
    })

    img_2.addEventListener('click',()=>{
        popup.style.display = "flex";
        popup_img.src = com_img.c_2;
        popup_head.innerHTML = "โปรเเกรมเเปลงหน่วย";
        popup_text.innerHTML = "BMI, อุณหภุมิ, หาค่าความยาว";
        time.innerText = "03/04/2022";
    })

    img_3.addEventListener('click',()=>{
        popup.style.display = "flex";
        popup_img.src = com_img.c_3;
        popup_head.innerHTML = "เครื่องคิดเลข microbit";
        popup_text.innerHTML = "เครื่องคิดเลขเขียนโปรแกรมจาก microbit";
        time.innerText = "13/03/2022";
    })
}

function go() {
    img_1.addEventListener('click',()=>{
        popup.style.display = "flex";
        popup_img.src = go_img.g_1;
        popup_head.innerHTML = "ประลองคันจิ";
        popup_text.innerHTML = "เข้าร่วมการปะลองคันจิ มหาวิทยาลัยราชมงคล";
        time.innerText = "08/07/2022";
    })

    img_2.addEventListener('click',()=>{
        popup.style.display = "flex";
        popup_img.src = go_img.g_2;
        popup_head.innerHTML = "พูดเพื่อชีวิต";
        popup_text.innerHTML = "เข้าร่วมการงานประกวดพูดเพื่อชีวิตภาษาญี่ปุ่น มหาวิทยาลัยราชฎษศรีศะเกษ";
        time.innerText = "08/07/2022";
    })

    img_3.addEventListener('click',()=>{
        popup.style.display = "flex";
        popup_img.src = go_img.g_3;
        popup_head.innerHTML = "เนะนำหนังสือ";
        popup_text.innerHTML = "เข้าร่วมงานประกวด แนะนำหนังสือภาษาญี่ปุ่น";
        time.innerText = "21/07/2022";
    })
}

const btn_com = document.getElementById('com');
const btn_go = document.getElementById('go');

btn_com.addEventListener('click',()=>{
    img_1.src = com_img.c_1;
    img_2.src = com_img.c_2;
    img_3.src = com_img.c_3;
    com()
})
btn_go.addEventListener('click',()=>{
    img_1.src = go_img.g_1;
    img_2.src = go_img.g_2;
    img_3.src = go_img.g_3;
    go()
})

const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

close.addEventListener('click',()=>{
    popup.style.display = "none" ;
    console.log('close');
})

com()
