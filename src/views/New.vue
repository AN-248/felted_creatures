<template>
    <div>
        <text-box :texts="texts" />
    </div>
</template>

<script>
import TextBox from '../components/TextBox.vue'

export default {
    name: 'New',
    components: { TextBox },
    setup() {
        const texts = ['ぼくのからだをつくってね！'];

        return texts
    }
}
</script>