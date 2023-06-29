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