// 1 = left 2 = right 3 = up 4 = down
// enemy image 1 light 2 fat
myjson=[
    {'id':1,'enemy_pos':0, 'enemy_img': 1,'e_arrow': [1,2,4]},
    {'id' :2,'enemy_pos':1, 'enemy_img':2,'e_arrow': [2,3,1]},
    {'id':3,'enemy_pos':2, 'enemy_img':1,'e_arrow': [4,4,3]},
    {'id':4,'enemy_pos':2, 'enemy_img':2,'e_arrow':[1,2]}];

// var charecter=document.createElement('div');
// charecter.className='enemy left';
// var arrow =document.createElement('div');
// arrow.className='arrow';
// charecter.appendChild(arrow);
// gameplay.appendChild(charecter);
// var test1 =document.querySelector('.enemy > .arrow');
// var arrow_img=document.createElement('img');
// arrow_img.src='image/down.png';
// test1.appendChild(arrow_img);
// var arrow_img=document.createElement('img');
// arrow_img.src='image/up.png';
// test1.appendChild(arrow_img);
// var enemy_img=document.createElement('img');
// enemy_img.src='image/gif/walking_enemy1.gif';

// charecter.appendChild(enemy_img);
// const timer = ms => new Promise(res => setTimeout(res, ms));
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

for(i=0; i < myjson.length;i++){
    var temp=myjson[i];
    // console.log(temp);
        switch(temp.enemy_pos){
            case 0:{
                var charecter=document.createElement('div');
                charecter.className='enemy';
                break;
            }
            case 1:{
                var charecter=document.createElement('div');
                charecter.className='enemy left';
                break;
            }
            case 2:{
                var charecter=document.createElement('div');
                charecter.className='enemy right';
                break;
            }
        }
        var addToDiv =document.querySelector('.enemy > .arrow');
        if(addToDiv==null){
        var arrow =document.createElement('div');
        arrow.className='arrow';
        charecter.appendChild(arrow);
        gameplay.appendChild(charecter);
        }
        var addToDiv =document.querySelector('.enemy > .arrow');

        for(j=0; j < temp.e_arrow.length;j++){

        // charecter.appendChild(arrow);

            switch(temp.e_arrow[j]){
                case 1:{
                    var arrow_img=document.createElement('img');
                    arrow_img.src='image/left.png';
                    arrow.appendChild(arrow_img);
                    break;
                }
                case 2:{
                    var arrow_img=document.createElement('img');
                    arrow_img.src='image/right.png';
                    arrow.appendChild(arrow_img);
                    break;
                }
                case 3:{
                    var arrow_img=document.createElement('img');
                    arrow_img.src='image/up.png';
                    arrow.appendChild(arrow_img);
                    break;
                }
                case 4:{
                    var arrow_img=document.createElement('img');
                    arrow_img.src='image/down.png';
                    arrow.appendChild(arrow_img);
                    break;
                }
            }
                        console.log('arrow log'+' '+temp.e_arrow[j]);
        }
        if(temp.enemy_img == 1){
            var enemy_img=document.createElement('img');
            enemy_img.src='image/gif/walking_enemy1.gif';
        }
        else if(temp.enemy_img == 2){
            var enemy_img=document.createElement('img');
            enemy_img.src='image/gif/walking_enemy2.gif';
        }
        // addToDiv.appendChild(arrow_img);
        charecter.appendChild(enemy_img);
        gameplay.appendChild(charecter);
}