console.log("hola")
$(function(){
    $("#newsletter").click(function(){
        let value=$(".inp-email").value();

        let data=new FormData();
        data.append("inp-email",value)
        let url="http://sminnova.com/proyectos/vulcano2/mail.php";
        let config={
            method:"POST",
            body:data
        }
        fetch(url,config)
        .then((data)=>{return data.json()})
        .then((data)=>{console.log(data)})
        $(".text-gracias").addClass("show");
    })
})