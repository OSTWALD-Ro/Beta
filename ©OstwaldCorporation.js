
            var PB1 = "https://ostwald-ro.github.io/Beta/";
            var PB2 = "file:///media/removable/FILES32/Files/Ostwald/JavaScript/Sistema/HTML/";
            var PB3 = "file:///D:/Files/Ostwald/JavaScript/Sistema/HTML/";

            var PG1A = "Menu_Arranque";
            var PG1B = "Browser";
            var PG2B = "Opciones_Arranque";
            var PG1C = "Menu_Arranque";
            var PG2C = "Menu_Arranque";
            
            var url1A = PB1 + PG1A;
            var url1B = PB1 + PG1B;
            var url2B = PB1 + PG2B;
            var url1C = PB1 + PG1C;
            var url2C = PB1 + PG2C;

            var enLinea = true;
            var enChromeOS = true;
        
            function updateURLs() {
                enLinea = document.getElementById("enLinea").checked;
                if (enLinea) {
                    url1A = PB1 + PG1A;
                    url1B = PB1 + PG1B;
                    url2B = PB1 + PG2B;
                    url1C = PB1 + PG1C;
                    url2C = PB1 + PG2C;
                } else {
                    enChromeOS = document.getElementById("enChromeOS").checked;
                    if (enChromeOS) {
                        url1A = PB2 + PG1A + ".html";
                        url1B = PB2 + PG1B + ".html";
                        url2B = PB2 + PG2B + ".html";
                        url1C = PB2 + PG1C + ".html";
                        url2C = PB2 + PG2C + ".html";
                  } else {
                        url1A = PB3 + PG1A + ".html";
                        url1B = PB3 + PG1B + ".html";
                        url2B = PB3 + PG2B + ".html";
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