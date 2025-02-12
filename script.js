// <!-- JavaScript for Form Validation -->
    
        document.getElementById("leadForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            ["name", "email", "phone", "country"].forEach(id => {
                const input = document.getElementById(id);
                const error = document.getElementById(id + "Error");
                if (!input.value.trim()) {
                    error.classList.remove("hidden");
                    isValid = false;
                } else {
                    error.classList.add("hidden");
                }
            });

            if (isValid) alert("Form submitted successfully!");
        });
    