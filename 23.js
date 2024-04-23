let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; // повертає об'єкт ladder для ланцюжкового виклику
    },
    down: function() {
        this.step--;
        return this; // повертає об'єкт ladder для ланцюжкового виклику
    },
    showStep: function() {
        alert(this.step);
        return this; // повертає об'єкт ladder для ланцюжкового виклику
    }
};
ladder.up().up().down().showStep(); // 1