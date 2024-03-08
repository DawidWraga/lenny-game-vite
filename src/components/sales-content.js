// src/components/SalesContent.js

export function createSalesContent(state) {
	return `
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Sales</h2>
      <p class="mb-4">Ahhh, the sound of ringing phones and business charm. You find yourself amongst the sales team. This is where we can sell all the stock we make. Be ready to persuade your buyer though... they won't be won over easily.</p>
      <div class="space-x-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'salesCall' })">Make a Sales Call</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'office' })">Back to Office</button>
      </div>
    </div>
  `;
}
