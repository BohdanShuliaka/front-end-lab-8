$(document).ready(function() {
  let src = $("#grid-source");
  let counter = 0;
  let tableDiv = $("<div></div>");
  let rowDiv, colDiv;

  $(".right").hide();
  $(".left").hide();
  $(tableDiv).addClass("table");
  $(src).append(tableDiv);

  for (i = 1; i < 16; i++) {
    rowDiv = $("<div></div>");
    $(rowDiv)
      .appendTo(tableDiv)
      .addClass(`row row${i}`)
      .attr("data-value", `${i}`);
    for (k = 1; k < 16; k++) {
      colDiv = $("<div></div>");
      $(colDiv)
        .appendTo(rowDiv)
        .addClass(`col col${k}`)
        .attr("data-value", `${k}`);

      let circle = $("<div></div>");
      $(circle)
        .appendTo(colDiv)
        .addClass(`colorCircle`);
    }
  }
  $(".white").on("click", function() {
    $(".left").toggle();
    return (counter = 0);
  });
  $(".black").on("click", function() {
    $(".right").toggle();
    return (counter = 1);
  });

  function showWinner(string) {
    $(".announce").css("display", "block");
    $(".announce h1").text(`${string} WINS`);
    $(".announce p").text(`click to start new`);
  }
  $(".announce").on("click", function() {
    location.reload();
  });

  $(".colorCircle").on("click", function() {
    let value = $(this)
      .closest(".col")
      .data(`value`);
    let elem = $(this)
      .closest(".row")
      .find(`.col${value}`)
      .find(".colorCircle");
    let colorClass;
    let elemCol = $(this)
      .closest(".row")
      .find(`.col${value}`);
    let elemRow = $(this).closest(".row");

    if (counter === 1) {
      colorClass = "blackCircle";
      $(".left").show();
      $(".right").hide();
    } else if (counter % 2 == 0) {
      $(".right").show();
      $(".left").hide();
      colorClass = "whiteCircle";
    } else if (counter % 2 == 1) {
      $(".right").hide();
      $(".left").show();
      colorClass = "blackCircle";
    }

    if (elem.hasClass("blackCircle") || elem.hasClass("whiteCircle")) {
      return false;
    } else {
      counter++;
      elem.addClass(colorClass);
      $(".counter").text(`TURN № ${counter}`);
      horizontalCheck();
      verticalCheck();
      diagonalCheck();
    }

    function horizontalCheck() {
      for (let i = 1, y = 0; i < 16; i++, y++) {
        let indexRow = $(`.row${i}`).children();
        let colorRev = indexRow.children();

        for (let y = 0; y < 14; y++) {
          if (
            colorRev.eq(0 + y).hasClass("whiteCircle") &&
            colorRev.eq(1 + y).hasClass("whiteCircle") &&
            colorRev.eq(2 + y).hasClass("whiteCircle") &&
            colorRev.eq(3 + y).hasClass("whiteCircle")
          ) {
            showWinner("White");
          } else if (
            colorRev.eq(0 + y).hasClass("blackCircle") &&
            colorRev.eq(1 + y).hasClass("blackCircle") &&
            colorRev.eq(2 + y).hasClass("blackCircle") &&
            colorRev.eq(3 + y).hasClass("blackCircle")
          ) {
            showWinner("Black");
          }
        }
      }
    }
    function verticalCheck() {
      for (let i = 1; i < 16; i++) {
        for (let y = 0; y < 14; y++) {
          if (
            $(`.row${i}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("whiteCircle") &&
            $(`.row${i + 1}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("whiteCircle") &&
            $(`.row${i + 2}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("whiteCircle") &&
            $(`.row${i + 3}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("whiteCircle")
          ) {
            showWinner("White");
          } else if (
            $(`.row${i}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("blackCircle") &&
            $(`.row${i + 1}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("blackCircle") &&
            $(`.row${i + 2}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("blackCircle") &&
            $(`.row${i + 3}`)
              .children()
              .eq(0 + y)
              .children()
              .hasClass("blackCircle")
          ) {
            showWinner("Black");
          }
        }
      }
    }
    function diagonalCheck() {
      let divNumber = elem.parent().data(`value`);
      let rowNumber = elem.closest(".row").data(`value`);
      console.log([rowNumber, divNumber]);

      //4 sides White

      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber - 3}`)
          .children()
          .eq(divNumber + 2)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber - 3}`)
          .children()
          .eq(divNumber - 4)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 3}`)
          .children()
          .eq(divNumber + 2)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 3}`)
          .children()
          .eq(divNumber - 4)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      //left-right side
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      //riht-left side
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      if (
        elem.hasClass("whiteCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("whiteCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("whiteCircle")
      ) {
        showWinner("White");
      }
      //4 sides Black
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber - 3}`)
          .children()
          .eq(divNumber + 2)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber - 3}`)
          .children()
          .eq(divNumber - 4)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 3}`)
          .children()
          .eq(divNumber + 2)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 3}`)
          .children()
          .eq(divNumber - 4)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      //left-right side
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      //riht-left side
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber - 2}`)
          .children()
          .eq(divNumber - 3)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
      if (
        elem.hasClass("blackCircle") &&
        $(`.row${rowNumber - 1}`)
          .children()
          .eq(divNumber - 2)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 1}`)
          .children()
          .eq(divNumber)
          .children()
          .hasClass("blackCircle") &&
        $(`.row${rowNumber + 2}`)
          .children()
          .eq(divNumber + 1)
          .children()
          .hasClass("blackCircle")
      ) {
        showWinner("Black");
      }
    }
  });
});
