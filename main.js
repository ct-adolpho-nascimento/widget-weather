import { styles } from "./assets.js"

class CardWeatherWidget {
  constructor() {
    this.initialize()
    this.injectStyles()
    // this.getGraphql()
  }

  // async getGraphql() {
  //   const query = `
  //   query {
  //     weather(
  //       input: {
  //         locale: { latitude: "-23.548", longitude: "-46.636" }
  //         filteredBy: NOW
  //       }
  //     ) {
  //       data {
  //         temperature {
  //           data {
  //             ... on CalculatedValue {
  //               date
  //               average
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `;

  //   const graphqlEndpoint = URL_GRAPHQL;

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ query }),
  //   };

  //   fetch(graphqlEndpoint, requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       const temperature = data.data.weather.data.temperature.data[0].average;
  //       const date = data.data.weather.data.temperature.data[0].date;
  //       const textoResultado = document.getElementById("temperature");
  //       const dateTime = document.getElementById("date-time");

  //       const getDate = new Date(date);
  //       const day = String(getDate.getDate()).padStart(2, '0');
  //       const monthy = String(getDate.getMonth() + 1).padStart(2, '0');
  //       const year = getDate.getFullYear();
  //       const hour = String(getDate.getHours()).padStart(2, '0');
  //       const minute = String(getDate.getMinutes()).padStart(2, '0');
  //       const second = String(getDate.getSeconds()).padStart(2, '0');

  //       const dateFormatted = `${day}/${monthy}/${year} ${hour}:${minute}:${second}`;

  //       console.log(dateFormatted);

  //       if (data && data.data && data.data.weather) {
  //         textoResultado.textContent = `${Math.round(temperature)}° C`
  //         dateTime.textContent = `Última atualização: ${dateFormatted}`
  //       } else {
  //         textoResultado.textContent = "--° C"
  //         dateTime.textContent = `Última atualização: --`

  //       }
  //     })
  //     .catch(error => {
  //       console.error('Erro na requisição GraphQL:', error);
  //     });
  // }

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
            <span id="temperature"></span>
            <img src="https://www.climatempo.com.br/dist/images/v2/svg/2.svg" />
          </p>
          <span id="date-time"></span>
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