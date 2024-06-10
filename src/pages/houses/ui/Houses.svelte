<script lang="ts">
	import { createHouse, type IHouseData } from "../../../entities/house";
	import type { ICreateHouse } from "../../../entities/house/model/types";
	import HouseCard from "./HouseCard.svelte";

	let formData: ICreateHouse = {
		name: ""
	}

	async function onFormSubmit(): void {
		console.log(formData);
		if(formData.name.trim()){
			let res = await createHouse(formData)
			console.log(res)
		}

	}

	const houses: IHouseData[] = [
		{
			id: 1,
			name: "asanbay",
			date_added: "1.2.23 15:30",
			date_modified: "1.2.23 15:30",
		},
	];
</script>

<div class="d-flex justify-content-center m-2">
	<button type="button" class="btn btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#exampleModal">
		+
	</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<input class="form-control" type="text" bind:value={formData.name} placeholder="Enter name..." />
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" on:click={onFormSubmit} class="btn btn-light">Create House!</button>
			</div>
		</div>
	</div>
</div>
{#each houses as house}
	<HouseCard data={house} />
{/each}