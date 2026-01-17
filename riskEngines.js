function metabolicRisk(d) {
  const bmi = d.body.weightKg / ((d.body.heightCm / 100) ** 2);

  let score = 0;

  // BMI contribution
  if (bmi < 18.5) score += 0.4;
  else if (bmi < 25) score += 0.2;
  else if (bmi < 30) score += 0.7;   // IMPORTANT
  else score += 0.9;

  // Activity contribution
  if (d.lifestyle.exercise === "none") score += 0.6;
  else if (d.lifestyle.exercise === "moderate") score += 0.3;
  else score += 0.1;

  return Math.min(score / 2, 1);
}
