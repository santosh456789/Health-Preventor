function correlationInsights(r) {
  let insights = [];
  if (r.gut > 0.6 && r.nutrition > 0.6)
    insights.push("Digestive absorption may be impacting nutritional status");
  return insights;
}
