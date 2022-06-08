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
          link: "#banking",
          name: "Banking",
        },
        {
          id: 1,
          link: "#insurance",
          name: "Insurance",
        },
        {
          id: 2,
          link: "#gx-tech",
          name: "GX Tech",
        }
      ]
    }
    
  }
}
</script>