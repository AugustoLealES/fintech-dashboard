document.addEventListener("DOMContentLoaded", function () {
  var toggleSaldo = document.getElementById("toggle-saldo");
  var saldo = document.getElementById("saldo");

  toggleSaldo.addEventListener("click", function () {
    if (saldo.style.display === "none") {
      saldo.style.display = "block";
      toggleSaldo.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
      saldo.style.display = "none";
      toggleSaldo.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
  });

  function showToast(message) {
    var toastBody = document.querySelector(".toast-body");
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById("liveToast"));
    toast.show();
  }

  document.getElementById("pix-button").addEventListener("click", function () {
    showToast("Acessando Pix...");
  });

  document
    .getElementById("cofrinho-button")
    .addEventListener("click", function () {
      showToast("Acessando Cofrinhos...");
    });

  document
    .getElementById("cartao-button")
    .addEventListener("click", function () {
      showToast("Acessando Cartão...");
    });

  document
    .getElementById("investir-item")
    .addEventListener("click", function () {
      showToast("Acessando Investir...");
    });

  document
    .getElementById("seguros-item")
    .addEventListener("click", function () {
      showToast("Acessando Seguros...");
    });

  document
    .getElementById("emprestimos-item")
    .addEventListener("click", function () {
      showToast("Acessando Empréstimos...");
    });

  document
    .getElementById("cartao-virtual-item")
    .addEventListener("click", function () {
      showToast("Acessando Cartão Virtual...");
    });
});
