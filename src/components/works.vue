<template>
  <section class="container">
    <div class="wrapper">
      <div class="works">
        <div class="works__title">
          <h3>How the app works</h3>
        </div>
        <div class="works__acc">
          <div class="work__app">
            <div class="icon-tra"></div>

            <img
              :src="require('../assets/image 13.png')"
              class="borderImage"
              alt="sweava"
            />
            <div class="icon-oval"></div>
          </div>
          <div class="works_content">
            <span class="topTitle">Create an account</span>
            <h2 class="title">Discover original products</h2>
            <p class="desc">
              There are more than 950 categories updated daily based on trending
              websites reviews an users rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.works__title {
  width: 100%;
  text-align: center;
}
.icon-tra {
  position: absolute;
  background-image: url("../assets/Saly-22.png");
  width: 77px;
  height: 153px;
  top: -100px;
  left: -100px;
}
.icon-oval {
  position: absolute;
  background-image: url("../assets/oval.png");
  width: 114px;
  height: 180px;
  bottom: -70px;
  right: 238px;
}
.works__acc {
  margin-top: 85px;
  display: flex;
  align-self: flex-start;
}
.work__app {
  position: relative;
  flex-basis: 50%;
}
.works_content {
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
