import { html, useEffect, useState } from "../preact/htm.js"

import { Container } from "./container.js"

const ApplicationContent = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    })

    return html`
        <div class="application-content">
            <${Container}>
                <h2>Simple state test</h2>
                <p>The counter value is ${counter}</p>
            <//>
        </div>
    `
}

export {
    ApplicationContent
}
