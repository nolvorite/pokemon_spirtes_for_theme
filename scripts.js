
//add a monster display in the tooltip preview

setInterval(()=> { 

	if($("#tooltipwrapper").has(".tooltip-activepokemon") || $("#tooltipwrapper").has(".tooltip-switchpokemon") || $("#tooltipwrapper").has(".tooltip-pokemon") ){  

		var monsterH2 = $("<dummy>"+$("#tooltipwrapper h2").html()+"</dummy>"); monsterH2.find("small,img,br,span").detach(); var monsterName = monsterH2.html().replace(/^([A-Za-z\- ]+).{0,}/g,"$1").trim().toLowerCase();

		if($("#monster_preview").length === 0){
			$("#tooltipwrapper .tooltip").append("<div id='monster_preview' style='background-image:url(\"https://play.pokemonshowdown.com/sprites/ani/"+ monsterName +".gif\");'></div>")
		}

	}

},1000)


//add a selector for the sprites currently displayed

setInterval(() => {

    
$("img[src^='https://play.pokemonshowdown.com/sprites/']").addClass("sprite_displays").parent("div").addClass("sprite_containers");

    
},100)
