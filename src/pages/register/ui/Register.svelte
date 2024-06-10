<script lang="ts">
	import { navigate } from "svelte-routing";
	import { register, type IUserCreate } from "../../../entities/auth";
	import { writable } from "svelte/store";

	let obj: IUserCreate = {
		email: "",
        username: "",
		password: "",
        is_admin: 1
	};

    let response: any = writable(false)


    const onRegister = async () => {
        if(obj.username !== "" && obj.email !== "" && obj.password !== ""){
           let res = await register(obj)
           $response = res;
           if(res?.success) navigate("/login")
           console.log(res)
        } else {
            alert("NOT FILLED")
        }
    }

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
			bind:value={obj.username}
			type="text"
			placeholder="Username"
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
				on:click={onRegister}
			>
				Register
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
