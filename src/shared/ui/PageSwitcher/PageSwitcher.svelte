<script lang="ts">
	import { afterUpdate, getContext, onMount } from "svelte";
	import { Link, navigate } from "svelte-routing";
	import type { IGetPropsParams } from "../../types";
	import homeSvg from "@SVG/footer-icons/home.png";
	import roomsSvg from "@SVG/footer-icons/floor-plan.png";
	import devicesSvg from "@SVG/footer-icons/devices.png";
	import user from "@SVG/footer-icons/user.png";
	import { checkAuth } from "../../api/auth/checkAuth";
	const page = getContext("page");

	let isAuth: boolean;

	const checkForToken = async () => {
		isAuth = await checkAuth()
		if(!isAuth) {
			navigate("/login")
		}
	}

	const tabs = [
		{
			image: homeSvg,
			text: "Dashboard",
			path: "/",
		},
		{
			image: roomsSvg,
			text: "Rooms",
			path: "/rooms",
		},
		{
			image: devicesSvg,
			text: "Devices",
			path: "/devices",
		},
		{
			image: user,
			text: "Profile",
			path: "/profile",
		},
	];

	const getProps = ({
		location,
		href,
		isPartiallyCurrent,
		isCurrent,
	}: IGetPropsParams) => {
		if (isCurrent) {
			for (let i of tabs) {
				if (i.path == href) {
					$page = i.text;
					return;
				}
			}
		}
	};

	afterUpdate(()=>{
		checkForToken()
	})

</script>

<ul class="nav nav-tabs footer__nav" id="myTab" role="tablist">
	{#each tabs as { text, image, path }}
		<li class="nav-item" role="presentation">
			<Link {getProps} to={path}>
				<button
					class="nav-link"
					class:active={$page === text}
					id="home-tab"
					data-bs-toggle="tab"
					type="button"
					role="tab"
					aria-controls="home-tab-pane"
					aria-selected="false"
				>
					<img class="nav-link__svg" src={image} alt={text} />
				</button>
			</Link>
		</li>
	{/each}
</ul>

<style lang="scss">
	.footer__nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: var(--bs-tertiary-color);
		position: absolute;
		bottom: 0;
		.nav-link .active {
			border-radius: 50px;
		}
		.nav-link__svg {
			width: 30px;
		}
	}
</style>
