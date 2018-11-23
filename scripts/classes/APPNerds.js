/**
 * Главный класс приложения
 */
var APPNerds = (function (APP) {

    /** Объект кнопок страницы */
    APP.buttons = {
        all: document.querySelectorAll('.button'),//все кнопки
        slider: document.querySelectorAll('.slider-control-buttons__button'),//кнопки в слайдере
        writeUs: document.querySelector('.contact-us__button'),//кнопка "напишите нам"
        modalClose: document.querySelector('.modal__button-close'), //кнопка закрытия формы обратной связи
        length: document.querySelectorAll('.button').length, // количество всех кнопок на странице

        /** Закрывает форму обратной связи */
        closeForm: function () {
            APP.form.writeUsForm.classList.remove('anim-show');
            APP.form.writeUsForm.classList.add('anim-hide');
            APP.form.writeUsForm.addEventListener('animationend', APP.form.hide, false);
        }
    },
        APP.overlay = document.querySelector('.overlay'),// фон-подложка

        /** Объект абстрактной формы */
        APP.form = {
            /** Форма обратной связи */
            writeUsForm: document.querySelector('.modal--form'),

            /** Скрывает форму обратой связи */
            hide: function () {
                APP.form.writeUsForm.classList.remove('modal-show');
                APP.form.writeUsForm.classList.add('modal-hide');
            },

            /** Показывает форму обратной связи */
            show: function () {
                this.writeUsForm.classList.remove('modal-hide');
                this.writeUsForm.classList.remove('anim-hide');

                this.writeUsForm.classList.add('modal-show');
                this.writeUsForm.classList.add('anim-show');

                this.writeUsForm.removeEventListener('animationend', APP.form.hide);
            },

            isShown: function () {
                return this.writeUsForm.classList.contains('modal-show');
            }
        }/*,

        APP.writeUsForm = document.querySelector('.modal-write-us'),// Форма обратной связи


        /!** Скрывает форму обратной связи *!/
        APP.hide = function () {
            APP.writeUsForm.classList.remove('modal-show');
            APP.writeUsForm.classList.add('modal-hide');
        }*/

    return APP;

}(APPNerds || {}));