// pause video after clicking next button

// Sabhi videos ko select karne ke liye
const videos = document.querySelectorAll('video');

// Jab bhi next button pe click ho
document.getElementById('nextButton').addEventListener('click', () => {
    videos.forEach(video => {
        video.pause(); // Har video ko pause kar do
    });
});

// Agar previous button bhi hai toh uspe bhi same karo
document.getElementById('previousButton').addEventListener('click', () => {
    videos.forEach(video => {
        video.pause();
    });
});

