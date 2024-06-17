<script>
    import Slider from "../transport/slider.svelte";
    import {seasons, seasonsHeading} from "$lib/constants.js"

</script>
<div class="flex flex-col items-center justify-center text-center pt-12 shadow-white shadow-2xl">
    <h1 class="text-4xl font-extrabold mb-5">Сезоны</h1>
    <p class="text-xl lg:w-[35rem]">
        {seasonsHeading}
    </p>
    
    <Slider seasons={seasons} />
</div>