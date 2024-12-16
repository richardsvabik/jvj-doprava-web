<script>
    import { Container } from '$components/atoms'
    import Fa from 'svelte-fa'
    import { faBars, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

    let { nav, subnav, links, stories, currentPath } = $props()
</script>

<div class="header__wrapper">
    <header class="header">
        <div class="header__content--wrapper z-40 bg-white rounded-lg">
            <Container>
                <div class="header__content z-40 bg-white">
                    <div class="header__left">
                        <div class="w-8 h-8 rounded overflow-hidden">
                            <svg viewBox="0 0 243.97 243.97" xmlns="http://www.w3.org/2000/svg"><path d="m34.79 34.79h174.39v174.39H34.79z" fill="#fff" stroke="#1d1d1b" stroke-miterlimit="10"></path><path d="m229.8.0H14.17a14.16 14.16.0 00-14.17 14.17V229.8A14.17 14.17.0 0014.17 244H229.8a14.18 14.18.0 0014.2-14.2V14.17a14.17 14.17.0 00-14.2-14.17zm-63.13 149.12a45.21 45.21.0 11-90.41.0v-4.48c0-3.77 3.81-6.82 8.51-6.82H96c4.71.0 8.52 3.05 8.52 6.82v4.48a17 17 0 1033.9.0v-4.48c0-3.77 3.82-6.82 8.52-6.82h11.22c4.71.0 8.52 3.05 8.52 6.82zm0-31.11a8.51 8.51.0 01-8.51 8.51h-10.88a8.5 8.5.0 01-8.5-8.51V58.14a8.5 8.5.0 018.5-8.5h10.88a8.51 8.51.0 018.51 8.5z" fill="#db0d15"></path></svg>
                        </div>
                        <nav>
                            <ul class="header__nav-list">
                                {#each nav as link, i}
                                    <li class="header__nav-item" class:header__nav-item--hasmegamenu={link.megamenu.length > 0}>
                                        <a href="" class="header__nav-link z-20 bg-white">
                                            {link.title}
                                        </a>
                                        {#each link.megamenu as megamenu}
                                            <div class="header__megamenu">
                                                <div class="border-t">
                                                    <Container>
                                                        <div class="grid grid-cols-12 py-10 gap-x-10 gap-y-6">
                                                            {#each megamenu.columns as column}
                                                                <div class="col-span-3">
                                                                    {#each column.groups as group}
                                                                        <div class="mb-10 last:mb-0">
                                                                            <div class="mb-6">
                                                                                <h2 class="font-medium text-xs mb-0.5 uppercase">{group.title}</h2>
                                                                                <p class="text-zinc-500 text-xs leading-tight">{group.subtext}</p>
                                                                            </div>
                                                                            <ul>
                                                                                {#each group.links as link}
                                                                                    <li class="mb-5">
                                                                                        <a href="" class="flex gap-3 header__group-link group">
                                                                                            <div class="w-8 h-8 border flex items-center justify-center text-red-600 rounded-md bg-gray-100 shrink-0">
                                                                                                <i class="fa-solid fa-{link.icon} scale-105">
                                                                                            </div>
                                                                                            <div class="-mt-0.5">
                                                                                                <div class="header__group-link-title font-medium text-xs mb-0.5 group-hover:text-red-600 transition-colors duration-100">
                                                                                                    {link.title.substr(4)}
                                                                                                </div>
                                                                                                <div class="text-xs text-zinc-500 leading-tight">
                                                                                                    {link.description}
                                                                                                </div>
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                {/each}
                                                                            </ul>
                                                                        </div>
                                                                    {/each}
                                                                </div>
                                                            {/each}
                                                        </div>
                                                    </Container>
                                                    {#if !megamenu.falafel_links.length}
                                                        <div class="bg-gray-50 border border-gray-100 py-12 mb-4 rounded-lg mx-4">
                                                            <Container>
                                                                falafel v2
                                                            </Container>
                                                        </div>
                                                    {/if}
                                                </div>
                                            </div>
                                        {/each}
                                    </li>
                                {/each}
                            </ul>
                        </nav>
                    </div>
                    <div class="flex gap-x-3 items-center">
                        <a href="#" class="transition-colors h-9 px-4 flex items-center hover:text-red-600 font-medium">
                            Log in
                        </a>
                        <a href="#" class="bg-red-600 hover:bg-red-700 rounded h-9 px-4 flex items-center text-sm font-medium text-gray-50">
                            Sign up
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    </header>
    {#if subnav}
        <div class="header__subnav rounded-b-lg border-t border-gray-100">
            <Container>
                <div class="flex gap-x-8 items-center justify-between">
                    <div class="font-semibold">
                        {subnav.title}
                    </div>
                    <nav>
                        <ul class="flex gap-x-4">
                            {#each subnav.links as link, i}
                                <li>
                                    <a href="" class="subnav__link" class:subnav__link--current={i===0}>
                                        {link.text}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    {/if}
</div>

<style>
    .header__wrapper {
        background-color: theme('colors.white.DEFAULT');
        position: fixed;
        top: theme('spacing.3');
        left: theme('spacing.3');
        right: theme('spacing.3');
        z-index: 1000;
        border-radius: theme('borderRadius.lg');
        box-shadow: theme('boxShadow.sm');
        border: 1px solid theme('colors.gray.100');
    }

    .header {
        position: relative;
    }

    .header__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__left {
        display: flex;
        align-items: center;
        gap: theme('spacing.4');
    }

    .header__nav-list {
        display: flex;
    }

    .header__nav-link {
        position: relative;
        padding: theme('spacing.5') theme('spacing.[3.5]');
        display: flex;
        align-items: center;
        color: theme('colors.zinc.800');
        font-size: theme('fontSize.sm');
        font-weight: theme('fontWeight.medium');
        transition: color 0.1s;
    }

    .header__nav-link:hover {
        color: theme('colors.red.600');
    }

    .header__nav-item--hasmegamenu .header__megamenu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        width: 100%;
        border-radius: 0 0 theme('borderRadius.lg') theme('borderRadius.lg');
        background-color: theme('colors.white.DEFAULT');
        overflow: hidden;
        display: none;
        z-index: -1;
        margin-top: -10px;
        padding-top: 10px;
    }
    .header__nav-item--hasmegamenu:hover .header__megamenu {
        display: block;
    }


    .header__nav-item--hasmegamenu::before {
        position: fixed;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: theme('colors.black');
        opacity: 0%;
        z-index: -1;
        pointer-events: none;
    }
    .header__nav-item--hasmegamenu:hover::before {
        opacity: 8%;
    }

    .header__nav-item--hasmegamenu .header__nav-link::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        transform: translateX(-100%);
        width: 9px;
        height: 9px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z'/%3E%3C/svg%3E");
    }

    .header__nav-item--hasmegamenu .header__nav-link {
        padding-right: theme('spacing.6');
        margin-right: theme('spacing.[1.5]');
    }

    .header__subnav {
        z-index: -2;
        position: relative;
    }

    .subnav__link {
        display: block;
        padding: theme('spacing.3') 0;
        color: theme('colors.zinc.700');
        font-size: theme('fontSize.sm');
        position: relative;
    }

    .subnav__link--current::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2.5px;
        background-color: theme('colors.red.600');
    }

    .header__group-link-title {
        position: relative;
        display: flex;
        align-items: center;
        max-width: fit-content;
        background-color: theme('colors.white.DEFAULT');
    }

    .header__group-link-title::after {
        content: '';
        position: absolute;
        display: block;
        right: 0;
        height: 15px;
        width: 15px;
        background-size: contain;
        z-index: -1;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='%23db0e16'%3E%3Cpath d='M633.85-434.5H151.87v-91h481.98L415.11-744.24 480-808.13 808.13-480 480-151.87l-64.89-63.89L633.85-434.5Z'/%3E%3C/svg%3E");
        transition: transform 0.25s;
    }
    .header__group-link:hover .header__group-link-title::after {
        transform: translateX(110%);
    }
</style>