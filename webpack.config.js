const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const conf = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.sass$/,
                // include: paths.appSrc,
                // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "node-sass"]
                use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: { 
							sassOptions: {
								includePaths: [
									path.resolve(__dirname, "src")
								]
							}
						}
					}
				]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".css", ".jsx", ".tsx", ".sass", ".ts"] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}

module.exports = conf 