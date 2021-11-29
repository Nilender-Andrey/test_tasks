//* запустить можно командой npm run build прописав в package.json => "scripts": {"build": "webpack --config webpack.config.js"}

//! конфигуратор
const bundleName = 'bundle'; // название итоговой сборки
const title = ''; // добовляет title в html
const fileCss = false; // создать отдельный css файл или все стили в js засунуть
const minYesOrNo = true; // минимизировать файлы?
const svgInFile = false; // svg закодировать в файл

//! *************************************************
const path = require('path'); //* для работы с путями
const HtmlWebpackPlugin = require('html-webpack-plugin'); //* для взаимодействия с html (подключает скрипты)
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //* создает отдельный файл css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //* минимизирует css
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin'); //* минимизирует html
const TerserPlugin = require('terser-webpack-plugin'); //* минимизирует js
const svgToMiniDataURI = require('mini-svg-data-uri'); //* svg закодировать в файл

module.exports = {
  //! указываем корневую папку (все пути указываем уже без нее)
  context: path.resolve(__dirname, '..', 'src'),

  //! параметр разработки
  mode: 'development',
  //* "development" - режим разработки (не минифицируется);

  //! параметры входных файлов
  // entry: './src/index.js', //* путь, если указан context, то 'src' удаляем
  entry: {
    //* можно добавить несколько входных файлов
    main: path.resolve(__dirname, '..', 'src/index.tsx'),
  },

  //! параметры выходных файлов
  output: {
    path: path.resolve(__dirname, '..', 'dist'), //* путь + папка
    // filename: 'bundel.js', //*имя итогового файла
    // filename: '[name].bundel.js', //* [name] добавляет имя входного файла (актуально для нескольких входных файлов )
    // filename: fileName('js'), //* [contenthash] добавляет название в зависимости от контента (кодовый шифр)
    filename: `${bundleName}.js`,
    assetModuleFilename: 'assets/[hash][ext][query]', //* куда складываем сопутствующие файлы и в каком виде
    clean: true, //* очищает dist перед новой сборкой
  },
  resolve: {
    //* расширения по умолчанию (можно не указывать при импортах)
    // extensions:['.js', '.json', '.png'],
    //* подменяет длинный путь на короткий
    //  alias: {
    //     '@models': path.resolve(__dirname, 'src/models'),
    //   },

    extensions: ['.tsx', '.ts', '.js', '.json', '.png'],
  },

  //! подключаем плагины
  plugins: [
    //* создает html в итоговой сборке с подключенными js файлами
    // ? npm i -D html-webpack-plugin
    new HtmlWebpackPlugin({
      // filename: 'index.html', //* можно задать имя
      title, //* задает title в html
      template: path.resolve(__dirname, '..', 'public/index.html'), //* если не указан то создаст пустой html, если указан то возмет его за основу(т.е. перенесет весь код)
    }),

    //* для переноса статических файлов
    // ? npm install copy-webpack-plugin --save-dev
    // работает без этого
    // new CopyPlugin({
    //   patterns: [
    //     // { from: 'source', to: 'dest' },
    //     {
    //       from: path.resolve(__dirname, '..', 'src/assets'),
    //       to: path.resolve(__dirname, '..', 'dist/assets'),
    //     },
    //   ],
    // }),

    //* создает отдельный файл css
    // ? npm install --save-dev mini-css-extract-plugin
    new MiniCssExtractPlugin(),
  ],
  //! как работать с разными типами файлов
  module: {
    //* правила
    rules: [
      //! за место этого использую MiniCssExtractPlugin
      // {
      //   //?  npm i -D style-loader css-loader
      //   //* регулярное выражение, если попалось такое расширение, то делай что в use
      //   test: /\.css$/,
      //   exclude: path.resolve(__dirname, 'node_modules'),

      //   //* webpack двигается с права на лево(т.е. "css-loader" затем "style-loader")
      //   //* css-loader позволяет импрты
      //   //* style-loader добовляет в head html <style></style> подключение
      //   use: ['style-loader', 'css-loader'],
      // },

      //* svg отправляем в код

      svgInFile
        ? {
            test: /\.svg/,
            type: 'asset/inline',
            generator: {
              dataUrl: (content) => {
                const contentNew = content.toString();
                return svgToMiniDataURI(contentNew);
              },
            },
          }
        : {
            test: /\.(?:svg)$/i,
            type: 'asset/resource',
          },

      //* только так работает background-image в css
      //* позволяет импортировать картинки
      {
        test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //* для работы со шрифтами
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // //* настройки для MiniCssExtractPlugin
      {
        test: /\.css$/i,
        use: [
          fileCss ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      //* для scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          fileCss ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      //* для babel
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      //* для babel для ts
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },

      //* для babel для react
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },

  // //! карты
  // devtool: 'source-map',
  // devtool: 'cheap-module-source-map',

  optimization: {
    minimize: minYesOrNo,
    minimizer: [
      //* минимизирует css
      // ? npm install css-minimizer-webpack-plugin --save-dev
      new CssMinimizerPlugin(),

      //* минимизирует html
      // ? npm install html-minimizer-webpack-plugin --save-dev
      new HtmlMinimizerPlugin(),

      //* минимизирует js
      // ? npm install terser-webpack-plugin --save-dev
      new TerserPlugin(),
    ],
  },

  // ? npm i -D webpack-dev-server
  devServer: {
    port: 4200,
    historyApiFallback: true, //не будет работать ввод в адресную строку
  },
};
