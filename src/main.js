import Loop  from './Loops.svelte';
import App from './App.svelte';
import Binding from './Binding.svelte';

const app = new App({
	target: document.body,
	props:{
		name:'John doe',
	}
});
const loop = new Loop({
	target: document.body,
})

// const binding = new Binding({
// 	target: document.body,
// });


export default app;