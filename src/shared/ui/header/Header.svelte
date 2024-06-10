<script>
	import { getContext } from "svelte";

    const page = getContext("page")
</script>

<div class="header">
    <!-- <div></div> -->
    <h4>{$page || ""}</h4>
    <!-- <div></div> -->
</div>

<style lang="scss">
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background-color: var(--bs-tertiary-color);
        border-radius: 50px;
        margin: 10px;
        color: lightgray;
        // text-align: center;
    }
</style>