function atualizarCreditosUI() {
  const creditos = localStorage.getItem("creditos");
  document.getElementById("creditosUsuario").innerText = creditos;
}

atualizarCreditosUI();

function comprarCreditosFake() {
  let creditos = parseInt(localStorage.getItem("creditos") || "0", 10);

  creditos += 50;

  localStorage.setItem("creditos", creditos);
  atualizarCreditosUI();

  alert("Você comprou +50 créditos (simulação)");
}