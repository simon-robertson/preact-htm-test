import { html } from "https://unpkg.com/htm/preact/standalone.module.js"

import { ApplicationContent } from "./application-content.js"
import { ApplicationHeader } from "./application-header.js"

const Application = () => {
    return html`
        <${ApplicationHeader} />
        <${ApplicationContent} />
    `
}

export {
    Application
}
