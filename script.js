function generate(){
    var quotes = {
        "- Winston Churchill" : '“Success is not final; failure is not fatal: It is the courage to continue that counts.”',
        "- Will Rogers" : '“Don’t let yesterday take up too much of today.”',
        "- Steve Jobs" : '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”',
        "- Confucius" : '“He who conquers himself is the mightiest warrior.”',
        "- Walt Disney" : '"The way to get started is to quit talking and begin doing."'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerText = author;
}