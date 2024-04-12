let freelancers = [];

const names = ['Alice', 'Bob', 'Carol', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

function addFreelancer(name, occupation, startingPrice) {
    freelancers.push({ name, occupation, startingPrice });
    updatePage();
}

function generateRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

function generateRandomOccupation() {
    const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Engineer', 'Artist', 'Chef', 'Musician'];
    return occupations[Math.floor(Math.random() * occupations.length)];
}

function generateRandomStartingPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    return totalPrices / freelancers.length;
}

function updatePage() {
    const freelancersList = document.getElementById('freelancers-list');
    freelancersList.innerHTML = '';

    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.classList.add('freelancer');
        freelancerElement.innerHTML = `
            <h3>${freelancer.name}</h3>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.startingPrice}</p>
        `;
        freelancersList.appendChild(freelancerElement);
    });

    const averagePrice = calculateAveragePrice();
    const averagePriceElement = document.getElementById('average-price');
    averagePriceElement.textContent = `$${averagePrice.toFixed(2)}`;
}

addFreelancer('Alice', 'Writer', 30);
addFreelancer('Bob', 'Teacher', 50);

let randomNameIndex = names.indexOf('Carol'); 
let intervalID = setInterval(() => {
    if (randomNameIndex < names.length) {
        const newFreelancer = {
            name: generateRandomName(), 
            occupation: generateRandomOccupation(),
            startingPrice: generateRandomStartingPrice(20, 100)
        };
        addFreelancer(newFreelancer.name, newFreelancer.occupation, newFreelancer.startingPrice);
        randomNameIndex++;
    } else {
        clearInterval(intervalID);
    }
}, 5000);



