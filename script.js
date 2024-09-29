setTimeout(function(){
    Toastify({
        text: "Olá, Seja Bem Vindo!",
        duration: 3500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00A8FF, #FF0000)",
        },
    }).showToast();
},400);