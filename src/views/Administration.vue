<template>
  <section class="administration">
    <ContentContainer
      title="Opret ny case"
      class="administration__container"
      title-centered="true"
    >
      <CreateTask />
    </ContentContainer>
    <ContentContainer
      title="Opret bruger"
      class="administration__container"
      title-centered="true"
    >
      <UserCreate />
    </ContentContainer>
  </section>
</template>

<script>
import UserCreate from "../components/pages/user/UserCreate";
import CreateTask from "../components/pages/tasks/CreateTask";
import ContentContainer from "../components/ui/ContentContainer";

export default {
  components: { UserCreate, CreateTask, ContentContainer },
};
</script>

<style scoped lang="scss">
.administration {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .administration__container {
  }
}
</style>
