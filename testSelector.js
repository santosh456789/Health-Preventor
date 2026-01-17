function selectTests(r) {
  let tests = [];

  if (r.metabolic > 0.6) tests.push("HbA1c");
  if (r.nutrition > 0.6) tests.push("Iron", "Vitamin B12");
  if (r.gut > 0.6) tests.push("CRP", "Stool Routine");

  return [...new Set(tests)];
}
