require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;


const games1 = require("./csvjson.json");
const gamesps = require("./csvjsonus.json");

var today = new Date();
// var lastd = new Date(today.setDate(today.getDate()+1));
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;


let games2 = gamesps.filter((review) => review.SaleEnds > today);
let gameslug = games1.concat(games2);



function generateSitemap() {

try {
    let slug = [];

    for(var i = 0; i < gameslug.length; i++) {
      slug.push({ games: gameslug[i].Slug });
    }

    const paramsConfig = {
      "/games/:games": slug
    };

    return (
      new Sitemap(router)
          .applyParams(paramsConfig)
          .build("https://www.maysaleba.com/#")
          .save("./public/sitemap.xml")
    );
}

catch(e) {
    console.log(e);
  } 
  }

generateSitemap();