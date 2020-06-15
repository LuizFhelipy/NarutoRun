record ={
	x:30,
	y:130,
	color: "#000",
	font: "50px Arial",
	record:localStorage.getItem("record"),

	desenha:function(){
		ctx.fillStyle = this.color
		ctx.font      = this.font
		if(this.record == null){
			ctx.fillText("Record:0", this.x, this.y)
		}else {
			ctx.fillText("Record:"+this.record, this.x, this.y)
		}
	},
}