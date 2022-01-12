var canvas = new fabric.Canvas('cel');
 var x= document.getElementById("s");
var i="";
function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        i=Img;
        i.scaleToHeight(500);
        i.scaleToWidth(500);
        i.set({
            top:0,
            left:0
        });
        canvas.add(i);
    })
}

function playSound(){
	x.play();
}
