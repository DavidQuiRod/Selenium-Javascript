const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
async function Scenario3() {
    let driver = new Builder().forBrowser('chrome').setChromeOptions().build();
    
    try{//Step 1 Open the https://www.lambdatest.com/selenium-playground page and click “Input Form Submit”.
    await driver.get('https://www.lambdatest.com/selenium-playground');
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath('//*[@id="__next"]/div/section[2]/div/ul/li[20]/a')).click();
    //Step 2 Click “Submit” without filling in any information in the form.
    const btnSubmit= await driver.findElement(By.xpath('//*[@id="seleniumform"]/div[6]/button'));
    await btnSubmit.click();
    console.log('Se dio click en el botón submit');
    //Step 3 Assert “Please fill out this field” error message.
    const mensajeNombre=await driver.findElement(By.xpath('//*[@id="name"]')).getAttribute("validationMessage");
    console.log(mensajeNombre);
    if(mensajeNombre =='Completa este campo' || mensajeNombre =='Please fill out this field'){ //Se ponen ambos mensajes dependiendo de que idioma agarre el navegador español o Ingles.
        console.log('Si cumple con uno de los enunciados');
    }
    else{
        console.log('No cumple con los mensajes esperados');
    }
    //Step 4 Fill in Name, Email, and other fields.
    await driver.findElement(By.xpath('//*[@id="name"]')).sendKeys('David');
    await driver.findElement(By.xpath('//*[@id="inputEmail4"]')).sendKeys('pruebasLambatest@gmail.com');
    await driver.findElement(By.xpath('//*[@id="inputPassword4"]')).sendKeys('PruebaLamba123');
    await driver.findElement(By.xpath('//*[@id="company"]')).sendKeys('LAMBDATEST');
    await driver.findElement(By.xpath('//*[@id="websitename"]')).sendKeys('www.LAMBDTEST.com');
    await driver.findElement(By.xpath('//*[@id="inputCity"]')).sendKeys('Colima');
    await driver.findElement(By.xpath('//*[@id="inputAddress1"]')).sendKeys('Calle Francisco Villa');
    await driver.findElement(By.xpath('//*[@id="inputAddress2"]')).sendKeys('Calle Mirador');
    await driver.findElement(By.xpath('//*[@id="inputState"]')).sendKeys('Manzanillo');
    await driver.findElement(By.xpath('//*[@id="inputZip"]')).sendKeys('28868');
    console.log('Se ingresaron los parametros de las cajas de texto');
    //Step 5 From the Country drop-down, select “United States” using the text property.
    await driver.findElement(By.xpath('//*[@id="seleniumform"]/div[3]/div[1]/select')).sendKeys('United States');
    console.log('Se ingresa el valor de United States en el dropdown');
    //Step 6 Fill in all fields and click “Submit”.
    await btnSubmit.click();
    console.log('Se envia el formulario con todos los datos solicitados');
    //Step 7 Once submitted, validate the success message “Thanks for contactingus, we will get back to you shortly.” on the screen.
    const mensajeObtenido=await driver.findElement(By.xpath('//*[@id="__next"]/div/section[2]/div/div/div/div/p')).getText();
    assert.equal(mensajeObtenido,'Thanks for contacting us, we will get back to you shortly.','El mensaje obtenido no es el mismo que el esperado')
    console.log('Fin de caso de prueba');
}finally{
    await driver.close();
    console.log('Se cerro el navegador');
}
}
Scenario3();
