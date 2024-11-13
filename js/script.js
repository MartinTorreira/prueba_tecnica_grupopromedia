document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const privacyPolicy = document.getElementById('privacyPolicy').checked;

    // Limpiar los mensajes de error previos
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('subjectError').style.display = 'none';

    let valid = true;

    // Validación de teléfono (9 números)
    const phonePattern = /^\d{9}$/; 
    if (phone && !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'El teléfono debe tener 9 dígitos';
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    // Validación de asunto (Ahora es opcional)
    if (subject && subject.trim() === "") {
        document.getElementById('subjectError').textContent = 'El asunto no puede estar vacío si se proporciona.';
        document.getElementById('subjectError').style.display = 'block';
        valid = false;
    }

    // Validar campos obligatorios
    if (!name || !email || !message || !privacyPolicy) {
        alert('Por favor, rellena todos los campos obligatorios y acepta la política de privacidad.');
        valid = false;
    }

    if (!valid) return;

    const formData = new FormData(this);

    fetch('http://localhost/php/submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const statusMessage = document.getElementById('statusMessage');
        if (data.success) {
            statusMessage.textContent = 'El formulario se ha enviado con éxito.';
            statusMessage.style.color = 'green';
        } else {
            statusMessage.textContent = 'Hubo un error al enviar el formulario.';
            statusMessage.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

