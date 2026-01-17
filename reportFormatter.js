function formatReport(r) {
  let lines = [];

  lines.push("OVERALL HEALTH OBSERVATION:");
  if (r.metabolic > 0.6)
    lines.push("• Metabolic stress pattern observed (weight/activity related)");

  if (r.digestive > 0.6)
    lines.push("• Digestive imbalance pattern (gas / bowel irregularity)");

  if (r.hydration > 0.6)
    lines.push("• Hydration-related stress (low intake / urine concentration)");

  if (r.nutrition > 0.6)
    lines.push("• Possible nutritional insufficiency pattern");

  if (r.musculoskeletal > 0.6)
    lines.push("• Musculoskeletal strain / inflammation pattern");

  if (lines.length === 1)
    lines.push("• Overall parameters appear within acceptable range");

  return lines.join("\n");
}
