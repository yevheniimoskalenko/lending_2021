<template>
  <div id="app">
    <app-header />
    <app-works />
    <app-experiance />
    <app-platform />
    <app-download />
    <app-footer />
  </div>
</template>

<script>
import appHeader from "./components/header.vue";
import appWorks from "./components/works.vue";
import appExperiance from "./components/experience.vue";
import appPlatform from "./components/platform.vue";
import appDownload from "./components/download.vue";
import appFooter from "./components/footer.vue";
export default {
  name: "App",
  components: {
    appHeader,
    appWorks,
    appExperiance,
    appPlatform,
    appDownload,
    appFooter,
  },
};
</script>

<style lang="scss"></style>
