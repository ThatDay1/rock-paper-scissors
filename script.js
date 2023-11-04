const container = document.querySelector(".container"),
    userResult = document.querySelector(".user-images img"),
    cpuResult = document.querySelector(".cpu-images img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", e => {
        image.classList.add("active");
        //console.log(e.target.value);

        optionImages.forEach((img2, index2) => {
            //console.log(index, index2);
            if (index !== index2) {
                img2.classList.remove("active");
            }
        })

        container.classList.add("start");

        let time = setTimeout (() => {
            container.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            //console.log(imageSrc);
            userResult.src = imageSrc;
    
            let randomNumber = Math.floor(Math.random() * 3);
            //console.log(randomNumber);
    
            let cpuImages = ["/img/rock.jpg", "/img/paper.jpg", "/img/scissors.jpg"];
            cpuResult.src = cpuImages[randomNumber];
    
            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];
    
            //console.log(UserValue, cpuValue);
    
            let outcomes = {
                RR : "Draw",
                RP : "Computer",
                RS : "User",
                PP : "Draw",
                PR : "User",
                PS : "Computer",
                SS : "Draw",
                SR : "Computer",
                SP : "User"
            };
            let outComeValue = outcomes[userValue + cpuValue];
            //console.log(outcomeValue);
    
            result.textContent = userValue === cpuValue ? "Draw" : `${outComeValue} Won`;
        }, 700)
    })
})