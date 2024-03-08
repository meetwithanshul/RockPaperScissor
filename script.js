const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

const outcomes = {
    RR: "Draw",
    RP: "Cpu",
    RS: "User",
    PP: "Draw",
    PR: "User",
    PS: "Cpu",
    SS: "Draw",
    SR: "Cpu",
    SP: "User",
};

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        optionImages.forEach((image2, index2) => {
            image2.classList.toggle("active", index === index2);
        });

        userResult.src = cpuResult.src = "rock.png";
        result.textContent = "Wait...";

        gameContainer.classList.add("start");

        setTimeout(() => {
            gameContainer.classList.remove("start");

            const imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            const randomNumber = Math.floor(Math.random() * 3);
            const cpuImages = ["rock.png", "paper.png", "scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            const cpuValue = ["R", "P", "S"][randomNumber];
            const userValue = ["R", "P", "S"][index];

            const outComeValue = outcomes[userValue + cpuValue];

            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2500);
    });
});
