document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section.hidden");

    function revealSections() {
        let delay = 0;
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                setTimeout(() => {
                    section.classList.add("show");
                }, delay);
                delay += 300; // Delay each section's animation
            }
        });
    }

    // Trigger when scrolling
    window.addEventListener("scroll", revealSections);

    // Run once to check already visible sections
    revealSections();
});
