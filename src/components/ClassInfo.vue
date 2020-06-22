<template>
    <section class="class-info">
        <div class="class-title" v-if="include_contents == false">
            <h1 v-html="title" />
        </div>
        <div class="class-description">
            <h3>Class Description</h3>
            <p v-html="description" />
        </div>
        <div class="class-contents" v-if="include_contents != false">
            <h3>Class Content</h3>
            <ol>
                <li v-for="content in contents" v-bind:key="content.url">
                    <g-link :to="parseSlug(classes_route, title, content.title)">
                        <h4 v-html="content.title" />
                        <g-image v-if="content.url.includes('youtube')" src="~/assets/img/icons/video.png" />
                        <g-image v-if="content.url.includes('quizlet')" src="~/assets/img/icons/quiz.png" />
                    </g-link>
                </li>
            </ol>
        </div>
        <h3>More Details...</h3>
        <ul>
            <li>Videos: {{ contents.length }}</li>
            <li>Instructor: {{ instructor }}</li>
            <li>Class Created: {{ formatDate(date_created) }}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ["classes_route", "title", "description", "contents", "instructor", "date_created", "include_contents"],
    methods: {
        parseSlug(classes_route, title, slug) {
            return `${classes_route}/${title}/${slug.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('')}/`
        },
        formatDate(date) {                        
            date = new Date(date)
            const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' }) 
            const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date) 
            return `${month} ${day}, ${year}`
        }
    }
}
</script>

<style lang="scss" scoped>
.class-info {
    background: $white;
    color: $dark-blue;
    width: 100%;
    padding: 5rem 0;
    padding-top: 2rem;

    @include phone {
        padding-top: 3rem;
    }

    & > div {
        margin: 2rem 0;
    }

    h3 {
        opacity: .9;
        margin: 0;
        font-size: 2.5rem;

        @include phone {
            font-size: 1.6rem;
        }
    }

    p, li {
        font-size: 1.1rem;
        opacity: .85;
    }

    .class-contents {
        
        ol {
            padding-left: 3rem;
            font-weight: 200;
            font-weight: 400;

            a {
                padding: .9rem 0;
                display: flex;
                align-items: center;
                text-decoration: none;
                color: inherit;

                h4 {
                    font-weight: inherit;
                    margin: 0;
                }

                img {
                    padding-left: .3rem;
                    width: 1rem;
                    height: 1rem;
                    opacity: .7;
                }
            }
        }
    }

    ul {
        list-style: none;
    }
}
</style>