<template>
    <Layout>
        <main class="class-page">
            <section class="class-main">
                <g-link :to="$context.data.classesRoute + $context.class.slug + '/' + $context.class.contents[0].title.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('').split('?').join('') + '/'">
                    <g-image :src="$context.class.thumbnail" alt="class image" />
                    <div>
                        <div></div>
                    </div>
                </g-link>
                <section>
                    <h1 id="class-title" v-html="$context.class.title" />
                    <h2>Taught by <span v-for="instructor in $context.data.instructors" v-bind:key="instructor.slug"><g-link v-if="instructor.name == $context.class.instructor" :to="$context.data.instructorsRoute + instructor.slug + '/'">{{ $context.class.instructor }}</g-link></span></h2>
                    <g-link :to="$context.data.classesRoute + $context.class.slug + '/' + $context.class.contents[0].title.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('').split('?').join('') + '/'">Enroll for FREE</g-link>
                </section>
            </section>
            <section class="class-info">
                <ClassInfo
                    :classes_route="$context.data.classesRoute"
                    :title="$context.class.slug"
                    :description="$context.class.description"
                    :contents="$context.class.contents"
                    :instructor="$context.class.instructor"
                    :date_created="$context.class.date_created"
                />
            </section>
        </main>
    </Layout>
</template>

<script>
import ClassInfo from '~/components/ClassInfo.vue'

export default {
    components: {
        ClassInfo
    },
    metaInfo() {
        return {
            title: this.$context.class.title,
            meta: [
                {
                    name: 'description',
                    content: this.$context.class.description.length > 165 ? this.$context.class.description.substring(0, 162) + '...' : this.$context.class.description
                },
                {
                    name: 'author',
                    content: this.$context.class.instructor
                }
            ]
        }
    }
}
</script>

<style lang="scss">

main.class-page {
    width: 80%;
    padding: 0 10%;
    min-height: 89.4vh;
    background: $white;

    .class-main {
        padding-top: 3rem;
        width: 95%;
        display: grid;
        grid-gap: 2.5%;
        grid-template-columns: 60% auto;

        @include tablet {
            grid-template-columns: 1fr;
        }
    
        & > a {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
    
            img {
                max-width: 100%;
                filter: brightness(.7);
            }

            &:hover > div {
                opacity: .95;
                transition: 200ms;
            }

            & > div {
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                border-radius: 50%;
                background: #222;
                width: 10rem;
                height: 10rem;
                opacity: .85;
                transition: 600ms;

                @include phone {
                    width: 6.5rem;
                    height: 6.5rem;
                }

                div {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    left: 55%;
                    width: 65%;
                    height: 75%;
                    background: #fff;
                    clip-path: polygon(80% 50%, 20% 20%, 20% 80%);
                }
            }
        }

        section {
            color: $dark-blue;

            h1 {
                font-size: 4rem;
                margin: 0;
                line-height: 1.2;

                @include phone {
                    margin: 1rem 0;
                    font-size: 3rem;
                }
            }

            h3 {
                font-weight: 500;
                margin: .65rem 0;
                opacity: .95;

                @include phone {
                    margin-bottom: 2rem;
                }
            }

            h2 {
                font-size: 1.15rem;
                font-weight: 500;
                margin: .5rem 0;
                opacity: .9;

                a {
                    color: inherit;
                }
            }

            & > a {
                color: $white;
                margin-top: 1rem;
                display: inline-block;
                font-size: 1.7rem;
                text-decoration: none;
                padding: 1rem 1.5rem;
                background: rgba(16,46,74, .85);
                border-radius: .2rem;
                opacity: .9;
                transition: 700ms ease;

                &:hover {
                    color: #fff;
                    transition: 300ms ease;
                    background: rgba(16,46,74, .9);
                    opacity: 1;
                }
            }
        }
        
    }
}

</style>