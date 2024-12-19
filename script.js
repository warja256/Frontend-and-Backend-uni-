document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const btns = document.querySelectorAll('.btn');
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const serviceTypeInput = document.getElementById("serviceType");

    btns.forEach(btn => {
        btn.onclick = function() {
            const serviceType = btn.getAttribute('data-service');
            serviceTypeInput.value = serviceType;
            modal.style.display = "flex"; 
            console.log(serviceType); 
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault(); 
        successMessage.style.display = "block"; 
        form.reset(); 
    }
});
