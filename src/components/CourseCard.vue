<template>
    <section class="course-card">
        <g-link :to="`/${slug}/`">
            <g-image :src="image" alt="course image" />
            <div>
                <h2 v-html="title" />
                <p v-html="description" />
                <g-link :to="`/${slug}/`">Start Now for Free</g-link>
            </div>
        </g-link>
    </section>
</template>

<script>
export default {
    props: ["image", "title", "description", "slug"]
}
</script>

<style lang="scss" scoped>
section.course-card {
    background: #fff !important;
    min-height: 48vh;
    border-radius: .4rem;
    overflow: hidden;
    box-shadow: 0px 5px 46px -25px rgba(0,0,0,0.25);
    transition: box-shadow .3s ease;

    &:hover {
        box-shadow: 0px 18px 110px -30px rgba(0,0,0,0.45);
    }
    
    a {
        text-decoration: none;

        &:hover a {
            transition: 600ms ease;
            background: rgb(225, 225, 225);
            opacity: 1;
        }

        img {
            width: 100%;
        }

        div {
            color: $dark-blue;
            width: 90%;
            padding: 1rem 5%;
            padding-top: .75rem;

            h2 {
                margin: 0;
            }

            p {
                font-size: .9rem;
                opacity: .9;
                margin-top: .5rem;
                // white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: 4rem;
            }

            a {
                display: flex;
                justify-content: center;
                background: rgb(240, 240, 240);
                font-weight: 500;
                padding: 1rem 0;
                font-size: 1.25rem;
                color: inherit;
                transition: 900ms ease;
                opacity: .95;
            }
        }
    }
}
</style>