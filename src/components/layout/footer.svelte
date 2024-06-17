<script>
    import {footerEN, footerRU} from "$lib/constants"
</script>

<div class="w-full bg-fg border-t-2 border-line flex flex-row h-fit relative">
    <img src="gaming.png" alt="tushmar" class="absolute right-0" />
    <div class="flex flex-col lg:ml-32 items-start">
        <div class="flex flex-col lg:flex-row lg:items-center mt-5">
            <div class="flex flex-row items-center">
                <img src="logo.png" alt="WalterCraft" class="aspect-square w-12 lg:w-24 border-solid border-2 border-white rounded-2xl"/>
                <span class="text-2xl lg:text-3xl h-fit font-bold text-white ml-2">WalterCraft</span>
            </div>
            <div class="flex flex-row mt-2">
                <!--
                <img src="github.png" class="aspect-auto h-9 w-9 lg:ml-5" />
                <img src="discord.png" class="aspect-auto h-9 w-12 ml-2 lg:ml-5" />
                -->
            </div>
        </div>

        <p class="lg:w-96 h-fit mt-2 text-[#95969E]">
            {footerRU}
        </p>

        <p class="lg:w-96 h-fit mt-4 text-[#95969E]">
            {footerEN}
        </p>
    </div>
</div>