<template>
    <header>
        <div>
            <g-link to="/classes/">Classes</g-link>
            <g-link to="/blog/">Blog</g-link>
            <g-link to="/mission/">Mission</g-link>
        </div>
        <div>
            <h3>
                <g-link to="/">
                    <g-image src="~/favicon.png" alt="coding united logo" />
                    <span>Coding United</span>
                </g-link>
            </h3>
        </div>
        <div>
            <g-link to="/donate/">Support Us</g-link>
        </div>
        <section>
            <div class="menu-toggle-icon" v-on:click="toggleNav">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <nav>
                <g-link to="/">Home</g-link>
                <g-link to="/classes/">Classes</g-link>
                <g-link to="/blog/">Blog</g-link>
                <g-link to="/mission/">Mission</g-link>
            </nav>
        </section>
    </header>
</template>

<script>
var navShown = false;

export default {
    methods: {
        toggleNav(event) {
            var header = document.querySelector('header');
            var nav = document.querySelector('nav');
            
            if (!navShown) {
                nav.style.display = 'flex';
                nav.style.transition = 'all ease 450ms';
                header.style.position = 'fixed';
                document.body.style.marginTop = '5rem';
                nav.style.opacity = .975;
                setTimeout(function() {
                    nav.style.left = 0;
                }, 1);
            } else {
                nav.style.left = '-75%';
                nav.style.transition = 'all ease 250ms';
                nav.style.opacity = 0;
                header.style.position = 'static';
                document.body.style.marginTop = '0';
                setTimeout(function() {
                    nav.style.display = 'none';
                }, 251);
            }
            navShown = !navShown;
        }
    },
    mounted() {
        document.body.style.marginTop = 0;
    }
}
</script>

<style lang="scss" scoped>
header {
    z-index: 5;
    width: 80%;
    padding: .5rem 10%;
    height: 4rem;
    background: #fff;
    color: $light-blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    top: 0;

    @include phone {
        width: 90%;
        padding: .5rem 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        $navLinkPadding: 1.1rem;
        
        @include phone {
            &:nth-of-type(1), &:nth-of-type(3) {
                display: none;
            }
        }

        &:nth-of-type(1) {
            right: $navLinkPadding; // Correcting padding offset
        }

        &:nth-of-type(3) {
            left: $navLinkPadding;
        }

        a {
            color: inherit;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 500;
            padding: .5rem $navLinkPadding;
        }
    }

    & > div:nth-of-type(1) {
        justify-content: left;
    }

    & > div:nth-of-type(2) {
        position: static;
        justify-content: center;

        @include phone {
            justify-content: flex-start;
        }

        img {
            height: 2.25rem;
            width: 2.25rem;
            margin-right: .75rem;
        }

        h3 {
            padding: 0;
            margin: 0;
            color: $dark-blue;

            a {
                font-size: 1.4rem;
                font-weight: 900 !important;
                display: flex;
                flex-direction: row;
                align-items: center;
                letter-spacing: -.3px;
            }
        }
    }

    div:nth-of-type(3) {
        justify-content: flex-end;
    }

    section {
        overflow-x: hidden;
        display: none;
        align-items: center;

        .menu-toggle-icon {
            width: 2.25rem;
            margin-right: 1.5rem;
            padding: .5rem;
            height: 2rem;
            // background: $dark-blue;
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-gap: .4rem;
            cursor: pointer;

            .bar {
                width: 100%;
                background: $dark-blue;
                border-radius: 3px;
                position: relative;
            }
        }

        nav {
            display: none;
            position: absolute;
            top: 5rem;
            left: -75%;
            will-change: left;
            flex-direction: column;
            align-items: center;
            width: 75%;
            height: calc(100vh - 5rem);
            background: #fff;
            transition: right 400ms ease;
            opacity: 0;
            z-index: 5;

            a {
                display: block;
                width: 100%;
                text-align: center;
                padding: .8rem 0;
                font-size: 1.5rem;
                text-decoration: none;
                color: inherit;
            }
        }
        
        @include phone {
            display: flex;
        }
    }
}
</style>