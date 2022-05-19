<template>
  <div class="dashboard">
    <ContentContainer
      :title="addString('Aktive cases')"
      class="dashboard__content active-cases"
    >
      <ActiveCases />
    </ContentContainer>
    <ContentContainer
      :title="addString('Status')"
      class="dashboard__content status"
    >
      <TasksStatus />
    </ContentContainer>
    <ContentContainer
      :title="addString('Seneste aktiviteter')"
      class="dashboard__content recent-activity"
    >
      <RecentActivities />
    </ContentContainer>
    <ContentContainer
      :title="addString('Nye følgere')"
      :title-centered="Boolean(true)"
      class="dashboard__content followers"
    >
      <FollowersStatus />
    </ContentContainer>
    <ContentContainer class="dashboard__content website-info">
      <WebsiteStatistics />
    </ContentContainer>
    <ContentContainer
      :title="addString('Mest solgte produkter')"
      :title-centered="Boolean(true)"
      class="dashboard__content most-sold"
    >
      <MostSold />
    </ContentContainer>
    <ContentContainer
      class="dashboard__content visitors"
      title="Besøgende"
      :title-centered="Boolean(true)"
    >
      <Visitors />
    </ContentContainer>
  </div>
</template>

<script>
import ContentContainer from "../components/ui/ContentContainer";
import ActiveCases from "../components/pages/tasks/ActiveCases";
import TasksStatus from "../components/pages/tasks/TasksStatus";
import RecentActivities from "../components/pages/tasks/RecentActivities";
import FollowersStatus from "../components/pages/dashboard/FollowersStatus";
import WebsiteStatistics from "../components/pages/dashboard/WebsiteStatistics";
import MostSold from "../components/pages/dashboard/MostSold";
import Visitors from "../components/pages/dashboard/Visitors";

export default {
  name: "Dashboard",
  components: {
    ContentContainer,
    ActiveCases,
    TasksStatus,
    RecentActivities,
    FollowersStatus,
    WebsiteStatistics,
    MostSold,
    Visitors,
  },
  methods: {
    addString(string) {
      return string;
    },
  },
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
