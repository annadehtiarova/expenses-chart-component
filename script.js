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

const bars = document.querySelectorAll('.bar');
const tooltip = document.querySelector('.tooltip');


function updateBarChart(){
    bars.forEach(function(bar, index){
        const maxAmount = Math.max(...data.map(item => item.amount));
        const item = data[index];
        bar.style.height = `${item.amount * 3}px`;
        bar.setAttribute('data-tooltip', "$"+`${item.amount}`);

        if (item.amount === maxAmount) {
            bar.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        } else {
            bar.style.backgroundColor = 'hsl(10, 79%, 65%)';
        }
        
    })

    
    bars.forEach(function(bar){
        bar.addEventListener('mouseover', showTooltip);
        bar.addEventListener('mouseout', hideTooltip);
    });

}
    
updateBarChart(data);

function showTooltip(event) {
    const bar = event.currentTarget;
    const barRect = bar.getBoundingClientRect();
    const containerRect = document.querySelector('.bar-chart').getBoundingClientRect();

    tooltip.textContent = bar.getAttribute('data-tooltip');

    const tooltipX = barRect.left + barRect.width / 2;
    const tooltipY = barRect.top - 40; 

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.style.display = 'block';
}

function hideTooltip() {  
    tooltip.style.display = 'none';
}

