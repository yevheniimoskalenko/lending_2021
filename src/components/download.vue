<template>
  <section class="container">
    <div class="wrapper">
      <div class="download">
        <div class="download__content">
          <h2 class="title">
            Save time & money with exclusive offers from top stores
          </h2>
          <a href="#" class="btn primary">Download App</a>
        </div>
        <div class="download__app">
          <img :src="require('../assets/hend.png')" alt="sweava" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.download {
  background: #fab8c5;
  border-radius: 50px;
  display: flex;
  padding: 92px 115px;
  position: relative;
}
.download__content {
  flex-basis: 50%;
  .primary {
    padding: 25px 100px;
  }
  .title {
    color: #5956e9;
    font-size: 40px;
    line-height: 52px;
  }
  a {
    margin-top: 30px;
  }
}
.download__app {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    position: absolute;
    right: -121px;
    top: -193px;
  }
}
</style>
