<template>
    <Layout>
        <main class="instructor">
            <section class="info">
                <g-image :src="$context.instructor.image" />
                <h3>Instructor</h3>
                <h1 v-html="$context.instructor.name" />
                <h2 v-html="$context.instructor.bio" />
            </section>
            <h2>{{ $context.instructor.name.split(' ')[0] }}'s Latest Classes</h2>
            <section class="courses" id="classes">
                <div v-for="course in data.classes" v-bind:key="course.slug">
                    <CourseCard
                        v-if="course.instructor == $context.instructor.name"
                        :image="course.thumbnail"
                        :title="course.title"
                        :description="course.description"
                        :slug="'classes/' + course.slug"
                    />
                </div>
            </section>
        </main>
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
    }
}
</script>

<style lang="scss">
main.instructor {
    width: 80%;
    margin: 0 auto;
    color: $dark-blue;

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5rem;
        margin-bottom: 3rem;

        @include phone {
            padding-top: 3rem;
        }
    
        img {
            height: 9.5rem;

            @include phone {
                height: 7.5rem;
            }
        }
    
        h3 {
            text-transform: uppercase;
            color: $medium-gray;
            font-size: 1.3rem;
            margin-top: 2rem;
            margin-bottom: 0;
            font-weight: 500;
            opacity: .85;

            @include phone {
                font-size: 1.15rem;
            }
        }

        h1 {
            font-size: 3.2rem;
            margin: 0;

            @include phone {
                font-size: 2.75rem;
            }
        }
    
        h2 {
            max-width: 52%;
            text-align: center;
            font-size: 1.375rem;
            font-weight: 400;
            line-height: 1.75;

            @include phone {
                font-size: 1.25rem;
                max-width: 75%;
            }
        }
    }

    & > h2 {
        margin: 2rem 0;
        font-size: 2rem;

        @include phone {
            text-align: center;
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
</style>