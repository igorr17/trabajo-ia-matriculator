// Configuración y renderizado del gráfico dinámico basado en Google Trends (Todos los lenguajes)
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Python',
                data: [62, 70, 85, 92, 96, 99, 100],
                borderColor: '#1e3a8a', // Azul oscuro
                backgroundColor: 'rgba(30, 58, 138, 0.05)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }, {
                label: 'JavaScript / Node.js',
                data: [50, 52, 54, 57, 59, 61, 62],
                borderColor: '#3b82f6', // Azul claro
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }, {
                label: 'Java',
                data: [45, 46, 47, 46, 45, 45, 44],
                borderColor: '#f59e0b', // Naranja
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }, {
                label: 'C++',
                data: [40, 42, 43, 45, 46, 47, 48],
                borderColor: '#64748b', // Gris
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }, {
                label: 'PHP',
                data: [35, 34, 33, 32, 31, 30, 29],
                borderColor: '#8b5cf6', // Morado
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }, {
                label: 'R',
                data: [25, 26, 27, 28, 28, 29, 29],
                borderColor: '#ec4899', // Rosa
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
