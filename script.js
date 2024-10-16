const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


function updateBarChart(){
    const bars = document.querySelectorAll('.bar');
    const chart = document.querySelector('.bar-chart');

    bars.forEach(function(bar, index){
        const item = data[index];

        bar.style.height = `${item.amount}px`;

        bar.setAttribute('data-tooltip', "$"+`${item.amount}`)
        
    })

    
    bars.forEach(function(bar){
        bar.addEventListener('mouseover', showTooltip);
        bar.addEventListener('mousemove', (event) => moveTooltip(event, chart));
        bar.addEventListener('mouseout', hideTooltip);
    });

}
    
updateBarChart(data);

function showTooltip(event) {
    const tooltip = document.querySelector('.tooltip');
    tooltip.textContent = event.target.getAttribute('data-tooltip');
    tooltip.style.display = 'block';
}

function moveTooltip(event, chart) {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.left = `${event.pageX + 10}px`; 
    tooltip.style.top = `${event.pageY + 10}px`;
}


function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'none';
}