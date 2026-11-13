const form = document.querySelector(`#bmiForm`);

form.addEventListener('submit', function(e){

  e.preventDefault();

  const h = Number(document.querySelector(`#height`).value);
  const w = Number(document.querySelector(`#weight`).value);

  const r = document.querySelector(`#bmiValue`);
  const rStatus = document.querySelector(`#bmiStatus`);

  // Validate height
  if (document.querySelector('#height').value.trim() === '' || !Number.isFinite(h) || h <= 0) {
      r.textContent = "--";
      rStatus.textContent = "--";
      console.log('Please enter a valid height.');
      return;
  }

  // Validate weight
  if (document.querySelector('#weight').value.trim() === '' || !Number.isFinite(w) || w <= 0) {
      r.textContent = "--";
      rStatus.textContent = "--";
      console.log('Please enter a valid weight.');
      return;
  }

  const hInMeter = h / 100;

  const bMI = w / ((hInMeter)*(hInMeter));

  console.log(bMI);
  
  r.textContent = bMI.toFixed(2);

  let status = 'Underweight';
  
  if(bMI >= 30){
    status = "Obesity";
  } else if(bMI >= 25){
    status = "Overweight";
  } else {
    if(bMI >= 18.5){
      status = "Normal Weight";
    }
  }

  rStatus.textContent = status;

  console.log(`Your BMI is: ${bMI.toFixed(2)}`);

});

