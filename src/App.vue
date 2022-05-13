<template>
  <main class="app">
    <router-view name="navigation" class="app__navigation" />
    <section class="app__view">
      <router-view name="topBar" />
      <router-view />
    </section>
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

a {
  text-decoration: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  display: flex;
  height: 100%;
  width: 100%;
  &__navigation {
    width: 360px;
  }
  &__view {
    flex-grow: 1;
  }
}
</style>
