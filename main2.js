            //first add an event listener for page load
            document.addEventListener( "DOMContentLoaded", get_json_data, false ); // get_json_data is the function name that will fire on page load
             document.addEventListener( "DOMContentLoaded", get_json_data2, false )
            
            //this function is in the event listener and will execute on page load
            function get_json_data(){
                // Relative URL of external json file
                var json_url = 'csvjson.json';
            
                //Build the XMLHttpRequest (aka AJAX Request)
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() { 
                    if (this.readyState == 4 && this.status == 200) {//when a good response is given do this
            
                        var data = JSON.parse(this.responseText); // convert the response to a json object
                        append_json(data);
                        console.log(data);
                       
                    }
                }
                //set the request destination and type
                xmlhttp.open("GET", 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/csvjson.json', true);
                //set required headers for the request
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // send the request
                xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
            }
            
            
            function get_json_data2(){
                // Relative URL of external json file
                var json_url = 'csvjsonus.json';
            
                //Build the XMLHttpRequest (aka AJAX Request)
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() { 
                    if (this.readyState == 4 && this.status == 200) {//when a good response is given do this
            
                        var data2 = JSON.parse(this.responseText); // convert the response to a json object
                        append_json2(data2);
                        console.log(data2);
                       
                    }
                }
                //set the request destination and type
                xmlhttp.open("GET", 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/csvjsonus.json', true);
                //set required headers for the request
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // send the request
                xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
            }
            
            
            
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            
            today = yyyy + '-' + mm + '-' + dd;
            console.log(today);
            
            
            var theURL='https://api.exchangerate.host/latest?base=PHP&v=_'+today+'_';


            
            function httpGet(theUrl)
            {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theURL, false ); // false for synchronous request
            xmlHttp.send( null );
            console.log(xmlHttp)
            return xmlHttp.response;
            }
            
            
            fxc = httpGet();
            const fxcp = JSON.parse(fxc)
            console.log(fxcp.rates.USD);
            
            var phpExchange = 1/fxcp.rates.USD;
            var mexExchange = 1/fxcp.rates.MXN;
            
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate = new Date(today);

            
            // nintendo switch start
            //this function appends the json data to the table 'gable'
            function append_json(data){




                function days_checker(id, numvalue){
                    var discuntil = document.getElementById(id);
                    var dscun = data[numvalue].SaleEnds
                    const secondDate = new Date(dscun);
                    const diffDays = Math.round((secondDate - firstDate) / oneDay);
                    
                     if (diffDays <= 0){
                    console.log("expired")
                    discuntil.classList.add("badge")
                    discuntil.classList.add("bg-secondary")
                    discuntil.append('Expired');
                    } else {
                    console.log("active")
                    discuntil.classList.add("badge")
                    discuntil.classList.add("bg-warning")
                    discuntil.classList.add("text-dark")
                    discuntil.append(diffDays+' days left');
                 }
                }

               
               function card_setter(image, title, price, discount, url, score, index){
                var card_image = document.getElementById(image);
                var card_title = document.getElementById(title);
                var price = document.getElementById(price);
                var discount = document.getElementById(discount);
                var url = document.getElementById(url);
                var score = document.getElementById(score)
                var pesoprice = Math.round(data[index].SalePrice*phpExchange)
                card_image.setAttribute('src', data[index].Image+'.jpg')
                card_title.append(data[index].Title)
                price.append('  ₱'+pesoprice);
                discount.append('-'+data[index].PercentOff+' ');
                url.setAttribute('href', 'https://www.nintendo.com'+data[index].URL)
                score.append(data[index].SCORE);
               }

               
               // Nintendo start

                
                var numx = 1;  
                var index = numx-1;           
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 2;  
                var index = numx-1;             
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 3;  
                var index = numx-1;            
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 4;  
                var index = 10;           
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 5;  
                var index = numx-1;             
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 6;  
                var index = numx-1;           
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 7;  
                var index = numx-1;           
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

                var numx = 8;  
                var index = numx-1;           
                days_checker('discuntil'+numx, index);
                card_setter('imgur'+numx, 'title'+numx, 'price'+numx, 'disc'+numx, 'url'+numx, 'scr'+numx, index);

            }
            

            // Playstation Cards
            
                function append_json2(data2){

                    function psdays_checker(id, numvalue){
                    var discuntil = document.getElementById(id);
                    var dscun = data2[numvalue].DiscountedUntil
                    const secondDate = new Date(dscun);
                    const diffDays = Math.round((secondDate - firstDate) / oneDay);
                    
                     if (diffDays <= 0){
                    console.log("expired")
                    discuntil.classList.add("badge")
                    discuntil.classList.add("bg-secondary")
                    discuntil.append('Expired');
                    } else {
                    console.log("active")
                    discuntil.classList.add("badge")
                    discuntil.classList.add("bg-warning")
                    discuntil.classList.add("text-dark")
                    discuntil.append(diffDays+' days left');
                }
                }
              

                function pscard_setter(image, title, price, plusprice, discount, url, score, index){
                var card_image = document.getElementById(image);
                var card_title = document.getElementById(title);
                var price = document.getElementById(price);
                var plusprice = document.getElementById(plusprice);
                var discount = document.getElementById(discount);
                var url = document.getElementById(url);
                var score = document.getElementById(score)
                var pesoprice = Math.round(data2[index].SalePrice/100*phpExchange)
                var pesoplusprice = Math.round((data2[index].PlusPrice)/100*phpExchange)
                card_image.setAttribute('src', data2[index].CoverArt+'?w=500')
                card_title.append(data2[index].ProductName)
                price.append('  ₱'+pesoprice);
                discount.append('-'+data2[index].DiscPerc+' ');
                url.setAttribute('href', data2[index].PSStoreURL);
                score.append(data2[index].SCORE);
                plusprice.append(' ₱'+pesoplusprice);
                }

                var numx = 1;  
                var index = numx-1;            
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);


                var numx = 2;  
                var index = 3;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);

                var numx = 3;  
                var index = 4;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);


                var numx = 4;  
                var index = 14;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);


                var numx = 5;  
                var index = 8;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);

                var numx = 6;  
                var index = 9;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);
                
                var numx = 7;  
                var index = 10;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);


                var numx = 8;  
                var index = 20;              
                psdays_checker('psdiscuntil'+numx, index);
                pscard_setter('psn'+numx, 'pstitle'+numx, 'psprice'+numx, 'plusprice'+numx, 'psdisc'+numx, 'psurl'+numx, 'psscr'+numx, index);
               
            }

            
            
            
