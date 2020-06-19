<template>
  <Layout>
    <div class="home-page">
      <main>
        <section>
          <h1>We will <span>jump start</span> your programming career.</h1>
          <h2>Start a free course today to learn how to make websites, applications, and even twitter bots!</h2>
          <div>
            <g-link to="/classes/">Explore our Free Classes</g-link>
          </div>
        </section>
        <section>
          <img src="https://image.flaticon.com/icons/svg/2920/2920277.svg" alt="coding-icon">
        </section>
      </main>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
      title: 'Home'
  }
}
</script>

<style lang="scss">
.home-page {
  background: $white;

  main {
    width: 80%;
    padding: 0 10%;
    min-height: 70vh;
    display: grid;
    grid-template-columns: 54% auto;
    padding-top: 5rem;
    grid-gap: 2rem;

    @include tablet {
      grid-template-columns: 1fr;
    }
    
    section:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      color: $dark-blue;

      h1 {
        font-size: 3.75rem;
        margin: 0;
        line-height: 1.2;
        font-weight: 900;

        span {
          display: inline-block;
          color: $light-blue;
        }
      }

      h2 {
        opacity: .9;
        margin: 2rem 0;
        font-size: 1.3rem;
        font-weight: 500;
      }

      div a {
        opacity: .9;
        background: #ddd;
        color: $dark-blue;
        text-decoration: none;
        padding: .65rem 1.15rem;
        font-size: 1.8rem;
        display: inline-block;
        transition: 400ms ease;
        border-radius: .2rem;

        &:hover {
          opacity: 1;
          background: #ccc;
          transition: 200ms ease;
        }
      }

    }

    section:nth-of-type(2) {
      position: relative;
      // margin-left: auto;
      img {
        max-width: 90%;
        margin: 0;
        padding: 0;
        margin-left: auto;
        position: absolute;
        top: -10%;
        right: 0;

        @include tablet {
          position: relative;
          top: 0;
          margin: 0;
        }
      }
    }
  }

}
</style>
