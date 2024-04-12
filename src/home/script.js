
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        // Toggle the display of the navbar
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
    });
});



document.querySelectorAll('.icons').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.05)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});


function sortIcons(desc = false) {
    const container = document.querySelector('.icons-container');
    Array.from(container.children)
        .sort((a, b) => {
            const numA = parseInt(a.querySelector('h3').textContent);
            const numB = parseInt(b.querySelector('h3').textContent);
            return desc ? numB - numA : numA - numB;
        })
        .forEach(node => container.appendChild(node));
}



document.querySelectorAll('.icons').forEach(icon => {
    const tooltip = document.createElement('span');
    tooltip.textContent = 'More info';
    tooltip.style.cssText = 'visibility: hidden; position: absolute; background-color: black; color: white; padding: 5px; border-radius: 5px;';
    icon.appendChild(tooltip);
    icon.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
    });
    icon.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
    });
});


var swiper = new Swiper('.featured-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // You can also add more options here according to your needs
});