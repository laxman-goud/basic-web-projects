// 🔥 Select form and input elements
const formCard = document.querySelector('.form-card');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const submitEl = document.getElementById('submit');
const warnEl = document.querySelector('.warning');

// 🔥 Select result display elements
const resultCard = document.querySelector('.result-card');
const bmiEl = document.getElementById('BMI');
const categoryEl = document.getElementById('category');

let BMI;

// 🔥 Function to compute BMI category based on value
const computeBMICategory = () => {
    if (BMI < 18.5)
        categoryEl.textContent = 'Underweight';
    else if (BMI >= 18.5 && BMI < 25)
        categoryEl.textContent = 'Normal weight';
    else if (BMI >= 25 && BMI < 30)
        categoryEl.textContent = 'Overweight';
    else if (BMI >= 30 && BMI < 35)
        categoryEl.textContent = 'Obesity Class I';
    else if (BMI >= 35 && BMI < 40)
        categoryEl.textContent = 'Obesity Class II';
    else
        categoryEl.textContent = 'Obesity Class III';
};

// 🔥 Function to calculate BMI and handle UI
const calculateBMI = () => {
    warnEl.classList.add('hide');  // 🔥 Hide warning initially

    // 🔥 Reset form if already calculated
    if (submitEl.innerText === 'calculate other') {
        formCard.classList.remove('hide');
        resultCard.classList.add('hide');
        heightEl.value = "";
        weightEl.value = "";
        submitEl.innerText = 'calculate';
        return;
    }

    // 🔥 Read values from input
    const height = parseFloat(heightEl.value);
    const weight = parseFloat(weightEl.value);

    // 🔥 If valid input, calculate BMI
    if (height && weight) {
        formCard.classList.add('hide');
        resultCard.classList.remove('hide');

        // 🔥 Convert cm to meters and calculate BMI with 2 decimals
        BMI = parseFloat((weight / ((height / 100) ** 2)).toFixed(2));

        computeBMICategory();        // 🔥 Show category
        bmiEl.textContent = BMI;     // 🔥 Show BMI value

        submitEl.innerText = 'calculate other';  // 🔥 Change button text
    } else {
        warnEl.classList.remove('hide');  // 🔥 Show warning if inputs are missing
    }
};

// 🔥 Add click event to button
submitEl.addEventListener('click', calculateBMI);
