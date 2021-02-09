<template>
  <section class="container">
    <div class="wrapper">
      <div class="works">
        <div class="works__title">
          <h3>How the app works</h3>
        </div>
        <div class="works__acc">
          <div class="work__app">
            <img :src="require('../assets/image 12.png')" alt="" />
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

<style lang="scss" scope>
.works__title {
  width: 100%;
  text-align: center;
}
.works__acc {
  margin-top: 85px;
  display: flex;
  align-self: flex-start;
}
.work__app {
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
