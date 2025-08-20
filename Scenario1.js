const {Builder, By, Key, until,} = require('selenium-webdriver');
const assert = require('assert');
//const chrome= require('../drivers/chromedriver/chromedriver');
async function Scenario1() {
    let driver = await new Builder().forBrowser('chrome').build(); <-- Manera 1 de ejecutar chrome driver desde las librerias
    try{
    //Step 1 Open LambdaTest’s Selenium Playground from https://www.lambdatest.com/selenium-playground
    await driver.get('https://www.lambdatest.com/selenium-playground');
    await driver.manage().window().maximize();
    //Step2 Click “Simple Form Demo”.
    await driver.findElement(By.xpath('//*[@id="__next"]/div/section[2]/div/ul/li[34]/a')).click();
    //Step 3 Validate that the URL contains “simple-form-demo”.
    const textURL=driver.getCurrentUrl();
    if((await textURL).includes('simple-form-demo')){
        console.log('The URL contain the word simple-form-demo')
    } else{
        console.log('The URL does not contain the word simple-form-demo. Check your URL or syntax.')
    }
    //Step 4 Create a variable for a string value, e.g., “Welcome to LambdaTest”.
    const messageWelcome='Welcome to LambdaTest'
    console.log(messageWelcome);
    //Step 5 Use this variable to enter values in the “Enter Message” text box.
    await driver.findElement(By.xpath('//*[@id="user-message"]')).sendKeys(messageWelcome);
    console.log('The value was successfully entered into the text box');
    //Step 6 Click “Get Checked Value”.
    await driver.findElement(By.xpath('//*[@id="showInput"]')).click();
    console.log('Se dio clik en el boton');
    //Step 7 Validate whether the same text message is displayed in the right-hand panel under the “Your Message:” section
    const messageFin=await driver.findElement(By.xpath('//*[@id="message"]')).getText();
    assert.equal(messageFin,messageWelcome,'Revisar las cadenas de texto ya que no son iguales');
    console.log('Fin de caso de prueba');
    /*
    console.log('Mensaje obtenido: '+ messageFin); 
    if(messageFin ==messageWelcome){
        console.log("Las dos cadenas de texto coinciden");
        await driver.close();
    } else{
        console.log("Revisar las cadenas de texto ya que no son iguales")
    }*/
   } finally 
   {
       await driver.quit();
   }
}

Scenario1();
