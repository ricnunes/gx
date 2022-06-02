<template>
  <footer>
    <div class="footer-container">
      <div class="logo">
        <img src="../../assets/imgs/gx-logo-full.svg" />
      </div>
      <div class="flex-container">
        <div class="nav-container">
          <nav>
            <h6>Quick Links</h6>
            <ul>
              <li>Page name One</li>
              <li>Page name Two</li>
              <li>Page name Three</li>
              <li>Page name Four</li>
              <li>Page name Five</li>
              <li>Page name Six</li>
            </ul>
          </nav>
          <nav>
            <h6>Quick Links</h6>
            <ul>
              <li>Page name One</li>
              <li>Page name Two</li>
              <li>Page name Three</li>
              <li>Page name Four</li>
              <li>Page name Five</li>
            </ul>
          </nav>
          <nav>
            <h6>Quick Links</h6>
            <ul>
              <li>Page name One</li>
              <li>Page name Two</li>
              <li>Page name Three</li>
              <li>Page name Four</li>
            </ul>
          </nav>
        </div>
        <div class="subs">
          <h4>Sign up to our newsletter</h4>
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
export default {
  name: "gxFooter",
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
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-container {
    max-width: 1240px;
    margin: 0 auto;
  }
  .logo {
    margin-bottom: 6.5rem;
  }
  h6,
  li {
    color: white;
  }
  .nav-container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    padding-bottom: 6.2rem;
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