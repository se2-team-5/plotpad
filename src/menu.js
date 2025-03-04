document.addEventListener('DOMContentLoaded', () => {
    const loadStoryButton = document.getElementById('load-story');
    const newStoryButton = document.getElementById('new-story');

    loadStoryButton.addEventListener('click', () => {
        console.log('Load Story button clicked');
    });

    newStoryButton.addEventListener('click', () => {
        console.log('New Story button clicked');
        // Redirect to the editor page
        window.location.href = '/views/editor';
    });
});