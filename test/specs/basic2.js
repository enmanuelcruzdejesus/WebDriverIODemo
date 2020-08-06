// describe("Busqueda por diferentes keywords",()=>{
//     var keywords = ["Backend Developer", "Desarrollador .NET","GBH","Software Developer", "USA","Tiempo Completo"];  
//     it("Buscar empleo por titulo",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("Backend Developer");
//         $("button*=Buscar").click();
//         $(".job-new-list*=Backend Developer").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

//     it("Buscar empleo por Descripcion",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("Desarrollador .NET");
//         $("button*=Buscar").click();
//         $(".job-new-list*=Desarrollador .NET").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

//     it("Buscar empleo por Compania",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("GBH");
//         $("button*=Buscar").click();
//         $(".job-new-list*=GBH").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

//     it("Buscar empleo por Categoria",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("Software Developer");
//         $("button*=Buscar").click();
//         $(".job-new-list*=Software Developer").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

//     it("Buscar empleo por Jornada",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("Tiempo Completo");
//         $("button*=Buscar").click();
//         $(".job-new-list*=Tiempo Completo").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

//     it("Buscar empleo por Localidad",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("USA");
//         $("button*=Buscar").click();
//         $(".job-new-list*=USA").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

//     it("Buscar empleo con keyword invalido ",()=>{
//         browser.url("https://emplea.do/");
//         var l = $('[name="Keyword"]').setValue("fasdfasdfas");
//         $("button*=Buscar").click();
//         $(".text-center*=): no encontramos el empleo que buscas").waitForExist(1000,{ timeout: 20000 });
//         browser.pause(6000);
//     })

    


// })