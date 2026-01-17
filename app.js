function runAnalysis() {
  const input = buildHealthInput();
  const analysis = analyzeHealth(input);

  let output = "";

  // ---- BMI ----
  output += "BODY METRICS:\n";
  output += `• BMI: ${analysis.bmi}\n`;

  const bmiVal = parseFloat(analysis.bmi);
  if (bmiVal >= 25 && bmiVal < 30)
    output += "• Weight category: Overweight range\n";
  else if (bmiVal >= 30)
    output += "• Weight category: Obesity range\n";
  else
    output += "• Weight category: Normal range\n";

  // ---- Health Observation ----
  output += "\nOVERALL HEALTH OBSERVATION:\n";

  const r = analysis.risks;
  let findings = 0;

  if (r.metabolic >= 0.45) {
    output += "• Metabolic load observed (BMI / physical activity related)\n";
    findings++;
  }

  if (r.digestive >= 0.5) {
    output += "• Mild digestive sensitivity pattern\n";
    findings++;
  }

  if (r.hydration >= 0.5) {
    output += "• Hydration-related stress tendency\n";
    findings++;
  }

  if (r.nutrition >= 0.5) {
    output += "• Possible nutritional imbalance pattern\n";
    findings++;
  }

  if (r.musculoskeletal >= 0.5) {
    output += "• Musculoskeletal strain tendency\n";
    findings++;
  }

  if (findings === 0) {
    output += "• Overall parameters currently stable\n";
  }

  // ---- Tests ----
  if (analysis.tests.length > 0) {
    output += "\nRECOMMENDED MONITORING:\n";
    analysis.tests.forEach(t => output += `• ${t}\n`);
  }

  // ---- Suggestions ----
  if (analysis.plan.length > 0) {
    output += "\nIMPROVEMENT SUGGESTIONS:\n";
    analysis.plan.forEach(p => output += `• ${p}\n`);
  }

  output += "\nNOTE:\n";
  output += "This assessment highlights health patterns and is not a medical diagnosis.";

  document.getElementById("output").textContent = output;
}
