<script>
    import { fade } from "svelte/transition";
    import Button from "../etc/button.svelte";

    let { seasons } = $props()
    let season = $state(seasons[0])
</script>

<div class="flex flex-col items-center lg:mx-auto lg:w-[85vw] mt-10">
    {#key season}
        <div in:fade={{duration:500}} class="w-full flex flex-col items-center justify-center lg:flex-row">
            <div class="flex flex-col text-left mx-6">
                <div class="flex flex-row">
                    <h1 class="font-extrabold text-3xl">{season.name}</h1>
                    <div class="flex flex-row items-center">
                        {#each season.tags as tag}
                            <div class="bg-sd px-3 py-1 rounded-xl bg-gradient-to-tr from-[#50488C]
                             font-bold text-white ml-3">
                                {tag}
                            </div>
                        {/each}
                    </div>
                </div>
                <hr class="w-64">
                <p class="mt-5 w-96 text-lg">{season.description}</p>
            </div>

            <img loading="lazy" src={season.image} alt={season.name} class="object-cover w-96 lg:h-96 rounded-2xl" id="season" />
        </div>
    {/key}

    <div class="flex flex-col lg:flex-row mt-5 overflow-x-scroll">
        {#each seasons as s}
        <Button onclick={() => {
                season = s
                document.getElementById("season").scrollIntoView({behavior: "smooth", block: "center"})
        }}>
            {s.name}
        </Button>
        {/each}
    </div>
</div>