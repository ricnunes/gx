<template>
  <section class="slide-container">
    <div
      class="slide"
      :style="`background-image: url(${publicPath}/static/assets/imgs/${source})`"
    >
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
    source: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      publicPath: process.env.NODE_ENV === "production" ? "/gx/" : "",
    };
  },
};
</script>

<style lang="scss">
.slide-container {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  overflow: hidden;
  padding: 0 10px;
  min-height: 560px;

  background-size: cover;
  &:hover {
    .slide {
      background-size: 120% 120%;
      transition: all 0.5s ease;
    }
  }
}
.slide {
  padding: 20px;
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 560px;
  z-index: 2;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  transition: all 0.5s ease;
  border-radius: 5px;
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
