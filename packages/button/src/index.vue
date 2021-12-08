<template>
  
      <button class="me-button"
       @click="handleClick"
        :class="[
        type ? 'me-button--' + type : '',

        ]"       
      >
          <slot></slot>
      </button>

</template>

<script>
export default {
    name: 'MeButton',
    props:{
        type:{
            type:String,
            default:'none'
        }
    }
}
</script>

<style lang="scss" scoped>
    .me-button--primary{
        background-color: #7cf;
        padding: 4px 10px;
        color: red;
    }
</style>