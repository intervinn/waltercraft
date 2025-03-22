
<script>
    let {children, style, ...props} = $props()
</script>

<button class={`bg-sd text-3xl px-10 py-5 mx-4 rounded-2xl my-2 duration-75 active:scale-95 hover:bg-line ${style}`} {...props}>
    {@render children()}
</button>
