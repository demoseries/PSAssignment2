const salesData = [
  {
    name: "Rajesh",
    location: "Mumbai",
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000,
  },
  {
    name: "Sneha",
    location: "Delhi",
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000,
  },
  {
    name: "Arun",
    location: "Chennai",
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000,
  },
  {
    name: "Kavita",
    location: "Kolkata",
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 138000,
    q4Sales: 255000,
  },
  {
    name: "Sanjay",
    location: "Mumbai",
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000,
  },
  {
    name: "Divya",
    location: "Chennai",
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000,
  },
];
function calculateTotalAndAverages() {
  for (let i = 0; i < salesData.length; i++) {
    const personData = salesData[i];
    const yearlySales =
      personData.q1Sales +
      personData.q2Sales +
      personData.q3Sales +
      personData.q4Sales;
    const averageSales = yearlySales / 4;
    personData.totalSales = yearlySales;
    personData.avgSales = averageSales;
  }
  // console.log(salesData);
}
calculateTotalAndAverages();

function bestPerformer() {
  let bestPerformer = salesData[0];
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].totalSales > bestPerformer.totalSales) {
      bestPerformer = salesData[i];
    }
  }
  return bestPerformer;
  // console.log(bestPerformer);
}
function displaybestPerformer() {
  const best = bestPerformer();
  document.getElementById(
    "best-performer"
  ).innerHTML = `<article><header><h3>Best Performer</h3></header>
          <p><strong>Name:</strong> ${best.name}</p>
          <p><strong>Location:</strong> ${best.location}</p>
          <p><strong>Total Sales:</strong> ${best.totalSales}</p></article>`;
}
function gettopPerformer() {
  let topSalesPerformer = [];
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].avgSales > 140000) {
      topSalesPerformer.push(salesData[i]);
    }
  }
  // return topSalesPerformer
  // console.log(topSalesPerformer);
  return topSalesPerformer;
}
function displayToperformer() {
  const topPerformer = gettopPerformer();

  const performersCount = (document.getElementById(
    "top-performers-count"
  ).innerHTML = `
        <article>
          <header><h3>Top Performers Summary</h3></header>
          <p><strong>Total No. of Top Performers:</strong> ${topPerformer.length}</p>
        </article>
      `);
  const performer = document.getElementById("top-performer");
  let salesHtml = "";
  for (let i = 0; i < topPerformer.length; i++) {
    salesHtml += `<article>
    <header><h3>${topPerformer[i].name}</h3></header>
    <p><strong>Location:</strong> ${topPerformer[i].location}</p>
    <p><strong>Total Sales:</strong> ₹${topPerformer[i].totalSales}</p>
    <p><strong>Average Sales:</strong> ₹${topPerformer[i].avgSales}</p>
  </article>`;
  }

  performer.innerHTML = salesHtml;
}

function calculateQuarterlySalesAverage() {
  let totalq1sales = 0;
  let totalq2sales = 0;
  let totalq3sales = 0;
  let totalq4sales = 0;
  let totalSales = 0;
  for (let i = 0; i < salesData.length; i++) {
    totalq1sales += salesData[i].q1Sales;
    totalq2sales += salesData[i].q2Sales;
    totalq3sales += salesData[i].q3Sales;
    totalq4sales += salesData[i].q4Sales;
    totalSales +=
      salesData[i].q1Sales +
      salesData[i].q2Sales +
      salesData[i].q3Sales +
      salesData[i].q4Sales;
  }
  let count = salesData.length;

  const avgTotal = {
    q1average: totalq1sales / count,
    q2average: totalq2sales / count,
    q3average: totalq3sales / count,
    q4average: totalq4sales / count,
    totalSales,
    totalAverageSales: totalSales / count,
  };
  // console.log(avgTotal);
  return avgTotal;
}
function displayStats() {
  const stats = calculateQuarterlySalesAverage();
  const totalAverageSales = (document.getElementById(
    "sales-average"
  ).innerHTML = `<article><header><h3>Querterly Sales Averages</h3></header>
      <p>Q1 Average Sales: ${stats.q1average}</p>
      <p>Q2 Average Sales: ${stats.q2average}</p>
       <p>Q3 Average Sales: ${stats.q3average}</p>
       <p>Q4 Average Sales: ${stats.q4average}</p>
       <p>Total Sales: ${stats.totalSales}</p>
       <p>Total Average Sales: ${stats.totalAverageSales}</p>
      </article>`);
}

// calculateQuarterlySalesAverage();

function generate() {
  displaybestPerformer();
  displayToperformer();
  displayStats();
}
document.addEventListener("DOMContentLoaded", generate);
