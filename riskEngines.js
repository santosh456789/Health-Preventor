function metabolicRisk(d) {
  let bmi = d.body.weightKg / ((d.body.heightCm / 100) ** 2);
  return (
    (bmi > 25 ? 0.6 : 0.2) +
    (d.lifestyle.exercise === "none" ? 0.6 : 0.2)
  ) / 2;
}

function gutRisk(d) {
  return (
    map.gas[d.digestion.gasBloating] +
    (d.digestion.motionFrequency !== "daily" ? 0.6 : 0.2)
  ) / 2;
}

function hydrationRisk(d) {
  return (
    (d.hydration.waterLiters < 2 ? 0.6 : 0.2) +
    map.urineColor[d.hydration.urineColor]
  ) / 2;
}

function nutritionRisk(d) {
  return (
    map.hairFall[d.body.hairFall] +
    map.energy[d.body.energy]
  ) / 2;
}

function musculoskeletalRisk(d) {
  return map.jointPain[d.body.jointPain];
}

function lifestyleRisk(d) {
  return (
    map.sleep[d.lifestyle.sleep] +
    (d.lifestyle.exercise === "none" ? 0.6 : 0.2)
  ) / 2;
}
