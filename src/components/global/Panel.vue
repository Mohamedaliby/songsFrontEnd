<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="teal">
            <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
           <slot name="button" />
        </v-toolbar>
                <slot>
                    No slot content.
                </slot>
    </div>
</template>

<script>
    export default {
       props:[
           'title'
       ]
    }
</script>

<style scoped>

</style>
