<template>
    <Layout>
      <main class="blog">
        <g-link
          class="post"
          :style="'background: linear-gradient( rgba(50, 50, 50, 0.7), rgba(50, 50, 50, 0.7) ), url('+post.node.image+');background-repeat:no-repeat;background-size:cover;background-position: center;'"
          v-for="post in $page.allPost.edges"
          v-bind:key="post.node.id"
          :to="post.node.path">
          <h4>Featured Article</h4>
          <h1 v-html="post.node.title" />
          <h2><span v-if="post.node.category == 0" v-html="'Updates'" /></h2>
        </g-link>
      </main>
    </Layout>
</template>

<page-query>
query {
  allPost (limit: 5) {
    totalCount
    edges {
      node {
        id
        title
        category
        image
        author
        timeToRead
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style lang="scss">
.blog {
  width: 80%;
  padding: 3rem 10%;
  display: grid;
  // grid-template-columns: 

  .post {

    h1 {
      margin: 0;
    }
  }

  .post:nth-of-type(1) {
    width: calc(100% - 10rem);
    height: calc(100vh - 13rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    padding: 1rem 5rem;
    color: $white;
    transition: transform 250ms ease;

    &:hover {
      transform: scale(1.05);
      transition: transform 350ms ease;
    }

    h4 {
      opacity: .9;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.2rem;
    }

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-weight: 400;
    }
  }
}
</style>