let bodyElement = document.getElementById('body');
// let childElement = document.createElement('div');
// childElement.innerText = 'This is from JS'
// bodyElement.appendChild(childElement);

// console.log("Hello JavaScript!");



function handleSocialClick(val) {
   if(val === "linkedin") {
      window.location.href = "https://linkedin.com/in/kushagrasharmaofficial";
   } else if(val === "blog") {
      window.location.href = "#"
   } else if(val === "github") {
      window.location.href = "https://github.com/C-Y-P-H-E-R"
   }
}

function handleLinkCopyToClipBoard() {
   // Add the value to the clipboard
  navigator.clipboard.writeText(window.location.href);
}




// language bars logic
$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);