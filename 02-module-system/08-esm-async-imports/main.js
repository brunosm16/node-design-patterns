const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl', 'pt']

const languageArgs = process.argv[2]

const languageIsNotIncluded = !SUPPORTED_LANGUAGES.includes(languageArgs)

if (languageIsNotIncluded) {
    console.error('language selected is not suported')
    process.exit(1)
}

const languageModule = `./string-${languageArgs}.js`

import(languageModule).then((langModule) => console.log(langModule.GREETING))