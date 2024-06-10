<script lang="ts">
	import { AppRouter } from "./routers";
	import "./app.scss";
	import StatesProvider from "../middlewares/StatesProvider.svelte";
</script>

<main>
	<StatesProvider>
		<AppRouter />
	</StatesProvider>
</main>

<style>
</style>
