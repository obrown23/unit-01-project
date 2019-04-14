var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let answers =  ["arkham asylum", "penguin", "riddler", "cat woman", "bat mobile","alfred", "joker", "harley quinn", "joker", "talia al ghul"];

// hanging chndeleir
//jQuery
$('button').click(()=>{
    event.preventDefault()
    let input = $('input:text').val()
    $('ol').append('<li class="strik">'+ input + "</li>")
    $('input').val('')
}
)
$('ol').on("click", ".strik", ()=>{
    $(event.target).css('text-decoration','line-through');
});