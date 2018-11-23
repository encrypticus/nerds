(function () {

    var sliderButtons = APPNerds.buttons.slider,// кнопки слайдера
        length = sliderButtons.length,// количество всех кнопок слайдера
        writeUsButton = APPNerds.buttons.writeUs,// кнопка "напишите нам"
        closeFormButton = APPNerds.buttons.modalClose,// кнопка закрытия формы обратной связи
        buttonsObj = APPNerds.buttons,// объект кнопок
        sliderWrapper = document.querySelector('.main-page__inner-slider-wrapper'),//блок-обертка слайдера
        contactForm = APPNerds.form// объект формы обратной связи

    Array.prototype.forEach.call(sliderButtons, function (button, i) {
        var marginLeft = -1160 * i;

        button.addEventListener('click', function () {

            for (var j = 0; j < length; j++) {
                sliderButtons[j].classList.remove('slider-control-buttons__button--active')
            }

            this.classList.add('slider-control-buttons__button--active');
            sliderWrapper.style.marginLeft = marginLeft + "px";

        }, false);
/*
        button.addEventListener('focus', function () {

            for (var j = 0; j < length; j++) {
                sliderButtons[j].classList.remove('button-active');
            }

            this.classList.add('button-active');
            sliderWrapper.style.marginLeft = marginLeft + "px";

        }, false);*/
    });

    /** Цикл по всем кнопкам слайдера */
    /*for (var i = 0; i < length; i++) {

        /!**  Клик по кнопке слайдера *!/
        /!*sliderButtons[i].onclick = function (x) {
            return function () {
                console.log(x);
            }
        }(i)*!/
        sliderButtons[i].addEventListener('click', function (event, x) {
            for (var j = 0; j < length; j++) {
                if (sliderButtons[j].classList.contains('button-active')) {
                    sliderButtons[j].classList.remove('button-active');
                }
            }
            this.classList.add('button-active');

        }, false);

        /!** Фокус на кнопке слайдера *!/
        sliderButtons[i].addEventListener('focus', function (event) {
            for (var j = 0; j < length; j++) {
                if (sliderButtons[j].classList.contains('button-active')) {
                    sliderButtons[j].classList.remove('button-active');
                }
            }
            this.classList.add('button-active');
        }, false);

    }*/

    /** Клик по кнопке "напишите нам" */
    writeUsButton.addEventListener('click', function (event) {
        event.preventDefault();
        contactForm.show();
        // overlay.classList.add('modal-show');
    }, false);

    /** Клик по кнопке закрытия формы */
    closeFormButton.addEventListener('click', function (event) {
        event.preventDefault();
        buttonsObj.closeForm();
    }, false);

    /** Нажатие на клавишу ESC */
    addEventListener('keydown', function (event) {

        if (event.keyCode == 27 && contactForm.isShown()) {
            event.preventDefault();
            buttonsObj.closeForm();
        }

    }, false);

}());


