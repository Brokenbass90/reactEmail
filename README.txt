git clone https://github.com/Brokenbass90/reactEmail.git

cd reactEmail

npm install

gulp --theme <название_темы> --email <название_письма> [--locale <локаль>]
example - gulp --theme weekly-digest --email market-moves

in browser - http://localhost:3000/weekly-digest/market-moves/en/index.html



## Настройка окружения разработки

Для обеспечения единообразного стиля кодирования и автоматического форматирования кода рекомендуется использовать редактор Visual Studio Code с установленными расширениями:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

При открытии проекта в VSCode вам будет предложено установить эти расширения, если они еще не установлены.

Настройки редактора для этого проекта находятся в файлах `.vscode/settings.json` и `.vscode/extensions.json`.
