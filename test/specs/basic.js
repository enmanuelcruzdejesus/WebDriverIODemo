describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://emplea.do')
        expect(browser).toHaveTitle('Home Page - Emplea.do');
    })
    it('Iniciar sesion con Google',()=>{
        browser.url('https://emplea.do');
         $('a*= Inicia sesión').click();
        $('button*= Accede con Google').click();
      
        $('[name="identifier"]').setValue("enmanuelcruzdejesus@gmail.com");
        $('.VfPpkd-RLmnJb').click();
      
        $('[name="password"]').waitForExist({ timeout: 20000 });
        browser.pause(3000);
        $(".Xb9hP input").setValue("Open2022*");
        $('.VfPpkd-RLmnJb').click();
        expect(browser).toHaveUrl('https://emplea.do/jobs/wizard#');
        // var pageUrl = browser.getUrl();
        // expect(pageUrl,"https://emplea.do/jobs/wizard");

      

      
    })
    

})