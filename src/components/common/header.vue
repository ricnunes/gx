<template>
  <header>
    <div class="header-container">
      <div class="hamburguer">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <gxCommerceBar class="hidden-xs hidden-md hidden-lg" />
      <div class="logo">
        <img src="../../assets/imgs/gx-logo-full.svg" />
      </div>
      <gxMenu class="hidden-xs hidden-md hidden-lg" />
      <div class="search hidden-xs hidden-md hidden-lg">
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
import gxCommerceBar from "./menu/commerceBar.vue";
import gxMenu from "./menu/menu.vue";

export default {
  components: {
    gxCommerceBar,
    gxMenu,
  },
  name: "gxHeader",
};
</script>

<style lang="scss">
header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  @include breakpoint($large) {
    height: 113px;
  }
  @include iPad() {
    height: 50px;
  }
  .header-container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    @include breakpoint($large) {
      flex-direction: row;
    }
    @include iPad() {
      flex-direction: row-reverse;
    }
  }
}
.hamburguer {
  cursor: pointer;
  span {
    border-bottom: 1px solid white;
    width: 15px;
    padding-bottom: 5px;
    display: block;
  }
}
.menu {
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      display: block;
      padding: 0 15px;
      a {
        text-decoration: none;
        color: $white;
        text-transform: uppercase;
      }
    }
  }
}
.logo {
  max-width: 270px;
  margin-right: 70px;
  @include breakpoint($large) {
    margin-right: 0;
  }
  @include iPad() {
    margin-right: 70px;
  }
}
.search {
  cursor: pointer;
  span {
    background: url("../../assets/imgs/icons/search.svg") no-repeat center
      center transparent;
    display: block;
    width: 24px;
    height: 24px;
  }
}
</style>