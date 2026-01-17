function runAnalysis() {
  const input = buildHealthInput();
  const report = analyzeHealth(input);

  document.getElementById("output").textContent =
    JSON.stringify(report, null, 2);
}
