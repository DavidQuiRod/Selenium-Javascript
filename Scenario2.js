const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
async function Scenario2(){
    let driver = new Builder().forBrowser('chrome').setChromeOptions().build();
    try{
    //Step 1 Open the https://www.lambdatest.com/selenium-playground page and click “Drag & Drop Sliders”
    await driver.get('https://www.lambdatest.com/selenium-playground');
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath('//*[@id="__next"]/div/section[2]/div/ul/li[13]/a')).click();
    //Step 2 Select the slider “Default value 15” and drag the bar to make it 95 by validating whether the range value shows 95.
    let deslizador= await driver.findElement(By.xpath('//*[@id="slider3"]/div/input')); //Indentificamos el slider bar
    const actions= driver.actions({async:true}); //
    await actions.move({origin: deslizador, x:215, y:0}).click().perform(); //El origen a mover es sliderBar se mueve 215 milisegundos para llegar al resultado de 95 /*Revisar mas adetalle ese tema de los milisegundos*/
    const valorFinal= await driver.findElement(By.xpath('//*[@id="rangeSuccess"]')).getText();
    console.log(valorFinal);
    assert.equal(valorFinal,95,'El slider bar se encuentra con otro numero diferente al 95');
    console.log('Fin de caso de prueba');
    /*
    if(valorFinal==95){
        console.log('El slider bar se encuentra en 95');
        await driver.close();
    }else{
        console.log('El slider bar se encuentra con otro numero diferente al 95');
    }*/ 
   } finally 
   {
       await driver.quit();
    }
    }

Scenario2();