describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://emplea.do')
        expect(browser).toHaveTitle('Home Page - Emplea.do');
    })
    it('Iniciar sesion con Google',()=>{
        browser.url('https://emplea.do');
         $('a*= Inicia sesión').click();
        $('button*= Accede con Google').click();
        $('.Xb9hP input').setValue("Open2022*");
        $('.VfPpkd-RLmnJb').click();
    })
    

})