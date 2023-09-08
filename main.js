import { styles } from "./assets.js"

class CardWeatherWidget {
  constructor() {
    this.initialize()
    this.injectStyles()
  }


  async initialize() {
    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent()

  }

  createWidgetContent() {
    document.querySelector('#app').innerHTML = `
    <body>
      <div class="container">
        <div class="text-container">
          <h2>Montes Claros - MG</h2>
          <p>
            Previsão no momento: 34° C
            <img src="https://www.climatempo.com.br/dist/images/v2/svg/2.svg" />
          </p>
        </div>
      </div>
    </body>
    `
  }

  injectStyles() {
    const styleTag = document.createElement("style")
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "")

    document.head.appendChild(styleTag)
  }

}

function initializeWidget() {
  return new CardWeatherWidget()
}

initializeWidget()