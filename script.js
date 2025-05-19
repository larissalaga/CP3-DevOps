function responder(sentimento) {
  const mensagens = {
    feliz: "Que bom! Aproveite o seu dia! ☀️",
    triste: "Tudo bem se sentir assim. Respira... 💙",
    ansiosa: "Calma, uma coisa de cada vez. Você está indo bem. 🌿"
  };

  document.getElementById("mensagem").innerText = mensagens[sentimento];
}
