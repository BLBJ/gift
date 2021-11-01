<template>
  <div class="seasonsContainer">
    <span class="cloud cloud1"></span>
    <span class="cloud cloud2"></span>
    <a
      href="#"
      id="spring"
      class="season spring"
      :class="{
        active: activeIndex === 1,
        inactive: ![0, 1].includes(activeIndex),
      }"
      @click="handle(1)"
    ></a>
    <a
      href="#"
      id="summer"
      class="season summer"
      :class="{
        active: activeIndex === 2,
        inactive: ![0, 2].includes(activeIndex),
      }"
      @click="handle(2)"
    ></a>
    <a
      href="#"
      id="fall"
      class="season fall"
      :class="{
        active: activeIndex === 3,
        inactive: ![0, 3].includes(activeIndex),
      }"
      @click="handle(3)"
    ></a>
    <a
      href="#"
      id="winter"
      class="season winter"
      :class="{
        active: activeIndex === 4,
        inactive: ![0, 4].includes(activeIndex),
      }"
      @click="handle(4)"
    ></a>
    <span class="grass"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    handle(index) {
    //   if (this.activeIndex === index) {
    //     this.activeIndex = 0;
    //     return;
    //   }
    //   this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang="scss">
.seasonsContainer {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url("@/assets/img/www.jsdaima.com.svg");
  background-size: 100%;
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, #0063a6),
    color-stop(15%, #0072c0),
    color-stop(100%, #ffffff)
  );
  background-image: -moz-linear-gradient(
    top,
    #0063a6 0%,
    #0072c0 15%,
    #ffffff 100%
  );
  background-image: -webkit-linear-gradient(
    top,
    #0063a6 0%,
    #0072c0 15%,
    #ffffff 100%
  );
  background-image: linear-gradient(
    to bottom,
    #0063a6 0%,
    #0072c0 15%,
    #ffffff 100%
  );
}

.grass {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 5vmin;
  max-height: 62px;
  background: transparent url(@/assets/img/www.jsdaima.com.png) repeat-x;
  background-size: contain;
  z-index: 1;
}

.cloud {
  position: absolute;
  background: #fff;
  width: 30vw;
  height: 10vw;
  top: 15%;
  left: 10%;
  border-radius: 5vw;
}
.cloud:before,
.cloud:after {
  content: "";
  position: absolute;
  background: #fff;
  border-radius: 50%;
}
.cloud:before {
  width: 25%;
  height: 75%;
  top: -35%;
  left: 15%;
}
.cloud:after {
  width: 50%;
  height: 150%;
  top: -60%;
  left: 33%;
}

.cloud2 {
  width: 21vw;
  height: 7vw;
  top: 8%;
  left: 67%;
}

.season {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  display: block;
  z-index: 20;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  -moz-transition: all 1s ease-out, opacity 0.5s ease-out;
  -o-transition: all 1s ease-out, opacity 0.5s ease-out;
  -webkit-transition: all 1s ease-out, opacity 0.5s ease-out;
  transition: all 1s ease-out, opacity 0.5s ease-out;
}
.season:before,
.season:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.season.active {
  width: 100%;
  left: 0;
  z-index: 100;
}
.season.inactive {
  opacity: 0;
}

.spring {
  background-image: url(@/assets/img/springTree.svg);
}
.spring:after {
  background: linear-gradient(
    to bottom,
    rgba(47, 219, 245, 0.5) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  -webkit-filter: saturate(1);
  filter: saturate(1);
}

.summer {
  left: 25%;
  background-image: url(@/assets/img/summerTree.svg);
}
.summer:before {
  background: url(@/assets/img/bird.svg) no-repeat center center;
  background-size: 10% 10%;
}
.summer:after {
  background-image: linear-gradient(
    to bottom,
    rgba(68, 148, 211, 0.7) 0%,
    rgba(243, 216, 145, 0.5) 60%,
    rgba(243, 216, 145, 0.3) 70%,
    rgba(243, 216, 145, 0.3) 80%,
    rgba(120, 90, 13, 0.3) 100%
  );
  -webkit-filter: brightness(1);
  filter: brightness(1);
}

.fall {
  left: 50%;
  background-image: url(@/assets/img/fallTree.svg);
}
.fall:before {
  background: url(@/assets/img/leaves.svg) no-repeat center center;
  background-size: contain;
}
.fall:after {
  background: rgba(254, 83, 2, 0.4);
  -webkit-filter: saturate(1);
  filter: saturate(1);
}

.winter {
  left: 75%;
  background-image: url(@/assets/img/winterTree.svg);
  background-position: center 95%;
}
.winter:before {
  background-image: url(@/assets/img/snow.svg),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.05) 0%,
      #ffffff 20%,
      #ffffff 100%
    );
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  background-repeat: no-repeat;
  background-size: 50% 50%, 100% 6%;
  background-position: center 140%, center bottom;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.winter:after {
  background-image: linear-gradient(
    to bottom,
    rgba(238, 238, 238, 0.7) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
.winter.active:before {
  background-size: 50% 25%, 100% 6%;
  background-position: center 112%, center bottom;
}
</style>
