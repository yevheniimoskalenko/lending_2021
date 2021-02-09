<template>
  <section class="container">
    <div class="wrapper">
      <div class="platform">
        <div class="experiance__acc">
          <div class="experiance__app">
            <img
              :src="require('../assets/image 133.png')"
              class="borderImage"
              alt="sweava"
            />
          </div>
          <div class="experiance_content">
            <span class="topTitle">Original platform</span>
            <h2 class="title">Hottest deals around the web</h2>
            <p class="desc">
              Find the perfect gift or everyday goods right at your fingertips.
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
.experiance__acc {
  margin-top: 85px;
  display: flex;
  align-self: flex-start;
}
.experiance__app {
  flex-basis: 50%;
  display: flex;
  justify-content: flex-start;
}
.experiance_content {
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
