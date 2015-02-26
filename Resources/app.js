Titanium.UI.setBackgroundColor('#fff');

var WinView = Ti.UI.createView({
top:0,
width: '100%',
height: '100%',
backgroundColor: '#1C1C1C'
});

var win1 = Titanium.UI.createWindow({  
    title:'Home page',
    backgroundImage:'/Images/seattleneedle.jpg'
});

var label1 = Titanium.UI.createLabel({
	color:'#465330',
	top: 40,
	text:'Travel Seattle',
	font:{fontSize:44,fontWeight: 'bold',fontFamily:'Serif'},
	textAlign:'center',
	width:'auto'
});
var label3 = Titanium.UI.createLabel({
	color:'#465330',
	top: 90,
	text:'The Prized Gem of the NorthWest',
	font:{fontSize:20,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
win1.add(label3);

WinView.add(win1);

var NavButton1 = Ti.UI.createButton({
	title: 'Seahawks Fan Page',
	color: '#11ee06',
	width: '100%',
	top: 400,
	height: 40,
	backgroundColor: '#24498F',
	font: {
		fontSize: '30sp',
		fontWeight: 'bold'
	},
});

win1.add(NavButton1);

NavButton1.addEventListener('click', function() {
	win2.open();
});

var win2 = Titanium.UI.createWindow({  
    title:'Fan Page',
    backgroundColor:'#24498F'
});

var label2 = Titanium.UI.createLabel({
	color:'#11ee06',
	top:30,
	text:'The Spirit Of The',
	font:{fontSize:35,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});
var label4 = Titanium.UI.createLabel({
	color:'#11ee06',
	top:65,
	text:'12th Man!',
	font:{fontSize:45,fontWeight: 'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});
var image = Ti.UI.createImageView({
	image:'/Images/Seahawks.jpg'
});

win2.add(label2);
win2.add(label4);
win2.add(image);

var NavButton2 = Ti.UI.createButton({
	title: 'Home Page',
	color: '#465330',
	top: 400,
	width: '100%',
	height: 40,
	backgroundColor: '#899D6E',
	font: {
		fontSize: '30sp',
		fontWeight: 'bold'
	}
});

win2.add(NavButton2);

NavButton2.addEventListener('click', function() {
	Ti.API.info('Clicked Home Button');
	win2.close();
});

win1.open();


