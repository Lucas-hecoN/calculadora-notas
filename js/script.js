document.addEventListener("DOMContentLoaded", () => {
  const nota1 = document.getElementById("nota1");
  const nota2 = document.getElementById("nota2");
  const calcParcial = document.getElementById("calcParcial");
  const mensagem = document.getElementById("mensagem");
  const nota3 = document.getElementById("nota3");
  const calcfinal = document.getElementById("calcfinal");

  function calcularMedia(a, b) {
    const m = (a + b) / 2;
    const media = Math.floor(m * 10) / 10;
    return media;
  }

  calcParcial.addEventListener("click", (event) => {
    event.preventDefault();

    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);

    const camposPreenchidos = nota1.value.trim() !== "" && nota2.value.trim() !== "";
    const notasValidas = !isNaN(n1) && !isNaN(n2) && n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10;
    
    if (camposPreenchidos && notasValidas) {
      mp = calcularMedia(n1, n2);
      
      if (mp >= 7) {
        mensagem.style.color = "green";
        mensagem.innerHTML = `Parabéns você foi aprovado! Sua média é: ${mp}`;
        nota3.classList.add("desativado");
        calcfinal.classList.add("desativado");
      } else if (mp >= 4) {
        mensagem.style.color = "orange";
        mensagem.innerHTML = `Você vai para a Prova Final! Sua média é: ${mp}`;
        nota3.classList.remove("desativado");
        calcfinal.classList.remove("desativado");
      } else {
        mensagem.style.color = "red";
        mensagem.innerHTML = `Você foi reprovado! Sua média é: ${mp}`;
        nota3.classList.add("desativado");
        calcfinal.classList.add("desativado");
      }
    } else {
      mensagem.innerHTML = "⚠️ Preencha os dois campos com notas válidas entre 0 e 10.";
    }
  });


  calcfinal.addEventListener("click", (event) => {
    event.preventDefault();

    const n3 = parseFloat(nota3.value);
    const notaFinalValida = nota3.value.trim() !== "" && !isNaN(n3) && n3 >= 0 && n3 <= 10;

    if (notaFinalValida) {
      const mf = calcularMedia(mp, n3);

      if (mf >= 5) {
        mensagem.style.color = "green";
        mensagem.innerHTML = `Você foi aprovado na final! Média final: ${mf}`;
      } else {
        mensagem.style.color = "red";
        mensagem.innerHTML = `Você foi reprovado! Média final: ${mf}`;
      }
    } else {
      mensagem.innerHTML = "⚠️ Preencha corretamente a nota da Prova Final (0 a 10).";
    }
  });
});