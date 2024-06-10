<script lang="ts">
	import { Router, Route, navigate } from "svelte-routing";
	import { SignIn } from "../../pages/sign-in";
	import { Layout } from "@App/layout";
	import { PageSwitcher } from "../../shared/ui/PageSwitcher";
	import { Rooms } from "../../pages/rooms";
	import { Devices } from "../../pages/devices";
	import { Header } from "../../shared/ui/header";
	import { Profile } from "../../pages/profile";
	import Register from "../../pages/register/ui/Register.svelte";

    const routes = [
        {
            component: SignIn,
            link: "/login"
        },
        {
            component: Rooms,
            link: "/rooms"
        },
        {
            component: Devices,
            link: "/devices"
        },
        {
            component: Layout,
            link: "/",
        },
        {
            component: Profile,
            link: "/profile"
        },
        {
            component: Register,
            link: "/register"
        }
    ]


</script>

<Router>
    <div class="header">
        <Header />
    </div>
    {#each routes as {component, link} }
        <Route path={link} component={component} />
    {/each}
    <slot />
    <div class="footer">
        <PageSwitcher />
    </div>
</Router>

<style>
    .footer {
        display: flex;
        justify-content: center;
    }
</style>
