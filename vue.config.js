module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/commom',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },

    devServer: {
        host: "localhost",
        port: 8080,
      },
}