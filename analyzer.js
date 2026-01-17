function analyzeHealth(d) {
  const risks = {
    metabolic: metabolicRisk(d),
    gut: gutRisk(d),
    nutrition: nutritionRisk(d)
  };

  return {
    risks,
    insights: correlationInsights(risks),
    tests: selectTests(risks),
    plan: improvementPlan(risks)
  };
}
