<template>
    <Layout>
        <div class="wrapper">
            <main>
                <h1>All Classes</h1>
                <section class="courses">
                    <section v-for="course in data.classes" v-bind:key="course.slug">
                        <CourseCard
                            :image="course.thumbnail"
                            :title="course.title"
                            :description="course.description"
                            :slug="'classes/' + course.slug"
                        />
                    </section>
                </section>
            </main>
        </div>
    </Layout>
</template>

<script>
import data from '@/data/data.yaml'

import CourseCard from '~/components/CourseCard.vue'

export default {
    components: {
        CourseCard
    },
    data() {
        return {
            data
        }
    },
    metaInfo() {
        return {
            title: 'Classes'
        }
    }
}
</script>

<style lang="scss">
.wrapper {
    background: $white;
    padding-top: 1rem;
    padding-bottom: 5rem;

    main {
        width: 80%;
        margin: 0 auto;
        color: $dark-blue;

        h1 {
            margin: 0;
            padding: 1rem 0;
            padding-bottom: 1.5rem;
            font-size: 2.5rem;

            @include phone {
                text-align: center;
                padding: 1rem 0;
            }
        }

        .courses {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(3, 1fr);

            @include tablet {
                grid-template-columns: repeat(2, 1fr);
            }

            @include phone {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>