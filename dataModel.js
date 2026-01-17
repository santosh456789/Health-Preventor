function buildHealthInput() {
  return {
    age: +document.getElementById("age").value,

    body: {
      heightCm: +document.getElementById("height").value,
      weightKg: +document.getElementById("weight").value,
      hairFall: document.getElementById("hairFall").value,
      energy: document.getElementById("energy").value,
      jointPain: document.getElementById("jointPain").value
    },

    hydration: {
      waterLiters: +document.getElementById("water").value,
      urineColor: document.getElementById("urineColor").value
    },

    digestion: {
      gasBloating: document.getElementById("gas").value,
      motionFrequency: document.getElementById("motion").value
    },

    diet: {
      oilyFood: document.getElementById("oilyFood").value
    },

    lifestyle: {
      exercise: document.getElementById("exercise").value,
      sleep: document.getElementById("sleep").value
    }
  };
}
