const navBar = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-ul')
    const nav1 = document.querySelector('.navA-1')
    const nav2 = document.querySelector('.navA-2')
    const nav3 = document.querySelector('.navA-3')
    const nav4 = document.querySelector('.navA-4')
    const main = document.querySelector('main')
    const section = document.querySelectorAll('section')
    

    burger.addEventListener('click', () => {
        console.log('activado')
        nav.classList.toggle('active')
        main.classList.toggle('active')
    })
    nav1.addEventListener('click', () =>{
        console.log('desactivado')
        nav.classList.toggle('active')
        main.classList.toggle('active')
    })
    nav2.addEventListener('click', () =>{
        console.log('desactivado')
        nav.classList.toggle('active')
        main.classList.toggle('active')
    })
    nav3.addEventListener('click', () =>{
        console.log('desactivado')
        nav.classList.toggle('active')
        main.classList.toggle('active')
    })
    nav4.addEventListener('click', () =>{
        console.log('desactivado')
        nav.classList.toggle('active')
        main.classList.toggle('active')
    })
    for (let i = 0 ; i< section.length; i++){
        section[i].addEventListener('click', () => {
            if(document.querySelector('main.active') == null){
                
                
            } else {
                nav.classList.toggle('active')
                main.classList.toggle('active')

            }
            
        })
    }
    
    
}


navBar()