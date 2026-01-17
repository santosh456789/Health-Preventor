function analyze() {
  const age = +document.getElementById("age").value;
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;

  let risk = 0;
  let notes = [];

  // BMI
  let bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  if (bmi >= 25) {
    risk += 2;
    notes.push("Overweight detected → monitor sugar, BP, cholesterol");
  }

  // Lifestyle
  if (document.getElementById("exercise").value === "none") risk += 2;
  if (document.getElementById("sleep").value === "poor") risk += 2;
  if (document.getElementById("junk").value === "high") risk += 2;

  // Diseases
  document.querySelectorAll("input[type=checkbox]:checked")
    .forEach(d => {
      risk += 3;
      if (d.value === "crohns")
        notes.push("Crohn’s detected → monitor gut inflammation, nutrition");
    });

  // Age based
  if (age > 40) {
    risk += 2;
    notes.push("Age > 40 → yearly cardiac & metabolic screening recommended");
  }

  let riskLevel = risk <= 3 ? "LOW" : risk <= 7 ? "MEDIUM" : "HIGH";

  let result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `
    <h3>📊 Health Summary</h3>
    <p><strong>BMI:</strong> ${bmi}</p>
    <p><strong>Risk Level:</strong> ${riskLevel}</p>

    <h4>🧪 Recommended Tests (India-specific)</h4>
    <ul>
      <li>HbA1c</li>
      <li>Lipid Profile</li>
      <li>Vitamin D & B12 (very common deficiency in India)</li>
      <li>Liver & Kidney Function</li>
      <li>CRP (Inflammation – Crohn’s)</li>
    </ul>

    <h4>👨‍⚕️ Suggested Follow-ups</h4>
    <ul>
      <li>General Physician</li>
      <li>Gastroenterologist (Gut)</li>
      <li>Cardiologist (BP / Cardiac)</li>
      <li>Endocrinologist (Diabetes)</li>
    </ul>

    <h4>📝 Notes</h4>
    <ul>${notes.map(n => `<li>${n}</li>`).join("")}</ul>

    <p class="disclaimer">⚠ Preventive guidance only. Not a diagnosis.</p>
  `;
}

// PDF Export
function downloadPDF() {
  window.print();
}
