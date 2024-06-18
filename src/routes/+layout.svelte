<script>
    import "../app.css"
    import Footer from "../components/layout/footer.svelte";
    import Navbar from "../components/layout/navbar.svelte";
</script>

<div class="bg-bg text-white min-h-screen w-screen flex flex-col">
    <Navbar/>
    <slot/>
    <Footer/>
</div>