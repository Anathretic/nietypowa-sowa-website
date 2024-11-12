export const inputData = [
	{
		id: 'username',
		name: 'username',
		type: 'text',
		placeholder: 'Wprowadź swoje imię..',
		label: 'Imię',
		errorMessage: 'Wprowadź poprawnie imię!',
		pattern: '^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{3,32}$',
		required: true,
	},
	{
		id: 'email',
		name: 'email',
		type: 'email',
		placeholder: 'Wprowadź swój e-mail..',
		label: 'E-mail',
		errorMessage: 'Wprowadź poprawnie e-mail!',
		required: true,
	},
];
