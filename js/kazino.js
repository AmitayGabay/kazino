window.onload = function () {
  declarEvents();
  document.querySelector("#h2").innerHTML = 1;
}

function declarEvents() {
  let roll_btn = document.querySelector("#roll_btn");
  let id_img1 = document.querySelector("#id_img1");
  let id_img2 = document.querySelector("#id_img2");
  let id_start = document.querySelector("#id_start");
  let id_winning = document.querySelector("#id_winning");
  let id_result = document.querySelector("#id_result");
  let coins = 10;
  roll_btn.addEventListener("click", function () {
    if (coins == 0) {
      id_result.innerHTML = "Game Over!!!";
      alert("Go to the bank to withdraw money!");
    }
    else {
      id_winning.innerHTML = "";
      coins--;
      id_start.innerHTML = coins;
      let rnd1 = Math.random() * 6;
      rnd1 = Math.ceil(rnd1);
      let rnd2 = Math.random() * 6;
      rnd2 = Math.ceil(rnd2);
      id_img1.src = `dice_images/dice${rnd1}.jpg`;
      id_img2.src = `dice_images/dice${rnd2}.jpg`;

      if (rnd1 == rnd2) {
        id_winning.innerHTML = "+4";
        id_winning.style.color = "blue";
        coins += 4;
        id_start.innerHTML = coins;
        id_result.innerHTML = "You are really successful!";
        id_result.style.color = "purple";
      }
      else if (rnd1 + rnd2 >= 10) {
        id_winning.innerHTML = "+2";
        id_winning.style.color = "blue";
        coins += 2;
        id_start.innerHTML = coins;
        id_result.innerHTML = "You succeeded";
        id_result.style.color = "green";
      }
      else {
        id_result.innerHTML = "You failed";
        id_result.style.color = "red";
      }
    }
  })
}