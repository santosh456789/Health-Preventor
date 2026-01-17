function analyzeHealth(d) {
  const risks = {
    metabolic: metabolicRisk(d),
    digestive: gutRisk(d),
    hydration: hydrationRisk(d),
    nutrition: nutritionRisk(d),
    musculoskeletal: musculoskeletalRisk(d),
    lifestyle: lifestyleRisk(d)
  };

  return {
    risks,
    tests: selectTests(risks),
    plan: improvementPlan(risks)
  };
}
