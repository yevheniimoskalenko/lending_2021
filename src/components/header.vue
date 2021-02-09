<template>
  <section class="container">
    <div class="wrapper">
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
        <h1>Shopping App for Gadgets and Gifts</h1>
        <p class="desc">
          Get 10% off your first order when you spend over £40 on any product!
        </p>
        <a href="#" class="btn primary">Download App</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.main {
  margin-top: 109px;
  width: 50%;
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
