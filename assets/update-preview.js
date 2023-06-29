document.addEventListener("DOMContentLoaded", function() {
    var customizationPreview = document.getElementById("customizationPreview");
    var typoSelect = document.getElementById("typo");
    var couleurSelect = document.getElementById("couleur");

    function updatePreview() {
      var typoValue = document.getElementById("typo").value;
      if (typoValue == "Ballantine") {
        typoValue = "Ballantine";
      } else if (typoValue == "Chancery") {
        typoValue = "chancery-regular";
      } else if (typoValue == "Times") {
        typoValue = "Times-regular";
      }
      var couleurValue = document.getElementById("couleur").value;
      if (couleurValue == "Noir") {
        couleurValue = "black";
      } else if (couleurValue == "Gris Foncé") {
        couleurValue = "darkgray";
      } else if (couleurValue == "Gris Moyen") {
        couleurValue = "gray";
      } else if (couleurValue == "Blanc") {
        couleurValue = "white";
      } else if (couleurValue == "Bleu Marine") {
        couleurValue = "navy";
      } else if (couleurValue == "Bleu Ciel") {
        couleurValue = "skyblue";
      } else if (couleurValue == "Rouge") {
        couleurValue = "red";
      } else if (couleurValue == "Rose") {
        couleurValue = "hotpink";
      } else if (couleurValue == "Rose Pâle") {
        couleurValue = "pink";
      } else if (couleurValue == "Marron") {
        couleurValue = "brown";
      } else if (couleurValue == "Jaune") {
        couleurValue = "yellow";
      } else if (couleurValue == "Orange") {
        couleurValue = "orange";
      } else if (couleurValue == "Doré") {
        couleurValue = "gold";
      }
      
      var customizationTextFieldValue = document.getElementById("customizationTextField").value;
      customizationPreview.innerHTML = customizationTextFieldValue;
      customizationPreview.style.color = couleurValue;
      customizationPreview.style.fontFamily = typoValue;
      if (couleurValue == "white") {
        customizationPreview.style.background = "black";
        customizationPreview.style.borderRadius = "50px";
      } else {
        customizationPreview.style.background = "white";
      }
    }

    typoSelect.addEventListener("change", updatePreview);
    couleurSelect.addEventListener("change", updatePreview);
    document.getElementById("customizationTextField").addEventListener("input", updatePreview);
    updatePreview();
  });