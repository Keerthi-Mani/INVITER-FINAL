var attachment_base = "";

$("#send-btn").on("click", function (event) {
    event.preventDefault();

    // Make a new mail
    var person_name = $("#name").val().trim();
    var person_email_id = $("#email").val().trim();
    var person_relation = $("#relation").val().trim();
    var subject_text = $("#subject").val().trim();
    var text_area = $("#text-message").val().trim();

    var files = document.getElementById('file').files;
    console.log(files);
    if (files.length > 0) {
        attachment_file = files[0];
    }

    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    console.log(dir);

    var details = {
        contact_name: person_name,
        contact_email: person_email_id,
        contact_relation: person_relation,
        contact_subject: subject_text,
        message: text_area,
        attachment_data: "" + attachment_file.name,
        attachment_filename: attachment_file.name,
    }

    $.post("/sendemail", details)
        .then(function () {
            //Empty each input box by replacing the value with an empty string
            $("#name").val("");
            $("#email").val("");
            $("#relation").val("");
            $("#subject").val("");
            $("#text-message").val("");
        });



    $.get("/all", function (data) {
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
            var emailSection = $("<div>");
            emailSection.addClass("section");
            emailSection.attr("id", "email-well-" + i);
            $("#email-section").append(emailSection);
            $("#email-well-" + i).append("<h2>" + (i + 1) + "." + "Name : " + data[i].contact_name + "</h2>");
            $("#email-well-" + i).append("<h3>" + "Email :" + data[i].contact_email + "</h3>");
            $("#email-well-" + i).append("<h3>" + "Relation :" + data[i].contact_relation + "</h3>");
            $("#email-well-" + i).append("<h3>" + "Message :" + data[i].message + "</h3>");
        }
    });
});


// //View emails by id
//var url = "/sendemail/id" + id;
//$.get("url", function (data) {});

// //View emails by relation
//var url = "/sendemail/relation" + type;
//$.get("url", function (data) {});