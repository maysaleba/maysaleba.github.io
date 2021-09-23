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
            
            
            
            // Nintendo switch start
            //this function appends the json data to the table 'gable'
            function append_json(data){
                var game1 = document.getElementById('imgur');
                game1.setAttribute('src', data[0].Image+'.jpg')
                
                var title1 = document.getElementById('title1')
                var t1 = data[0].Title

                title1.append(t1);
               
                var price1 = document.getElementById('price1')
                var p1 = data[0].SalePrice*phpExchange
                p1 = Math.round(p1)
                price1.append('  ₱'+p1);
                
                
                var disc1 = document.getElementById('disc1')
                var d1 = data[0].PercentOff
                disc1.append('-'+d1+' ');
            
                var url1=document.getElementById('url1')
                url1.setAttribute('href', 'https://www.nintendo.com'+data[0].URL)
               
            
                var game2 = document.getElementById('imgur2');
                game2.setAttribute('src', data[1].Image+'.jpg')
                var title2 = document.getElementById('title2')
                var t2 = data[1].Title
                title2.append(t2);
                 var price2 = document.getElementById('price2')
                var p2 = data[1].SalePrice*phpExchange
                p2 = Math.round(p2)
                price2.append('  ₱'+p2);
                var disc2 = document.getElementById('disc2')
                var d2 = data[1].PercentOff
                disc2.append('-'+d2+' ');
            
                var url2=document.getElementById('url2')
                url2.setAttribute('href', 'https://www.nintendo.com'+data[1].URL)
            
                var game3 = document.getElementById('imgur3');
                game3.setAttribute('src', data[2].Image+'.jpg')
                var title3 = document.getElementById('title3')
                var t3 = data[2].Title
                title3.append(t3);
                    var price3 = document.getElementById('price3')
                var p3 = data[2].SalePrice*phpExchange
                p3 = Math.round(p3)
                price3.append('  ₱'+p3);
                var disc3 = document.getElementById('disc3')
                var d3 = data[2].PercentOff
                disc3.append('-'+d3+' ');
            
                 var url3=document.getElementById('url3')
                url3.setAttribute('href', 'https://www.nintendo.com'+data[2].URL)
            
                var game4 = document.getElementById('imgur4');
                game4.setAttribute('src', data[3].Image+'.jpg')
                var title4 = document.getElementById('title4')
                var t4 = data[3].Title
                title4.append(t4);
                    var price4 = document.getElementById('price4')
                var p4 = data[3].SalePrice*phpExchange
                p4 = Math.round(p4)
                price4.append('  ₱'+p4);
                var disc4 = document.getElementById('disc4')
                var d4 = data[3].PercentOff
                disc4.append('-'+d4+' ');
            
                 var url4=document.getElementById('url4')
                url4.setAttribute('href', 'https://www.nintendo.com'+data[3].URL)
                
                var game5 = document.getElementById('imgur5');
                game5.setAttribute('src', data[4].Image+'.jpg')
                var title5 = document.getElementById('title5')
                var t5 = data[4].Title
                title5.append(t5);
                    var price5 = document.getElementById('price5')
                var p5 = data[4].SalePrice*phpExchange
                p5 = Math.round(p5)
                price5.append('  ₱'+p5);
                var disc5 = document.getElementById('disc5')
                var d5 = data[4].PercentOff
                disc5.append('-'+d5+' ');
            
                 var url5=document.getElementById('url5')
                url5.setAttribute('href', 'https://www.nintendo.com'+data[4].URL)
            }
            
            // Playstation Start
            
                function append_json2(data2){
                var psgame1 = document.getElementById('psn1');
                psgame1.setAttribute('src', data2[0].Img)
                var pstitle1 = document.getElementById('pstitle1')
                var pst1 = data2[0].GameName
                pstitle1.append(pst1);
                
                var psprice1 = document.getElementById('psprice1')
                var psp1 = (data2[0].SalePrice)/100*phpExchange
                psp1 = Math.round(psp1)
                psprice1.append('  ₱'+psp1);
                
                var psdisc1 = document.getElementById('psdisc1')
                var psd1 = data2[0].DiscPerc
                psdisc1.append('-'+psd1+'% ');
               
                var plusprice1 = document.getElementById('plusprice1')
                var plusp1 = (data2[0].PlusPrice)/100*phpExchange
                plusp1 = Math.round(plusp1)
                plusprice1.append(' ₱'+plusp1);
            
                var psurl1=document.getElementById('psurl1')
                psurl1.setAttribute('href', data2[0].PSStoreURL)
            
                var psgame2 = document.getElementById('psn2');
                psgame2.setAttribute('src', data2[1].Img)
                var pstitle2 = document.getElementById('pstitle2')
                var pst2 = data2[1].GameName
                pstitle2.append(pst2);
                        var psprice2 = document.getElementById('psprice2')
                var psp2 = (data2[1].SalePrice)/100*phpExchange
                psp2 = Math.round(psp2)
                psprice2.append('  ₱'+psp2);
                var psdisc2 = document.getElementById('psdisc2')
                var psd2 = data2[1].DiscPerc
                psdisc2.append('-'+psd2+'% ');
                var plusprice2 = document.getElementById('plusprice2')
                var plusp2 = (data2[1].PlusPrice)/100*phpExchange
                plusp2 = Math.round(plusp2)
                plusprice2.append(' ₱'+plusp2);
            
                var psurl2=document.getElementById('psurl2')
                psurl2.setAttribute('href', data2[1].PSStoreURL)
            
                var psgame3 = document.getElementById('psn3');
                psgame3.setAttribute('src', data2[2].Img)
                var pstitle3 = document.getElementById('pstitle3')
                var pst3 = data2[2].GameName
                pstitle3.append(pst3);
                        var psprice3 = document.getElementById('psprice3')
                var psp3 = (data2[2].SalePrice)/100*phpExchange
                psp3 = Math.round(psp3)
                psprice3.append('  ₱'+psp3);
                var psdisc3 = document.getElementById('psdisc3')
                var psd3 = data2[2].DiscPerc
                psdisc3.append('-'+psd3+'% ');
                var plusprice3 = document.getElementById('plusprice3')
                var plusp3 = (data2[2].PlusPrice)/100*phpExchange
                plusp3 = Math.round(plusp3)
                plusprice3.append(' ₱'+plusp3);
            
                var psurl3=document.getElementById('psurl3')
                psurl3.setAttribute('href', data2[2].PSStoreURL)
            
                var psgame4 = document.getElementById('psn4');
                psgame4.setAttribute('src', data2[3].Img)
                var pstitle4 = document.getElementById('pstitle4')
                var pst4 = data2[3].GameName
                pstitle4.append(pst4);
                        var psprice4 = document.getElementById('psprice4')
                var psp4 = (data2[3].SalePrice)/100*phpExchange
                psp4 = Math.round(psp4)
                psprice4.append('  ₱'+psp4);
                var psdisc4 = document.getElementById('psdisc4')
                var psd4 = data2[3].DiscPerc
                psdisc4.append('-'+psd4+'% ');
                var plusprice4 = document.getElementById('plusprice4')
                var plusp4 = (data2[3].PlusPrice)/100*phpExchange
                plusp4 = Math.round(plusp4)
                plusprice4.append(' ₱'+plusp4);
            
                var psurl4=document.getElementById('psurl4')
                psurl4.setAttribute('href', data2[3].PSStoreURL)
            
                var psgame5 = document.getElementById('psn5');
                psgame5.setAttribute('src', data2[4].Img)
                var pstitle5 = document.getElementById('pstitle5')
                var pst5 = data2[4].GameName
                pstitle5.append(pst5);
                        var psprice5 = document.getElementById('psprice5')
                var psp5 = (data2[4].SalePrice)/100*phpExchange
                psp5 = Math.round(psp5)
                psprice5.append('  ₱'+psp5);
                var psdisc5 = document.getElementById('psdisc5')
                var psd5 = data2[4].DiscPerc
                psdisc5.append('-'+psd5+'% ');
                var plusprice5 = document.getElementById('plusprice5')
                var plusp5 = (data2[4].PlusPrice)/100*phpExchange
                plusp5 = Math.round(plusp5)
                plusprice5.append(' ₱'+plusp5);
            
                var psurl5=document.getElementById('psurl5')
                psurl5.setAttribute('href', data2[4].PSStoreURL)
               
            }
            
            
            
