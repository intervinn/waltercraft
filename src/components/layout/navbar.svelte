<script>
    import Nav from "../etc/nav.svelte";
    import { navLinks } from "$lib/constants.js"
    import Button from "../etc/button.svelte";
    import { fade } from "svelte/transition";

    let showDropdown = $state(false)
</script>
<div class="w-full bg-fg border-b-2 border-line h-24 static flex flex-row justify-between lg:justify-normal items-center z-10">
    <img src="assets/logo.png" alt="logo" class="aspect-square h-12 lg:h-20 border-solid border-2 border-white rounded-3xl lg:ml-24"/>
    <span class="font-extrabold ml-2 text-2xl">WalterCraft</span>
    
    {#each navLinks as link}
        <Nav href={link.href} style="hidden lg:block">
            {link.name}
        </Nav>    
    {/each}

    <svg 
    onclick={() => showDropdown = !showDropdown } 
    class="w-5 h-5 mr-3 md:hidden" 
    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    </svg>

    {#if showDropdown}
        <div in:fade={{duration: 150}} out:fade={{duration:150}} class="origin-top-right absolute right-0 w-full py-2 top-20 bg-sd rounded-2xl flex flex-col">
            {#each navLinks as link}
                <Button onclick={() => window.open(link.href, "_blank")} style="border-line border-2">
                    {link.name}
                </Button>
            {/each}
        </div>
    {/if}
    <!--
    <div class="h-full flex items-center justify-center ml-5">
        <a class="text-[#ACACAC] text-xl">Галерея</a>
    </div>
    <div class="h-full flex items-center justify-center ml-10">
        <a class="text-[#ACACAC] text-xl">FAQ</a>
    </div>
    <div class="h-full flex items-center justify-center ml-10">
        <a class="text-[#ACACAC] text-xl">Блог</a>
    </div>
    -->
</div>