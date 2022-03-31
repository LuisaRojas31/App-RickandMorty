## Visualización

Visualiza este proyecto dando clic [Aquí](http://n5-now-test.s3-website.us-east-2.amazonaws.com).

## Librerias utilizadas

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
Paleta de colores [React Color](https://casesandberg.github.io/react-color/).
Peticiones a API [use-http](https://use-http.com/#/).
Estilos con sass y [styled components](https://styled-components.com/).

## Scripts disponibles

### `npm start`

Se levantará el servidor de desarrollo .\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

### `npm run build`

Compila la app y deja los archivos estáticos en la carpeta `build` .\

## Punto 2 Palíndromos

    const validarPalindromo = (text) => {
    text = text.replace(/ /g, "");
    const textReversed = text.split("").reverse().join("");
    return textReversed === text;
    }

    console.log(validarPalindromo("anita lava la tina"));
