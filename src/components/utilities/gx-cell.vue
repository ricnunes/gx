<template>
  <section class="cell">
    <div class="title">
      <h1>
        <span>{{ subTitle }} </span>{{symbolBefore}}<span class="number">{{ title }}</span>{{symbolAfter}}<span> {{ postTitle }}</span>
      </h1>
    </div>
    <div class="content">
      <p>{{ description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    symbolBefore: {
      type: String
    },
    symbolAfter: {
      type: String
    },
    subTitle: {
      type: String,
    },
    postTitle: {
      type: String,
    },
    description: {
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
.cell {
  background: black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 2rem;
  gap: 3rem;
  .title {
    color: $blue;
    margin-bottom: 3rem;
    span:not(.number) {
        font-size: 2.8rem;
        line-height: 3.8rem;
      }
  }
  .content {
    color: white;
  }
}
</style>
