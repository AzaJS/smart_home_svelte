<script lang="ts">
    import housePhoto from "@SVG/other/hata.jpg";
	import type { IHouseData } from "../../../entities/house";

    export let data: IHouseData;

</script>


<div class="card house-card">
	<img src={housePhoto} class="card-img-top" alt={data.name}/>
	<div class="card-body">
		<div class="text-center">
			<h4 class="h4">{data.name}</h4>
			<p>House</p>
			<h5>Time created</h5>
			<pre class="">{data.date_added}</pre>
			<h5>Time mod</h5>
			<pre class="">{data.date_modified}</pre>
		</div>
	</div>
</div>


<style>
</style>