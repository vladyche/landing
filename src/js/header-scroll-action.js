import { ev } from './webapi/dom';
import { el } from './webapi/dom';

ev(window, 'scroll', headerScrollAction);

function headerScrollAction() {
    if (window.scrollY > 50) {
        el('.website').classList.add('scroll');
    } else {
        el('.website').classList.remove('scroll');
    }
}

