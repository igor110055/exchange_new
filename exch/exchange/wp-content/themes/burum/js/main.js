function showThanks() {
    // console.log(document.getElementById('name').value.length)
    if (document.getElementById('name').value.length!==0){
        if (document.getElementById('mail').value.length!==0){
            if (document.getElementById('message').value.length!==0){
                document.getElementById('sup_form').style.display = 'none';
                document.getElementById('thx-text').classList.remove('display-none');
            }
        }
    }
}