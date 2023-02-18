'use strict';

/*
    Достаточно того, чтобы каждый метод возвращал сам объект (this).
*/
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step)
        return this;
    }, 
};


ladder.up().up().showStep().down().showStep();