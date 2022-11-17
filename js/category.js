/// <reference path="../typings/globals/jquery/index.d.ts" />
export class FirstPage{
    constructor(){
        
        this.mainSection=document.getElementById('mainSection')
        
        this.showData()
        $('#CategoryLink').click(function () {
            $('#CategorySection').removeClass('d-none')
            $('.IngreSection').addClass('d-none')
            $('.areaSection').addClass('d-none')
            $('.seaech').addClass('d-none')
            $('.contactSection').addClass('d-none')
        })
        
        
        
        
    }

    async fetchApi(Api){
        let response=await fetch(Api)
        let result=await response.json()
        return result
    }
    async showData(){
        let response=await this.fetchApi(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let dataList = response.categories
        let x=""
        for (let i = 0; i < dataList.length ; i++) {
        x += `<div class="col-12 col-sm-6 col-md-3 ccc justify-content-center m-3">
        
        <div class-""><img class="w-100  rounded  "  src=${dataList[i].strCategoryThumb
            } alt="">
            <div id="xFactor[${i}]"
            
            class="hoverdiv  ccc  rounded   text-center  "><h5> ${dataList[i].strCategory}</h5>
            <p>
            ${dataList[i].strCategoryDescription}</p>
            </div>
            </div>
            </div>`;
            
            
        }
        
        this.mainSection.innerHTML = x
        
        for (let i = 0; i < dataList.length; i++) {
            
            let d = document.getElementById(`xFactor[${i}]`)
            d.addEventListener("click", ()=> {
                dataList
                this.categoryLink(dataList[i].strCategory)
                console.log("nnnnnnnnnnnn");
            })
            
        }
        
        
    }
    async categoryLink(cateoryName)
    {
        let response=await this.fetchApi(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateoryName}`)
        // let response=await this.fetchApi(`www.themealdb.com/api/json/v1/1/search.php?f=${cateoryName}`)
        let x=""
        let dataList = response.meals
        // for (const i of dataList) {
            for (let i = 0; i < dataList.length; i++) {
            
            x += `<div class="col-12 col-sm-6 col-md-3 ccc justify-content-center  rounded p-5   ">
            <div class=" position-relative  ">
            <img class="w-100  rounded   bg-danger"  src=${dataList[i].strMealThumb} alt="">
            <div id="yFactor[${i}]"  class="hoverdiv  rounded   text-center   "><h6 class="m-5">${dataList[i].strMeal}<h6/>
            </div>
            </div></div>`
            
        }
        $('#mainSection').html(`<div  class="row justify-content-center overflow-hidden  ">${x}</div>`)
        
        for (let i = 0; i < dataList.length; i++) {
            
            let d = document.getElementById(`yFactor[${i}]`)
            
            d.addEventListener("click", ()=> {
                this.Instructions(dataList[i].strMealThumb,dataList[i].strMeal)
                console.log("jjjjjjjjjjjjj");
               
            })
        
        }
    
    
    }
    async Instructions(strMealThumb,strMeal){
        let response=await this.fetchApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
        let tag=""
        let tagTitle=``
        let recipesTitle=``
    let x=""
    let y=``
    let dataList = response.meals
    for (let i = 1; i < 20; i++) {
        if (dataList[0][`strMeasure${i}`] ) {
            recipesTitle=`<h3>Recipes :</h3>`
            y+=
            `<span class="d-inline-block m-1 py-2 px-3 bg-info opacity-10 rounded">${dataList[0][`strMeasure${i}`]} ${dataList[0][`strIngredient${i}`]}</span>`
        }   
    }
    let newArr=[]
    if (dataList[0].strTags != null) {
        
        newArr=[...dataList[0].strTags.split(',')]
        
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i]) {
                tagTitle=`<h3 class="my-2">Tags :</h3>`
                tag+=   
                `
                <span class="d-inline-block m-1 py-2 px-3 bg-danger opacity-10 rounded">${newArr[i]}</span>`
            }   
        }
}
    
        x = `
                <div class="col-12 col-sm-4 overflow-hidden "><div ><img class="w-100" src="${strMealThumb}" alt=""></div>
                <h3>${strMeal}</h3>
                </div>
                <div class="col-12 col-sm-8">
                    <h3>Instructions</h3>
                    <p>${dataList[0].strInstructions}</p>
                    <h6>Area :<span>${dataList[0].strArea}</span></h6>
                    <h6>Category :<span>${dataList[0].strCategory}</span></h6>
                    ${recipesTitle}
                    ${y}
                    
                    ${tagTitle}
                    ${tag}
                    <h3 class="my-2">Links :</h3>
                    <div>
                        <a target="_blank" href="${dataList[0].strSource}"  class=" btn btn-success m-1">source</a>
                        <a target="_blank" href="${dataList[0].strYoutube}" class=" btn btn-danger m-1 ">Youtube</a>
                    </div>

                        
                </div>`

    
    $('section').html(`<section>
    <div class="container text-light ">
        <div class="row g-3 mt-5 overflow-hidden"> ${x}</div>
        </div>
    </section>`)




    
    }
    

}