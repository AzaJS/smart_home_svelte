<script lang="ts">
	import { navigate } from "svelte-routing";
	import type { IUserLogin } from "../../../entities/auth";
	import { login } from "../../../entities/auth";
	import { writable } from "svelte/store";

	let obj: IUserLogin = {
		email: "",
		password: "",
	};

    let response: any = writable(false)

	const onLogin = async () => {
		if (obj.email !== "" && obj.password !== "") {
			let res = await login(obj);
            $response = res;
			console.log(res);
			if (res?.success) navigate("/");
			console.log(res);
		} else {
			alert("NOT FILLED");
		}
	};

</script>

<div class="input-group flex-nowrap auth">
	<div class="card">
		<h2 class="flex justify-center">Authorize yourself!</h2>
		{#if $response?.success === false}
			<span>
				{$response?.message}
			</span>
		{/if}
		<input
			class="form-control"
			bind:value={obj.email}
			type="text"
			placeholder="Login"
			required
		/>
		<input
			class="form-control"
			bind:value={obj.password}
			type="password"
			placeholder="Password"
			required
		/>
		<div class="btn-login">
			<button
				class="btn btn-outline-secondary"
				type="button"
				id="button-addon2"
				on:click={onLogin}
			>
				Login
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.auth {
		margin-top: 30%;
		padding: 20px;
		width: 100%;
		display: flex;
		justify-content: center;
		& > div.card {
			width: 90%;
			padding: 20px;
			& input {
				margin-bottom: 10px;
				border: 1px solid gray;
			}
		}
		.btn-login {
			display: flex;
			justify-content: center;
			& button {
				width: 300px;
			}
		}
	}
</style>
