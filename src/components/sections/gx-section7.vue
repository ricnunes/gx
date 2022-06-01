<template>
  <div class="gx-section gx-section--seven">
    <div class="title">
      <h3>Disrupting the Financial Services Industry</h3>
    </div>
    <div class="grid-container">
      <gxCell :title="`x10`" :description="`Predictive power in generating risk insights and signals`" />
      <gxCell :title="`100%`" :description="`Data accuracy guaranteed across structured and unstructured sources`" />
      <gxCell :title="`90%`" :description="`Automation in engineering of unstructured data `" :subTitle="`Up to`" />
      <gxCell :title="`100%`" :description="`GX DataFactory with human-in-the-loop engineering data employing reusable tools & repeatable processes`" :postTitle="`algorithmic`" />
      <gxCell :title="`100%`" :description="`Enterprise data model ontology for internal & external data. All Data in One Model. One Model for All Data.`" :postTitle="`connected`" />
      <gxCell :title="`95%`" :description="`Accuracy of financial spreading analysis from classifiers`" />
      <gxCell :title="`~ 50%`" :description="`Reduction in data transformation timeline`" />
      <gxCell :title="`60%`" :description="`Data available at sector and sub-segment level for analysis`" :postTitle="`more`" />
    </div>
  </div>
</template>

<script>
import gxCell from '../utilities/gx-cell.vue'
export default {
  components: {
    gxCell,
  },
  data() {
    return {
      cells: [
        {
          title: '',
          description: ''
        }
      ]
      
    };
  },
  mounted() {

  },
  methods: {
  }
}
</script>


<style lang="scss">
.gx-section--seven {
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at 50% 50%, #006DD8 0.87%, rgba(0, 0, 0, 0) 60%);
  .title {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
  }
  h3 {
    width: 40rem;
  }
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1240px;
    margin: 0 auto;
    gap: 5px;
    margin-top: 14.5rem;
    .cell {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8) {
        width: 33%;
      }
      &:nth-child(4),
      &:nth-child(5) {
        width: calc(50% - 5px);
      }
    }
  }

}
</style>
 