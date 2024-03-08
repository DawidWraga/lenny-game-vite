// src/components/StatsContent.js

export function createStatsContent(state) {
	return `
        <div class="p-4 bg-white rounded shadow">
            <span class="block text-lg mb-2">Money: £<strong class="font-bold">${state.money}</strong></span>
            <span class="block text-lg mb-2">Followers: <strong class="font-bold">${state.followers}</strong></span>
            <span class="block text-lg mb-2">Chilled Beams: <strong class="font-bold">${state.chilledBeam}</strong></span>
            <span class="block text-lg mb-2">MVHR Units: <strong class="font-bold">${state.mvhrUnit}</strong></span>
        </div>
    `;
}
