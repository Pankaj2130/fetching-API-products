
// const starvalue = document.getElementById('star').innerHTML;
// console.log(starvalue)
// const starTotal = 5;

// for(const rate in rating) {  
//   const starPercentage = (rating[rate] / starTotal) * 100;
//   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//   document.querySelector(`.${rate} .stars-inner`).style.width = starPercentageRounded; 
// }



let http = new XMLHttpRequest();
http.open('get', 'https://fakestoreapi.com/products', true);

http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        console.log(products)
        let output = "";

        for (let item of products) {

            
          const ratings = `${item.rating.rate}`;
            console.log(ratings);
              const starTotal = 5;
              // const star1 = document.querySelector(".full-stars");
              // console.log(star1)
              for(const item in ratings) {  
                const starPercentage = (ratings[item] / starTotal) * 100;
                console.log(starPercentage)
                const TotalPercentage = `${(Math.round(starPercentage / 20) * 10)}%`;
                console.log(TotalPercentage)
                // const star1 = document.getElementById(`.${item} #star`).style.width = TotalPercentage;
                
              }

            

            output += `
                
            <div class="product">
            <div class="images">
            <div class="category-main">
            <h3 class="category">${item.category}</h3>
            </div>
            <div class="image-container">
            <img src="${item.image}" alt="${item.image}">
            </div>
        
            <p class="title">${item.title}</p>
        <br>
            <div class="description-main">
            <p class="description">${item.description}</p>
            </div>
           
            

            <div class="ratings">
             <div class="empty-stars"></div>
             <div class="full-stars" style ="width:${TotalPercentage}"></div>
              </div>

            <div class="price-main">
            <div class="price-main2">
            <p class="price">
            <span>$</span>
            <span>${item.price}</span>
            </p>
            </div>
            <div class="price-main2">
              <button>Buy Now</button>
            </div>

            </div>
            
            </div>
            </div>
           `;
        }
        document.querySelector(".products").innerHTML = output;
        
    }
}