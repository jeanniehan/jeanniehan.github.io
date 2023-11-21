$(document).ready(function() {

			// list one content
			var one = [
				"delicate",
				"translucent",
				"intriguing",
				"rare",
				"ethereal",
				"subtle",
				"graceful",
				"mysterious",
				"exquisite",
				"fragrant",
				"skeletal",
				"abnormal",
				"grim",
				"eerie",
				"glassy",
			];

			// list two content
			var two = [
				"petals",
				"blossom",
				"stem",
				"umbel",
				"botany",
				"floral display",
				"foliage",
				"perennial",
				"flowerbed",
				"flower",
				"specimen",
				"inflorescence",
				"bud",
				"botanical garden",
				"adornment",
			];
            
            // list three content
			var three = [
				"woodlands",
				"garden",
				"greenhouse",
				"wildflower meadows",
                "landscape",
				"grave",
				"lab",
				"nature reserves",
                "shaded fields",
				"streams",
				"river",
			];
            

			// This is a very common randomizing function.
			// It takes a list (array) and returns one at random.
			function select_random(x){
				y = x[Math.floor(Math.random()*x.length)];
				return y;
			}

			function generate(){

				// Select a random item from each list
				var selected_one = select_random(one);
				var selected_two = select_random(two);
                var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

			}

			$('button').click(function(){
				generate();
			});

			generate();
			
		});
