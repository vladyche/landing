export function ev(obj, event, fn) {
    if (obj != null) {
        obj.addEventListener(event, fn);
    }
}

export function el(selector) {
    return document.querySelector(selector);
}