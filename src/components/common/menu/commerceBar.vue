<template>
  <div class="menu">
    <ul>
      <li  v-for="menu in menus" :key="menu.id">
        <h6><a :href="menu.link">{{ menu.name }}</a></h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'gxHeader',
  data () {
    return {
      menus: [
        {
          id: 0,
          link: "https://www.galytix.com/gx-platform",
          name: "GX Platform",
        },
        {
          id: 1,
          link: "https://www.galytix.com/news",
          name: "News",
        },
        {
          id: 2,
          link: "#",
          name: "Perspectives",
        }
      ]
    }
    
  }
}
</script>