        numero = document.getElementById("numero");

        marte = document.getElementById("marte");
        jupiter = document.getElementById("jupiter");

        boton = document.getElementById("boton");
        boton.addEventListener("click", elegirPlaneta)

        function elegirPlaneta()
        {   
            peso =  parseFloat(numero.value);
            if ( marte.checked )
            {

                peso_final = (peso * g_marte / g_tierra).toFixed(2);
                document.write("Tu peso en " + marte.value + " es <strong>" + peso_final + " kilos</strong>");
            }
            else if ( jupiter.checked )
            {
                peso_final = (peso * g_jupiter / g_tierra).toFixed(2);
                document.write("Tu peso en " + jupiter.value + " es <strong>" + peso_final + " kilos</strong>");
            }
            else
            {
                peso_final = 1000
                document.write("<h3>No ingresaste datos válidos, tu peso entonces es de " + peso_final + "</h3>");
            }
        }

        var g_tierra = 9.8; // Gravedad en la Tierra
        var g_marte = 3.7; // Gravedad en Marte
        var g_jupiter = 24.8; // Gravedad en Jupiter
        var peso_final;