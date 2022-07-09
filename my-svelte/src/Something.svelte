<script>
    import { delayRender } from './lifecycle.js'

    let done = delayRender(1000);
</script>

{#if $done}
    <h1>something..</h1>
{/if}