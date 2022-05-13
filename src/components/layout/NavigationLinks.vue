<template>
  <nav class="navigation-links">
    <router-link to="/dashboard" class="navigation-links__link">
      <DashboardIcon class="icon" />
      <p>Dashboard</p>
    </router-link>
    <router-link to="/tasks" class="navigation-links__link">
      <TasksIcon class="icon" />
      <p>Tasks</p>
    </router-link>
    <router-link to="/administration" class="navigation-links__link">
      <AdministrationIcon class="icon" />
      <p>Administration</p>
    </router-link>
  </nav>
</template>

<script>
import DashboardIcon from "../../assets/icons/DashboardIcon";
import TasksIcon from "../../assets/icons/TasksIcon";
import AdministrationIcon from "../../assets/icons/AdministrationIcon";

export default {
  name: "NavigationLinks",
  components: {
    DashboardIcon,
    TasksIcon,
    AdministrationIcon,
  },
};
</script>

<style scoped lang="scss">
.navigation-links {
  @include flex-column;
  gap: 70px;
  &__link {
    display: flex;
    gap: 16px;
    align-items: center;
    color: $secondary-color;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
  }
  .router-link-exact-active {
    color: $accent-color;
    .icon {
      fill: $accent-color;
    }
  }
  &__link:hover {
    color: $accent-hover;
    .icon {
      fill: $accent-hover;
    }
  }
}
</style>
