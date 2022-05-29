<template>
  <section class="slide-container">
    <div class="slide">
      <div class="header">
        <h6 class="tag">{{ tagName }}</h6>
        <h6 class="date">{{ date }}</h6>
      </div>
      <div class="body">
        <h6>{{ content }}</h6>
        <a :href="link" class="link link--darkB">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.slide-container {
  padding: 0 10px;
}
.slide {
  background: url("../../assets/imgs/social-image.jpg") no-repeat center center
    transparent;
  background-size: cover;
  padding: 50px;
  .header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-items: center;
    margin-bottom: 20rem;
    .tag {
      background: $blue;
      color: white;
      padding: 7px 10px;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
    .date {
      color: white;
      line-height: 3.6rem;
      font-size: 1.4rem;
    }
  }
  .body {
    width: 75%;
    .link {
      margin-top: 3.5rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
}
</style>
