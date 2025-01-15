// Data de início do relacionamento (ano, mês - 1, dia, hora, minuto, segundo)
const startDate = new Date(2024, 8, 16, 00, 0, 0); // Exemplo: 15 de setembro de 2023, 12:00

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const counterElement = document.getElementById("counter");
  counterElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Inicializa o contador na carga da página
updateCounter();
