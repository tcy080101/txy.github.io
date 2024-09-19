document.addEventListener('DOMContentLoaded', function() {  
    const gallery = document.querySelector('.gallery');  
    const images = [  
        '微信图片_20240919125721.png',  
        '微信图片_20240919125729.png',  
        // 更多图片路径  
    ];  
  
    images.forEach(src => {  
        const img = document.createElement('img');  
        img.src = src;  
        img.alt = 'Gallery Image';  
        gallery.appendChild(img);  
    });  
});
