function runAnalysis() {
  const input = buildHealthInput();
  const analysis = analyzeHealth(input);

  let output = "";

  // ---- Overall Summary ----
  output += "OVERALL HEALTH OBSERVATION:\n";

  const r = analysis.risks;
  let findings = 0;

  if (r.metabolic > 0.6) {
    output += "• Metabolic stress pattern observed (weight/activity related)\n";
    findings++;
  }

  if (r.digestive > 0.6) {
    output += "• Digestive imbalance pattern (gas / bowel irregularity)\n";
    findings++;
  }

  if (r.hydration > 0.6) {
    output += "• Hydration-related stress (low intake / concentrated urine)\n";
    findings++;
  }

  if (r.nutrition > 0.6) {
    output += "• Possible nutritional insufficiency pattern (hair/energy related)\n";
    findings++;
  }

  if (r.musculoskeletal > 0.6) {
    output += "• Musculoskeletal strain / inflammatory load pattern\n";
    findings++;
  }

  if (findings === 0) {
    output += "• Overall parameters appear within acceptable range\n";
  }

  // ---- Tests ----
  if (analysis.tests.length > 0) {
    output += "\nRECOMMENDED MONITORING TESTS:\n";
    analysis.tests.forEach(t => {
      output += "• " + t + "\n";
    });
  }

  // ---- Improvement Plan ----
  if (analysis.plan.length > 0) {
    output += "\nIMPROVEMENT SUGGESTIONS:\n";
    analysis.plan.forEach(p => {
      output += "• " + p + "\n";
    });
  }

  output += "\nNOTE:\n";
  output += "This assessment is based on health patterns and is not a medical diagnosis.";

  document.getElementById("output").textContent = output;
}
