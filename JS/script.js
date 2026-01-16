document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Welcome Message
    const welcomeH1 = document.getElementById('welcome-message');
    let namaUser = prompt("Masukkan nama Anda:");
    
    if (namaUser === null || namaUser.trim() === "") {
        namaUser = "Tamu";
    }
    welcomeH1.innerText = `Hai ${namaUser}, Selamat Datang!`;

    // 2. Form Validation
    const contactForm = document.getElementById('contactForm');
    const resultBox = document.getElementById('formResult');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const pesan = document.getElementById('messageInput').value;

        resultBox.style.display = 'block';
        resultBox.innerHTML = `
            <h4>Pesan Terkirim!</h4>
            <p>Halo <strong>${nama}</strong>, pesan Anda: "<em>${pesan}</em>" telah kami simpan. Kami akan menghubungi Anda di <strong>${email}</strong>.</p>
        `;

        contactForm.reset();
        
        // Scroll ke hasil form agar terlihat di mobile
        resultBox.scrollIntoView({ behavior: 'smooth' });
    });
});
