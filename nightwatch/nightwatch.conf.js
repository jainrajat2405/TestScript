var SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone-3.0.1.jar',
  host: '127.0.0.1',
  port: 4444
};
var SELENIUM_CONFIGURATION_CHROME = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone-3.0.1.jar',
  host: '127.0.0.1',
  port: 4444,
  "cli_args" : {
    "webdriver.chrome.driver" : "bin/chromedriver.exe"
  }
};
var SELENIUM_CONFIGURATION_IE = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone-3.0.1.jar',
  host: '127.0.0.1',
  port: 4444,
  "cli_args" : {
    "webdriver.chrome.driver" : "bin/IEDriverServer.exe"
  }
};
var SELENIUM_CONFIGURATION_BS={
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  }
var FIREFOX_CONFIGURATION = {
  browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true
};
var CHROME_CONFIGURATION = {
  "browserName" : "chrome",
  "javascriptEnabled" : true,
  "acceptSslCerts" : true,
  "chromeOptions" : {
    "args" : ["start-fullscreen"],
    "prefs" : {
      "credentials_enable_service" : false,
      "profile.password_manager_enabled" : false
    }
  }
}
var IE_CONFIGURATION = {
 
}
var CHROME_CONFIGURATION_BS = {
  'browserstack.user': 'rahulsoni4',
  'browserstack.key': 'iotyEA8pVGjCZ74MDq3x',
  'os': 'Windows',
  'os_version': '7',
  'browser': 'Chrome',
  'browser_version': '58.0',
  'resolution': '1024x768',
  'browserstack.debug':true,
   "chromeOptions" : {
    "args" : ["start-fullscreen"],
    "prefs" : {
      "credentials_enable_service" : false,
      "profile.password_manager_enabled" : false
    }
  },
  'build': 'demonf-uat-CHROME',
  'project': 'Tryggo',
  'browserstack.debug':true,

}


var IE_CONFIGURATION_BS={
  'browserstack.user': 'rahulsoni4',
  'browserstack.key': 'iotyEA8pVGjCZ74MDq3x',
  'os': 'Windows',
  'os_version': '10',
  'browser': 'Edge',/*
  'resolution': '1024x768',*/
  'build': 'demonf-uat-IE',
  'project': 'Tryggo',
  'browserstack.debug':true,
  'browserstack.ie.fullScreen': true
  /*'ignoreProtectedModeSettings':true,
  'ignoreZoomSetting':true*/

  /*,
    'browserstack.local': true*/
}


var DEFAULT_CONFIGURATION = {
 // launch_url: 'http://localhost',    // for local testing, comment it for BS
  selenium_port: 80,                // only for BS
  selenium_host: 'hub-cloud.browserstack.com',       // only for BS
 //selenium_port: 4444,                   // for local testing, comment it for BS
 //selenium_host: '127.0.0.1',            // for local testing, comment it for BS
 // desiredCapabilities: FIREFOX_CONFIGURATION
 // desiredCapabilities:CHROME_CONFIGURATION,
 //desiredCapabilities:CHROME_CONFIGURATION_BS,
   desiredCapabilities:IE_CONFIGURATION_BS,
   // desiredCapabilities:IE_CONFIGURATION,
  screenshots: {
        enabled: true, // if you want to keep screenshots
        path: './screenshots' // save screenshots here
      }
};

var ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['tests'],
 // selenium: SELENIUM_CONFIGURATION,
 //selenium:SELENIUM_CONFIGURATION_CHROME, 
 selenium:SELENIUM_CONFIGURATION_BS,
// selenium:SELENIUM_CONFIGURATION_IE,
  test_settings: ENVIRONMENTS,
  outout_folder:'./reports',

};