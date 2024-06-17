<script>
    import Footer from "../components/layout/footer.svelte";
    import Navbar from "../components/layout/navbar.svelte"
    import Entrance from "../components/sections/entrance.svelte";
    import Header from "../components/sections/header.svelte";
    import Seasons from "../components/sections/seasons.svelte";
</script>

<div class="bg-bg text-white min-h-screen w-screen flex flex-col">
    <Navbar/>
    <Header/>
    <Seasons/>
    <Entrance/>
    <Footer/>
</div>