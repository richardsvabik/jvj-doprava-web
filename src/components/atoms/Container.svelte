<script>    
    let { wider, children } = $props()
</script>

<div class="c-container" class:c-container--wider={wider}>
    {@render children?.()}
</div>

<style lang="postcss">
    .c-container {
        margin: 0 auto;
        padding: 0 1rem;
        height: 100%;
        max-width: 540px;
        @screen md {
            max-width: 680px;
        }
        @screen lg {
            max-width: 900px;
        }
        @screen xl {
            max-width: 1210px;
        }
        @screen 2xl {
            max-width: 1380px;
        }
        @screen 3xl {
            max-width: 1680px;
        }
    }

    .c-container--wider {
        @screen xl {
            max-width: 1360px;
        }
        @screen 2xl {
            max-width: 1560px;
        }
        @screen 3xl {
            max-width: 1760px;
        }
    }
</style>