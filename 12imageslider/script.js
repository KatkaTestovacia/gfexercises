let imagesData = [
  {
    photo: './pictures/cello-4709128_1920.jpg',
    title: 'Cello',
    description: 'What happened here, why is this a very nice image'
  },

  {
    photo: './pictures/coffee-5567269_1920.jpg',
    title: 'Coffee',
    description: 'What happened here, why is this a very nice image'
  },

  {
    photo: './pictures/lake-5567461_1920.jpg',
    title: 'Lake',
    description: 'What happened here, why is this a very nice image'
  },

  {
    photo: './pictures/pine-forest-5572944_1920.jpg',
    title: 'Forest',
    description: 'What happened here, why is this a very nice image'
  },

  {
    photo: './pictures/taiwan-5460063_1920.jpg',
    title: 'Taiwan',
    description: 'What happened here, why is this a very nice image'
  },
];
  
let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);
  
$('.right-arrow').click(() => {
    if(currentPhoto<imagesData.length-1){
        currentPhoto++;
        console.log(currentPhoto);
    } else {
        currentPhoto=0;
        console.log(currentPhoto);
    }
    loadPhoto(currentPhoto);
})

$('.left-arrow').click(() => {
    if(currentPhoto>0){
        currentPhoto--;
        console.log(currentPhoto);
    } else {
        currentPhoto=imagesData.length-1;
        console.log(currentPhoto);
    }
    loadPhoto(currentPhoto);
});

//$('#photo').attr('src', imagesData[currentPhoto].photo);
//$('#photo').attr('src', data.photo);
//$('#photo-title').text(imagesData[currentPhoto].title)
//$('#photo-title').text(data.title)
//$('#photo-description').text(imagesData[currentPhoto].description)




imagesData.forEach((item, index) => {
    $('.thumbnails').append(`<div class="small-photo-container"> <img id="small-photo" src="${item.photo}" width="100%" data-index="${index}"> </div>`);
});
// any additional info on my object can be assigned by "data-" attribute

$('.small-photo-container').click((event) => {
    let indexClicked = $(event.target).attr('data-index'); //to access the any element of my object 
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    currentPhoto = numberIndex;
    loadPhoto(currentPhoto);
})

      


      


