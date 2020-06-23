<template>
    <Layout>
        <main class="sitemap">
            <h1>This is our sitemap...for BOTS only!</h1>
            <ul>
                <li>
                    <g-link to="/">Home</g-link>
                </li>
                <li>
                    <g-link to="/classes/">Classes</g-link>
                </li>
                <li>
                    <g-link to="/blog/">Blog</g-link>
                </li>
                <li>
                    <g-link to="/mission/">Mission</g-link>
                </li>
                <li v-for="course in data.classes" v-bind:key="course.slug">
                    <g-link :to="data.classesRoute + course.slug + '/'">{{ course.title }}</g-link>
                    <ol>
                        <li v-for="content in course.contents" v-bind:key="content.url">
                            <g-link :to="data.classesRoute + course.slug + '/' + parseSlug(content.title) + '/'">
                                {{ content.title }}
                            </g-link>
                        </li>
                    </ol>
                </li> 
            </ul>
        </main>
    </Layout>
</template>

<script>
import data from '@/data/data.yaml'

export default {
    data() {
        return {
            data
        }
    },
    methods: {
        parseSlug(slug) {
            return slug.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('')
        }
    },
}
</script>

<style lang="scss">
main.sitemap {
    ul {
        
        & > li a {
            display: block;
            padding: .3rem .2rem;
        }

        & > li > a {
            display: block;
            padding: .6rem .2rem;
        }

    }
}
</style>