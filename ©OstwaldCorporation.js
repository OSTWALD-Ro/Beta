
            var PB1, PB2, PB3;
            var PG1A, PG1B, PG1C, PG2C;
            var url1A, url1B, url1C, url2C;

            var enLinea;
            var enChromeOS;
        
            PB1 = "https://ostwald-ro.github.io/Beta/";
            PB2 = "file:///media/removable/FILES32/Files/Ostwald/JavaScript/Sistema/HTML/";
            PB3 = "file:///D:/Files/Ostwald/JavaScript/Sistema/HTML/";

            PG1A = "Menu_Arranque";
            PG1B = "Opciones_Arranque";
            PG1C = "Menu_Arranque";
            PG2C = "Menu_Arranque";
        
            function updateURLs() {
                enLinea = document.getElementById("enLinea").checked;
                if (enLinea) {
                    url1A = PB1 + PG1A;
                    url1B = PB1 + PG1B;
                    url1C = PB1 + PG1C;
                    url2C = PB1 + PG2C;
                } else {
                    enChromeOS = document.getElementById("enChromeOS").checked;
                    if (enChromeOS) {
                        url1A = PB2 + PG1A + ".html";
                        url1B = PB2 + PG1B + ".html";
                        url1C = PB2 + PG1C + ".html";
                        url2C = PB2 + PG2C + ".html";
                  } else {
                        url1A = PB3 + PG1A + ".html";
                        url1B = PB3 + PG1B + ".html";
                        url1C = PB3 + PG1C + ".html";
                        url2C = PB3 + PG2C + ".html";
                  }
                }

                iframe1A.src = url1A;
            }
        
            function dblclick(x_url) {
                if (window.innerWidth > window.innerHeight) {
                  window.location.href = x_url;
                }
            }
        
            function click(x_url) {
                if (window.innerWidth < window.innerHeight) {
                  window.location.href = x_url;
                }
            }
              
            updateURLs();