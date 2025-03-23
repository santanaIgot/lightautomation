document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    console.log(contactForm);
    const formMessage =  document.getElementById("formMessage")
    console.log(formMessage);

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); //evita o carregamento da página 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === '' || email === '' || message ===  ''){
            alert("por favo, preencha todos os campos")
            return;
        }

        console.log("Enviando os dados:", { name, email, message });

        setTimeout(() => {
            formMessage.classList.add("d-none");
            contactForm.reset()
        })
    })
})

