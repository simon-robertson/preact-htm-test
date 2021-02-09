import { html } from "../preact/htm.js"

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
