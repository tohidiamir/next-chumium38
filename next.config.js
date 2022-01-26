const withTM = require('next-transpile-modules')([
    "@next/react-refresh-utils"
    // Those packages needs to be transpiled to be sure they pass `es-check es5`

]);

module.exports =  withTM({
    eslint: {
        ignoreDuringBuilds: true,
    },
    generateEtags: false,
})
