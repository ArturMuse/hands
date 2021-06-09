"use strict";

//Help
var helpValidation = function helpValidation() {
    var helpFields = document.querySelectorAll(".help-fields");
    var helpBtn = document.querySelector(".help__form-btn");
    var helpSuccess = document.querySelector(".help__success");
    helpBtn.addEventListener("click", function () {
        var helpCheck = 0;
        for (var i = 0; i < helpFields.length; i++) {
            if (helpFields[i].value !== "") {
                helpFields[i].classList.remove("help-fields-error");
                helpCheck++;
            } else {
                helpFields[i].classList.add("help-fields-error");
                helpCheck--;
            }
        }
        if (helpCheck === 3) {
            helpSuccess.classList.add("help__success-on");
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }
    });
};
helpValidation();

//CallBackForm
var callValidation = function callValidation() {
    var callFields = document.querySelectorAll(".call-fields");
    var callBtn = document.querySelector(".call__form-btn");
    var callSuccess = document.querySelector(".call__success");
    callBtn.addEventListener("click", function () {
        var callCheck = 0;
        for (var i = 0; i < callFields.length; i++) {
            if (callFields[i].value !== "") {
                callFields[i].classList.remove("call-fields-error");
                callCheck++;
            } else {
                callFields[i].classList.add("call-fields-error");
                callCheck--;
            }
        }
        if (callCheck === 3) {
            callSuccess.classList.add("call__success-on");
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }
    });
};
callValidation();
var callShow = function callShow() {
    var callBtnShow = document.querySelector(".header__btn-call");
    var callBtnHide = document.querySelector(".call__btn-close");
    var callBack = document.querySelector(".call");

    callBtnShow.addEventListener("click", function () {
        callBack.classList.add("call-show");
    });
    callBtnHide.addEventListener("click", function () {
        callBack.classList.remove("call-show");
    });
};
callShow();

//News
var news = function news() {
    var newsPopup = document.querySelector(".popup-news");
    var newsPage = document.querySelectorAll(".about__slider-item");
    var newsExit = document.querySelector(".popup-news__btn-close");

    for (var i = 0; i < newsPage.length; i++) {
        newsPage[i].addEventListener("click", function () {
            newsPopup.classList.add("popup-news-on");
        });
    }
    newsExit.addEventListener("click", function () {
        newsPopup.classList.remove("popup-news-on");
    });
};
news();

//Projects
var projects = function projects() {
    var projectsPopup = document.querySelector(".popup-projects");
    var projectsPage = document.querySelectorAll(".projects__slider-item");
    var projectsExit = document.querySelector(".popup-projects__btn-close");

    for (var i = 0; i < projectsPage.length; i++) {
        projectsPage[i].addEventListener("click", function () {
            projectsPopup.classList.add("popup-projects-on");
        });
    }
    projectsExit.addEventListener("click", function () {
        projectsPopup.classList.remove("popup-projects-on");
    });
};
projects();

window.onscroll = function () {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
};
var mobHeader = function mobHeader() {
    var headerNav = document.querySelector(".header__nav");
    var headerNavBtnOpen = document.querySelector(".header__btn-menu");
    var headerNavBtnClose = document.querySelector(".header__nav-exit");
    var headerNavItem = document.querySelectorAll(".header__nav-list-item-a");

    window.onload = function () {
        if (window.innerWidth < 985) {
            headerNavBtnOpen.addEventListener("click", function () {
                headerNav.classList.add("header__nav-on");
            });
            headerNavBtnClose.addEventListener("click", function () {
                headerNav.classList.remove("header__nav-on");
            });

            for (var i = 0; i < headerNavItem.length; i++) {
                headerNavItem[i].addEventListener("click", function () {
                    headerNav.classList.remove("header__nav-on");
                });
            }
        }
    };
};
mobHeader();