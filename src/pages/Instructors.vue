<template>
    <Layout>
        <main>
            <h1>All Instructors</h1>
            <ul class="instructors">
                <li v-for="instructor in data.instructors" v-bind:key="instructor.slug">
                    <h2><g-link :to="data.instructorsRoute + instructor.slug + '/'">{{ instructor.name }}</g-link></h2>
                    <h3>Classes:
                        <span v-for="course in data.classes" v-bind:key="course.slug">
                            &nbsp;<g-link :to="data.classesRoute + course.slug + '/'" v-if="course.instructor == instructor.name">{{ course.title }}</g-link>
                        </span>
                    </h3>
                </li>
            </ul>
        </main>
    </Layout>
</template>

<script>
import data from '@/data/data.yaml'
// let data = require('@/data/data.yaml')

export default {
    metaInfo: {
        title: 'All Instructors'
    },
    data() {
        return {
            data
        }
    }
}
</script>