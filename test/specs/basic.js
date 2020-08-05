describe('empleo suitcase', () => {

    function login(){
        browser.url('https://emplea.do');
        $('a*= Inicia sesión').click();
       $('button*= Accede con Google').click();
     
       $('[name="identifier"]').setValue("enmanuelcruzdejesus@gmail.com");
       $('.VfPpkd-RLmnJb').click();
     
       $('[name="password"]').waitForExist({ timeout: 20000 });
       browser.pause(2000);
       $(".Xb9hP input").setValue("Open2022*");
       $('.VfPpkd-RLmnJb').click();
       expect(browser).toHaveUrl('https://emplea.do/jobs/wizard#');

    }
    it('should have the right title', () => {
        browser.url('https://emplea.do')
        expect(browser).toHaveTitle('Home Page - Emplea.do');
    })


    it('Iniciar sesion con Google',()=>{
        
      return login();
    })
    
    it('Publicar empleo',()=>{
      
        $('[name="CompanyName"]').setValue("Amazon");
        $('[name="CompanyEmail"]').setValue("Amazon@gmail.com");
        $('[name="CompanyUrl"]').setValue("https://www.amazon.com/dp/B00EHL6RDM?tag=sofferscom1-20&linkCode=ogi&th=1&psc=1");
        $('[name="CompanyLogoUrl"]').setValue("https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png");
        $('[name="Title"]').setValue("DevOps");
        $('#CategoryId').selectByIndex(0);
        $('#JobTypeId').selectByIndex(2);  
        $('[name="LocationName"]').setValue('New York, NY, USA');
        browser.execute(function(input){
            input.focus();
        },$('[name="LocationName"]'));
        browser.keys(['\uE015']);
        browser.pause(2000);
        browser.keys(['\uE015']);
        
        $('#Description-editor').$('.ql-editor').setValue('7 years of experience');      
        $('#HowToApply-editor').$('.ql-editor').setValue('Sent us the cv at amazon@gmail.com');      
        browser.pause(5000);
        $('button*=Guardar información').click();  
        expect(browser).toHaveUrlContaining('/Jobs/Details/');
       

    })
    
})




