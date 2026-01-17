function metabolicRisk(d) {
  let bmi = d.body.weightKg / ((d.body.heightCm / 100) ** 2);
  return bmi > 25 ? 0.7 : 0.3;
}

function gutRisk(d) {
  return map.gas[d.digestion.gasBloating];
}

function nutritionRisk(d) {
  return (map.hairFall[d.body.hairFall] + map.energy[d.body.energy]) / 2;
}
