<template>
  <header>
    <div class="hamburguer">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <gxCommerceBar />
    <div class="logo">
      <img src="../../assets/imgs/gx-logo-full.svg" >
    </div>
    <gxMenu />
    <div class="search">
      <span></span>
    </div>
  </header>
</template>

<script>
import gxCommerceBar from './menu/commerceBar.vue';
import gxMenu from './menu/menu.vue';

export default {
  components: { 
    gxCommerceBar,
    gxMenu
  },
  name: 'gxHeader'
}
</script>

<style lang="scss">
header {
  height: 113px;
  display: flex;
  align-items: center;
  padding: 0 70px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0,0,0,0.5)
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
}
.search {
  cursor: pointer;
  span {
    background: url('../../assets/imgs/icons/search.svg') no-repeat center center transparent;
    display: block;
    width: 24px;
    height: 24px;
  }
}
</style>