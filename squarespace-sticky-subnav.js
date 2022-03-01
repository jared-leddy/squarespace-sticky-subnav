<style>

#subnavSection {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 12.5px;
}
.subnavLink {
  color: #c70000;
  font-family: Arial,Helvetica,sans-serif;
  letter-spacing: 0em;
  line-height: 1.2em;
  text-transform: none;
  font-family: proxima-nova;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  letter-spacing: .1em;
  line-height: 1.2em;
  text-transform: uppercase;
  padding: 10px;
}

.subnavLink:last-child {
  margin-right: 6.25em;
}

.subnavTaller {
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 10;
}

.subnavStatic {
  position: static;
}

@media screen and (max-width: 1024px) {
  .subnavLink:last-child {
  margin-right: 3.75em;
}
}
@media screen and (max-width: 960px) {
  .subnavLink:last-child {
  margin-right: 2.75em;
}
}
@media screen and (max-width: 768px) {
  .subnavLink:last-child {
  margin-right: 1.75em;
}
}
@media screen and (max-width: 640px) {
  .subnavLink:last-child {
  margin-right: 0.75em;
}
}
@media screen and (max-width: 640px) {
  .subnavLink:last-child {
  // margin-right: unset;
}
}

/* Mobile Nav */
.Mobile-overlay-menu {
  background-color: rgba(255, 255, 255, 1);
}
@media screen and (max-width: 639px) {
  #subnavSection {
    display: block;
  }
  .subnavLink {
    display: block;
  }
  .subnavLink:nth-child(1) {
    display: block;
    padding-top: 25px;
  }
}
</style>

<script>
function pageCode() {

  setTimeout(function(){
    window.dispatchEvent(new Event('resize'));
  }, 100);

// Assemble the HTML for the subnav
  // create div
var $subnavDiv = '<div id="subnavSection"></div>';
// Mobile div
var $subnavMobileDiv = '<div id="subnavMobileSection"></div>';
  // create each link item
var $subnavLinkAppellate = '<a href="#appellate-1" class="subnavLink">Appellate</a>';
var $subnavLinkCivil = '<a href="#civil-1" class="subnavLink">Civil</a>';
var $subnavLinkCriminal = '<a href="#criminal-1" class="subnavLink">Criminal</a>';
var $subnavLinkPolitical = '<a href="#political-1" class="subnavLink">Political</a>';
var $subnavLinkRegulatory = '<a href="#regulatory-1" class="subnavLink">Regulatory</a>';
// Put it all together
// Inject it into the site, directly below the header
// Main Header Section
$('.Header-inner').after($subnavDiv);
$('#subnavSection').prepend($subnavLinkRegulatory);
$('#subnavSection').prepend($subnavLinkPolitical);
$('#subnavSection').prepend($subnavLinkCriminal);
$('#subnavSection').prepend($subnavLinkCivil);
$('#subnavSection').prepend($subnavLinkAppellate);

// Mobile Nav Section
$('.Mobile-overlay-nav--secondary').after($subnavMobileDiv);
$('#subnavMobileSection').prepend($subnavLinkRegulatory);
$('#subnavMobileSection').prepend($subnavLinkPolitical);
$('#subnavMobileSection').prepend($subnavLinkCriminal);
$('#subnavMobileSection').prepend($subnavLinkCivil);
$('#subnavMobileSection').prepend($subnavLinkAppellate);

// monitor the scroll position of the page
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // - - if the scrollTop of the page is greater than the height of the header
    // - - change the subnav to position:fixed; top:0
    if (scroll >= 90) {
        $('#subnavSection').addClass("subnavTaller");
    }
    // - - if the window.scrollTop is less than the height of the header
    // - - it goes back to default
    if (scroll <= 90) {
        $('#subnavSection').removeClass("subnavTaller");
    }
});

} // end page code function

</script>
