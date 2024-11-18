// // Tạo một ResizeObserver để theo dõi kích thước của body
// var widthScreen
// const resizeObserver = new ResizeObserver(function(entries) {
//     entries.forEach(entry => {
//         widthScreen = entry.contentRect.width;
//         if (widthScreen >= 300 && widthScreen < 700){
//             document.querySelectorAll('#Delete1').forEach(element => element.remove());
//             // document.querySelector('header').appendChild(
//             //     '<img src="./Images/user.png" class="icon-normal" id="father">')

//             if( document.getElementById('father')==undefined){
//                 var newImg = document.createElement('img');
//                 newImg.src = './Images/user.png';  // Thiết lập thuộc tính src
//                 newImg.classList.add('icon-normal');  // Thêm class
//                 newImg.id = 'father';  // Thiết lập id
//                 newImg.width='30px';
//                 newImg.height='30px';
//                 // Thêm phần tử img vào header
//                 document.querySelector('header').appendChild(newImg);
    
//             }
            
//         }
//     });
// });

// // Bắt đầu quan sát thẻ body
// resizeObserver.observe(document.querySelector('body'));



