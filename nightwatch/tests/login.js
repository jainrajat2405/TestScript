import config from './config'

console.log("Starting Login Test. Please Wait ..............");
module.exports = {
  'Login test': function (client) {
  	console.log("Using Following Configurations for login");
    console.log("Hitting for URL : " , config.url)
    console.log("Hitting for Username : " , config.username)
    console.log("Using Password : " , config.password)

    client
    .windowMaximize('current')
    .url(config.url)
      .waitForElementVisible('body',3000)
      
      .waitForElementVisible('.lg-login',10000,function(msg){
        console.log(msg)
      	if(msg.value){
      	console.log("login form found :  Navigated to tryggo successfully");
      	}
      	else{
      	console.log("login form not found :  Organization does not exist or tomcat is down");
      	}
      })

      .setValue('#inputEmail', config.username)
      .setValue('#inputPassword', config.password)
      .submitForm('#loginForm')
      .waitForElementVisible('body',1000)
      .pause(3000)
      .assert.containsText('#welcomemessage > p','Hi ')
      .assert.elementPresent('header-element')
      .assert.elementPresent('footer-element')
      .assert.elementPresent('home-element')
      .assert.elementPresent('thumbnail-element')
      .elements('css selector','a[data-type="Dashboard"]',function(result){
      		client.assert.equal(result.value.length,config.numberOfDashboards);

      })
      .elements('css selector','a[data-type="Native"]',function(result){
          client.assert.equal(result.value.length,config.numberOfNative);

      })
       .elements('css selector','a[data-type="Embedded"]',function(result){
          client.assert.equal(result.value.length,config.numberOfEmbedded);

      })
      .elements('tag name','thumbnail-element',function(result){
      	client.assert.equal(result.value.length,config.numberOfThumbnails);

      })
      .saveScreenshot('home.png')
	    .click("[data-type='Folder']")
      .pause(6000)
      .click("[data-type='Dashboard']")
      .pause(10000)
      .assert.elementPresent('dashboard-element')
      .pause(4000)
      .click('xpath', '/html/body/body-element/div/header-element/div[3]/div[1]/div/div[3]/div[5]/div/div/a', function(msg) {
	   /*console.log(msg)*/
	  })
	  .click('xpath', '/html/body/body-element/div/header-element/div[3]/div[1]/div/div[3]/div[5]/div/div/ul/li[2]/a', function(msg) {
	   /*console.log(msg)*/
	  })
      .waitForElementVisible('.lg-login',3000,function(msg){
      	if(msg.value){
      	console.log("login form found :  Navigated to tryggo successfully by Logout");
      	}
      	else{
      	console.log("Error occured in Logout");
      	}
      })
      
      .end();
  }
};