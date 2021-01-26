(function() {
  $(document).ready(function() {
    var blue10, blueDark, count, green10, greenDark, purple10, purpleDark, red10, redDark, resetAllSubs, transformation;
    count = 0;
    // Colors
    blue10 = "rgba(0, 168, 255, .1)";
    red10 = "rgba(255, 96, 95, .1)";
    green10 = "rgba(150, 209, 0, .1)";
    purple10 = "rgba(208, 102, 250, .1)";
    blueDark = "rgba(0, 94, 142, 1)";
    redDark = "rgba(155, 3, 0, 1)";
    greenDark = "rgba(74, 103, 0, 1)";
    purpleDark = "rgba(110, 49, 134, 1)";
    $(".blue").on("mouseover", function() {
      resetAllSubs();
      $(".blueSub").css({
        "opacity": "1",
        "transition-delay": "0s"
      });
      $("body").css({
        "background": blue10,
        "transition-delay": "0s"
      });
      return $(".shadowBox").css({
        "background": blueDark,
        "transition-delay": "0s"
      });
    });
    $(".red").on("mouseover", function() {
      resetAllSubs();
      $(".redSub").css({
        "opacity": "1",
        "transition-delay": "0s"
      });
      $("body").css({
        "background": red10,
        "transition-delay": "0s"
      });
      return $(".shadowBox").css({
        "background": redDark,
        "transition-delay": "0s"
      });
    });
    $(".green").on("mouseover", function() {
      resetAllSubs();
      $(".greenSub").css({
        "opacity": "1",
        "transition-delay": "0s"
      });
      $("body").css({
        "background": green10,
        "transition-delay": "0s"
      });
      return $(".shadowBox").css({
        "background": greenDark,
        "transition-delay": "0s"
      });
    });
    $(".purple").on("mouseover", function() {
      resetAllSubs();
      $(".purpleSub").css({
        "opacity": "1",
        "transition-delay": "0s"
      });
      $("body").css({
        "background": purple10,
        "transition-delay": "0s"
      });
      return $(".shadowBox").css({
        "background": purpleDark,
        "transition-delay": "0s"
      });
    });
    $(".blue").on("click", function() {
      if (count > 1) {
        count = 0;
      }
      transformation("blue");
      return count += 1;
    });
    $(".red").on("click", function() {
      if (count > 1) {
        count = 0;
      }
      transformation("red");
      return count += 1;
    });
    $(".green").on("click", function() {
      if (count > 1) {
        count = 0;
      }
      transformation("green");
      return count += 1;
    });
    $(".purple").on("click", function() {
      if (count > 1) {
        count = 0;
      }
      transformation("purple");
      return count += 1;
    });
    resetAllSubs = function() {
      $(".blueSub").css({
        "opacity": "0",
        "transition-delay": "0s"
      });
      $(".redSub").css({
        "opacity": "0",
        "transition-delay": "0s"
      });
      $(".greenSub").css({
        "opacity": "0",
        "transition-delay": "0s"
      });
      return $(".purpleSub").css({
        "opacity": "0",
        "transition-delay": "0s"
      });
    };
    return transformation = function(layer) {
      if (count === 0) {
        switch (layer) {
          case "blue":
            //Divs
            $(".blue").css({
              "z-index": "3",
              "width": "400px",
              "height": "112px",
              "margin-top": "8px",
              "margin-left": "8px",
              "transition-delay": ".5s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".05s"
            });
            $(".red").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".1s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".075s"
            });
            $(".green").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".15s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".125s"
            });
            $(".purple").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".2s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".175s"
            });
            //Texts
            $(".blue .colorName").css({
              "opacity": "1",
              "transition-delay": ".75s"
            });
            $(".blue .hex").css({
              "opacity": "1",
              "transition-delay": ".8s"
            });
            $(".blue .rgb").css({
              "opacity": "1",
              "transition-delay": ".85s"
            });
            break;
          case "red":
            //Divs
            $(".red").css({
              "z-index": "3",
              "width": "400px",
              "height": "112px",
              "margin-top": "8px",
              "margin-left": "8px",
              "transition-delay": ".5s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".05s"
            });
            $(".blue").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".1s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".075s"
            });
            $(".green").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".15s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".125s"
            });
            $(".purple").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".2s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".175s"
            });
            //Texts
            $(".red .colorName").css({
              "opacity": "1",
              "transition-delay": ".75s"
            });
            $(".red .hex").css({
              "opacity": "1",
              "transition-delay": ".8s"
            });
            $(".red .rgb").css({
              "opacity": "1",
              "transition-delay": ".85s"
            });
            break;
          case "green":
            //Divs
            $(".green").css({
              "z-index": "3",
              "width": "400px",
              "height": "112px",
              "margin-top": "8px",
              "margin-left": "8px",
              "transition-delay": ".5s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".05s"
            });
            $(".blue").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".1s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".075s"
            });
            $(".red").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".15s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".125s"
            });
            $(".purple").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".2s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".175s"
            });
            //Texts
            $(".green .colorName").css({
              "opacity": "1",
              "transition-delay": ".75s"
            });
            $(".green .hex").css({
              "opacity": "1",
              "transition-delay": ".8s"
            });
            $(".green .rgb").css({
              "opacity": "1",
              "transition-delay": ".85s"
            });
            break;
          case "purple":
            //Divs
            $(".purple").css({
              "z-index": "3",
              "width": "400px",
              "height": "112px",
              "margin-top": "8px",
              "margin-left": "8px",
              "transition-delay": ".5s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".05s"
            });
            $(".blue").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".1s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".075s"
            });
            $(".red").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".15s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".125s"
            });
            $(".green").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".2s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(0)",
              "transition-delay": ".175s"
            });
            //Texts
            $(".purple .colorName").css({
              "opacity": "1",
              "transition-delay": ".75s"
            });
            $(".purple .hex").css({
              "opacity": "1",
              "transition-delay": ".8s"
            });
            $(".purple .rgb").css({
              "opacity": "1",
              "transition-delay": ".85s"
            });
        }
      }
      if (count === 1) {
        switch (layer) {
          case "blue":
            //Divs
            $(".blue").css({
              "z-index": "2",
              "width": "64px",
              "height": "64px",
              "margin-top": "32px",
              "margin-left": "32px",
              "transition-delay": ".5s"
            });
            $(".blueSub").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".8s"
            });
            $(".red").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".9s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".875s"
            });
            $(".green").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".95s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".925s"
            });
            $(".purple").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": "1s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".975s"
            });
            //Texts
            $(".blue .colorName").css({
              "opacity": "0",
              "transition-delay": ".15s"
            });
            $(".blue .hex").css({
              "opacity": "0",
              "transition-delay": ".1s"
            });
            return $(".blue .rgb").css({
              "opacity": "0",
              "transition-delay": "0s"
            });
          case "red":
            //Divs
            $(".red").css({
              "z-index": "2",
              "width": "64px",
              "height": "64px",
              "margin-top": "32px",
              "margin-left": "128px",
              "transition-delay": ".5s"
            });
            $(".redSub").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".8s"
            });
            $(".blue").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".9s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".875s"
            });
            $(".green").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".95s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".925s"
            });
            $(".purple").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": "1s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".975s"
            });
            //Texts
            $(".red .colorName").css({
              "opacity": "0",
              "transition-delay": ".15s"
            });
            $(".red .hex").css({
              "opacity": "0",
              "transition-delay": ".1s"
            });
            return $(".red .rgb").css({
              "opacity": "0",
              "transition-delay": "0s"
            });
          case "green":
            //Divs
            $(".green").css({
              "z-index": "2",
              "width": "64px",
              "height": "64px",
              "margin-top": "32px",
              "margin-left": "224px",
              "transition-delay": ".5s"
            });
            $(".greenSub").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".8s"
            });
            $(".blue").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".9s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".875s"
            });
            $(".red").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".95s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".925s"
            });
            $(".purple").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": "1s"
            });
            $(".purpleSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".975s"
            });
            //Texts
            $(".green .colorName").css({
              "opacity": "0",
              "transition-delay": ".15s"
            });
            $(".green .hex").css({
              "opacity": "0",
              "transition-delay": ".1s"
            });
            return $(".green .rgb").css({
              "opacity": "0",
              "transition-delay": "0s"
            });
          case "purple":
            //Divs
            $(".purple").css({
              "z-index": "2",
              "width": "64px",
              "height": "64px",
              "margin-top": "32px",
              "margin-left": "320px",
              "transition-delay": ".5s"
            });
            $(".purpleSub").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".8s"
            });
            $(".blue").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".9s"
            });
            $(".blueSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".875s"
            });
            $(".red").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": ".95s"
            });
            $(".redSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".925s"
            });
            $(".green").css({
              "opacity": "1",
              "transform": "scale(1)",
              "transition-delay": "1s"
            });
            $(".greenSub").css({
              "opacity": "0",
              "transform": "scale(1)",
              "transition-delay": ".975s"
            });
            //Texts
            $(".purple .colorName").css({
              "opacity": "0",
              "transition-delay": ".15s"
            });
            $(".purple .hex").css({
              "opacity": "0",
              "transition-delay": ".1s"
            });
            return $(".purple .rgb").css({
              "opacity": "0",
              "transition-delay": "0s"
            });
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUEsQ0FBQTtBQUVsQixRQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtJQUFFLEtBQUEsR0FBUSxFQUFWOztJQUdFLE1BQUEsR0FBUztJQUNULEtBQUEsR0FBUTtJQUNSLE9BQUEsR0FBVTtJQUNWLFFBQUEsR0FBVztJQUVYLFFBQUEsR0FBVztJQUNYLE9BQUEsR0FBVTtJQUNWLFNBQUEsR0FBWTtJQUNaLFVBQUEsR0FBYTtJQUViLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxFQUFYLENBQWMsV0FBZCxFQUEyQixRQUFBLENBQUEsQ0FBQTtNQUN6QixZQUFBLENBQUE7TUFDQSxDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsR0FBZCxDQUFrQjtRQUFBLFNBQUEsRUFBVSxHQUFWO1FBQWUsa0JBQUEsRUFBb0I7TUFBbkMsQ0FBbEI7TUFDQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsR0FBVixDQUFjO1FBQUEsWUFBQSxFQUFhLE1BQWI7UUFBcUIsa0JBQUEsRUFBb0I7TUFBekMsQ0FBZDthQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxHQUFoQixDQUFvQjtRQUFBLFlBQUEsRUFBYSxRQUFiO1FBQXVCLGtCQUFBLEVBQW9CO01BQTNDLENBQXBCO0lBSnlCLENBQTNCO0lBT0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLFFBQUEsQ0FBQSxDQUFBO01BQ3hCLFlBQUEsQ0FBQTtNQUNBLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxHQUFiLENBQWlCO1FBQUEsU0FBQSxF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QUFZLENBQUMsR0FBYixDQUFpQjtjQUFBLFNBQUEsRUFBVyxHQUFYO2NBQWdCLFdBQUEsRUFBWSxVQUE1QjtjQUF3QyxrQkFBQSxFQUFvQjtZQUE1RCxDQUFqQjtZQUNBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxHQUFaLENBQWdCO2NBQUEsU0FBQSxFQUFXLEdBQVg7Y0FBZ0IsV0FBQSxFQUFZLFVBQTVCO2NBQXdDLGtCQUFBLEVBQW9CO1lBQTVELENBQWhCO1lBQ0EsQ0FBQSxDQUFFLFdBQUYsQ0FBYyxDQUFDLEdBQWYsQ0FBbUI7Y0FBQSxTQUFBLEVBQVcsR0FBWDtjQUFnQixXQUFBLEVBQVksVUFBNUI7Y0FBd0Msa0JBQUEsRUFBb0I7WUFBNUQsQ0FBbkIsRUFSVjs7WUFVVSxDQUFBLENBQUUsb0JBQUYsQ0FBdUIsQ0FBQyxHQUF4QixDQUE0QjtjQUFBLFNBQUEsRUFBVyxHQUFYO2NBQWdCLGtCQUFBLEVBQW9CO1lBQXBDLENBQTVCO1lBQ0EsQ0FBQSxDQUFFLGNBQUYsQ0FBaUIsQ0FBQyxHQUFsQixDQUFzQjtjQUFBLFNBQUEsRUFBVyxHQUFYO2NBQWdCLGtCQUFBLEVBQW9CO1lBQXBDLENBQXRCO21CQUNBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsR0FBbEIsQ0FBc0I7Y0FBQSxTQUFBLEVBQVcsR0FBWDtjQUFnQixrQkFBQSxFQUFvQjtZQUFwQyxDQUF0QjtBQXhESixTQURGOztJQTNEZTtFQXRFRCxDQUFsQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkgLT5cblxuICBjb3VudCA9IDBcblxuICAjIENvbG9yc1xuICBibHVlMTAgPSBcInJnYmEoMCwgMTY4LCAyNTUsIC4xKVwiXG4gIHJlZDEwID0gXCJyZ2JhKDI1NSwgOTYsIDk1LCAuMSlcIlxuICBncmVlbjEwID0gXCJyZ2JhKDE1MCwgMjA5LCAwLCAuMSlcIlxuICBwdXJwbGUxMCA9IFwicmdiYSgyMDgsIDEwMiwgMjUwLCAuMSlcIlxuXG4gIGJsdWVEYXJrID0gXCJyZ2JhKDAsIDk0LCAxNDIsIDEpXCJcbiAgcmVkRGFyayA9IFwicmdiYSgxNTUsIDMsIDAsIDEpXCJcbiAgZ3JlZW5EYXJrID0gXCJyZ2JhKDc0LCAxMDMsIDAsIDEpXCJcbiAgcHVycGxlRGFyayA9IFwicmdiYSgxMTAsIDQ5LCAxMzQsIDEpXCJcblxuICAkKFwiLmJsdWVcIikub24gXCJtb3VzZW92ZXJcIiwgLT5cbiAgICByZXNldEFsbFN1YnMoKVxuICAgICQoXCIuYmx1ZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6XCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG4gICAgJChcImJvZHlcIikuY3NzKFwiYmFja2dyb3VuZFwiOmJsdWUxMCwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiMHNcIilcbiAgICAkKFwiLnNoYWRvd0JveFwiKS5jc3MoXCJiYWNrZ3JvdW5kXCI6Ymx1ZURhcmssIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG5cblxuICAkKFwiLnJlZFwiKS5vbiBcIm1vdXNlb3ZlclwiLCAtPlxuICAgIHJlc2V0QWxsU3VicygpXG4gICAgJChcIi5yZWRTdWJcIikuY3NzKFwib3BhY2l0eVwiOlwiMVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuICAgICQoXCJib2R5XCIpLmNzcyhcImJhY2tncm91bmRcIjpyZWQxMCwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiMHNcIilcbiAgICAkKFwiLnNoYWRvd0JveFwiKS5jc3MoXCJiYWNrZ3JvdW5kXCI6cmVkRGFyaywgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiMHNcIilcblxuICAkKFwiLmdyZWVuXCIpLm9uIFwibW91c2VvdmVyXCIsIC0+XG4gICAgcmVzZXRBbGxTdWJzKClcbiAgICAkKFwiLmdyZWVuU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjpcIjFcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiMHNcIilcbiAgICAkKFwiYm9keVwiKS5jc3MoXCJiYWNrZ3JvdW5kXCI6Z3JlZW4xMCwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiMHNcIilcbiAgICAkKFwiLnNoYWRvd0JveFwiKS5jc3MoXCJiYWNrZ3JvdW5kXCI6Z3JlZW5EYXJrLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuXG4gICQoXCIucHVycGxlXCIpLm9uIFwibW91c2VvdmVyXCIsIC0+XG4gICAgcmVzZXRBbGxTdWJzKClcbiAgICAkKFwiLnB1cnBsZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6XCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG4gICAgJChcImJvZHlcIikuY3NzKFwiYmFja2dyb3VuZFwiOnB1cnBsZTEwLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuICAgICQoXCIuc2hhZG93Qm94XCIpLmNzcyhcImJhY2tncm91bmRcIjpwdXJwbGVEYXJrLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuXG4gICQoXCIuYmx1ZVwiKS5vbiBcImNsaWNrXCIsIC0+XG4gICAgaWYgY291bnQgPiAxXG4gICAgICBjb3VudCA9IDBcbiAgICB0cmFuc2Zvcm1hdGlvbihcImJsdWVcIilcbiAgICBjb3VudCArPSAxXG5cbiAgJChcIi5yZWRcIikub24gXCJjbGlja1wiLCAtPlxuICAgIGlmIGNvdW50ID4gMVxuICAgICAgY291bnQgPSAwXG4gICAgdHJhbnNmb3JtYXRpb24oXCJyZWRcIilcbiAgICBjb3VudCArPSAxXG5cbiAgJChcIi5ncmVlblwiKS5vbiBcImNsaWNrXCIsIC0+XG4gICAgaWYgY291bnQgPiAxXG4gICAgICBjb3VudCA9IDBcbiAgICB0cmFuc2Zvcm1hdGlvbihcImdyZWVuXCIpXG4gICAgY291bnQgKz0gMVxuXG4gICQoXCIucHVycGxlXCIpLm9uIFwiY2xpY2tcIiwgLT5cbiAgICBpZiBjb3VudCA+IDFcbiAgICAgIGNvdW50ID0gMFxuICAgIHRyYW5zZm9ybWF0aW9uKFwicHVycGxlXCIpXG4gICAgY291bnQgKz0gMVxuXG4gIHJlc2V0QWxsU3VicyA9ICgpIC0+XG4gICAgJChcIi5ibHVlU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjpcIjBcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiMHNcIilcbiAgICAkKFwiLnJlZFN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6XCIwXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG4gICAgJChcIi5ncmVlblN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6XCIwXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG4gICAgJChcIi5wdXJwbGVTdWJcIikuY3NzKFwib3BhY2l0eVwiOlwiMFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuXG4gIHRyYW5zZm9ybWF0aW9uID0gKGxheWVyKSAtPlxuICAgIGlmIGNvdW50IGlzIDBcbiAgICAgIHN3aXRjaCBsYXllclxuICAgICAgICB3aGVuIFwiYmx1ZVwiXG4gICAgICAgICAgI0RpdnNcbiAgICAgICAgICAkKFwiLmJsdWVcIikuY3NzKFwiei1pbmRleFwiOiBcIjNcIiwgXCJ3aWR0aFwiOlwiNDAwcHhcIiwgXCJoZWlnaHRcIjpcIjExMnB4XCIsIFwibWFyZ2luLXRvcFwiOiBcIjhweFwiLCBcIm1hcmdpbi1sZWZ0XCI6IFwiOHB4XCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi41c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjA1c1wiKVxuICAgICAgICAgICQoXCIucmVkXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMXNcIilcbiAgICAgICAgICAkKFwiLnJlZFN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjA3NXNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMTVzXCIpXG4gICAgICAgICAgJChcIi5ncmVlblN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjEyNXNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjJzXCIpXG4gICAgICAgICAgJChcIi5wdXJwbGVTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xNzVzXCIpXG4gICAgICAgICAgI1RleHRzXG4gICAgICAgICAgJChcIi5ibHVlIC5jb2xvck5hbWVcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjc1c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZSAuaGV4XCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZSAucmdiXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44NXNcIilcbiAgICAgICAgd2hlbiBcInJlZFwiXG4gICAgICAgICAgI0RpdnNcbiAgICAgICAgICAkKFwiLnJlZFwiKS5jc3MoXCJ6LWluZGV4XCI6IFwiM1wiLCBcIndpZHRoXCI6XCI0MDBweFwiLCBcImhlaWdodFwiOlwiMTEycHhcIiwgXCJtYXJnaW4tdG9wXCI6IFwiOHB4XCIsIFwibWFyZ2luLWxlZnRcIjogXCI4cHhcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjVzXCIpXG4gICAgICAgICAgJChcIi5yZWRTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4wNXNcIilcbiAgICAgICAgICAkKFwiLmJsdWVcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xc1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjA3NXNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMTVzXCIpXG4gICAgICAgICAgJChcIi5ncmVlblN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjEyNXNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjJzXCIpXG4gICAgICAgICAgJChcIi5wdXJwbGVTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xNzVzXCIpXG4gICAgICAgICAgI1RleHRzXG4gICAgICAgICAgJChcIi5yZWQgLmNvbG9yTmFtZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuNzVzXCIpXG4gICAgICAgICAgJChcIi5yZWQgLmhleFwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOHNcIilcbiAgICAgICAgICAkKFwiLnJlZCAucmdiXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44NXNcIilcbiAgICAgICAgd2hlbiBcImdyZWVuXCJcbiAgICAgICAgICAjRGl2c1xuICAgICAgICAgICQoXCIuZ3JlZW5cIikuY3NzKFwiei1pbmRleFwiOiBcIjNcIiwgXCJ3aWR0aFwiOlwiNDAwcHhcIiwgXCJoZWlnaHRcIjpcIjExMnB4XCIsIFwibWFyZ2luLXRvcFwiOiBcIjhweFwiLCBcIm1hcmdpbi1sZWZ0XCI6IFwiOHB4XCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi41c1wiKVxuICAgICAgICAgICQoXCIuZ3JlZW5TdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4wNXNcIilcbiAgICAgICAgICAkKFwiLmJsdWVcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xc1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjA3NXNcIilcbiAgICAgICAgICAkKFwiLnJlZFwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjE1c1wiKVxuICAgICAgICAgICQoXCIucmVkU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMTI1c1wiKVxuICAgICAgICAgICQoXCIucHVycGxlXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMnNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjE3NXNcIilcbiAgICAgICAgICAjVGV4dHNcbiAgICAgICAgICAkKFwiLmdyZWVuIC5jb2xvck5hbWVcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjc1c1wiKVxuICAgICAgICAgICQoXCIuZ3JlZW4gLmhleFwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOHNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuIC5yZ2JcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjg1c1wiKVxuICAgICAgICB3aGVuIFwicHVycGxlXCJcbiAgICAgICAgICAjRGl2c1xuICAgICAgICAgICQoXCIucHVycGxlXCIpLmNzcyhcInotaW5kZXhcIjogXCIzXCIsIFwid2lkdGhcIjpcIjQwMHB4XCIsIFwiaGVpZ2h0XCI6XCIxMTJweFwiLCBcIm1hcmdpbi10b3BcIjogXCI4cHhcIiwgXCJtYXJnaW4tbGVmdFwiOiBcIjhweFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuNXNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjA1c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjFzXCIpXG4gICAgICAgICAgJChcIi5ibHVlU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMDc1c1wiKVxuICAgICAgICAgICQoXCIucmVkXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgwKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMTVzXCIpXG4gICAgICAgICAgJChcIi5yZWRTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDApXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xMjVzXCIpXG4gICAgICAgICAgJChcIi5ncmVlblwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjJzXCIpXG4gICAgICAgICAgJChcIi5ncmVlblN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMClcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjE3NXNcIilcbiAgICAgICAgICAjVGV4dHNcbiAgICAgICAgICAkKFwiLnB1cnBsZSAuY29sb3JOYW1lXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi43NXNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZSAuaGV4XCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44c1wiKVxuICAgICAgICAgICQoXCIucHVycGxlIC5yZ2JcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjg1c1wiKVxuICAgIGlmIGNvdW50IGlzIDFcbiAgICAgIHN3aXRjaCBsYXllclxuICAgICAgICB3aGVuIFwiYmx1ZVwiXG4gICAgICAgICAgI0RpdnNcbiAgICAgICAgICAkKFwiLmJsdWVcIikuY3NzKFwiei1pbmRleFwiOiBcIjJcIiwgXCJ3aWR0aFwiOlwiNjRweFwiLCBcImhlaWdodFwiOlwiNjRweFwiLCBcIm1hcmdpbi10b3BcIjogXCIzMnB4XCIsIFwibWFyZ2luLWxlZnRcIjogXCIzMnB4XCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi41c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjhzXCIpXG4gICAgICAgICAgJChcIi5yZWRcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45c1wiKVxuICAgICAgICAgICQoXCIucmVkU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuODc1c1wiKVxuICAgICAgICAgICQoXCIuZ3JlZW5cIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45NXNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOTI1c1wiKVxuICAgICAgICAgICQoXCIucHVycGxlXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIxc1wiKVxuICAgICAgICAgICQoXCIucHVycGxlU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOTc1c1wiKVxuICAgICAgICAgICNUZXh0c1xuICAgICAgICAgICQoXCIuYmx1ZSAuY29sb3JOYW1lXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xNXNcIilcbiAgICAgICAgICAkKFwiLmJsdWUgLmhleFwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMXNcIilcbiAgICAgICAgICAkKFwiLmJsdWUgLnJnYlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuICAgICAgICB3aGVuIFwicmVkXCJcbiAgICAgICAgICAjRGl2c1xuICAgICAgICAgICQoXCIucmVkXCIpLmNzcyhcInotaW5kZXhcIjogXCIyXCIsIFwid2lkdGhcIjpcIjY0cHhcIiwgXCJoZWlnaHRcIjpcIjY0cHhcIiwgXCJtYXJnaW4tdG9wXCI6IFwiMzJweFwiLCBcIm1hcmdpbi1sZWZ0XCI6IFwiMTI4cHhcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjVzXCIpXG4gICAgICAgICAgJChcIi5yZWRTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjlzXCIpXG4gICAgICAgICAgJChcIi5ibHVlU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuODc1c1wiKVxuICAgICAgICAgICQoXCIuZ3JlZW5cIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45NXNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOTI1c1wiKVxuICAgICAgICAgICQoXCIucHVycGxlXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIxc1wiKVxuICAgICAgICAgICQoXCIucHVycGxlU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOTc1c1wiKVxuICAgICAgICAgICNUZXh0c1xuICAgICAgICAgICQoXCIucmVkIC5jb2xvck5hbWVcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjE1c1wiKVxuICAgICAgICAgICQoXCIucmVkIC5oZXhcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjFzXCIpXG4gICAgICAgICAgJChcIi5yZWQgLnJnYlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIwc1wiKVxuICAgICAgICB3aGVuIFwiZ3JlZW5cIlxuICAgICAgICAgICNEaXZzXG4gICAgICAgICAgJChcIi5ncmVlblwiKS5jc3MoXCJ6LWluZGV4XCI6IFwiMlwiLCBcIndpZHRoXCI6XCI2NHB4XCIsIFwiaGVpZ2h0XCI6XCI2NHB4XCIsIFwibWFyZ2luLXRvcFwiOiBcIjMycHhcIiwgXCJtYXJnaW4tbGVmdFwiOiBcIjIyNHB4XCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi41c1wiKVxuICAgICAgICAgICQoXCIuZ3JlZW5TdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44c1wiKVxuICAgICAgICAgICQoXCIuYmx1ZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjlzXCIpXG4gICAgICAgICAgJChcIi5ibHVlU3ViXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuODc1c1wiKVxuICAgICAgICAgICQoXCIucmVkXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOTVzXCIpXG4gICAgICAgICAgJChcIi5yZWRTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45MjVzXCIpXG4gICAgICAgICAgJChcIi5wdXJwbGVcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjFzXCIpXG4gICAgICAgICAgJChcIi5wdXJwbGVTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45NzVzXCIpXG4gICAgICAgICAgI1RleHRzXG4gICAgICAgICAgJChcIi5ncmVlbiAuY29sb3JOYW1lXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi4xNXNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuIC5oZXhcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjFzXCIpXG4gICAgICAgICAgJChcIi5ncmVlbiAucmdiXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG4gICAgICAgIHdoZW4gXCJwdXJwbGVcIlxuICAgICAgICAgICNEaXZzXG4gICAgICAgICAgJChcIi5wdXJwbGVcIikuY3NzKFwiei1pbmRleFwiOiBcIjJcIiwgXCJ3aWR0aFwiOlwiNjRweFwiLCBcImhlaWdodFwiOlwiNjRweFwiLCBcIm1hcmdpbi10b3BcIjogXCIzMnB4XCIsIFwibWFyZ2luLWxlZnRcIjogXCIzMjBweFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuNXNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZVN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMVwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjhzXCIpXG4gICAgICAgICAgJChcIi5ibHVlXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuOXNcIilcbiAgICAgICAgICAkKFwiLmJsdWVTdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi44NzVzXCIpXG4gICAgICAgICAgJChcIi5yZWRcIikuY3NzKFwib3BhY2l0eVwiOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45NXNcIilcbiAgICAgICAgICAkKFwiLnJlZFN1YlwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIiwgXCJ0cmFuc2l0aW9uLWRlbGF5XCI6IFwiLjkyNXNcIilcbiAgICAgICAgICAkKFwiLmdyZWVuXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIsIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIxc1wiKVxuICAgICAgICAgICQoXCIuZ3JlZW5TdWJcIikuY3NzKFwib3BhY2l0eVwiOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIjpcInNjYWxlKDEpXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIi45NzVzXCIpXG4gICAgICAgICAgI1RleHRzXG4gICAgICAgICAgJChcIi5wdXJwbGUgLmNvbG9yTmFtZVwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMTVzXCIpXG4gICAgICAgICAgJChcIi5wdXJwbGUgLmhleFwiKS5jc3MoXCJvcGFjaXR5XCI6IFwiMFwiLCBcInRyYW5zaXRpb24tZGVsYXlcIjogXCIuMXNcIilcbiAgICAgICAgICAkKFwiLnB1cnBsZSAucmdiXCIpLmNzcyhcIm9wYWNpdHlcIjogXCIwXCIsIFwidHJhbnNpdGlvbi1kZWxheVwiOiBcIjBzXCIpXG4iXX0=
//# sourceURL=coffeescript