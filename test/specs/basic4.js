const login = require("./basic")

describe("Validaciones Publicando empleo",()=>{

    
    it("Publicar empleo ingresando una localidad invalida",()=>{
        login();
        $('[name="LocationName"]').setValue('fsdfasfdads');
        $('button*=Guardar información').click();  
        $("span*=Debes seleccionar una localidad válida").waitForExist(1000,{ timeout: 20000 });

    })

   

    it("Publicar un empleo ingresando un website inválido",()=>{
       
        $('[name="CompanyUrl"]').setValue('http:/fasdlkhflaskfjasdllsl/');
        $('button*=Guardar información').click();  
        $("span*=La dirección Web de la compañía debe ser un Url válido").waitForExist(1000,{ timeout: 20000 });



    })

    it("Publicar un empleo ingresando dirección de logo inválido",()=>{
       
        $('[name="CompanyLogoUrl"]').setValue('http:/fasdlkhflaskfjasdllsl/');
        $('button*=Guardar información').click();  
        $("span*=La dirección del Logo de la compañía debe ser un Url válido").waitForExist(1000,{ timeout: 20000 });


    })

    it("Publicar un empleo sin requisitos para aplicar ",()=>{
    
        $('#Description-editor').$('.ql-editor').setValue(""); 
        $('button*=Guardar información').click();  
        $("span *=Debes especificar al menos un requisito").waitForExist(1000,{ timeout: 20000 });


    })

    it("Publicar un empleo sin como aplicar ",()=>{
     
        $('#HowToApply-editor').$('.ql-editor').setValue('');      
        $('button*=Guardar información').click();  
        $("span *=El campo como aplicar es requerido").waitForExist(1000,{ timeout: 20000 });


    })


})
