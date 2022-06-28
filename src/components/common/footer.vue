<template>
  <footer>
    <div class="footer-container">
      <div class="logo">
        <img src="../../assets/imgs/gx-logo-full.svg" />
      </div>
      <div class="flex-container">
        <div class="nav-container">
          <nav>
            <h6>About Galytix</h6>
            <ul>
              <li><a href="https://www.galytix.com/about">Firm</a></li>
              <li><a href="https://www.galytix.com/team">Team</a></li>
              <li><a href="https://www.galytix.com/careers">Careers</a></li>
              <li><a href="https://www.galytix.com/careers/jobs">Browse Jobs</a></li>
            </ul>
          </nav>
          <nav>
            <h6>Updates</h6>
            <ul>
              <li><a href="https://www.galytix.com/perspectives/">Perspectives</a></li>
              <li><a href="https://www.galytix.com/news">News</a></li>
            </ul>
          </nav>
          <nav>
            <h6>Product</h6>
            <ul>
              <li><a href="https://www.galytix.com/gx-platform">GX Platform</a></li>
            </ul>
          </nav>
        </div>
        <div class="subs">
          <h4>Sign up to our newsletter</h4>
          <form @submit.prevent="updateFirebase">
            <div class="input-group">
            <input type="email" placeholder="Your email address" v-model="formData.email">
            <input type="submit">
            </div>
          </form>

        </div>
      </div>
      <hr />
      <div class="copy">
        <p>© 2022 Galytix. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { db } from '../../../firebase'

const documentPath = 'contacts/galytix'

export default {
  name: "gxFooter",
  data() {
    return {
      firebaseData: null,
      formData: {
        email: ''
      },
      state: 'loading',
      errorMessage: ''
    }
  },
  firestore() {
    return {
      firebaseData: db.doc(documentPath)
    }
  },
  methods: {
    async updateFirebase() {
      try {
        await db.doc(documentPath).set(this.formData)
        this.sate = 'synced'
      } catch (error) {
        this.errorMessage = JSON.stringify(error)
        this.state = 'error'
      }
    }
  },
};
</script>

<style lang="scss">
footer {
  min-height: 20vh;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  background: radial-gradient(
    at -8% 100%,
    rgba(3, 77, 185, 0.4) 5px,
    transparent 70%
  );
  background-repeat: no-repeat;
  background-position: bottom left;
  .flex-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    @include breakpoint($medium) {
      flex-direction: row;
    }
  }
  .footer-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 50px;
  }
  .logo {
    margin-bottom: 6.5rem;
  }
  h6,
  li a {
    color: white;
  }
  .nav-container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 6.2rem;
    @include breakpoint($medium) {
      flex-direction: row;
    }
    h6 {
      margin-bottom: 2rem;
    }
    li {
      margin-bottom: 1rem;
    }
  }
  .copy {
    p {
      font-size: 1.4rem;
    }
    margin-top: 2.8rem;
    padding-bottom: 3.2rem;
  }
}
</style>