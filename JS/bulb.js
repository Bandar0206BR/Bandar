function pullRope() {
    const bulb = document.getElementById('bulb');
    const flipbook = document.getElementById('flipbook');
    const container = document.getElementById('bulbContainer');
    const rope = document.getElementById('rope');
    const corrupt = document.getElementById('heartEmoji');

    // Rope swing animation
    rope.classList.add('swing');
    setTimeout(() => {
        rope.classList.remove('swing');
    }, 600);

    setTimeout(() => {

        bulb.classList.toggle('on')

        if (bulb.classList.contains('on')) {
            flipbook.classList.add('visible');
            corrupt.style.visibility = "hidden";

            window.scrollTo({
                top: 300,
                behavior: "smooth"
            });

            document.body.style.background = "linear-gradient(to right, #f5b36c, #e07b28)";
        } else {
            flipbook.classList.remove('visible');
            corrupt.style.visibility = "visible";
            document.body.style.background = "linear-gradient(to right, #000000, #000000)";
        }

    }, 800);
}