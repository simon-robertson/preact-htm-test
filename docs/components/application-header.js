import { html } from "https://unpkg.com/htm/preact/standalone.module.js"

import { Container } from "./container.js"

const ApplicationHeader = () => {
    return html`
        <header class="application-header">
            <${Container}>
                <h1>preact-htm-test</h1>
                <p>This application has been created to try Preact is "HTM mode" using vanilla CSS and JavaScript</p>
            <//>
        </header>
    `
}

export {
    ApplicationHeader
}
