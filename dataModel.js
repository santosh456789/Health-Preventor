function buildHealthInput() {
  return {
    age: +document.getElementById("age").value,
    body: {
      heightCm: +document.getElementById("height").value,
      weightKg: +document.getElementById("weight").value,
      hairFall: document.getElementById("hairFall").value,
      energy: document.getElementById("energy").value
    },
    digestion: {
      gasBloating: document.getElementById("gas").value
    },
    hydration: {
      waterLiters: +document.getElementById("water").value
    }
  };
}
