<script setup>
defineProps({
  label: String,
  dataInput: String,
  type: String,
  placeholder: String,
});

defineEmits(["update:dataInput"]);
</script>
<template>
  <div class="input-container">
    <label for="e-mail-input">{{ label }}</label>
    <input
      :type="type"
      id="e-mail-input"
      name="email"
      :placeholder="placeholder"
      class="input-format"
      :value="dataInput"
      @input="$emit('update:dataInput', $event.target.value)"
    />
    <slot name="bottomLabel"></slot>
  </div>
</template>
<style>
.input-container {
  display: flex;
  flex-direction: column;
}

.input-container a {
  text-decoration: none;
  margin: 0 0 0 auto;
  color: var(--font-color-reset-password-text);
}

.input-format {
  outline: none;
  padding: 1.5rem 1rem;
  border: 1px solid var(--input-border-color);
  border-radius: var(--default-border-radius);
}
</style>
