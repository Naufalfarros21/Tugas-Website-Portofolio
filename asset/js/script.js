/*============ scroll section active link =============*/

// Mengambil semua elemen section dan tautan navigasi
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Menanggapi event onscroll dari window
window.onscroll = () => {
    
    // Iterasi melalui setiap section
    sections.forEach(sec => {
        // Mendapatkan informasi tentang posisi dan dimensi section
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Memeriksa apakah window.scrollY berada di dalam section saat ini
        if(top >= offset && top < offset + height) {
            // Menghapus kelas 'active' dari semua tautan navigasi
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Menambahkan kelas 'active' pada tautan navigasi yang sesuai dengan section saat ini
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============ sticky navbar =============*/

    // Mengambil elemen header
    let header = document.querySelector('header');

    // Menanggapi event onscroll dari window
    header.classList.toggle('sticky', window.scrollY > 100);
};