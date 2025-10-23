// Inisialisasi Chart.js untuk data statistik
document.addEventListener('DOMContentLoaded', function() {
    
    // Data untuk chart pendidikan
    const pendidikanCtx = document.getElementById('pendidikanChart');
    if (pendidikanCtx) {
        const pendidikanChart = new Chart(pendidikanCtx, {
            type: 'bar',
            data: {
                labels: ['Tidak Sekolah', 'SD', 'Belum Tamat SD', 'SMP', 'SMA', 'Diploma', 'Sarjana', 'Pascasarjana'],
                datasets: [{
                    label: 'Jumlah Penduduk',
                    data: [132, 176, 108, 202, 265, 44, 125, 4],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(199, 199, 199, 0.7)',
                        'rgba(83, 102, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(199, 199, 199, 1)',
                        'rgba(83, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Data untuk chart pekerjaan
    const pekerjaanCtx = document.getElementById('pekerjaanChart');
    if (pekerjaanCtx) {
        const pekerjaanChart = new Chart(pekerjaanCtx, {
            type: 'pie',
            data: {
                labels: ['PNS', 'TNI', 'Polri', 'Pensiunan', 'Swasta', 'Pedagang', 'Wiraswasta', 'Petani', 'Peternak', 
                    'Nelayan', 'BUMN', 'Honorer', 'Tukang Batu', 'Tukang Kayu', 'Tukang Jahit', 'Juru Masak', 'Guru', 'Sopir', 
                    'Lainnya', 'Tidak Bekerja'],
                datasets: [{
                    label: 'Jumlah Penduduk',
                    data: [132, 6, 18, 35, 4, 52, 25, 15, 9, 45, 8, 55, 16, 4, 2, 1, 3, 5, 33, 390],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(199, 199, 199, 0.7)',
                        'rgba(83, 102, 255, 0.7)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 12,
                            font: {
                                size: 10
                            }
                        }
                    }
                }
            }
        });
    }

    // Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animasi saat scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .stat-card, .staff-photo, .rt-photo');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        animateOnScroll();
    });

    // Active nav link berdasarkan section yang terlihat
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Animasi khusus untuk bagian Ketua RT/RW
    const animateRTPhotos = function() {
        const rtCards = document.querySelectorAll('#pemerintahan .card.text-center');
        
        rtCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    // Inisialisasi style awal untuk animasi RT/RW
    const rtCards = document.querySelectorAll('#pemerintahan .card.text-center');
    rtCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Jalankan fungsi animasi
    animateOnScroll();
    animateRTPhotos();
    
    // Jalankan ulang saat scroll untuk RT/RW
    window.addEventListener('scroll', animateRTPhotos);
});
