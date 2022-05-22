<template>
  <section class="dashboard">
    <div class="dashboard__topbar">
      <h2>Hej {{ trimDisplayName }}!</h2>
      <div class="dropdown-wrapper">
        <select>
          <option value="CoolShoes" selected="selected">Cool Shoes</option>
        </select>
        <select>
          <option value="last7days" selected="selected">Seneste 7 dage</option>
        </select>
      </div>
    </div>
    <div class="dashboard__grid">
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["displayName"]),
    trimDisplayName() {
      return this.displayName.split(" ")[0];
    },
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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &__grid,
  &__topbar {
    //max-width: 90%;
  }

  &__grid {
    width: 100%;
    display: grid;
    gap: 25px;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "activeCases status recentActivity"
      "followers websiteInfo mostSold"
      "followers websiteInfo visitors";
    @media screen and (max-width: 1400px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "activeCases recentActivity "
        "status websiteInfo"
        "followers websiteInfo "
        "mostSold visitors";
    }
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "activeCases recentActivity "
        "status websiteInfo"
        "followers websiteInfo "
        "mostSold visitors";
    }
    @media screen and (max-width: 825px) {
      display: flex;
      flex-direction: column;
      gap: 25px;
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

  &__topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    width: 100%;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 25px;
      gap: 12px;
    }
    h2 {
      font-size: 36px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        background-color: #b5b5b5;
        width: 150%;
        bottom: -12px;
        left: 0;
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
    }

    select {
      min-width: 200px;
      max-width: 250px;
      height: 45px;
      background-color: #f0f0f0;
      color: #adadad;
      border: none;
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
      padding-left: 20px;
      font-size: 16px;
      font-weight: 600;
      border-right: 20px solid transparent;
      @media screen and (max-width: 1000px) {
        min-width: initial;
        padding-left: 10px;
        max-width: 150px;
        font-size: 14px;
      }
    }

    .dropdown-wrapper {
      display: flex;
      gap: 12px;
    }
  }
}
</style>
