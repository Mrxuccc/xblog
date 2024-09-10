<template>
    <div class="box">
        <div class="wrapper">
            <img v-lazy="{ nolazy }" :data-src="src" v-bind="$attrs" class="image" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        lazy: boolean,
        src: string
    }>(),
    {
        lazy: true,
        src: ''
    }
);
props;


function lazyBinding(el: any, binding: any) {
    const placehold = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

    const { nolazy } = binding.value

    if (nolazy) return (el.src = el.dataset.src || placehold)

    el.src = placehold

    const obServer = new IntersectionObserver(entries => {
        // 如果 intersectionRatio 为 0，则目标在视野外，
        // 我们不需要做任何事情。
        if (entries.find(v => v.intersectionRatio)) {
            el.src = el.dataset.src || placehold
            obServer.unobserve(el)
        }
    })
    obServer.observe(el)
}

inheritAttrs: false

const nolazy = computed(() => {
    return !lazy
})
const lazy = {
    bind: (el: any, binding: any) => {
        lazyBinding(el, binding)
    },
    componentUpdated: (el: any, binding: any) => {
        lazyBinding(el, binding)
    },
}
</script>

<style scoped lang="scss">
@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.box {
    position: relative;
    width: 300px;

    .wrapper {
        position: relative;
        width: 100%;
        padding-top: 100%;

        .image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-color: rgb(168, 210, 255);

            &.show {
                animation: fade 0.5s ease-in-out;
            }
        }
    }
}
</style>