import { html, render } from "https://unpkg.com/htm/preact/standalone.module.js"

import { Application } from "./components/application.js"

const main = () => {
    const element = html`
        <${Application} />
    `
    const container = document.querySelector("main.application")

    if (container !== null) {
        render(element, container)
    }
}

main()
