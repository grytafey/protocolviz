d3.select(window).on("resize",callFunction);
d3.select(window).on("click",callFunction);
callFunction();
function callFunction(){
	

var margin = {top: 10, right: 90, bottom: 10, left: 90};
var  width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
var  height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
var barWidth = 100
var barGap = 10
var titlepadding = 20

var margin = {left:50,right:50,top:0,bottom:0};

var totalquantity = 0
var tempquantity = 0
var temptext = "Text"
console.log(temptext);
var titlearray = []
var totalqarray = []
var textarray = []

var tooltip = d3.select("body").append("div").style("opacity","0").style("position","absolute");
	
var svg = d3.select("body").append("svg").attr("width",width).attr("height",height);
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");


d3.json("data.json").get(function(error,data){
	
	var svgtest = d3.select("body").select("svg");
	console.log(svgtest);
if (!svgtest.empty()){
	console.log(svgtest);
	svgtest.remove();
}

	//Creates array for horizontal ordinal scale of title names
	for (var d = 0; d < data.length; d++){
		titlearray.push(data[d].title)
		}
	
	
	for (var d = 0; d < data.length; d++){
		var totalquantity = 0;
		for (var e = 0; e < data[d].options.length; e++){
				if(data[d].options[e].options.length > 0){
					for(i = 0; i< data[d].options[e].options.length; i++){
					totalquantity = totalquantity + data[d].options[e].options[i].quantity
					}}
				else { 
				totalquantity += (data[d].options[e].quantity)}	
	}; 
		totalqarray.push(totalquantity);
};

	var xScale = d3.scale.ordinal()
					.domain(titlearray)
					.rangeBands([0, width]);
					
	var	xAxis = d3.svg.axis()
						.scale(xScale)
						.orient("top");
	
	function checkClicked(d) {
		return d.clicked = "true";
	}

	//Build groups at horizontal spaces for main section
	var firstGroups = chartGroup.selectAll("g")
		.data(data)
		.enter().append("g")
			.attr("class",function(d,i){ return "firstLevelGroup"+i; })
			.attr("transform",function(d,i){ 
				return "translate("+xScale(d.title)+","+titlepadding+")" ; 
			})
			.attr("totalquantity",function(d, i){
						return totalqarray[i]; 
						})
	



	var secondGroups = firstGroups.selectAll("g")
		.data(function(d){ 
			console.log(d.options.filter(checkClicked));
			return d.options.filter(checkClicked);})
		.enter().append("g")
			//.filter(function(d)
			//{	console.log(d);
				//return d.title = "Senior"})
			.attr("class",function(d,i,j){ return "secondLevelGroup"+i; })
			.attr("transform",function(d,i,j){ 
				var temptotalqarry = totalqarray[j];
				var yScale = d3.scale.linear()
                    .domain([0, temptotalqarry])
                    .range([0, height-titlepadding]);
				if (i == 0) {
					tempquantity = 0}
				var temp = yScale(tempquantity);
				var doptionsarray = d.options;
				if(doptionsarray.length > 0){
					for(i = 0; i< doptionsarray.length; i++){
					tempquantity = tempquantity + d.options[i].quantity
					}}
				else { 
				tempquantity = tempquantity + d.quantity}	
				return "translate(0,"+(temp)+")" })
			.on("mousemove", function(d){
			tooltip.style("opacity","1")
			.style("left",d3.event.pageX+"px")
			.style("top",d3.event.pageY+"px");
			tooltip.html(d.popuptext);
				})
			.on('click', function(d,i){console.log(this);
				d3.select(this).on("click", null)
				.append("g")
				.attr("clicked",true);
				})	
				;
				
				
	var thirdGroups = secondGroups.selectAll("g")
		.data(function(d){ 
				return d.options;})
		.enter().append("g")
			.attr("class",function(d,i,j){ return "thirdLevelGroup"+i; })
			
			.attr("transform",function(d,i,j){ 
				var temptotalqarry = totalqarray[j];
				var yScale = d3.scale.linear()
                    .domain([0, temptotalqarry])
                    .range([0, height-titlepadding]);
				if (i == 0) {
					tempquantity = 0}
				var temp = yScale(tempquantity);
				tempquantity = tempquantity + d.quantity;
				return "translate(0,0)" });




	secondGroups.append("rect")
		
		.attr("x","0")
		.attr("y","0")
		.attr("width",100)
		.attr("height",function(d,i,j){
				var temptotalqarry = totalqarray[j];
				var yScale = d3.scale.linear()
                    .domain([0, temptotalqarry])
                    .range([0, height]);
                if(d.options.length > 0){
					tempquantity = 0
					for(i = 0; i< d.options.length; i++){
					tempquantity = tempquantity + d.options[i].quantity				
					}
					var tempheight = yScale(tempquantity);
					}
				else { 
				var tempheight = yScale(d.quantity);}
				return tempheight})
		.attr("class","rect");

	secondGroups.append("text")
				.attr("x","10" )
				.attr("y","10")
				.attr("class","txt")
				.attr("text-anchor","left")
				.attr("dominant-baseline","middle")
				.text(function(d){return d.title;});

	//secondGroups.selectAll("circle")
		//.data(function(d){ return d; })
		//.enter().append("circle")
			//.attr("cx",function(d,i){ console.log(d);return ((i*21)+10); })
			//.attr("cy","25")
			//.attr("r","10")


	//secondGroups.selectAll("text")
		//.data(function(d){ console.log(d);return d.options; })
		//.enter()

		//.text(function(d,i){
			//if (i == 0){
			//textarray = []};
			//textarray.push(d);
			//var temptext = textarray.join;
			//console.log(d);
			//if (i == d.length) {return temptext}});
			
	svg.append("g")
		.attr("class", "axis hidden")
		.attr("transform", "translate(-50,20)")
		.call(d3.svg.axis()
					.scale(xScale)
					.orient("top"));
});

};
