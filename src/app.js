import './index.css';

// src/app.js
import { getState, setState } from './store.js';
import { createOfficeContent } from './components/office-content.js';
import { createFactoryContent } from './components/factory-content.js';
import { createSalesContent } from './components/sales-content.js';
import { createMarketingContent } from './components/marketing-content.js';
import { createStatsContent } from './components/stats-content.js';
import { createSalesCallContent } from './components/sales-call-content.js';

/**
 * Creates the main application component.
 * @param {HTMLElement} container - The container element to render the app.
 */
export function createApp(container) {
	/**
	 * Renders the application content based on the current state.
	 */
	function render() {
		const state = getState();

		const content = {
			office: createOfficeContent(state),
			factory: createFactoryContent(state),
			sales: createSalesContent(state),
			marketing: createMarketingContent(state),
			salesCall: createSalesCallContent(state),
		}[state.location];

		container.innerHTML = `
      <div class="bg-gray-100 min-h-screen">
        <header class="bg-blue-500 text-white p-4">
          <h1 class="text-2xl font-bold">Frenger Game</h1>
        </header>
				<aside class="p-4">
				${createStatsContent(state)}
				</aside>
        <main class="p-4">
          ${content}
        </main>
        <footer class="bg-gray-200 p-4">
          <p class="text-center">Frenger Game &copy; 2023</p>
        </footer>
      </div>
    `;
	}

	// Listen for storage changes and re-render the app
	window.addEventListener('storage', render);

	// Initial render
	render();
}
