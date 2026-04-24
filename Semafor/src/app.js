const semafor = {
    actual_color: 'red',
    nextColor: {
        red: 'yellow',
        yellow: 'green',
        green: 'red'
    },
    classMap: {
        red: 'btn-danger',
        yellow: 'btn-warning',
        green: 'btn-success'
    },
    classToggler: function(element) {
        element.classList.remove(this.classMap[this.actual_color]);
        this.actual_color = this.nextColor[this.actual_color];
        element.classList.add(this.classMap[this.actual_color]);
    }
};

function classTogglerRepeated() {
    setTimeout(classTogglerRepeated, 10000);
    const element = document.getElementById("el1");
    semafor.classToggler(element);
}

setTimeout(classTogglerRepeated, 10000)
