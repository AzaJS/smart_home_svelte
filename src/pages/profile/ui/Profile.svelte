<script lang="ts">
	import { onMount } from "svelte";
	import { checkAuth } from "../../../shared/api/auth/checkAuth";
	import { Link } from "svelte-routing";
	import { logout } from "../../../entities/auth";
	let isAuth: Boolean;

	onMount(async () => {
		isAuth = await checkAuth();
	});

</script>

{#if !isAuth}
	<div class="logout">
		<button class="btn btn-secondary" on:click={() => logout()}
			>logout</button
		>
	</div>
{:else}
<div class="links">
    <Link to="/register">
		<button class="btn btn-secondary"> Register </button>
	</Link>
	<Link to="/login">
		<button class="btn btn-secondary"> Login </button>
	</Link>
</div>
{/if}

<style>
	.logout {
		text-align: center;
	}
    .links {
        text-align: center;
    }
</style>
