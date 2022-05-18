<template>
  <div class="dashboard">
    <ContentContainer class="dashboard__content active-cases">
      <div>
        <h3>Active Cases</h3>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            <p>{{ task.status }}</p>
            <p>{{ task.id }}</p>
            <p>{{ task.title }}</p>
            <p>{{ task.addedUsers }}</p>
          </li>
        </ul>
      </div>
    </ContentContainer>
    <ContentContainer class="dashboard__content status">
      <div>
        <h3>Status</h3>
        <div>Aktive cases:</div>
        <span>{{ amountOfActiveCases }}</span>
      </div>
    </ContentContainer>
    <ContentContainer class="dashboard__content recent-activity">
      <div>
        <h3>Seneste Aktiviteter</h3>
      </div>
    </ContentContainer>
    <ContentContainer class="dashboard__content followers">
      <div>
        <h3>Nye følger</h3>
      </div>
    </ContentContainer>
    <ContentContainer class="dashboard__content website-info">
      <div>
        <h3>Antal besøgende</h3>
        <h3>Omsætning</h3>
        <h3>Konverteringer</h3>
      </div>
    </ContentContainer>
    <ContentContainer class="dashboard__content most-sold">
      <div>
        <h3>Mest solgte produkter</h3>
      </div>
    </ContentContainer>
    <ContentContainer class="dashboard__content visitors">
      <div>
        <h3>Besøgende</h3>
      </div>
    </ContentContainer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentContainer from "../components/ui/ContentContainer";

export default {
  name: "Dashboard",
  components: { ContentContainer },
  computed: {
    ...mapGetters(["tasks"]),
    amountOfActiveCases() {
      return this.tasks.reduce((total, task) => {
        task.status === "New" || task.status === "Active" ? ++total : null;
        return total;
      }, 0);
    },
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.dashboard {
  display: grid;
  min-height: calc(100vh - 132px);
  gap: 25px;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "activeCases status recentActivity"
    "followers websiteInfo mostSold"
    "followers websiteInfo visitors";
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "activeCases status "
      "recentActivity websiteInfo"
      "followers websiteInfo "
      "mostSold visitors";
  }
  .active-cases {
    grid-area: activeCases;
  }
  .status {
    grid-area: status;
  }
  .recent-activity {
    grid-area: recentActivity;
  }
  .followers {
    grid-area: followers;
  }
  .website-info {
    grid-area: websiteInfo;
  }
  .most-sold {
    grid-area: mostSold;
  }
  .visitors {
    grid-area: visitors;
  }
}
</style>
