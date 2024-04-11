const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });

});
const hiddenElments = document.querySelectorAll('.Hidden');
hiddenElments.forEach((el) => observer.observe(el));



const scroller = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('endScroll');
        } else {
            entry.target.classList.remove('endScroll');
        }
    });
});

const scrollElements = document.querySelectorAll('.scrolling');
scrollElements.forEach((el) => scroller.observe(el));


const leftScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollLeft');
        } else {
            entry.target.classList.remove('scrollLeft');
        }
    });
});

const scrollLeftEl = document.querySelectorAll('.left_scoll');
scrollLeftEl.forEach((el) => leftScroll.observe(el));

const rightScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('scrollRight');
        } else {
            entry.target.classList.remove('scrollRight');
        }
    });
});

const scrollRightel = document.querySelectorAll('.right_scroll');
scrollRightel.forEach((el) => rightScroll.observe(el));


const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-x'
    : 'fa-solid fa-burger'
}