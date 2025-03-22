<script>
    let {style, children, href, ...props} = $props()
</script>

<a {href} target="_blank" class={` text-white font-normal ml-10  ${style}`} {...props}>
    {@render children()}
</a>