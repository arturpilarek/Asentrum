<template>
  <main class="app">
    <router-view name="navigation" />
    <router-view />
  </main>
</template>

<style lang="scss">
@import url("http://fonts.cdnfonts.com/css/sofia-pro?styles=17636,17634,17638,17628");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Sofia Pro 400", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  display: flex;
}
</style>
