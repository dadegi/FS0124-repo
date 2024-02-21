const sottomenu = document.getElementById('sottomenu');
const sottolista =  document.getElementById('sottolista')

sottomenu.addEventListener('mouseenter', function() {
    sottolista.style.display = 'block';
});

sottomenu.addEventListener('mouseleave', function() {
    sottolista.style.display = 'none';
});