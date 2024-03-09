var $ = jQuery.noConflict()
var section_name;
var height_astronaut = $('.astronaut').height();
var height_container;

$('.green-stroke, .purple-stroke').mouseover(function(e) {
    $(this).addClass('text-effect1');
    $(this).hasClass('green-stroke') ? $(this).css({'color':'#00a518'}) : $(this).css({'color':'#a0008b'});
}).mouseout(function(e) {
    $(this).removeClass('text-effect1');
    $(this).css({'color':'black'});
});

$(function() {
    sceneSwap('1','cold');
});

// burger menu stuff
$('.burger').on('click', function() {
  $(this).toggleClass('on off');
  if($(this).hasClass('on')) { openMenu(); }
  else { closeMenu(); }
});
function openMenu() {
    $('#menu').css('display','flex');
    setTimeout(function(){ $('#menu').css('opacity','1'); }, 10);
}
function closeMenu() {
    $('#menu').css('opacity','0');
    setTimeout(function(){ $('#menu').css('display','none'); }, 150);
}
function navContact() {
    var n = 0;
    while(n < 3) {
        setTimeout(function() { director('next') }, 10);
        n++;        
    }
    $('.burger').trigger('click');
}

// up/dn arrow click stuff
// document.addEventListener('wheel', function(event) {
//     event.deltaY > 0 ? director('next') : director('prev');
// });

function director(the_direction) {
    // variables to make things easier/faster
    var count = document.querySelectorAll('div[data-part]').length;
    var curr = parseInt($('#arrow-box').attr('data-current'));
    var goto;
    var next = curr + 1;
    var prev = curr - 1;
    // update the arrows to reflect the selected section
    if(the_direction === "next") {
        if(curr === count) { return; }
        $('#arrow-box').attr('data-current', next);
        if(curr >= 1) {
            $('#up-arr').css('display','block');
            setTimeout(function() { $('#up-arr').css({'opacity':'1','margin-top':'-20px'}); }, 150)
        }
        if(curr === count - 1) {
            $('#dn-arr').css({'opacity':'0','margin-bottom':'-100px'});
            setTimeout(function() { $('#dn-arr').css({'display':'none'}); }, 150)
        }
        goto = next;
        // updateURL(next);
    } else {
        if(curr === 1) { return; }
        $('#arrow-box').attr('data-current', prev);
        if(prev === 1) {
            $('#up-arr').css({'opacity':'0','margin-top':'-50px'});
            setTimeout(function() { $('#up-arr').css({'display':'none'}); }, 150)
        }
        if(prev === curr - 1) {
            $('#dn-arr').css('display','block');
            setTimeout(function() { $('#dn-arr').css({'opacity':'1','margin-bottom':'-50px'}); }, 150)
        }
        goto = prev;
        // updateURL(prev);
    }
    // transition to the next scene
    sceneSwap(curr, goto);
}

function sceneSwap(current, goto) {
    var dest;
    var section_name = $('div[data-part=' + goto + ']').attr('id');
    var direction;
    current > goto ? direction = "prev" : direction = "next";
    // this closes any open section
    $('div[data-part]').each(function() { $(this).removeClass().addClass('section-close'); });

    if(goto === 'cold') {
        $('div[data-part=' + current + ']').removeClass().addClass('section-open');
        
        if(section_name === "home") {
            
        }

        dest = current;
    } else {
        $('div[data-part=' + current + ']').removeClass().addClass('section-close');
        $('div[data-part=' + goto + ']').removeClass().addClass('section-open');
        if(section_name === "home") {
            $('#starfield').removeClass().addClass('stars1');
        }
        if(section_name === "skills") {
            $('#starfield').removeClass().addClass('stars2');
            $('#skills h1').addClass('skills-h1-anim');
            
            setTimeout(function() {
                $('.skill-item').each(function() {
                    $(this).css('opacity',1);
                })
            },1000)
        }
        if(section_name === "examples") {
            $('#starfield').removeClass().addClass('stars3');
        }
        if(section_name === "contact") {
            $('#starfield').removeClass().addClass('stars4');
        }
        dest = goto;
    }

    setTimeout(function() {
        $('div[data-part=' + dest + ']').addClass('opacity-1');
    }, 10);
}

function arrowClick(what) {
    // check if the event fired when it shouldn't (scroll wheel)
    if(what === "next") { if($('#dn-arr').css('display') === 'none') { return; } }
    else { if($('#up-arr').css('display') === 'none') { return; } }
    // variables to make things easier/faster
    var count = document.querySelectorAll('.row[data-part]').length;
    var curr = parseInt($('#arrow-box').attr('data-current'));
    var next = curr + 1;
    var prev = curr - 1;
    
    // $('div[data-part="' + curr + '"]').css('opacity','0');
    
    if(curr === 1) { home_close(); }
    if(curr === 2) { skills_close(); }
    if(curr === 3) { examples_close(); }
    if(curr === 4) { contact_close(); }


    setTimeout(function() {
        $('div[data-part="' + curr + '"]').css({'display':'none'});
        if(what === "next") {
            $('div[data-part="' + next + '"]').css('display','flex');
            setTimeout(function() {
                $('div[data-part="' + next + '"]').css('opacity','1');
                $('#arrow-box').attr('data-current', next);
                if(curr >= 1) {
                    $('#up-arr').css('display','block');
                    setTimeout(function() { $('#up-arr').css({'opacity':'1','margin-top':'-20px'}) }, 150)
                }
                if(curr === count - 1) {
                    $('#dn-arr').css({'opacity':'0','margin-bottom':'-100px'});
                    setTimeout(function() { $('#dn-arr').css({'display':'none'}); }, 150)
                }
            }, 150);
            updateURL(next);
        } else {
            $('div[data-part="' + prev + '"]').css('display','flex');
            setTimeout(function() {
                $('div[data-part="' + prev + '"]').css('opacity','1');
                $('#arrow-box').attr('data-current', prev);
                if(prev === 1) {
                    $('#up-arr').css({'opacity':'0','margin-top':'-50px'});
                    setTimeout(function() { $('#up-arr').css({'display':'none'}); }, 150)
                }
                if(prev === curr - 1) {
                    $('#dn-arr').css('display','block');
                    setTimeout(function() { $('#dn-arr').css({'opacity':'1','margin-bottom':'-50px'}) }, 150)
                }
            }, 150);
            updateURL(prev);
        }
    }, 1500);
    
}

function updateURL(section) {
    // if(section === 1) { section_name = "/"; }
    // if(section === 2) { section_name = "?skills"; }
    // if(section === 3) { section_name = "?examples"; }
    // if(section === 4) { section_name = "?contact"; }
    // window.history.replaceState(null, null, section_name);
}