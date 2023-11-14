// Tracking time on page
const redirects = [
	"https://github.com/SimplifyJobs/Summer2024-Internships",
	"https://neetcode.io/roadmap",
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

function redirect() {}
