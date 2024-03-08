// src/store.js
const initialState = {
	money: 100,
	chilledBeam: 0,
	mvhrUnit: 0,
	officeVisits: 0,
	followers: 0,
	persuasion: 0,
	location: 'office',
};

/**
 * Retrieves the current state from localStorage.
 * @returns {Object} The current state.
 */
export function getState() {
	const state = localStorage.getItem('state');
	return state ? JSON.parse(state) : initialState;
}

/**
 * Updates the state in localStorage.
 * @param {Object} newState - The new state to merge with the current state.
 */
export function setState(newState) {
	const currentState = getState();
	const updatedState = { ...currentState, ...newState };
	localStorage.setItem('state', JSON.stringify(updatedState));
	window.dispatchEvent(new Event('storage'));
}

/**
 * Makes a LinkedIn post and updates the state.
 */
function makeLinkedInPost() {
	const currentState = getState();
	if (currentState.money >= 10) {
		setState({
			money: currentState.money - 10,
			followers: currentState.followers + 10,
		});
	}
}

/**
 * Sends a marketing email and updates the state.
 */
function makeMarketingEmail() {
	const currentState = getState();
	if (currentState.money >= 5) {
		setState({
			money: currentState.money - 5,
			followers: currentState.followers + 5,
		});
	}
}
/**
 * Makes a chilled beam and updates the state.
 */
function makeChilledBeam() {
	const currentState = getState();
	if (currentState.money >= 20) {
		setState({
			money: currentState.money - 20,
			chilledBeam: currentState.chilledBeam + 1,
		});
	}
}

/**
 * Makes an MVHR unit and updates the state.
 */
function makeMvhrUnit() {
	const currentState = getState();
	if (currentState.money >= 30) {
		setState({
			money: currentState.money - 30,
			mvhrUnit: currentState.mvhrUnit + 1,
		});
	}
}

const baseSuccessRate = 0.65; // Base success rate for sales
const baseSuccessRateSpecial = 0.3;
const followerImpactOnSales = 0.001; // Each follower increases success rate
const followerImpactOnSalesSpecial = 0.00001;
const baseEarnings = 13; // Base earnings from a successful sale
const baseEarningsSpecial = 10000;
const earningsMultiplier = 0.1; // Multiplier for earnings based on followers

function sellChilledBeam() {
	const currentState = getState();
	if (currentState.chilledBeam > 0) {
		const successRate =
			baseSuccessRate + currentState.followers * followerImpactOnSales;
		if (Math.random() < successRate) {
			const unitsSold =
				Math.floor(Math.random() * currentState.chilledBeam) + 1;
			const earnings =
				baseEarnings * unitsSold +
				currentState.followers * earningsMultiplier * unitsSold +
				Math.random() * 50;
			setState({
				chilledBeam: currentState.chilledBeam - unitsSold,
				money: currentState.money + Math.floor(earnings),
			});
		} else {
			const loss = 10;
			setState({
				money: currentState.money - loss,
			});
		}
	}
}

function sellMvhrUnit() {
	const currentState = getState();
	if (currentState.mvhrUnit > 0) {
		const successRate =
			baseSuccessRate + currentState.followers * followerImpactOnSales;
		if (Math.random() < successRate) {
			const unitsSold = Math.floor(Math.random() * currentState.mvhrUnit) + 1;
			const earnings =
				(baseEarnings + 20) * unitsSold +
				currentState.followers * earningsMultiplier * unitsSold +
				Math.random() * 50;
			setState({
				mvhrUnit: currentState.mvhrUnit - unitsSold,
				money: currentState.money + Math.floor(earnings),
			});
		} else {
			const loss = 15;
			setState({
				money: currentState.money - loss,
			});
		}
	}
}

function sellChilledBeamSpecial() {
	const currentState = getState();
	if (currentState.chilledBeam > 0) {
		const successRate =
			baseSuccessRateSpecial +
			currentState.followers * followerImpactOnSalesSpecial;
		if (Math.random() < successRate) {
			const unitsSold =
				Math.floor(Math.random() * currentState.chilledBeam) + 1;
			const earnings =
				baseEarningsSpecial * unitsSold +
				currentState.followers * earningsMultiplier * unitsSold +
				Math.random() * 50;
			setState({
				chilledBeam: currentState.chilledBeam - unitsSold,
				money: currentState.money + Math.floor(earnings),
			});
		} else {
			const loss = 50;
			setState({
				money: currentState.money - loss,
			});
		}
	}
}

function sellMvhrUnitSpecial() {
	const currentState = getState();
	if (currentState.mvhrUnit > 0) {
		const successRate =
			baseSuccessRateSpecial +
			currentState.followers * followerImpactOnSalesSpecial;
		if (Math.random() < successRate) {
			const unitsSold = Math.floor(Math.random() * currentState.mvhrUnit) + 1;
			const earnings =
				(baseEarningsSpecial + 20) * unitsSold +
				currentState.followers * earningsMultiplier * unitsSold +
				Math.random() * 50;
			setState({
				mvhrUnit: currentState.mvhrUnit - unitsSold,
				money: currentState.money + Math.floor(earnings),
			});
		} else {
			const loss = 75;
			setState({
				money: currentState.money - loss,
			});
		}
	}
}

/**
 * DONT ACTUALLY DO THIS IN A REAL APP!
 */
window.sellChilledBeam = sellChilledBeam;
window.sellMvhrUnit = sellMvhrUnit;
window.sellChilledBeamSpecial = sellChilledBeamSpecial;
window.sellMvhrUnitSpecial = sellMvhrUnitSpecial;
window.getState = getState;
window.setState = setState;
window.makeLinkedInPost = makeLinkedInPost;
window.makeMarketingEmail = makeMarketingEmail;
window.makeChilledBeam = makeChilledBeam;
window.makeMvhrUnit = makeMvhrUnit;
