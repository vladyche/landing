import { ev } from './webapi/dom';
import { el } from './webapi/dom';
import { els } from './webapi/dom';
import { evs } from './webapi/dom';

ev(el('.mobile-nav-btn > .btn'), 'click', mobileModalOpen);
ev(el('.mobile-menu-close > .btn'), 'click', mobileModalClose);
evs(els('.mobile-menu > .item > .link'), 'click', mobileMenuLink);

function mobileModalOpen() {
    const website = el('.website');

    website.classList.add('open');

    el('body').classList.remove('on-scroll');
    el('.body').classList.add('no-scroll');

    setTimeout(show, 100);

    function show() {
        website.classList.add('show');
    }
}

function mobileModalClose() {
    const website = el('.website');

    website.classList.remove('show');

    el('body').classList.add('on-scroll');
    el('.body').classList.remove('no-scroll');

    setTimeout(close, 900);

    function close() {
        website.classList.remove('open');
    }
}

function mobileMenuLink() {
    mobileModalClose();
}