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
          link: "#",
          name: "Team",
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