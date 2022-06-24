<template>
  <div class="gx-section gx-section--six-two">
    <div class="gx-section--six-two">
      <div class="VideoBg__content">
        <h3>
          Pipeline-driven Architecture enabled by human supervised algorithms
        </h3>
        <p>Making your data more aware and turning it into truth.</p>
        <div class="button-container">
          <a href="#" class="btn btn--primary btn--primary--darkB"
            >Find out How</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>


<style lang="scss">
.gx-section--six {
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  min-height: auto;
  &-two {
    display: none;
    @media screen and (max-height: 1100px) and (min-width: 768px) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      text-align: center;
      color: white;
      .VideoBg__content {
        h3 {
          width: 100%;
          margin: 0 auto;
          margin-bottom: 3rem;
          @include breakpoint($medium) {
            width: 50%;
            margin-bottom: 5rem;
          }
        }
        p {
          margin-bottom: 3rem;
          @include breakpoint($medium) {
            margin-bottom: 5rem;
          }
        }
      }
    }
  }
}
</style>
 