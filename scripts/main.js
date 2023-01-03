function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    let botaoPt = document.getElementById("pt")
    let botaoEn = document.getElementById("en")
    if(lng == 'en'){
        botaoPt.style.color = "#787575"
        botaoEn.style.color = "#F1F1F1"
    } 
    if(lng == 'pt'){
        botaoPt.style.color = "#F1F1F1"
        botaoEn.style.color = "#787575"
      } 
}
let botaoPt = document.getElementById("pt")
let botaoEn = document.getElementById("en")
window.onload = function(){
    translate('pt', 'lng-tag');
};
botaoPt.addEventListener("click", function(event){
    translate('pt', 'lng-tag');
  });
botaoEn.addEventListener("click", function(event){
translate('en', 'lng-tag');
});
