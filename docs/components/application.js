import { html } from "../preact/htm.js"

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
