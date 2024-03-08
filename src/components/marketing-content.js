// src/components/MarketingContent.js
import { getState, setState } from '../store.js';

export function createMarketingContent(state) {
	return `
	
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Marketing</h2>
      <p class="mb-4">The marketing team. Also known as the foundation that keeps Frenger from collapsing. Invest your money here to increase the profits that you'll make later.</p>
      <div class="space-x-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="makeLinkedInPost()">Make LinkedIn Post (-£10)</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" 
				onclick="makeMarketingEmail()"
				>Send Marketing Email (-£5)</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'office' })">Back to Office</button>
      </div>
    </div>
  `;
}
