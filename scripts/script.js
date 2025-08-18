function calculerPrix() {
  const surface = parseFloat(document.getElementById("surface").value);
  const frequence = parseInt(document.getElementById("frequence").value);
  const vitresOui = document.getElementById("vitresOui").checked;

  if (isNaN(surface) || isNaN(frequence)) {
    document.getElementById("resultat").innerHTML = `<div class="alert alert-warning">Veuillez remplir tous les champs correctement.</div>`;
    return;
  }


  let prixBase = surface * 1.5;

  let prixFrequence = prixBase * frequence;

  let prixFinal = vitresOui ? prixFrequence * 1.10 : prixFrequence;

  const montantHT = prixFinal;
  const tva = montantHT * 0.20;
  const montantTTC = montantHT + tva;

  document.getElementById("resultat").innerHTML = `
    <h5>Résultat de la simulation :</h5>
    <ul class="list-group">
      <li class="list-group-item">Montant HT : <strong>${montantHT.toFixed(2)} €</strong></li>
      <li class="list-group-item">TVA (20%) : <strong>${tva.toFixed(2)} €</strong></li>
      <li class="list-group-item">Montant TTC : <strong>${montantTTC.toFixed(2)} €</strong></li>
    </ul>
  `;
}