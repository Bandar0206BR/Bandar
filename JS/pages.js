let currentPage = 0;
const pages = document.querySelectorAll('.page');
const next = document.getElementById('nextButton');
const prev = document.getElementById('previousButton');

if (currentPage == 0) {
    prev.style.visibility = "hidden";
    next.style.marginLeft = "-60px";
}


function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add('flipped');

        currentPage++;

        if (currentPage == pages.length - 1) {
            next.style.visibility = "hidden";
            prev.style.marginLeft = "65px"
        }

        if (currentPage >= 0) {
            prev.style.visibility = "visible";
            next.style.marginLeft = "10px"
        }

    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');

        if (currentPage < pages.length - 1) {
            next.style.visibility = "visible";
            prev.style.marginLeft = "20px"
        }

        if (currentPage == 0) {
            prev.style.visibility = "hidden";
            next.style.marginLeft = "-65px";
        }

    }
}


// z-index ke liye taki pages ko ek upar ek rakh sake
// ye hamesha last number se start hota hai 1st page index last deta hai

let z = pages.length;

pages.forEach(page => {
    page.style.zIndex = z--;
});

