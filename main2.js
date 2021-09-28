            //first add an event listener for page load
            document.addEventListener("DOMContentLoaded", get_json_data, false); // get_json_data is the function name that will fire on page load
            document.addEventListener("DOMContentLoaded", get_new_nsw, false);
            document.addEventListener("DOMContentLoaded", get_json_data2, false);

            //this function is in the event listener and will execute on page load
            function get_json_data() {
                // Relative URL of external json file
                var json_url = 'csvjson.json';

                //Build the XMLHttpRequest (aka AJAX Request)
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) { //when a good response is given do this

                        var data = JSON.parse(this.responseText); // convert the response to a json object
                        append_json(data);
                        

                    }
                }
                //set the request destination and type
                xmlhttp.open("GET", 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/csvjson.json', true);
                //set required headers for the request
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // send the request
                xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
            }

            function get_new_nsw() {
                // Relative URL of external json file
                var json_url = 'csvjson.json';
                var d = new Date();
                var lastd = new Date(d.setDate(d.getDate()-5));
                var da = String(d.getDate()).padStart(2, '0');
                var mo = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
                var year = d.getFullYear();

            daysago = year + '-' + mo + '-' + da;



                //Build the XMLHttpRequest (aka AJAX Request)
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) { //when a good response is given do this

                        var new_nsw_data = JSON.parse(this.responseText).filter(({
                            SaleStarted
                        }) => SaleStarted > daysago); // convert the response to a json object
                        var new_len = new_nsw_data.length
                        append_new_nsw(new_nsw_data, new_len);

                    }
                }
                //set the request destination and type
                xmlhttp.open("GET", 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/csvjson.json', true);
                //set required headers for the request
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // send the request
                xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
            }



            function get_json_data2() {
                // Relative URL of external json file
                var json_url = 'csvjsonus.json';

                //Build the XMLHttpRequest (aka AJAX Request)
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) { //when a good response is given do this

                        var data2 = JSON.parse(this.responseText).filter(({
                            LastDiscounted
                        }) => LastDiscounted >'2021-09-22'); // convert the response to a json object
                        append_json2(data2);
                        

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
            


            var theURL = 'https://api.exchangerate.host/latest?base=PHP&v=_' + today + '_';



            function httpGet(theUrl) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", theURL, false); // false for synchronous request
                xmlHttp.send(null);
                return xmlHttp.response;
            }


            fxc = httpGet();
            const fxcp = JSON.parse(fxc)
            

            var phpExchange = 1 / fxcp.rates.USD;
            var mexExchange = 1 / fxcp.rates.MXN;

            console.log(phpExchange);

            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate = new Date(today);




            // nintendo switch start
            // this function appends the json data to the table 'gable'


            function append_new_nsw(new_nsw_data, new_len) {

                function days_checker(id, numvalue) {
                    var discuntil = document.getElementById(id);
                    var dscun = new_nsw_data[numvalue].SaleEnds
                    const secondDate = new Date(dscun);
                    const diffDays = Math.round((secondDate - firstDate) / oneDay);

                    if (diffDays < 0) {
                        discuntil.classList.add("badge")
                        discuntil.classList.add("bg-secondary")
                        discuntil.append('Expired');
                    } else {
                        discuntil.classList.add("badge")
                        discuntil.classList.add("bg-warning")
                        discuntil.classList.add("text-dark")
                        discuntil.append(diffDays + ' days left');
                    }
                }



                function card_setter(image, title, price, discount, url, score, index) {
                    var card_image = document.getElementById(image);
                    var card_title = document.getElementById(title);
                    var price = document.getElementById(price);
                    var discount = document.getElementById(discount);
                    var url = document.getElementById(url);
                    var score = document.getElementById(score)
                    var pesoprice = Math.round(new_nsw_data[index].SalePrice * phpExchange)
                    card_image.setAttribute('src', new_nsw_data[index].Image)
                    card_title.append(new_nsw_data[index].Title)
                    price.append('  ₱' + pesoprice);
                    discount.append('-' + new_nsw_data[index].PercentOff + ' ');
                    url.setAttribute('href', 'https://www.nintendo.com' + new_nsw_data[index].URL)
                    if ((new_nsw_data[index].SCORE == -1) || (new_nsw_data[index].SCORE == "")) {


                    } else {
                        score.append(new_nsw_data[index].SCORE);

                    }
                }

                function create_cards(count, index) {
                    const currentDiv = document.getElementById("new-switch-create");
                    const newCol = document.createElement("div");
                    const newCard = document.createElement("div");
                    const newURL = document.createElement("a");
                    const newImage = document.createElement("img");
                    const overlay = document.createElement("div");
                    const badge = document.createElement("span");
                    const opencritic = document.createElement("div");
                    const oclogo = document.createElement("img");
                    const newScore = document.createElement("span")
                    const newCardBody = document.createElement("div");
                    const gameTitle = document.createElement("h5")
                    const newCardText = document.createElement("p");
                    const discount = document.createElement("span");
                    const percentBadge = document.createElement("span");
                    const price = document.createElement("span");

                    newCol.className = "col";
                    newCard.className = "card"
                    newImage.className = "card-img";
                    overlay.className = "card-img-overlay";
                    badge.className = "img-responsive float-end nbadges nintendo";

                    newScore.className = "card-text";
                    newCardBody.className = "card-body";
                    gameTitle.className = "card-title";
                    newCardText.className = "card-text";
                    percentBadge.className = "badge rounded-pill bg-danger"


                    newURL.setAttribute('id', 'newurl' + count);
                    newImage.setAttribute('id', 'newimgur' + count);

                    if ((new_nsw_data[index].SCORE == -1) || (new_nsw_data[index].SCORE == "")) {

                    } else {
                        opencritic.className = "d-flex justify-content-left opencritic";
                        oclogo.className = "card-text img-responsive oc";
                        oclogo.setAttribute('src', "OpenCritic_logo.svg");


                    }


                    newScore.setAttribute('id', 'newscr' + count);
                    newScore.setAttribute('style', 'color:white;font-weight:bold;');
                    gameTitle.setAttribute('id', 'newtitle' + count);
                    discount.setAttribute('id', 'newdiscuntil' + count);
                    percentBadge.setAttribute('id', 'newdisc' + count);
                    price.setAttribute('id', 'newprice' + count);
                    price.setAttribute('style', 'font-weight:bold');


                    currentDiv.appendChild(newCol);
                    newCol.appendChild(newCard);
                    newCard.appendChild(newURL)
                    newURL.appendChild(newImage);
                    newURL.appendChild(overlay);
                    overlay.appendChild(badge);
                    overlay.appendChild(opencritic);
                    opencritic.appendChild(oclogo);
                    opencritic.appendChild(newScore);
                    newURL.appendChild(newCardBody);
                    newCardBody.appendChild(gameTitle);
                    newCardBody.appendChild(newCardText);
                    newCardText.appendChild(discount);
                    newCardText.appendChild(percentBadge);
                    newCardText.appendChild(price);


                }


                // Nintendo start

                for (let count = 0; count < new_len && count < 20; count++) {
                    create_cards(count, count);
                    var numx = count;
                    var index = count;
                    days_checker('newdiscuntil' + numx, index);
                    card_setter('newimgur' + numx, 'newtitle' + numx, 'newprice' + numx, 'newdisc' + numx, 'newurl' + numx, 'newscr' + numx, index);
                }


            }




            function append_json(data) {

                function days_checker(id, numvalue) {
                    var discuntil = document.getElementById(id);
                    var dscun = data[numvalue].SaleEnds
                    const secondDate = new Date(dscun);
                    const diffDays = Math.round((secondDate - firstDate) / oneDay);

                    if (diffDays < 0) {
                        
                        discuntil.classList.add("badge")
                        discuntil.classList.add("bg-secondary")
                        discuntil.append('Expired');
                    } else {
                        discuntil.classList.add("badge")
                        discuntil.classList.add("bg-warning")
                        discuntil.classList.add("text-dark")
                        discuntil.append(diffDays + ' days left');
                    }
                }



                function card_setter(image, title, price, discount, url, score, index) {
                    var card_image = document.getElementById(image);
                    var card_title = document.getElementById(title);
                    var price = document.getElementById(price);
                    var discount = document.getElementById(discount);
                    var url = document.getElementById(url);
                    var score = document.getElementById(score)
                    var pesoprice = Math.round(data[index].SalePrice * phpExchange)
                    card_image.setAttribute('src', data[index].Image + '.jpg')
                    card_title.append(data[index].Title)
                    price.append('  ₱' + pesoprice);
                    discount.append('-' + data[index].PercentOff + ' ');
                    url.setAttribute('href', 'https://www.nintendo.com' + data[index].URL)
                    score.append(data[index].SCORE);
                }

                function create_cards(count) {
                    const currentDiv = document.getElementById("switch-create");
                    const newCol = document.createElement("div");
                    const newCard = document.createElement("div");
                    const newURL = document.createElement("a");
                    const newImage = document.createElement("img");
                    const overlay = document.createElement("div");
                    const badge = document.createElement("span");
                    const opencritic = document.createElement("div");
                    const oclogo = document.createElement("img");
                    const newScore = document.createElement("span")
                    const newCardBody = document.createElement("div");
                    const gameTitle = document.createElement("h5")
                    const newCardText = document.createElement("p");
                    const discount = document.createElement("span");
                    const percentBadge = document.createElement("span");
                    const price = document.createElement("span");

                    newCol.className = "col";
                    newCard.className = "card"
                    newImage.className = "card-img";
                    overlay.className = "card-img-overlay";
                    badge.className = "img-responsive float-end nbadges nintendo";
                    opencritic.className = "d-flex justify-content-left opencritic";
                    oclogo.className = "card-text img-responsive oc";
                    newScore.className = "card-text";
                    newCardBody.className = "card-body";
                    gameTitle.className = "card-title";
                    newCardText.className = "card-text";
                    percentBadge.className = "badge rounded-pill bg-danger"


                    newURL.setAttribute('id', 'url' + count);
                    newImage.setAttribute('id', 'imgur' + count);
                    oclogo.setAttribute('src', "OpenCritic_logo.svg");
                    newScore.setAttribute('id', 'scr' + count);
                    newScore.setAttribute('style', 'color:white;font-weight:bold;');
                    gameTitle.setAttribute('id', 'title' + count);
                    discount.setAttribute('id', 'discuntil' + count);
                    percentBadge.setAttribute('id', 'disc' + count);
                    price.setAttribute('id', 'price' + count);
                    price.setAttribute('style', 'font-weight:bold');


                    currentDiv.appendChild(newCol);
                    newCol.appendChild(newCard);
                    newCard.appendChild(newURL)
                    newURL.appendChild(newImage);
                    newURL.appendChild(overlay);
                    overlay.appendChild(badge);
                    overlay.appendChild(opencritic);
                    opencritic.appendChild(oclogo);
                    opencritic.appendChild(newScore);
                    newURL.appendChild(newCardBody);
                    newCardBody.appendChild(gameTitle);
                    newCardBody.appendChild(newCardText);
                    newCardText.appendChild(discount);
                    newCardText.appendChild(percentBadge);
                    newCardText.appendChild(price);


                }


                // Nintendo start

                for (let count = 0; count < 20; count++) {
                    create_cards(count);
                    var numx = count;
                    var index = count;
                    days_checker('discuntil' + numx, index);
                    card_setter('imgur' + numx, 'title' + numx, 'price' + numx, 'disc' + numx, 'url' + numx, 'scr' + numx, index);
                }


            }



            // Playstation Cards

            function append_json2(data2) {

                function psdays_checker(id, numvalue) {
                    var discuntil = document.getElementById(id);
                    var dscun = data2[numvalue].DiscountedUntil
                    const secondDate = new Date(dscun);
                    const diffDays = Math.round((secondDate - firstDate) / oneDay);

                    if (diffDays < 0) {
                        discuntil.classList.add("badge")
                        discuntil.classList.add("bg-secondary")
                        discuntil.append('Expired');
                    } else {
                        discuntil.classList.add("badge")
                        discuntil.classList.add("bg-warning")
                        discuntil.classList.add("text-dark")
                        discuntil.append(diffDays + ' days left');
                    }
                }


                function pscard_setter(image, title, price, plusprice, discount, url, score, index) {
                    var card_image = document.getElementById(image);
                    var card_title = document.getElementById(title);
                    var price = document.getElementById(price);
                    var plusprice = document.getElementById(plusprice);
                    var discount = document.getElementById(discount);
                    var url = document.getElementById(url);
                    var score = document.getElementById(score)
                    var pesoprice = Math.round(data2[index].SalePrice / 100 * phpExchange)
                    var pesoplusprice = Math.round((data2[index].PlusPrice) / 100 * phpExchange)
                    card_image.setAttribute('src', data2[index].CoverArt + '?w=500')
                    card_title.append(data2[index].ProductName)
                    price.append('  ₱' + pesoprice);
                    discount.append('-' + data2[index].DiscPerc + '%');
                    url.setAttribute('href', data2[index].PSStoreURL);
                    score.append(data2[index].SCORE);
                    plusprice.append(' ₱' + pesoplusprice);
                }


                function pscreate_cards(count) {
                    const currentDiv = document.getElementById("ps-create");
                    const newCol = document.createElement("div");
                    const newCard = document.createElement("div");
                    const newURL = document.createElement("a");
                    const newImage = document.createElement("img");
                    const overlay = document.createElement("div");
                    const badge = document.createElement("span");
                    const opencritic = document.createElement("div");
                    const oclogo = document.createElement("img");
                    const newScore = document.createElement("span")
                    const newCardBody = document.createElement("div");
                    const gameTitle = document.createElement("h5")
                    const newCardText = document.createElement("p");
                    const discount = document.createElement("span");
                    const percentBadge = document.createElement("span");
                    const price = document.createElement("span");
                    const plusprice = document.createElement("span");

                    newCol.className = "col";
                    newCard.className = "card"
                    newImage.className = "card-img";
                    overlay.className = "card-img-overlay";
                    badge.className = "img-responsive float-end pbadges playstation";
                    opencritic.className = "d-flex justify-content-left opencritic";
                    oclogo.className = "card-text img-responsive oc";
                    newScore.className = "card-text";
                    newCardBody.className = "card-body";
                    gameTitle.className = "card-title";
                    newCardText.className = "card-text";
                    percentBadge.className = "badge rounded-pill bg-danger"
                    plusprice.className = "create card-text"


                    newURL.setAttribute('id', 'psurl' + count);
                    newImage.setAttribute('id', 'psn' + count);
                    oclogo.setAttribute('src', "OpenCritic_logo.svg");
                    newScore.setAttribute('id', 'psscr' + count);
                    newScore.setAttribute('style', 'color:white;font-weight:bold;');
                    gameTitle.setAttribute('id', 'pstitle' + count);
                    discount.setAttribute('id', 'psdiscuntil' + count);
                    percentBadge.setAttribute('id', 'psdisc' + count);
                    price.setAttribute('id', 'psprice' + count);
                    plusprice.setAttribute('id', 'plusprice' + count);
                    plusprice.setAttribute('style', 'font-weight:bold');


                    currentDiv.appendChild(newCol);
                    newCol.appendChild(newCard);
                    newCard.appendChild(newURL)
                    newURL.appendChild(newImage);
                    newURL.appendChild(overlay);
                    overlay.appendChild(badge);
                    overlay.appendChild(opencritic);
                    opencritic.appendChild(oclogo);
                    opencritic.appendChild(newScore);
                    newURL.appendChild(newCardBody);
                    newCardBody.appendChild(gameTitle);
                    newCardBody.appendChild(newCardText);
                    newCardText.appendChild(discount);
                    newCardText.appendChild(percentBadge);
                    newCardText.appendChild(price);
                    newCardText.appendChild(plusprice);


                }

                for (let count = 0; count < 20; count++) {
                    pscreate_cards(count);
                    var numx = count;
                    var index = count;
                    psdays_checker('psdiscuntil' + numx, index);
                    pscard_setter('psn' + numx, 'pstitle' + numx, 'psprice' + numx, 'plusprice' + numx, 'psdisc' + numx, 'psurl' + numx, 'psscr' + numx, index);

                }
            }