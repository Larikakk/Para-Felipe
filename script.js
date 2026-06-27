function iniciarCoracoes() {
  const coracoes = document.getElementById("coracoes");
  if (coracoes) {
    coracoes.classList.remove("ativo");
    void coracoes.offsetWidth;
    coracoes.classList.add("ativo");
  }
}