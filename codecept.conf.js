exports.config = {
  tests: './*_test.js',
  output: 'D:\\Proger\\autotest\\screenLog',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      waitForNavigation: "domcontentloaded"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'autotest',
  translation: 'ru-RU'
}