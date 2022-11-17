import { FirstPage } from "./category.js";

let categories=new FirstPage
  let letterInput=document.getElementById('letterInput')
        let searchPlace=document.getElementById('conayin')
        let searchInput=document.getElementById('nameSearchInput')
        
export async  function searchc() {
    
        $('#searchLink').click(function () {
            $('#CategorySection').addClass('d-none')
            $('.areaSection').addClass('d-none')
            $('.IngreSection').addClass('d-none')
            $('.contactSection').addClass('d-none')
            $('.seaech').removeClass('d-none')
        })
        
         searchInput.addEventListener('keyup', () => {
             showData()
        
        })
        // console.log(searchInput.value);
        letterInput.addEventListener('keyup',() => {
                // var getValue= document.getElementById("nameSearchInput");
                //   if (getValue.value !="") {
                //       getValue.value = "";
                //   }
          
            secrchletter(letterInput.value.slice(0,1).toLocaleUpperCase())
       
        
        })
        
    }  
    async function fetchApi(Api){
        let response=await fetch(Api)
        let result=await response.json()
        return result
    }

        


   
    async function secrchletter(cateoryName)
    {
        let response=await fetchApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${cateoryName}`)
        
        let x=""
        let dataList = response.meals
        
            for (let i = 0; i < dataList.length; i++) {
            
            x += `<div class="col-12 col-sm-6 col-md-3 ccc justify-content-center  rounded p-5   ">
            <div class=" position-relative  ">
            <img class="w-100  rounded   bg-danger"  src=${dataList[i].strMealThumb} alt="">
            <div id="zFactor[${i}]"  class="hoverdiv  rounded   text-center   "><h6 class="m-5">${dataList[i].strMeal}<h6/>
            </div>
            </div></div>`
            
        }
        searchPlace.innerHTML = x
        for (let i = 0; i < dataList.length; i++) {
            
            let d = document.getElementById(`zFactor[${i}]`)
            
            d.addEventListener("click", ()=> {
                categories.Instructions(dataList[i].strMealThumb,dataList[i].strMeal)
                
            })
        
        }
      
    }
    async function showData(){
        let response=await fetchApi(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let dataList = response.categories
        let box=[]
        for (let i = 0; i < dataList.length; i++) {
           box.push(dataList[i].strCategory)
        }
        console.log(box);
      let val =searchInput.value.slice(0,1).toLocaleUpperCase()+searchInput.value.substring(1)
      
        
        return box.includes(val) == true ? categorySecrch(val): categorySecrch('beef')
    }  

    
    async function categorySecrch(cateoryName)
    {
        let response=await fetchApi(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateoryName}`)
        
        let x=""
        let dataList = response.meals
        
            for (let i = 0; i < dataList.length ; i++) {
            
            x += `<div class="col-12 col-sm-6 col-md-3 ccc justify-content-center  rounded p-5   ">
            <div class=" position-relative  ">
            <img class="w-100  rounded   bg-danger"  src=${dataList[i].strMealThumb} alt="">
            <div id="rFactor[${i}]"  class="hoverdiv  rounded   text-center   "><h6 class="m-5">${dataList[i].strMeal}<h6/>
            </div>
            </div></div>`
            
        }
        searchPlace.innerHTML = x
        for (let i = 0; i < dataList.length; i++) {
            
            let d = document.getElementById(`rFactor[${i}]`)
            
            d.addEventListener("click", ()=> {
                categories.Instructions(dataList[i].strMealThumb,dataList[i].strMeal)
                
            })
        
        }
    }

        
    
