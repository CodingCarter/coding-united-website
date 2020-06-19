<template>
    <header>
        <div>
            <g-link to="/">Home</g-link>
            <g-link to="/classes/">Classes</g-link>
            <g-link to="/blog/">Blog</g-link>
        </div>
        <div>
            <h3>
                <g-link to="/">
                    <g-image src="~/favicon.png" alt="coding united logo" />
                    Coding United
                </g-link>
            </h3>
        </div>
        <div>
            <g-link to="/donate/">Support Us</g-link>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 80%;
    padding: .5rem 10%;
    height: 4rem;
    background: #fff;
    color: $light-blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        $navLinkPadding: 1.1rem;
        
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

    div:nth-of-type(1) {
        justify-content: left;
    }

    div:nth-of-type(2) {
        position: static;
        justify-content: center;

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
}
</style>