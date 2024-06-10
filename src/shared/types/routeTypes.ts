import type { SvelteComponent } from "svelte";

export interface IGetPropsParams {
    location: Location;
    href: string;
    isPartiallyCurrent: boolean;
    isCurrent: boolean;
}

export interface RouteProps {
    path: string;
    component: SvelteComponent;
}