<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

    const page = writable(false)
    
    setContext("page", page)

</script>

<slot />