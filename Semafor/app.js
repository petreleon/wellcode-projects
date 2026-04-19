function classToggler(element) {
    element.classList.toggle('btn-success');
    element.classList.toggle('btn-danger');
}

function classTogglerRepeated() {
    setTimeout(classTogglerRepeated, 10000);
    element = document.getElementById("el1");
    classToggler(element);
}

setTimeout(classTogglerRepeated, 10000)
