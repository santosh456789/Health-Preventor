function analyzeHealth(d) {
  const bmi = d.body.weightKg / ((d.body.heightCm / 100) ** 2);

  const risks = {
    metabolic: metabolicRisk(d),
    digestive: gutRisk(d),
    hydration: hydrationRisk(d),
    nutrition: nutritionRisk(d),
    musculoskeletal: musculoskeletalRisk(d),
    lifestyle: lifestyleRisk(d)
  };

  return {
    bmi: bmi.toFixed(1),
    risks,
    tests: selectTests(risks),
    plan: improvementPlan(risks)
  };
}
