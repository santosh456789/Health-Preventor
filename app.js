function runAnalysis() {
  const input = buildHealthInput();
  const report = analyzeHealth(input);

  let text = formatReport(report.risks);

  text += "\n\nRECOMMENDED MONITORING:";
  report.tests.forEach(t => text += `\n• ${t}`);

  text += "\n\nIMPROVEMENT SUGGESTIONS:";
  report.plan.forEach(p => text += `\n• ${p}`);

  document.getElementById("output").textContent = text;
}
