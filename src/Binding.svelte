<!-- 
Data binding using bind:value = {variable}
import export variable from parent component 
-->

<script>
	let firstName;
	let lastName;
	let fullName;
	
	//using reactive value for fullname 
	$:fullName = `${firstName} ${lastName}`;
	$: console.log('lll',fullName);
</script>

<main>

	<h1>My Full Name is : {(fullName!=undefined && fullName != null ) ? fullName : ''} !</h1>

    <!-- Uni-directional data binding -->
	<!-- <input type='text' value={color} on:input ={handleInput} /> -->

    <!-- Bidirectional binding -->
	<input type='text' bind:value={firstName} />
	<input type='text' bind:value={lastName} />
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