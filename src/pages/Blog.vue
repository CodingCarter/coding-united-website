<template>
    <Layout>
      <main class="blog">
        <h1>Latests Posts</h1>
        <ol>
            <li v-for="post in $page.allPost.edges" v-bind:key="post.node.id">
                <g-link :to="post.node.path">{{ post.node.title }}</g-link>
            </li>
        </ol>
      </main>
    </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
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
  padding: .5rem 10%;
}
</style>