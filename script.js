"use strict";

window.addEventListener("load", initializeChart);

const chartModel = [28, 12, 32, 4, 8, 12, 32, 12, 16, 19, 28, 12, 32, 4, 8, 12, 32, 12, 16, 19, 12, 32, 4, 8, 12, 32, 12, 16, 19, 32, 12, 17, 1, 20, 30, 5, 32, 20, 8, 32, 3];

function initializeChart() {
    console.log("initChart");
    chartLoop();
}

function chartLoop() {
    console.log("chartLoop");
    updateChartModel();
    displayChart();
    setTimeout(chartLoop, 300);
}

function updateChartModel() {
    console.log("updateChartModel");

    const queueSize = getNumberOfCustomers();
    chartModel.push(queueSize);
    chartModel.shift();
}

// View
function displayChart() {
    console.log("showChart");

    const barChart = document.querySelector(".js-bar-chart");

    barChart.innerHTML = "";

    for (let i = 1; i < chartModel.length; i++) {
        console.log(i);

        const bar = document.createElement("li");
        bar.classList.add("c-chart__bar");
        bar.style.height = `${(12 / 32) * chartModel[i]}rem`;

        barChart.appendChild(bar);
    }
}

function getNumberOfCustomers() {
    console.log("getNumberOfCustomers");
    return Math.floor(Math.random() * 32);
}
