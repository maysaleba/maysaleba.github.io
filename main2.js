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

               var game6 = document.getElementById('imgur6');
                game6.setAttribute('src', data[5].Image+'.jpg')
                var title6 = document.getElementById('title6')
                var t6 = data[5].Title
                title6.append(t6);
                    var price6 = document.getElementById('price6')
                var p6 = data[5].SalePrice*phpExchange
                p6 = Math.round(p6)
                price6.append('  ₱'+p6);
                var disc6 = document.getElementById('disc6')
                var d6 = data[5].PercentOff
                disc6.append('-'+d6+' ');
            
                 var url6=document.getElementById('url6')
                url6.setAttribute('href', 'https://www.nintendo.com'+data[5].URL)
                
             var game7 = document.getElementById('imgur7');
                game7.setAttribute('src', data[6].Image+'.jpg')
                var title7 = document.getElementById('title7')
                var t7 = data[6].Title
                title7.append(t7);
                    var price7 = document.getElementById('price7')
                var p7 = data[6].SalePrice*phpExchange
                p7 = Math.round(p7)
                price7.append('  ₱'+p7);
                var disc7 = document.getElementById('disc7')
                var d7 = data[6].PercentOff
                disc7.append('-'+d7+' ');
            
                 var url7=document.getElementById('url7')
                url7.setAttribute('href', 'https://www.nintendo.com'+data[6].URL)
                
                      var game8 = document.getElementById('imgur8');
                game8.setAttribute('src', data[7].Image+'.jpg')
                var title8 = document.getElementById('title8')
                var t8 = data[7].Title
                title8.append(t8);
                    var price8 = document.getElementById('price8')
                var p8 = data[7].SalePrice*phpExchange
                p8 = Math.round(p8)
                price8.append('  ₱'+p8);
                var disc8 = document.getElementById('disc8')
                var d8 = data[7].PercentOff
                disc8.append('-'+d8+' ');

                var url8=document.getElementById('url8')
                url8.setAttribute('href', 'https://www.nintendo.com'+data[7].URL)




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

                 var psgame6 = document.getElementById('psn6');
                psgame6.setAttribute('src', data2[5].Img)
                var pstitle6 = document.getElementById('pstitle6')
                var pst6 = data2[5].GameName
                pstitle6.append(pst6);
                        var psprice6 = document.getElementById('psprice6')
                var psp6 = (data2[5].SalePrice)/100*phpExchange
                psp6 = Math.round(psp6)
                psprice6.append('  ₱'+psp6);
                var psdisc6 = document.getElementById('psdisc6')
                var psd6 = data2[5].DiscPerc
                psdisc6.append('-'+psd6+'% ');
                var plusprice6 = document.getElementById('plusprice6')
                var plusp6 = (data2[5].PlusPrice)/100*phpExchange
                plusp6 = Math.round(plusp6)
                plusprice6.append(' ₱'+plusp6);
            
                var psurl6=document.getElementById('psurl6')
                psurl6.setAttribute('href', data2[5].PSStoreURL)

                 var psgame7 = document.getElementById('psn7');
                psgame7.setAttribute('src', data2[6].Img)
                var pstitle7 = document.getElementById('pstitle7')
                var pst7 = data2[6].GameName
                pstitle7.append(pst7);
                        var psprice7 = document.getElementById('psprice7')
                var psp7 = (data2[6].SalePrice)/100*phpExchange
                psp7 = Math.round(psp7)
                psprice7.append('  ₱'+psp7);
                var psdisc7 = document.getElementById('psdisc7')
                var psd7 = data2[6].DiscPerc
                psdisc7.append('-'+psd7+'% ');
                var plusprice7 = document.getElementById('plusprice7')
                var plusp7 = (data2[6].PlusPrice)/100*phpExchange
                plusp7 = Math.round(plusp7)
                plusprice7.append(' ₱'+plusp7);
            
                var psurl7=document.getElementById('psurl7')
                psurl7.setAttribute('href', data2[6].PSStoreURL)


                 var psgame8 = document.getElementById('psn8');
                psgame8.setAttribute('src', data2[7].Img)
                var pstitle8 = document.getElementById('pstitle8')
                var pst8 = data2[7].GameName
                pstitle8.append(pst8);
                        var psprice8 = document.getElementById('psprice8')
                var psp8 = (data2[7].SalePrice)/100*phpExchange
                psp8 = Math.round(psp8)
                psprice8.append('  ₱'+psp8);
                var psdisc8 = document.getElementById('psdisc8')
                var psd8 = data2[7].DiscPerc
                psdisc8.append('-'+psd8+'% ');
                var plusprice8 = document.getElementById('plusprice8')
                var plusp8 = (data2[7].PlusPrice)/100*phpExchange
                plusp8 = Math.round(plusp8)
                plusprice8.append(' ₱'+plusp8);
            
                var psurl8=document.getElementById('psurl8')
                psurl8.setAttribute('href', data2[7].PSStoreURL)



               
            }
            
            
            
