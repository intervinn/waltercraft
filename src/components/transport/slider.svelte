<script>
    import { fade } from "svelte/transition";

    export let seasons = []
    let season = seasons[0]
</script>

<div class="flex flex-col items-center lg:mx-auto lg:w-[85vw] mt-10">
    {#key season}
        <div in:fade={{duration:500}} class="w-full flex flex-col items-center justify-center lg:flex-row">
            <div class="flex flex-col text-left mx-6">
                <h1 class="font-extrabold text-3xl">{season.name}</h1>
                <hr class="w-64">
                <p class="mt-5 w-96 text-lg">{season.description}</p>
            </div>

            <img loading="lazy" src={season.image} alt={season.name} class="object-cover w-96 lg:h-96 rounded-2xl" id="season" />
        </div>
    {/key}

    <div class="flex flex-col lg:flex-row mt-5 overflow-x-scroll">
        {#each seasons as s}
        <button on:click={() => {
            season = s
            document.getElementById("season").scrollIntoView({behavior: "smooth", block: "center"})
        }} class="bg-sd text-3xl px-10 py-5 mx-4 rounded-2xl my-2">
            {s.name}
        </button>
        {/each}
    </div>
</div>