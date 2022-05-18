<template>
  <div class="menu">
    <ul>
      <li  v-for="menu in menus" :key="menu.id">
        <a :href="menu.link">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'gxMenu',
  data () {
    return {
      menus: [
        {
          id: 0,
          link: "#about",
          name: "About",
        },
        {
          id: 1,
          link: "#news",
          name: "News",
        },
        {
          id: 2,
          link: "#contact",
          name: "Contact us",
        }
      ]
    }
    
  }
}
</script>