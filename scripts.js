let bodyTag = document.body;

let hongikFestival = {
        name: "lineup for festival",
        date: "2026.05.13 (Wed) - 2026.05.15 (Fri)",
        location: "hongik.univ, Mapo-gu, Seoul",
        lineup: {
            day1: ["DynamicDuo","Dragonpony","Hypeprincess"],
            day2: ["Yerin-Baek","Haha","Cortis"],
            day3: ["fromis_9","Nflying","Loco & Woo"]
        }
}
let parentSection = document.querySelector("section");

let cardContainer = document.createElement("div");
cardContainer.style.width = "800px";                  
cardContainer.style.height = "300px";                 
cardContainer.style.backgroundImage = "url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14')"; 
cardContainer.style.backgroundSize = "cover";       
cardContainer.style.backgroundPosition = "center";   
cardContainer.style.padding = "20px";                
cardContainer.style.borderRadius = "8px";            
cardContainer.style.marginTop = "20px";              

cardContainer.style.display = "flex";
cardContainer.style.flexDirection = "column";
cardContainer.style.justifyContent = "center";
cardContainer.style.textAlign = "center";

let titleTag1 = document.createElement("h2"); 
titleTag1.innerText = "Day 1 (2026.05.13)";
titleTag1.style.color = "#FFFFFF";                  
titleTag1.style.fontSize = "30px";
cardContainer.appendChild(titleTag1);

let dynamicDuoTag = document.createElement("p");
dynamicDuoTag.innerText = hongikFestival.lineup.day1[0];
dynamicDuoTag.style.color = "red";               
dynamicDuoTag.style.fontSize = "30px";
dynamicDuoTag.style.fontWeight = "900";            

let dpTag = document.createElement("p");
dpTag.innerText = hongikFestival.lineup.day1[1];
dpTag.style.color = "blue";                  
dpTag.style.fontSize = "25px";
dpTag.style.fontWeight = "900";            

let HpTag = document.createElement("p");
HpTag.innerText = hongikFestival.lineup.day1[2];
HpTag.style.color = "white";                          
HpTag.style.fontSize = "30px";
HpTag.style.fontWeight = "900";            

cardContainer.appendChild(dpTag);
cardContainer.appendChild(dynamicDuoTag);
cardContainer.appendChild(HpTag);

parentSection.appendChild(cardContainer);

let cardContainer2 = document.createElement("div");
cardContainer2.style.width = "800px";                 
cardContainer2.style.height = "300px";                
cardContainer2.style.backgroundImage = "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea')";
cardContainer2.style.backgroundSize = "cover";       
cardContainer2.style.backgroundPosition = "center";   
cardContainer2.style.padding = "20px";                
cardContainer2.style.borderRadius = "8px";            
cardContainer2.style.marginTop = "20px";              

cardContainer2.style.display = "flex";
cardContainer2.style.flexDirection = "column";
cardContainer2.style.justifyContent = "center";
cardContainer2.style.textAlign = "center";

let titleTag2 = document.createElement("h2"); 
titleTag2.innerText = "Day 2 (2026.05.14)";
titleTag2.style.color = "yellow";                    
titleTag2.style.fontSize = "30px";
cardContainer2.appendChild(titleTag2);

let singer4 = document.createElement("p");
singer4.innerText = hongikFestival.lineup.day2[0];
singer4.style.color = "white";              
singer4.style.fontSize = "30px";
singer4.style.fontWeight = "900";                     

let singer5 = document.createElement("p");
singer5.innerText = hongikFestival.lineup.day2[1];
singer5.style.color = "yellow";                       
singer5.style.fontSize = "25px";
singer5.style.fontWeight = "900";

let singer6 = document.createElement("p");
singer6.innerText = hongikFestival.lineup.day2[2];
singer6.style.color = "white";    
singer6.style.fontSize = "30px";
singer6.style.fontWeight = "900";                     

cardContainer2.appendChild(singer5);
cardContainer2.appendChild(singer4);
cardContainer2.appendChild(singer6);

parentSection.appendChild(cardContainer2);

let cardContainer3 = document.createElement("div");
cardContainer3.style.width = "800px";                
cardContainer3.style.height = "300px";               
cardContainer3.style.backgroundImage = "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7')";
cardContainer3.style.backgroundSize = "cover";       
cardContainer3.style.backgroundPosition = "center";   
cardContainer3.style.padding = "20px";                
cardContainer3.style.borderRadius = "8px";            
cardContainer3.style.marginTop = "20px";              

cardContainer3.style.display = "flex";
cardContainer3.style.flexDirection = "column";
cardContainer3.style.justifyContent = "center";
cardContainer3.style.textAlign = "center";

let titleTag3 = document.createElement("h2"); 
titleTag3.innerText = "Day 3 (2026.05.15)";
titleTag3.style.color = "white";
titleTag3.style.fontSize = "30px";
cardContainer3.appendChild(titleTag3);

let singer7 = document.createElement("p");
singer7.innerText = hongikFestival.lineup.day3[0];
singer7.style.color = "white";
singer7.style.fontSize = "30px";
singer7.style.fontWeight = "900";                     

let singer8 = document.createElement("p");
singer8.innerText = hongikFestival.lineup.day3[1];
singer8.style.color = "yellow";
singer8.style.fontSize = "25px";                      
singer8.style.fontWeight = "900";

let singer9 = document.createElement("p");
singer9.innerText = hongikFestival.lineup.day3[2];
singer9.style.color = "white";
singer9.style.fontSize = "30px";
singer9.style.fontWeight = "900";                     

cardContainer3.appendChild(singer7);
cardContainer3.appendChild(singer8);
cardContainer3.appendChild(singer9);

parentSection.appendChild(cardContainer3);