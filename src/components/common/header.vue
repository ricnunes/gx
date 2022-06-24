<template>
  <header>
    <div class="header-container">
      <div class="hamburguer">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <gxCommerceBar class="show-xlg" />
      <div class="logo">
        <a href="/">
          <img src="../../assets/imgs/gx-logo-full.svg" />
        </a>
      </div>
      <gxMenu class="show-xlg" />
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
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 20px;
    @include breakpoint($x-large) {
      flex-direction: row;
    }
    @include iPad() {
      flex-direction: row-reverse;
    }
  }
}
.hamburguer {
  @include breakpoint($large) {
    display: none;
  }
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
  height: 14px;
  @include breakpoint($x-large) {
    height: auto;
    margin-right: 0;
  }
  @include iPad() {
    height: 14px;
    margin-right: 70px;
  }
  img {
    height: 14px;
    width: auto;
    @include breakpoint($large) {
      height: auto;
      width: 100%;
    }
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