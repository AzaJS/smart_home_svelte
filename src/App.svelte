<Router {router}></Router><script>import routes from "../.routify/routes.default.js";
import { Router, createRouter } from "@roxi/routify";
import { onMount } from "svelte";
import "./app.scss";

onMount(async () => {
  // this is enough for most components
  await import("bootstrap");

  // some components require a bootstrap instance, to fulfil their job. In that case, use this:
  // const bootstrap = await import("bootstrap");
  // sample usage: 
  // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
});

export const router = createRouter({
  routes
});</script><script>import { onMount } from "svelte";
import "./app.scss";

onMount(async () => {
  // this is enough for most components
  await import("bootstrap");

  // some components require a bootstrap instance, to fulfil their job. In that case, use this:
  // const bootstrap = await import("bootstrap");
  // sample usage: 
  // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
});</script><style></style>