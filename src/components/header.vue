<template>
  <div>
    <div class="icon-first yellow big"></div>
    <div class="icon-r primary-c">
      <img :src="require('../assets/Sally-4.png')" alt="women" />
      <div class="tree"></div>
    </div>
    <section class="container">
      <div class="wrapper">
        <div class="header">
          <div class="menu">
            <div class="logo">
              <img
                :src="require('../assets/logo.png')"
                alt="sweave"
                class="menu-logo"
              />
            </div>
            <nav class="nav">
              <div class="nav__item">
                <a href="#" class="nav__item-active">Home</a>
              </div>
              <div class="nav__item">
                <a href="#">Team</a>
              </div>
              <div class="nav__item">
                <a href="#">Faq</a>
              </div>
              <div class="nav__item">
                <a href="#">Contact</a>
              </div>
            </nav>
            <div class="donwload_app">
              <a href="#" class="btn download">Download App</a>
            </div>
          </div>
          <div class="main">
            <div class="icon-second yellow small"></div>
            <h1>Shopping App for Gadgets and Gifts</h1>
            <p class="desc">
              Get 10% off your first order when you spend over £40 on any
              product!
            </p>
            <a href="#" class="btn primary">Download App</a>
            <div class="icon-three yellow medium"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="icon-four pink small"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-first {
  position: absolute;
  top: -60px;
  left: -40px;
}
.donwload_app {
  z-index: 999;
}
.icon-second {
  position: absolute;
  right: -40px;
  top: -30px;
}
.icon-three {
  position: absolute;
  right: 30px;
  bottom: -50px;
}
.icon-four {
  position: absolute;
  left: 30px;
  top: 350px;
  z-index: 1;
}
.icon-r {
  position: absolute;
  width: 1032px;
  height: 1032px;
  border-radius: 100%;
  top: -285px;
  right: -308px;
  img {
    position: absolute;
    top: 370px;
    left: -30px;
  }
}
.tree {
  position: absolute;
  width: 95px;
  height: 151px;
  background: url("../assets/tree.png");
  z-index: 999;
  bottom: 230px;
  left: -147px;
}
.header {
  display: flex;
  flex-direction: column;
}

.main {
  margin-top: 109px;
  width: 50%;
  position: relative;
}
.primary {
  margin-top: 58px;
}
.menu {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  //   justify-content: space-between;
}
.logo {
  flex-grow: 1;
}
.nav {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  .nav__item {
    padding: 0px 20px;
  }
}
</style>
