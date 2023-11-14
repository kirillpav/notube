// Tracking time on page
const redirects = [
    "https://github.com/SimplifyJobs/Summer2024-Internships",
    "https://neetcode.io/roadmap",
    "test1",
    "test2",
    "test3",
    "test4"
];

function trackTime() {
    document.addEventListener("DOMContentLoaded", () => {
        const startTime = new Date().getTime();

        window.addEventListener("beforeunload", () => {
            const endTime = new Date().getTime();

            const totalTime = (endTime - startTime) / 1000;

            console.log(totalTime);
        });
    });
}

function blurScreen() {
    if (totalTime === 15) {
        // activate a css site
    }
}

function redirect() {
    const redirectIndex = Math.floor(Math.random() * redirects.length);
    return redirects[redirectIndex];
}

console.log(redirect());
