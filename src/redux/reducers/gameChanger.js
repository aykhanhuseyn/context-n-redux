export const gameChangerReducer = (state = 'Zooma', action) => {
	switch (action.type) {
		case 'COUNTER_STRIKE':
			return 'Counter Strike';
		case 'PUBG':
			return 'Playground';
		case 'POINT_BLANK':
			return 'Point';
		default:
			return state;
	}
};

// PascalCase
// camelCase
// snake_case
// UPPER_CASE
