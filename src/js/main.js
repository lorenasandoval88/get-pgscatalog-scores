import { loadScoreStats } from "./loadScores.js";
import { loadTraitStats } from "./loadTraits.js";

export async function initStats() {
	await Promise.allSettled([loadTraitStats(), loadScoreStats()]);
}

if (typeof window !== "undefined") {
	window.initStats = initStats;
	window.loadScoreStats = loadScoreStats;
	window.loadTraitStats = loadTraitStats;
}

if (typeof document !== "undefined") {
	document.addEventListener("DOMContentLoaded", () => {
		initStats();
	});
}
