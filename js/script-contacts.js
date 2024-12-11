"use strict"

document.addEventListener('DOMContentLoaded', function () {

    // section contacts
    // inputmask and validate
    const phone = document.getElementById('phone');
    const imPhone = new Inputmask('+38(999)999-99-99');

    imPhone.mask(phone);

    const validator = new JustValidate('.contacts__form', {
        errorLabelCssClass: 'contacts__input-error',
        errorLabelStyle: {
            // color: '#E53939',
            color: '#f5f5f5',
        },
    });

    validator.addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Вкажіть ваше ім`я',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Не менше 2х символів',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Не більше 30 символів',
        }
    ]);
    
    validator.addField('#phone', [
        {
            rule: 'required',
            errorMessage: 'Вкажіть номер телефону',
        },
        {
            validator: value => {
                const number = phone.inputmask.unmaskedvalue();
                return number.length === 10;
            },
            errorMessage: 'Неправильний номер телефону',
        }
    ]);

    // validator.onSuccess((event) => {
    //     const form = event.currentTarget;

    //     const popupThx = document.querySelector('.popup__thx');
    //     const popupThxText = document.querySelector('.popup__thx-text');
    
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: form.title.value,
    //             name: form.name.value,
    //             phone: form.phone.value,
    //             company: form.company.value,
    //             email: form.email.value,
    //             textarea: form.textarea.value
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             form.reset();
    //             // alert(`Спасибо, мы перезвоним вам в течении 10 минут. Ваша заявка № ${data.id}`);
    //             popupThx.classList.add('active');
    //             popupThxText.textContent = `Ваша заявка № ${data.id}`;
        
    //             scrollController.disabledScroll();
    //         });

    //     setTimeout(function () {
    //         popupThx.classList.remove('active');
    //         scrollController.enabledScroll();
    //     }, 5000);
    // });

});