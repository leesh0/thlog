<template>
  <div class="py-2 bg-gray-50 px-4 rounded-full">
    <template slot="prefix"> </template>
    <input
      class="focus:outline-none border-none bg-gray-50 w-full"
      :placeholder="placeholder"
      :spellcheck="false"
      v-model="inputValue"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value'],
  data() {
    return {
      inputValue: this.value,
    }
  },
  methods: {
    input() {
      this.$emit('input', this.value)
    },
  },
}
</script>
