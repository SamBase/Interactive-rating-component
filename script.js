function submitFunction(){
    const before_submit_page = document.getElementById("before-submit");
    const after_submit_page = document.getElementById("after-submit");

    before_submit_page.style.display = "none";
    after_submit_page.style.display = "grid";
}

function ratingFunc(id){
    const rating = document.getElementById("rating-number");
    rating.innerHTML = id.value;
}