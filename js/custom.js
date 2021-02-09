jQuery(document).ready(function () {
  jQuery(".box").draggable({
    cursor: "pointer",
    containment: ".big-box",
  });

  jQuery(".drag-and-drop .draggable").draggable({
    cursor: "pointer",
    containment: "body",
  });

  jQuery(".drag-and-drop .dropable").droppable({
    drop: function () {
      alert("Successfully Completed!!!");
    },
  });

  jQuery(".resizable-area .resizable-box").resizable({ animate: true });

  jQuery(".selectable-area").selectable();
  jQuery(".sortable-area").sortable();

  jQuery(".accordion-area").accordion({
    collapsible: true,
  });

  jQuery(function () {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
    ];

    jQuery("#tags").autocomplete({ source: availableTags });
  });

  jQuery(".radio-button").buttonset();
  jQuery(".checkbox-button").buttonset();
  jQuery(".checkbox-nested").buttonset();

  jQuery("#datepicker").datepicker();
  jQuery("#anim").on("change", function () {
    jQuery("#datepicker").datepicker("option", "showAnim", $(this).val());
  });

  jQuery("#opener").click(function () {
    jQuery("#dialog").dialog({
      show: {
        effect: "blind",
        duration: 1000,
      },

      hide: {
        effect: "explode",
        duration: 1000,
      },
    });
  });

  jQuery("#menu").menu();

  // progressbar - Display status of a determinate or indeterminate process.
  jQuery(".loading").progressbar({
    value: false,
    change: function () {
      jQuery(".progress-label").text(
        jQuery(".loading").progressbar("value") + "%"
      );
    },
    complete: function () {
      jQuery(".progress-label").text("Complete!!!");
    },
  });

  function sheshhobe() {
    var value = jQuery(".loading").progressbar("value") || 0;
    jQuery(".loading").progressbar("value", value + 1);

    if (value < 99) {
      setTimeout(sheshhobe, 80);
    }
  }

  setTimeout(sheshhobe, 1000);

  jQuery("#tabs").tabs();
});
