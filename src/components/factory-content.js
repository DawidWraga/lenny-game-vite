// src/components/FactoryContent.js

export function createFactoryContent(state) {
	return `
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Factory</h2>
      <p class="mb-4">You find yourself in the factory. It's time to get to work. These chilled beams aren't gonna make themselves!</p>
      <div class="space-x-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="makeChilledBeam()">Make a Chilled Beam (-£20)</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="makeMvhrUnit()">Make a MVHR Unit (-£30)</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="setState({ location: 'office' })">Back to Office</button>
      </div>
    </div>
  `;
}
