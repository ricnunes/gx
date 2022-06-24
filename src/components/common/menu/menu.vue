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
          link: "#https://www.galytix.com/about",
          name: "About",
        },
        {
          id: 1,
          link: "https://www.galytix.com/team",
          name: "Team",
        },
        {
          id: 2,
          link: "https://www.galytix.com/careers",
          name: "Careers"
        },
        {
          id: 3,
          link: "#https://www.galytix.com/contactus",
          name: "Contact us",
        }
      ]
    }
    
  }
}
</script>