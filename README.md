# basico-com-redux

Estudando Redux com React.

# Notas

Store: É um container que armazena todo o estado da sua aplicação.
Action: 
	- É um objeto que representa a intenção de mudar o estado. 
	- Neste objeto há novas informações que serão enviadas a store. 
	- Emitimos actions (através da função de dispatch) para atualizarmos o estado com novas informações.
	- Descreve o que aconteceu.
	- Diz o que aconteceu.
    - É um objeto que diz uma ação, e dentro dele há informações sobre esta ação.
    - É um objeto que diz que quer mudar algo no estado.
	- As actions são passadas para o reducers, para eles saberem como vão transformar o estado.
Reducer:
	- É uma função pura com a assinatura `(prevState, action) => nextState`.
	- Ela aceita o estado anterior e uma ação, e com isso calcula o próximo estado da aplicação
	- Diz como o estado será transformado.
    - Recebe e trata as informações que foram enviadas a store.
    - Evolui o estado para um novo.

Provider do React Redux: Permite que todos os componentes abaixo dele acessem a store.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
