import { ev } from './webapi/dom';
import { el } from './webapi/dom';

ev(window, 'scroll', headerScrollAction);

function headerScrollAction() {
    if (window.pageYOffset > 50) {
        el('.header').classList.add('scroll');
    } else {
        el('.header').classList.remove('scroll');
    }
}

