export const inputData = [
	{
		id: 'username',
		name: 'username',
		type: 'text',
		placeholder: 'Wprowadź swoje imię i nazwisko..',
		label: 'Imię i nazwisko',
		errorMessage: 'Wprowadź poprawnie dane!',
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
