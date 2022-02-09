const btn = document.getElementById("task-button");
      const input = document.getElementById("task-input");
      const listContainer = document.getElementById("list-container");
      const items = document.getElementsByClassName("item");
      
      //  !Add Items
      btn.addEventListener("click", function () {
        listContainer.appendChild(document.createElement("li")).innerText = input.value;
        input.value = "";
      });

      //  !Remove Items
        listContainer.addEventListener("click", function (event) {
          listContainer.removeChild(event.target);
        });
      