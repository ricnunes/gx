<template>
  <div class="gx-section gx-section--height">
    <div class="container">
      <h2>Our Thinking</h2>
      <VueSlickCarousel :arrows="false" :dots="false" v-bind="settings">
        <BlogPost
          :tagName="`tag name`"
          :date="`4 June 2022`"
          :content="`Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. `"
          :link="`#`"
          :source="`social-image.jpg`"
        />
        <BlogPost
          :tagName="`tag name`"
          :date="`4 June 2022`"
          :content="`Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. `"
          :link="`#`"
          :source="`social-image.jpg`"
        />
        <BlogPost
          :tagName="`tag name`"
          :date="`4 June 2022`"
          :content="`Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. `"
          :link="`#`"
          :source="`social-image.jpg`"
        />
        <BlogPost
          :tagName="`tag name`"
          :date="`4 June 2022`"
          :content="`Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. `"
          :link="`#`"
          :source="`social-image.jpg`"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import BlogPost from "../utilities/gx-slide.vue";
export default {
  components: {
    VueSlickCarousel,
    BlogPost,
  },
  data() {
    return {
      settings: {
        slidesToShow: 2.5,
        infinite: false,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>


<style lang="scss">
.gx-section--height {
  min-height: auto;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    at -8% 100%,
    rgba(3, 77, 185, 0.4) 5px,
    transparent 70%
  );
  background-repeat: no-repeat;
  background-position: bottom left;
  .container {
    width: 100%;
    color: white;
    padding-left: 200px;
    @include breakpoint($min-width: 1239px) {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0;
    }
    h2 {
      margin-bottom: 18.7rem;
    }
    .slick-slider {
      margin-bottom: 20rem;
    }
  }
}
</style>
 