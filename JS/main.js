
// loadiing
var loadingScreen = $('.loading-screen');






$('.dosa').mouseenter(function () { $('.layerr').animate({ top: '0%' }) });
$('.dosa').mouseleave(function () { $('.layerr').animate({ top: '100%' }) });

$('.ni2fl').click(function () { $('.nit7rkk').toggleClass('d-none', 7000) }).click(function () { $("ul").toggleClass('d-none', 1000) })

$('.Doosa').mouseenter(function () { $('.Laayerr').animate({ top: '0%' }) });
$('.Doosa').mouseleave(function () { $('.Laayerr').animate({ top: '100%' }) });






categories = [];





(async function menuElAkl() {

    loadingScreen.removeClass('d-none');

    var res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', { method: 'GET' });

    ragi3Mnha = await res.json();
    categories.push(ragi3Mnha);
    // console.log(categories);
    displayAll(categories);
    loadingScreen.addClass('d-none');


})();







function displayAll() {
    var cartona = ` `;
    for (var i = 0; i < categories.length; i++) {
        cartona += `

         <figure class="col-3  position-relative overflow-hidden dosa ">
                <img src="${categories[i].strCategoryThumb}" class=" w-100  position-relative ">

                <figcaption class=" layerr  position-absolute  h-100   d-flex align-items-center ">


                    <h1>${categories[i].strCategory}</h1>
                </figcaption>
            </figure>
        `
    };

    document.querySelector('.a5iran').innerHTML = cartona;
}







// function displayAll() {
//     var cartona = ` `;
//     for (var i = 0; i < allFoood.length; i++) {
//         cartona += `

//          <figure class="col-3  position-relative overflow-hidden dosa ">
//                 <img src="${allFoood[i].strCategoryThumb}" class=" w-100  position-relative ">

//                 <figcaption class=" layerr  position-absolute  h-100   d-flex align-items-center ">


//                     <h1>${allFoood[i].strCategory}</h1>
//                 </figcaption>
//             </figure>
//         `
//     };

//     document.querySelector('.a5iran').innerHTML = cartona;
// }







// $(document).ready(() => {
//     searchByName("").then(() => {
//         $(".loading-screen").fadeOut(500)
//         $("body").css("overflow", "visible")

//     })
// })







// var namePerson = $('.esm');
// var maloPerson = $('.malo');
// var rakmoPerson = $('.rakmo');
// var sinoPerson = $('.sino');
// var passwordPerson = $('.password');
// var RepassworPerson = $('.Repasswor');
// var input;

// function theNamee() {
//     var NAME = /^[a-zA-Z]{10}$/;
//     if (namePerson.length == NAME.length) {
//         return namePerson.value;
//     }
//     else {
//         $('.thissone').removeClass('display')
//     }
// };


// function theMail(input) {

//     var MAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (maloPerson.length == MAIL.length) {

//         maloPerson.value
//     }
//     else {
//         $('.thisstwo').removeClass('display')
//     }
// }




// theData = [];

// $('.elTaka').click(function () {
//     var personInfo = {
//         name: theNamee(),
//         mail: theMail(),
//         phone: /^(20)*01[0-25][0-9]{8} $/.test(rakmoPerson.value),
//         Age: /^(18|19|80|[2-7][0-9]) $/.test(sinoPerson.value),
//         password: /^([a-z]{1}|[1-9]){7,-} $/.test(passwordPerson.value),
//         Repassword: RepassworPerson.value
//     }

//     theData.push();
//     console.log(theData)

// });




// function clearAll() {
//     namePerson.value = ' ';
//     maloPerson.value = ' ';
//     rakmoPerson.value = ' ';
//     sinoPerson.value = ' ';
//     passwordPerson.value = ' ';
//     RepassworPerson.value = ' ';

// }


// $('.contt').click(function () {
//     $('.theBase').addClass('d-none');
//     $('.theArea').addClass('d-none');
//     $('.theIngredients').addClass('d-none');
//     $('.theCategories').addClass('d-none');
// $('.theSearch').addClass('d-none');

//     $('.theContent').removeClass('d-none');

// });

allPlaces = [];

$('.areaaaa').click(function () {
    $('.theBase').addClass('d-none');
    $('.theContent').addClass('d-none');
    $('.theIngredients').addClass('d-none');
    $('.theCategories').addClass('d-none');
    $('.theSearch').addClass('d-none');

    $('.theArea').removeClass('d-none');

    (async function menuElAkl() {
        loadingScreen.removeClass('d-none');
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list', { method: 'GET' });

        ragi3Mnha = await res.json();
        allPlaces.push(ragi3Mnha);
        displayAllArea(allPlaces);
        loadingScreen.addClassClass('d-none');
    })();



});


function displayAllArea() {
    cartona = ` `;
    for (var i = 0; i < allPlaces.length; i++) {
        cartona += `

                <div class="col-3 text-center  w-25 mt-2">
                <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                <h1 class="text-white text-c">${allPlaces[i].strArea}</h1>
            </div>
                `
    }

    document.querySelector('.koloo').innerHTML = cartona;
}

// $('.ingrrrr').click(function () {
//     $('.theBase').addClass('d-none');
//     $('.theArea').addClass('d-none');
//     $('.theConten').addClass('d-none');
//     $('.theCategories').addClass('d-none');
// $('.theSearch').addClass('d-none');
//     $('.theIngredients').removeClass('d-none');

// });


// $('.contegaa').click(function () {
//     $('.theBase').addClass('d-none');
//     $('.theArea').addClass('d-none');
//     $('.theConten').addClass('d-none');
//     $('.theIngredients').addClass('d-none');
// $('.theSearch').addClass('d-none');
//     $('.theCategories').removeClass('d-none');


// });



// $('.hathaa').click(function () {
//     loadingScreen.removeClass('d-none');
//     $('.theBase').addClass('d-none');
//     $('.theArea').addClass('d-none');
//     $('.theConten').addClass('d-none');
//     $('.theIngredients').addClass('d-none');
//     $('.theCategories').addClass('d-none');
//     $('.theSearch').removeClass('d-none');
//             loadingScreen.addClassClass('d-none');
// });







