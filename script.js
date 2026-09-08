document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var imageModal = document.getElementById('imgExpanded');
    var close = document.getElementsByClassName('close')[0];

    var images = document.querySelectorAll('.image-expansivel');

    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = 'block';
            imageModal.src = this.src;
        }
    })

    close.onclick = function() {
        modal.style.display = 'none';
    }

    modal.onclick(function() {
        if(event.target == modal) {
            modal.style.display = 'none'
        }
    })
})