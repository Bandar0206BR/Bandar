document.getElementById('heartEmoji').addEventListener('click', function () {
  const heart = document.getElementById('heartEmoji');
  heart.classList.add('break');

  setTimeout(() => {
    document.body.innerHTML = `
      <div style="color:red; text-align:center; padding-top:100px; font-size:2rem; font-family: 'Poppins', sans-serif;">
        💔 This memory has been corrupted... <br><br>
        Kabhi kabhi kuch yaadein sirf dil ke kone mein reh jaati hain... 😔
      </div>
    `;
    document.body.style.background = "black";
  }, 1000); // animation ke baad content replace
});