function afficher_cacher(){
    var article = document.getElementById("monArticle");
    if (article.style.display == "none" || article.style.display == "") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}