$("button").click(() => {
    $("a.google").attr("href", "https://www.google.com/");
    $("a.google").addClass("red");
})

$("input").keypress(event => {
    // console.log(event.key)
    $("h1").text($("input").val());
    console.log($("input").val());
})