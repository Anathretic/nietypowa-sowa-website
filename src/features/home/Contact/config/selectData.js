export const selectData = [
	{
		id: 'topic',
		name: 'topic',
		type: 'select',
		label: 'Temat',
		errorMessage: 'Wybierz temat!',
		required: true,
		labelValueArr: [
			{ value: '', label: '--- Wybierz temat ---', disabled: true },
			{ value: 'Kaski motocyklowe', label: 'Kaski motocyklowe' },
			{ value: 'Baki motocyklowe', label: 'Baki motocyklowe' },
			{ value: 'Kaski spadochronowe', label: 'Kaski spadochronowe' },
			{ value: 'Inne', label: 'Inne' },
		],
	},
];
