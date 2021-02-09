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
  head: {
    title: {
      inner: "It will be a pleasure",
    },
    // Meta tags
    meta: [
      { name: "application-name", content: "Name of my application" },
      { name: "description", content: "A description of the page", id: "desc" }, // id to replace intead of create element
      { name: "keywords", content: "seave", id: "key" },
      // ...
      // Twitter
      { name: "twitter:title", content: "Content Title" },
      // with shorthand
      {
        n: "twitter:description",
        c: "Content description less than 200 characters",
      },
      // ...
      // Google+ / Schema.org
      { itemprop: "name", content: "Content Title" },
      { itemprop: "description", content: "Content Title" },
      // ...
      // Facebook / Open Graph
      { property: "fb:app_id", content: "123456789" },
      { property: "og:title", content: "Content Title" },
      // with shorthand
      { p: "og:image", c: "https://example.com/image.jpg" },
      // ...
    ],
  },
};
</script>

<style lang="scss"></style>
