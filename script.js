
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('whatsappForm');

    if (form) {
        form.addEventListener('submit', handleWhatsAppSubmit);
    }

    function handleWhatsAppSubmit(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const nicho = document.getElementById('nicho').value;

        if (!nome || !email || !nicho) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const telefoneDestino = "5511999999999";

        const mensagem = 
`Olá! Meu nome é *${nome}*.
Sou do nicho: *${nicho}*.
Meu email é: ${email}.
Gostaria de um orçamento de edição.`;

        const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;

        const button = form.querySelector('button');
        button.disabled = true;
        button.innerText = 'Abrindo WhatsApp...';

        window.open(url, '_blank');

        setTimeout(() => {
            button.disabled = false;
            button.innerText = 'Enviar para WhatsApp 💬';
            form.reset();
        }, 2000);
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const nicho = document.getElementById('nicho').value;

  await addDoc(collection(db, "leads"), {
    nome,
    email,
    nicho,
    criadoEm: serverTimestamp()
  });

  const telefoneDestino = "5511999999999";
  const mensagemTexto = `Olá! Meu nome é *${nome}*...\n`;
  window.open(
    `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagemTexto)}`,
    "_blank"
  );
});


