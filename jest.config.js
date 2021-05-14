module.exports = {
  bail: 1,
  verbose: true,

  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "src"],

  moduleNameMapper: {
    "modulePaths": ["/shared/vendor/modules"],
    "moduleFileExtensions": ["js", "jsx"],
    "moduleDirectories": ["node_modules", "bower_components", "shared"],

    "moduleNameMapper": {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",

      "^react(.*)$": "<rootDir>/vendor/react-master$1",
      "^config$": "<rootDir>/configs/app-config.js"
    }
  },

  collectCoverage: true,

  collectCoverageFrom:[
    "**/*.{js,jsx}",
    "!**/node_modules/**",
  ],

  coverageThreshold:{
    global:{
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  },

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "^.+\\.svg$": "jest-transform-stub"
  },

  moduleNameMapper: {
    "^.+.(svg|png|jpg)$": "jest-transform-stub"
  },

  setupFilesAfterEnv: [ './src/setupTests.js']

};
