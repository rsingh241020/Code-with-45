const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please Give a Valid Height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please Give a Valid Weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category =''
        if(bmi<18.6){
          category = 'under Wegiht'
        }
        else if(bmi>18.6 && bmi<24.9){
            category = 'Normal Range'
        }
        else{
          category = 'Over Weight'
        }
        results.innerHTML = `<span>Your BMI is ${bmi} and ${category}</span>`;
    }

});
