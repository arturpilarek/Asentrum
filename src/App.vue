<template>
  <main class="app">
    <router-view name="navigation" class="app__navigation" />
    <section class="app__view">
      <router-view name="topBar" />
      <router-view class="content" />
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
  color: $main-color;
}

ul {
  list-style: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background-color: hsla(0, 0, 14%, 0.11);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  border: 4px solid hsla(0, 0, 14%, 0.26);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0, 14%, 0.33);
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
  .content {
    padding: 50px;
  }
}
</style>
