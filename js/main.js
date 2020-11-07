/**
 * @author Matteo Fattorini TO-DOS 07-11-2020
 */


function createTask() {
  var listItem = document.createElement("div");
  listItem.className = "task";
  var textItem = document.createElement("div");
  $(textItem).text($("#input").val());
  var closeItem = document.createElement("div");
  closeItem.className = "close";
  $(closeItem).click(function () {
    $(listItem).remove();
  });
  $(listItem).click(function () {
    $(listItem).toggleClass("lightgreen");
  });
  listItem.appendChild(textItem);
  listItem.appendChild(closeItem);
  $(".task-container").append(listItem);
  $("#input").val(" ");
}

$(document).ready(function () {
  $("#add-button").click(function () {
    var inputLen = $("#input").val().length;
    if (inputLen > 0) {
      createTask();
    }
  });
  $(document).keydown(function (event) {
    var inputLen = $("#input").val().length;
    if (event.which === 13 && inputLen > 0) {
      createTask();
    }
  });
});
