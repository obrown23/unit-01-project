var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let answers = ["arkham asylum", "penguin", "riddler", "cat woman", "bat mobile", "alfred", "joker", "harley quinn", "joker", "talia al ghul"];
let questions = ["What is the name of the Gotham's psychiatric hospital/prison, which houses criminally insane patients?", "Born Oswald Chesterfield Cobblepot, this modster is known for vulgar laugh, disgusting taste for raw fish, and his high-tech umbrella", "Which villian is known for his obession with word puzzles and games? He also flaunts a green suit with a bowler hat...", "This burglar sports a tight black outfit and uses a bullwhip/diamond claws as weapons..", "This heavily armored and weaponized vehicle is one of batmans favorite items.", "Batmans greatest asset is his butler. What is Mr. Pennyworths first name?", "Batmans ultimate nemesis always wears a smile on his face. Who is he?", "Only one person has managed to steal Jokers heart, shes also his partner in crime. What is her name?", "Who killed Jason Todd (The second Robin)", "This character was an enemy of batman, but somehow managed to have his baby. what is her name?",];
// hanging chndeleir
//jQuery
for(let i = alphabet.length - 1; i >= 0; i--){
    $("#alphabet").prepend("<div id='letters'>" + alphabet[i] + "</div>")
   
} 
$('button').click(() => {
    event.preventDefault()
    let input = $('input:text').val()
    $('ol').append('<li class="strik">' + input + "</li>")
    $('input').val('')
}
)
$('ol').on("click", ".strik", () => {
    $(event.target).css('text-decoration', 'line-through');
});