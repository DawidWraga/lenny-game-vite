// src/components/sales-call-content.js
import { getState, setState } from '../store.js';

export function createSalesCallContent(state) {
	const { chilledBeam, mvhrUnit } = state;

	if (chilledBeam === 0 && mvhrUnit === 0) {
		return `
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold mb-4">Sales Call</h2>
        <p class="mb-4">You have no product to sell! Go to the factory to make more.</p>
        <div class="space-x-2">
          <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'sales' })">Back to Sales</button>
        </div>
      </div>
    `;
	}

	const isSpecialClient = Math.random() < 0.1; // 10% chance of a special client

	if (isSpecialClient) {
		return `
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold mb-4">Sales Call</h2>
        <p class="mb-4">A high value client is interested! This could be big!</p>
        <div class="space-x-2">
          <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="sellChilledBeamSpecial()">Sell Chilled Beam</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="sellMvhrUnitSpecial()">Sell MVHR Unit</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'sales' })">Finish Calling</button>
        </div>
      </div>
    `;
	}

	return `
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Sales Call</h2>
      <p class="mb-4">Stewart answers the phone, an experienced engineer from Germany. He's looking for some new units for an office he's building.</p>
      <div class="space-x-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="sellChilledBeam()">Sell Chilled Beam</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="sellMvhrUnit()">Sell MVHR Unit</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'sales' })">Finish Calling</button>
      </div>
    </div>
  `;
}
