function checkSecret() {
        const input = document.getElementById('secret-pass');
        const secret = document.getElementById('secret-text');
        const gate = input.parentElement;

        if (input.value === '1234') {
            secret.style.display = 'block';
            gate.style.display = 'none';
        } else {
            secret.style.display = 'block';
            gate.style.display = 'none';
        }
    }

    function playRickroll(event) {
        event.preventDefault();
        const audio = document.getElementById('rickroll-audio');
        audio.currentTime = 0;
        audio.play().catch(() => {
            alert("Audio blocked. Click play to enable sound.");
        });
    }
