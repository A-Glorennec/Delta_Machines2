// const { parse } = require("dotenv");

document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');
    const h1Anim = document.querySelectorAll('.center'); 

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    h1Anim.forEach(anim => {
        appearOnScroll.observe(anim);
    });
});

const slider = document.getElementById('myRange');
    slider.addEventListener('input', updateTeamName);
    updateTeamName();

    function updateTeamName() {
        const teamName = document.getElementById('teamName');
        const value = parseInt(slider.value, 10);

        if (value >= 500 && value < 1000) {
            teamName.textContent = "Delta Machines 5";
        } else if (value >= 1000 && value < 2500) {
            teamName.textContent = "Delta Machines 4";
        } else if (value >= 2500 && value < 4000) {
            teamName.textContent = "Delta Machines 3";
        } else if (value >= 4000 && value < 5000) {
            teamName.textContent = 'Delta Machines 2';
        } else if (value >= 5000) {
            teamName.textContent = 'Delta Machines 1';
        } else {
            teamName.textContent = '';
        }
    }
;
