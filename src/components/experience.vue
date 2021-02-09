<template>
  <section class="container">
    <div class="wrapper">
      <div class="experiance">
        <div class="experiance__acc">
          <div class="experiance_content">
            <h2 class="title">Experience products in AR</h2>
            <p class="desc">
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item.
            </p>
          </div>
          <div class="experiance__app">
            <img
              :src="require('../assets/image 134.png')"
              class="borderImage"
              alt="sweava"
            />
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
.experiance {
  background: linear-gradient(
    72.77deg,
    #edeef6 11.72%,
    rgba(237, 238, 246, 0) 98.52%
  );
  border-radius: 50px;
  padding: 32px 71px 34px 55px;
}
.experiance__acc {
  margin-top: 85px;
  display: flex;
  align-self: flex-start;
}
.experiance__app {
  flex-basis: 50%;
  display: flex;
  justify-content: flex-end;
}
.experiance_content {
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
