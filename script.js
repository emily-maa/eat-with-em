
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navlink')[0]

function toggleNavbar() {
    navbarLinks.classList.toggle('active');
}
function printContent(recipeId) {
  var recipeContent = document.getElementById(recipeId).innerHTML;
  var printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print Recipe</title>');
  printWindow.document.write('<link rel="stylesheet" href="../print-styles.css" type="text/css" media="print"/>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(recipeContent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}
document.addEventListener('DOMContentLoaded', function() {
    var backToTopLink = document.querySelector('.back-to-top');

    backToTopLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


