<template>
  <div id="content-wrapper">
    <webview id="content" src="https://todoist.com/" autosize="on"></webview>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

<style>
  #contentWrapper {
    position: relative;
  }

  #content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
