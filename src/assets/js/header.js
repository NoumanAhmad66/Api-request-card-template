document.addEventListener('DOMContentLoaded', function() {
    const newsContent = document.querySelector('.news-content');

    // Function to stop scrolling on hover
    function stopScrolling() {
        newsContent.style.animationPlayState = 'paused'; // Pause the scrolling
    }

    // Function to start scrolling again
    function startScrolling() {
        newsContent.style.animationPlayState = 'running'; // Resume scrolling
    }

    // Add event listeners for mouse enter and leave
    newsContent.addEventListener('mouseenter', stopScrolling); // Pause when mouse enters
    newsContent.addEventListener('mouseleave', startScrolling); // Resume when mouse leaves

    // Immediately start scrolling on page load
    startScrolling(); // Ensure scrolling starts immediately
});