<template>
  <Layout>
    <main class="blog-post">
      <section class="post-info">
        <div>
          <h2><span v-if="$page.post.category == 0">Updates</span><span v-html="' | ' + $page.post.timeToRead + ' Min Read'" /></h2>
          <h1 v-html="$page.post.title" />
          <h3 v-html="'Published by ' + $page.post.author + ' on ' + $page.post.date" />
        </div>
        <div :style="'background: url('+$page.post.image+');background-position: center center;'" />
      </section>

      <section class="post-content" v-html="$page.post.content" />
    </main>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    author
    category
    image
    content
    date (format: "MMMM D, YYYY")
    timeToRead
  }
}
</page-query>

<script>
export default {
  mounted() {
    document.querySelectorAll('.post-content a').forEach(link => {
      link.setAttribute('target', '_blank')
    })
  }
}
</script>

<style lang="scss">

main.blog-post {
  width: 80%;
  padding: 0 10%;
  background: $white;
  min-height: 89vh;

  section.post-info {
    padding: 9vh 0;
    width: 100%;
    height: 62.5vh;
    display: grid;
    grid-template-columns: auto 55%;
    grid-gap: 5%;

    & > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 span {
      letter-spacing: 1.1px;
      text-transform: uppercase;
      font-size: 1.2rem;

      &:nth-of-type(1) {
        font-weight: 500;
      }

      &:nth-of-type(2) {
        font-weight: 400;
      }
    }

    h1 {
      font-size: 3.65rem;
      font-weight: 500;
      padding: 2rem 0;
    }

    h2, h3 {
      opacity: .9;
      font-weight: 400;
    }

    h3 {
      font-size: 1.325rem;
      padding-top: .5rem;
    }

    h1, h2, h3 {
      margin: 0;
    }
  }

  section.post-content {
    width: 70%;
    margin: 0 auto;
    font-size: 1.3rem;
    line-height: 1.85;
    font-weight: 300;
    padding-bottom: 5vh;

    iframe {
      margin: 1.5rem 0;
    }

    a {
      color: $light-blue;
      font-weight: 400;
      text-decoration: none;
      opacity: .95;
      transition: 200ms ease;

      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
}

</style>