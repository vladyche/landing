import { ev } from "./webapi/dom";
import { els } from "./webapi/dom";

// scroll indications
const scrollIndications = (data) => {

    //window scroll size + offset
    let scroll = windowScroll();

    for (let i = 0; i < data.length; i++) {
        if ((scroll > data[i].start) && (scroll < data[i].end)) {
            addDesktopMenuActive(desktopMenuItems(), i);
            addMobileMenuActive(mobileMenuItems(), i);
            changeUrl(data[i].link);
            return;
        }
    }
}

function windowScroll() {
    const topOffset = 100;
    return window.scrollY + topOffset;
}

function addDesktopMenuActive(elements, element) {
    elements[element].classList.add('active');

    (function clean() {
        for (let i = 0; i < elements.length; i++) {
            if (element != i) {
                elements[i].classList.remove('active');
            }
        }
    })();
}

function addMobileMenuActive(elements, element) {
    elements[element].classList.add('m-active');

    (function clean() {
        for (let i = 0; i < elements.length; i++) {
            if (element != i) {
                elements[i].classList.remove('m-active');
            }
        }
    })();
}

function changeUrl(link) {
    window.history.pushState({}, null, link);
}

function desktopMenuItems() {
    return els('.main-menu > .item');
}

function mobileMenuItems() {
    return els('.mobile-menu > .item');
}
// end scroll indications

// links
const navigationLinks = (data) => {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        obj.link = getLinkHref(i);
        arr.push(obj);
    }

    return arr;
};

function getLinkHref(element) {
    const links = menuLinks();
    return links[element].getAttribute("href");
}

function menuLinks() {
    return els('.main-menu > .item a');
}
// end links

const sectionStartPosition = (data) => {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        obj.start = obj.end - obj.height;
        arr.push(obj);
    }

    return arr;
};

const sectionEndPosition = (data) => {
    let endPosition = 0;
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        endPosition += obj.height;
        obj.end = endPosition;
        arr.push(obj);
    }

    return arr;
};

const sectionsHeight = (sections) => {
    let arr = [];

    for (let i = 0; i < sections.length; i++) {
        let obj = {};
        obj.height = sections[i].clientHeight;
        arr.push(obj);
    }

    return arr;
};

// compose
const compose = (a, b, c, d, e) => (sections) => a(b(c(d(e(sections)))));

const menuScrollIndication = compose(
    scrollIndications,
    navigationLinks,
    sectionStartPosition,
    sectionEndPosition,
    sectionsHeight
);
// end compose

// menu scroll indications
function lendingSections() {
    return els('.sections > .section');
}

menuScrollIndication(lendingSections());
// end menu scroll indications

ev(window, 'scroll', function () {
    menuScrollIndication(lendingSections());
});

