

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    let valid = true;

    // Validar el nombre
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        alert('El nombre es obligatorio.');
        valid = false;
    }

    // Validar el asunto de contacto
    const reason = document.getElementById('reason');
    if (reason.value.trim() === '') {
        alert('El asunto de contacto es obligatorio.');
        valid = false;
    }

    // Validar el correo electrónico
    const email = document.getElementById('email');
    if (email.validity.valueMissing) {
        alert('El correo electrónico es obligatorio.');
        valid = false;
    } else if (email.validity.typeMismatch) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        valid = false;
    }

    // Si alguna validación falla, prevenimos el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});

