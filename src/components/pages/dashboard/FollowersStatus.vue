<template>
  <div class="followers">
    <div class="wrapper">
      <div class="followers__name">
        <FacebookIcon />
        <p>Facebook</p>
      </div>
      <div class="followers__numbers">
        <p class="followers__numbers__result">+14</p>
        <div class="increase">
          <p>3,4%</p>
          <ArrowIcon class="arrow-icon" />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="followers__name">
        <InstagramIcon />
        <p>Instagram</p>
      </div>
      <div class="followers__numbers">
        <p class="followers__numbers__result">-2</p>
        <div class="decrease">
          <p>1%</p>
          <ArrowIcon class="arrow-icon" />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="followers__name">
        <YoutubeIcon />
        <p>YouTube</p>
      </div>
      <div class="followers__numbers">
        <p class="followers__numbers__result">+1</p>
        <div class="increase">
          <p>2%</p>
          <ArrowIcon class="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import YoutubeIcon from "../../../assets/icons/YoutubeIcon";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

export default {
  name: "FollowersStatus",
  components: { FacebookIcon, InstagramIcon, YoutubeIcon, ArrowIcon },
};
</script>

<style scoped lang="scss">
.followers {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 600;
  .wrapper {
    .followers__name {
      font-size: 30px;
      display: flex;
      align-items: center;
      p {
        padding-left: 12px;
      }
    }
    .followers__numbers {
      display: flex;
      justify-content: center;
      gap: 13px;
      padding-top: 24px;
      &__result {
        font-size: 30px;
      }
      div {
        display: flex;
        align-items: center;
        gap: 3px;
      }
      .increase {
        color: #27b981;
      }
      .decrease {
        color: #e64d15;
        .arrow-icon {
          fill: #e64d15;
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
