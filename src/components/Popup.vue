<template>
    <div class="popup-wrapper">
        <div class="popup">
            <h5>Hi, there!</h5>
            <p>This website is in development! I'm currently working on it almost every night to get it ready for production. Send any bugs or dead links over to <g-link to="https://twitter.com/CodingUnited">@CodingUnited</g-link> on twitter!</p>
            <h6 v-on:click="hidePopup">Let's move on!</h6>
        </div>
    </div>
</template>

<script>
const popupId = 74635643;

export default {
    methods: {
        hidePopup() {
            document.querySelector('.popup-wrapper').style.opacity = 0;

            setTimeout(function() {
                document.querySelector('.popup-wrapper').style.display = 'none';
            }, 300);
        }
    },
    mounted() {
        if (sessionStorage.getItem('seenPopup-' + popupId) == null && !sessionStorage.getItem('seenPopup-' + popupId)) {
            sessionStorage.setItem('seenPopup-' + popupId, true);

            setTimeout(function() {
                document.querySelector('.popup-wrapper').style.display = 'flex';
                setTimeout(function() {
                    document.querySelector('.popup-wrapper').style.opacity = 1;
                }, 10);
            }, 800);
        }
    }
}
</script>

<style lang="scss" scoped>
.popup-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background: rgba(0, 0, 0, .6);
    opacity: 0;
    transition: opacity 300ms ease;

    .popup {
        background: $white;
        padding: 2rem;
        width: 40%;
        border-radius: 1rem;

        @include phone {
            width: 75%;
            padding: 1.5rem;
        }

        h5 {
            font-size: 3.25rem;
            margin: 0;

            @include phone {
                font-size: 3rem;
            }
        }

        p {
            font-size: 1.25rem;
            line-height: 1.6;

            @include phone {
                font-size: 1.15rem;
            }

            a {
                color: inherit;
            }
        }

        h6 {
            display: inline-block;
            font-size: 1.7rem;
            margin: 0;
            font-weight: 400 !important;
            cursor: pointer;
            padding: .4rem .9rem;
            border: .25rem solid $light-blue;
            border-radius: .25rem;

            @include phone {
                font-size: 1.6rem;
                padding: .3rem .8rem;
            }
        }
    }
}
</style>
