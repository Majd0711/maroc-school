const validateForm = () => {
    const formElements = {
        nom: document.getElementById('nom').value.trim(),
        prenom: document.getElementById('prenom').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    if (Object.values(formElements).some(value => !value)) {
        alert('Tous les champs sont obligatoires');
        return false;
    }

    // Email validation
    const email = formElements.email;

    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
        alert('Veuillez entrer une adresse email valide');
        return false;
    }
    return true;
}