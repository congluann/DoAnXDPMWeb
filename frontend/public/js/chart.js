document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('barChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Desktop',
                    data: [186, 305, 237, 73, 209, 214],
                    backgroundColor: '#2563eb'
                },
                {
                    label: 'Mobile',
                    data: [80, 200, 120, 190, 130, 140],
                    backgroundColor: '#60a5fa'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
});
