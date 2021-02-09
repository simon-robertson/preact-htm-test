import { html } from "https://unpkg.com/htm/preact/standalone.module.js"

const Container = (props) => {
    return html`
        <div class="container">
            ${props.children}
        </div>
    `
}

export {
    Container
}
