// 1 = left 2 = right 3 = up 4 = down
// enemy image 1 light 2 fat
myjson=[
    {'id':1,'enemy_pos':'','enemy_img': 1,'e_arrow': [1,2,4]},
    {'id' :2,'enemy_pos':'left','enemy_img':2,'e_arrow': [2,3,1]},
    {'id':3,'enemy_pos':'right','enemy_img':1,'e_arrow': [4,4,3]},
    {'id':4,'enemy_pos':'right','enemy_img':2,'e_arrow':[1,2]}];

var charecter=document.createElement('div');
charecter.className='enemy left';
var arrow =document.createElement('div');
arrow.className='arrow';
charecter.appendChild(arrow);
gameplay.appendChild(charecter);
var test1 =document.querySelector('.enemy > .arrow');
var arrow_img=document.createElement('img');
arrow_img.src='image/down.png';
test1.appendChild(arrow_img);
var arrow_img=document.createElement('img');
arrow_img.src='image/up.png';
test1.appendChild(arrow_img);
var enemy_img=document.createElement('img');
enemy_img.src='image/gif/walking_enemy1.gif';

charecter.appendChild(enemy_img);

// 

// var charecter=document.createElement('div');
//     charecter.className='enemy';

// var arrow =document.createElement('div');
//     arrow.className='arrow';
// charecter.appendChild(arrow);
// gameplay.appendChild(charecter);

// for(i=0; i < myjson.length; i++){

// var tempe =document.querySelector('.enemy > .arrow');

// var arrow_img=document.createElement('img');

//     arrow_img.src='image/down.png';
// tempe.appendChild(arrow_img);

// var arrow_img=document.createElement('img');
//     arrow_img.src='image/up.png';
// tempe.appendChild(arrow_img);

// var enemy_img=document.createElement('img');
//     enemy_img.src='image/gif/walking_enemy1.gif';

// charecter.appendChild(enemy_img);

// }

// arrow.appendChild(arrow_img);
// charecter.appendChild(arrow);


// gameplay.appendChild(charecter);
// arrow_img.src=myjson[0].e_arrow[1];



// for (i = 0; i < 10; i++) {
//     var h = Math.floor(Math.random() * 4 + 1);
//     switch(h){
//         case 1:{
//             var charImage = document.createElement('img');
//             charImage.src = 'image/right.png';
//             break;
//         }
//         case 2:{
//             var charImage = document.createElement('img');
//             charImage.src = 'image/left.png';
//             break;
//         }
//         case 3:{
//             var charImage = document.createElement('img');
//             charImage.src = 'image/up.png';
//             break;
//         }
//         case 4:{
//             var charImage = document.createElement('img');
//             charImage.src = 'image/down.png';
//             break;
//         }
//     }
//     console.log('ok' + i);
//     test1.appendChild(charImage);
// }
// makeEle();

// function makeEle() {
//     var charecter=document.createElement('div');
//     charecter.id='enemy';
//     var arrows=document.createElement('div');
//     var test1=document.querySelector('#enemy > .arrow');
//     arrows.appendChild(test1);
//     arrows.className('arrow');

//     enemy.appendChild(arrows);
//     gameplay.appendChild(enemy);
// }