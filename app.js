function analyze() {
  const age = +document.getElementById("age").value || 0;
  const height = +document.getElementById("height").value || 1;
  const weight = +document.getElementById("weight").value || 1;

  const sleep = document.getElementById("sleep").value;
  const exercise = document.getElementById("exercise").value;
  const junk = document.getElementById("junk").value;

  const diseases = document.querySelectorAll("input[type=checkbox]:checked");

  // ---------- Feature Engineering ----------
  const bmi = +(weight / ((height / 100) ** 2)).toFixed(1);

  let f_bmi = bmi < 18.5 ? 0.4 : bmi < 25 ? 0.2 : bmi < 30 ? 0.6 : 0.8;
  let f_age = age < 30 ? 0.2 : age < 45 ? 0.4 : age < 60 ? 0.6 : 0.8;
  let f_ex = exercise === "regular" ? 0.2 : exercise === "moderate" ? 0.5 : 0.8;
  let f_sleep = sleep === "good" ? 0.2 : sleep === "average" ? 0.5 : 0.8;
  let f_junk = junk === "low" ? 0.2 : junk === "medium" ? 0.5 : 0.8;
  let f_disease = diseases.length === 0 ? 0.2 : Math.min(0.6 + diseases.length * 0.2, 1);

  // ---------- Weighted AI Risk Model ----------
  let riskScore =
    (0.25 * f_bmi) +
    (0.15 * f_age) +
    (0.15 * f_ex) +
    (0.10 * f_sleep) +
    (0.10 * f_junk) +
    (0.25 * f_disease);

  // Convert to %
  let riskPercent = Math.round(riskScore * 100);

  let riskLevel =
    riskPercent < 30 ? "LOW" :
    riskPercent < 60 ? "MODERATE" :
    "HIGH";

  // ---------- Disease-Specific AI Alerts ----------
  let aiNotes = [];

  diseases.forEach(d => {
    if (d.value === "diabetes") {
      aiNotes.push("AI Alert: High probability of glucose variability. Monitor HbA1c every 3–6 months.");
    }
    if (d.value === "crohns") {
      aiNotes.push("AI Alert: Gut inflammation risk. Track CRP, calprotectin & nutrition absorption.");
    }
    if (d.value === "cardiac") {
      aiNotes.push("AI Alert: Cardiac load detected. Monitor BP, ECG & lipid profile.");
    }
  });

  if (age > 40 && bmi > 25)
    aiNotes.push("AI Insight: Age + BMI pattern increases metabolic syndrome risk.");

  // ---------- Output ----------
  let result = document.getElementById("result");
  result.classList.remove("hidden");

  result.innerHTML = `
    <h3>🤖 AI Health Risk Prediction</h3>

    <p><strong>BMI:</strong> ${bmi}</p>
    <p><strong>Predicted Risk:</strong> ${riskPercent}%</p>
    <p><strong>Risk Category:</strong> ${riskLevel}</p>

    <h4>📌 AI Preventive Recommendations</h4>
    <ul>
      <li>Annual full health screening</li>
      <li>Vitamin D & B12 (India-specific deficiency)</li>
      <li>HbA1c + Lipid profile</li>
      <li>Blood pressure monitoring</li>
    </ul>

    <h4>🧠 AI Alerts</h4>
    <ul>${aiNotes.map(n => `<li>${n}</li>`).join("")}</ul>

    <p class="disclaimer">
      ⚠ AI-assisted risk prediction. Not a medical diagnosis.
    </p>
  `;
}
