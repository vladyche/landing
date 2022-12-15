export function ev(element, event, fn) {
    if (element != null) {
        element.addEventListener(event, fn);
    }
}

export function evs(elements, event, fn) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, fn);
    }
}

export function el(selector) {
    return document.querySelector(selector);
}

export function els(selector) {
    return document.querySelectorAll(selector);
}