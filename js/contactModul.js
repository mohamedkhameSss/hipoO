
export class Contact {
    constructor()
    {   
        this.nameInput=document.getElementById('nameInput')
        this.emailInput=document.getElementById('emailInput')
        this.phoneInput=document.getElementById('phoneInput')
        this.ageInput=document.getElementById('ageInput')
        this.passwInput=document.getElementById('passwInput')
        this.rePassInput=document.getElementById('rePassInput')
        this.alertpass=document.getElementById('alertpass')
        this.alertEmail=document.getElementById('alertEmail')
        this.subBtn=document.getElementById('subBtn')
        $('#conLink').click(function () {
            $('#CategorySection').addClass('d-none')
            $('.IngreSection').addClass('d-none')
            $('.areaSection').addClass('d-none')
            $('.seaech').addClass('d-none')
            $('.contactSection').removeClass('d-none')
        })
        this.passValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
        this.emailValid =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.phValid=/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
        this.namval= /^((?:(?:[a-zA-Z]+)(?:-(?:[a-zA-Z]+))+)|(?:[a-zA-Z]+))$/
        
        
        this.emailInput.addEventListener('keyup',()=>{

            this.validEmail()
        })
        this.passwInput.addEventListener('keyup',()=>{
            this.valiPass()
            
        })
        this.rePassInput.addEventListener('keyup',()=>{
            this.valiRePass()
            
        })
        this.ageInput.addEventListener('keyup',()=>{
            this.minAge()
        })
        this.phoneInput.addEventListener('keyup',()=>{
            this.valPhone()
        })
        

    }
    if () {
        
    }
    
    validEmail(){
        if (!(this.emailValid.test(this.emailInput.value)) || this.emailInput.value !="") {
            console.log("noooooooooo");
            this.alertEmail.classList.remove('d-none');
            this.subBtn.disabled = 'true'
            this.emailInput.addClass('is-valid') 
            // this.subBtn.disabled = 'true'
        }else{
            // this.subBtn.removeAttribute('disabled') 
            // this.subBtn.removeAttribute('disabled')
            this.alertEmail.classList.add('d-none');    
            this.subBtn.removeAttribute('disabled') 
            this.emailInput.removeClass('is-valid') 
            this.emailInput.addClass('invalid-feedback') 
        
        }
    }
    valiPass(){
        if (!(this.passValid.test(this.passwInput.value))||this.passwInput.value!="") {
            console.log("noooooooooo");
            this.alertpass.classList.remove('d-none');
            this.subBtn.disabled = 'true'
            // this.subBtn.disabled = 'true'
        }else{
            // this.subBtn.removeAttribute('disabled') 
            // this.subBtn.removeAttribute('disabled')
            this.alertpass.classList.add('d-none'); 
            this.subBtn.removeAttribute('disabled') 
            
            
        }
        
    }
    valiRePass(){
        if ( this.rePassInput.value === this.passwInput.value ||this.rePassInput.value==="") {
            
            
            $('#alertrepass').addClass('d-none')
            this.subBtn.removeAttribute('disabled') 
        
        }else{
            $('#alertrepass').removeClass('d-none')
            this.subBtn.disabled = 'true'
            
        }
    }
    minAge(){
        if (this.ageInput.value >= 12 || this.ageInput.value==='') {
            
            $('#alertAge').addClass('d-none')
            this.subBtn.removeAttribute('disabled') 
            
        }else{
            $('#alertAge').removeClass('d-none')
            this.subBtn.disabled = 'true'
        }
    }
        valPhone(){
            if ( !(this.phValid.test(this.phoneInput.value))|| this.phoneInput.value!="") {
                
                this.subBtn.disabled = 'true'
                $('#alertnumber').removeClass('d-none')
                
            }else{
                $('#alertnumber').addClass('d-none')
                this.subBtn.removeAttribute('disabled') 
                
            }
        }
        nameVal(){
            if (!(this.namval.test(this.nameInput.value)) ||this.nameInput.value!='' ) {
                this.subBtn.disabled = 'true'
                $('#alertname').removeClass('d-none')
                
            }else{
                $('#alertname').addClass('d-none')
                this.subBtn.removeAttribute('disabled') 
                
            }
        }
        // diapl(){
        //     if (!(this.nameVal())) {
            // this.subBtn.disabled = 'true'
        // }else{
        //     this.subBtn.removeAttribute('disabled') 
            
        // }
    // diBtn(){
    //     while () {
            
    //     }
    // }
        


}