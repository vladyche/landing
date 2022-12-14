import { ev } from "./webapi/dom";
import { el } from "./webapi/dom";

ev(el('.scroll-to-top > .btn'), 'click', scrollToTop);
ev(window, 'scroll', scrollToTopButtonVisible);

function scrollToTop() {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    // window.scrollTo(0, 0);
    window.scroll(0, 0);
}

function scrollToTopButtonVisible() {
    if (window.pageYOffset > 500) {
        scrollToTopButtonVisibleOn();
    } else {
        scrollToTopButtonVisibleDown();
    }
}

function scrollToTopButtonVisibleOn() {
    el('.scroll-to-top').classList.add('visible');
}

function scrollToTopButtonVisibleDown() {
    el('.scroll-to-top').classList.remove('visible');
}
