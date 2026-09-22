// Configuración y renderizado del gráfico dinámico basado en Google Trends
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Python (Interés IA)',
                data: [62, 70, 85, 92, 96, 99, 100],
                borderColor: '#1e3a8a',
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }, {
                label: 'JavaScript',
                data: [50, 52, 54, 57, 59, 61, 62],
                borderColor: '#3b82f6',
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }, {
                label: 'C++',
                data: [40, 42, 43, 45, 46, 47, 48],
                borderColor: '#64748b',
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});