function improvementPlan(r) {
  let plan = [];

  if (r.gut > 0.6)
    plan.push("Increase fiber intake and regularize meals");

  if (r.nutrition > 0.6)
    plan.push("Increase protein intake and micronutrient monitoring");

  if (r.metabolic > 0.6)
    plan.push("Daily 30–45 min physical activity");

  return plan;
}
