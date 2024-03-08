// src/components/OfficeContent.js
import { setState } from '../store.js';

// window.setState = setState;
export function createOfficeContent(state) {
	return `
    <div class="bg-white p-4  rounded shadow">
      <h2 class="text-xl font-bold mb-4">Office</h2>
      <p class="mb-4">${
				state.officeVisits === 0
					? "Welcome! You have just been appointed as head of Frenger! It is your job to manage the business. Invest in Chilled Beams wisely and don't lose all our money. No pressure!"
					: 'Welcome back to the office! Time to review our progress and plan our next moves.'
			}</p>
      <div class="space-x-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'factory' })">Go to Factory</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'sales' })">Visit Sales Team</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'marketing' })">Visit Marketing Team</button>
      </div>
    </div>
  `;
}
