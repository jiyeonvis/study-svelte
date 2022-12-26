<script>
	export let name;

	const GSheetsReader = require('g-sheets-api');

	const options = {
		apiKey : 'AIzaSyAaPrPRzbpnirGdoaItNU6H2C283bn2M90',
		sheetId : '1jeFLjaehogonufKqNcNvR0gZVmuam1vrDIBNkY8Uba4'
	}

	GSheetsReader(
		options, 
		results => {
			console.log(results);
		}
	)

	const fn = () => 1;

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	hello~~~
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
