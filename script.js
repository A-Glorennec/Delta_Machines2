document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');
    const h1Anim = document.querySelectorAll('.center'); // Update this line to select the h1 element with the class 'center'

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
