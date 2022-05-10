<template>
  <div class="user-panel">
    <div class="user-panel__image-container"></div>
    <div class="user-panel__info">
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPanel",
};
</script>

<style scoped lang="scss">
.user-panel {
  @include flex-center;
  p {
    color: white;
  }
  &__image-container {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: white;
    background-image: url("https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
