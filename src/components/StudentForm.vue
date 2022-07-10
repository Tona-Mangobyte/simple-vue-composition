<script>
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
    emits: ['saveStudent'],
    setup(_, context) {
        const form = {
            studentName: 'simple',
            studentPhone: '000-000-000'
        }
        function saveStudent() {
            console.info(form)
            context.emit('saveStudent', form)
        }
        return { form, saveStudent }
    },
})
</script>

<template>
    <form>
        <input type="text" name="studentName" :v-model="form.studentName">
        <input type="text" name="studentPhone" :v-model="form.studentPhone">
        <button @click="saveStudent">Submit</button>
    </form>
</template>
