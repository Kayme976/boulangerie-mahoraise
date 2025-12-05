// Transition de page
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-show");
});

document.querySelectorAll("a").forEach(link => {
  if (link.href.startsWith(window.location.origin)) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.href;
      document.body.classList.remove("page-show");
      document.body.classList.add("page-transition");
      setTimeout(() => {
        window.location.href = url;
      }, 450);
    });
  }
});

// Ajouter au panier (simple pour l'instant)
function addToCart(name, price) {
  alert(`${name} ajouté au panier (${price.toFixed(2)} €)`);
}

// Vérification admin
function checkPassword() {
  const pass = document.getElementById('admin-pass').value;
  if (pass === "mahoraise2025") {
    window.location.href = "edit-site.html";
  } else {
    alert("Mot de passe incorrect.");
  }
}

// Envoi de commande email
function sendOrder() {
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const pickup = document.getElementById('pickup-time').value;
  const note = document.getElementById('cust-note').value.trim();

  if (!name || !phone || !pickup) {
    alert("Veuillez renseigner le nom, le téléphone et l'heure de retrait.");
    return;
  }

  const body = `Nouvelle commande :
Nom: ${name}
Téléphone: ${phone}
Heure de retrait: ${pickup}

Note : ${note || 'Aucune note'}`;

  const mailtoLink = `mailto:kaelaboutoihi@icloud.com,karim.soumbou@gmail.com,saindou.aboutoihi@orange.fr,aboutoihiraine7@icloud.com
  ?subject=Nouvelle commande
  &body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
