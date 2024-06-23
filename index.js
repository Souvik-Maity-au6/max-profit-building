function maxProfit(timeUnits) {
  const THEATRE_TIME = 5;
  const PUB_TIME = 4;
  const COMMERCIAL_PARK_TIME = 10;

  const THEATRE_EARNINGS = 1500;
  const PUB_EARNINGS = 1000;
  const COMMERCIAL_PARK_EARNINGS = 3000;

  let timeRemaining = timeUnits;
  let theatres = 0,
    pubs = 0,
    commercialParks = 0;

  while (timeRemaining > 0) {
    if (timeRemaining >= COMMERCIAL_PARK_TIME) {
      commercialParks++;
      timeRemaining -= COMMERCIAL_PARK_TIME;
    } else if (timeRemaining >= THEATRE_TIME) {
      theatres++;
      timeRemaining -= THEATRE_TIME;
    } else if (timeRemaining >= PUB_TIME) {
      pubs++;
      timeRemaining -= PUB_TIME;
    } else {
      break;
    }
  }

  let totalEarnings =
    theatres * THEATRE_EARNINGS +
    pubs * PUB_EARNINGS +
    commercialParks * COMMERCIAL_PARK_EARNINGS;

  return {
    T: theatres,
    P: pubs,
    C: commercialParks,
  };
}

// Test Cases
console.log(maxProfit(7)); // Expected output: { theatres: 1, pubs: 0, commercialParks: 0, totalEarnings: 1500 }
console.log(maxProfit(8)); // Expected output: { theatres: 1, pubs: 0, commercialParks: 0, totalEarnings: 1500 }
console.log(maxProfit(13)); // Expected output: { theatres: 2, pubs: 0, commercialParks: 0, totalEarnings: 3000 }
