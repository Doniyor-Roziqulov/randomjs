const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
const smallBox = document.querySelector(".small-box");

const TEL_NUMBERS = [
    "+998 94 286 04 22",
    "+998 94 009 06 03",
    "+998 97 192 65 89",
    "+998 91 256 18 94",
    "+998 94 456 98 77",
    "+998 95 982 64 94",
    "+998 97 845 95 35",
];

btn.addEventListener("click", () => {
    btn.setAttribute("disabled", true);
    let inteval = setInterval(() => {
        let index = Math.floor(Math.random() * TEL_NUMBERS.length);
        title.textContent = TEL_NUMBERS[index];
        smallBox.style.backgroundColor = "bisque";
        smallBox.style.boxShadow = "5px 5px 10px 10px bisque";
    }, 50);
    setTimeout(() => {
        clearInterval(inteval);
        btn.removeAttribute("disabled");
        smallBox.style.backgroundColor = "aqua";
        smallBox.style.boxShadow = "5px 5px 10px 10px aqua";
    }, 2500);
});
