<template>
    <Layout>
        <!-- <span style="display: none;" v-html="$context" /> -->
        <div class="content-page">
            <main class="content">
                <section class="url-container">
                    <div class="url-container">
                        <iframe v-if="$context.currentContent.url.includes('youtube')" class="url" width="auto" height="auto" :src="$context.currentContent.url.replace('/watch?v=', '/embed/').replace('youtube', 'youtube-nocookie') + '?autoplay=1&showinfo=0&rel=0&vq=hd1080&enablejsapi=1'" autoplay frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        <iframe v-else-if="$context.currentContent.url.includes('quizlet')" :src="$context.currentContent.url + '/learn/embed'" class="url" style="border: none;" />
                    </div>
                </section>
                <section class="controls">
                    <div class="course-information">
                        <div class="contents">
                            <g-link v-for="content in $context.class.contents" v-bind:key="content.url" :to="$context.data.classesRoute + $context.class.slug + '/' + parseSlug(content.title) + '/'">
                                <div class="active-url-link" v-if="parseSlug(content.title) == parseSlug($context.currentContent.title)">
                                    {{ $context.class.contents.indexOf(content)+1 }}.  {{ content.title }}
                                    <v-if v-if="content.url.includes('quizlet')">
                                        (Quizlet)
                                    </v-if>
                                </div>
                                <div v-else>
                                    {{ $context.class.contents.indexOf(content)+1 }}.  {{ content.title }}
                                    <v-if v-if="content.url.includes('quizlet')">
                                        (Quizlet)
                                    </v-if>
                                </div>
                            </g-link>
                        </div>
                    </div>
                </section>
            </main>

            <section class="course-info">
                <h1>
                    <span v-for="content in $context.class.contents" v-bind:key="content.url">
                        <span v-if="content.url == $context.currentContent.url" v-html="$context.class.contents.indexOf(content)+1 + '.  '" />
                    </span>
                    <span id="content-title">
                        {{ $context.currentContent.title }}
                    </span>
                    (<span id="course-title">{{$context.class.title}}</span> Course)
                </h1>
                <h3>Course Description</h3>
                <p v-html="$context.class.description" />
                <br>
                <h3>More Details...</h3>
                <ul>
                    <li>Lectures: {{ $context.class.contents.length }}</li>
                    <li>Instructor: {{ $context.class.instructor }}</li>
                </ul>
                <!-- <Disqus shortname="codingunited" :identifier="$context.currentContent.title" /> -->
            </section>
        </div>
    </Layout>
</template>

<script>
export default {
    methods: {
        parseSlug(slug) {
            return slug.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('')
        }
    },
    mounted() {
        document.title = document.querySelector('#content-title').innerHTML.split('&amp;').join('and') + ' - ' + document.querySelector('#course-title').innerHTML + ' Class';
    },
    updated() {
        document.title = document.querySelector('#content-title').innerHTML.split('&amp;').join('and') + ' - ' + document.querySelector('#course-title').innerHTML + ' Class';

        // function parseSlug(slug) {
        //     return slug.toLowerCase().split(' ').join('-').split('(').join('').split(')').join('')
        // }
        
        // let storage = window.localStorage;

        // if (storage.getItem('completed') == null) storage.setItem('completed', '')

        // document.querySelectorAll('.contentss a div').forEach(url => {            
        //     if (storage.getItem('completed').includes(parseSlug(url.innerHTML.split('. ')[1].trim()))) {  
        //         url.classList.add('completed-content')
        //     }
        // })

        // setTimeout(() => {
        //     storage.setItem('completed', storage.getItem('completed') + '_' + location.href.split('/')[4])
        // }, 90 * 1000)
    }
}
</script>

<style lang="scss"> 
html {
    background: $white;
}

main.content {
    width: 80%;
    max-height: 67.5vh;
    padding: 1rem 10%;
    padding-top: 4rem;
    padding-bottom: 0rem;
    // overflow: hidden;
    background: $white;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 70% auto;

    @include tablet {
        grid-template-columns: 1fr;
        max-height: 100%;
    }

    @include phone {
        width: 100%;
        padding: 1rem 0;
        padding-top: 0;
        grid-gap: 0;
        max-height: 110%;
    }

    .url-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        @include phone {
            padding-top: .5rem;
            background: #fff;
        }

        .url-container {
            position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden;

            iframe {
                position: absolute; top: 0; left: 0; width: 100%; height: 99%;
            }
        }
    }

    .controls {
        max-height: 100%;

        .contents {
            background: #fff;
            border-radius: .25rem;
            max-height: 67.5vh;
            overflow-y: scroll;
            overflow-x: hidden;

            @include tablet {
                max-height: 150vh;
                overflow: auto;
                overflow-x: hidden;
            }
            
            a {
                color: inherit;
                background: #fff;
                display: block;
                width: 100%;
                border-radius: .25rem;
                text-decoration: none;
                border: solid 1px #fff;
                transition: 200ms ease;
                
                div {
                    opacity: .8;
                    padding: 1.4rem 1.25rem;
                }

                div.active-url-link {
                    opacity: .95;
                    color: $light-blue;
                    background: rgb(243, 243, 243);
                }

                div.completed-content {
                    text-decoration: strikethrough;
                }

                &:hover {
                    opacity: 1;
                    border-top: solid 1px rgba(230, 230, 230, .9);
                    border-bottom: solid 1px rgba(230, 230, 230, .9);
                }
            }
        }
    }
}

section.course-info {
    background: $white;
    color: $dark-blue;
    width: 80%;
    padding: 5rem 10%;
    padding-top: 2.5rem;

    @include phone {
        width: 90%;
        padding: 1rem 5%;
    }

    h1 {
        font-size: 2.5rem;
        margin: 0;
        color: $dark-blue;
        padding-bottom: 2rem;

        @include phone {
            font-size: 2rem;
            padding-bottom: 1.5rem;
        }
    }

    h3 {
        opacity: .9;
        margin: 0;
        font-size: 1.8rem;
        font-weight: 500;

        @include phone {
            font-size: 1.6rem;
        }
    }

    p, li {
        opacity: .85;
        font-size: 1.1rem;
    }

    ul {
        list-style: none;
    }
}
</style>
