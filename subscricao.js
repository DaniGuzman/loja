

        script{
        var SubscrevaForm = document.getElementById("SubscrevaForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("Indicator");}

            function registre(){
                RegForm.style.transform = "translateX(0px)"
                SubscrevaForm.style.transform = "translateX(0px)"
                Indicator.style.transform = "translateX(100px)"
            }

            function subscreva(){
                RegForm.style.transform = "translateX(300px)"
                SubscrevaForm.style.transform = "translateX(300px)"
                Indicator.style.transform = "translateX(0px)"
            }
        }