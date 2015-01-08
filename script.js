function getRandomRange(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Array.max = function( array )
{
    return Math.max.apply( Math, array );
}

/*
    make sure the intro texts stay horizontal
*/
function minWidth() 
{
    var a = []; // array to store the width of each element
    var b = 0;    
    var c = 50; // the margin-right!

    $(".intro_essay").each(function () 
    {
        a.push($(this).width() + c); // get the width + margin-right
    });

    for (var i = 0; i < a.length; i++) 
    {
        b = b + a[i];
    }

    $(".intro_wrapper").css('min-width', b + 1); // 1 pixel fail safe

    console.log(a);
    console.log(b);
}

/*
    essay switching function
*/
function switchEssay(a) 
{
    // $(".the_essay:visible").fadeOut("slow");


    $('#the_essay' + a).fadeIn("slow", function() {
        $('#images').fadeIn("slow");
        $.scrollTo(  $('#the_essay' + a + ''), 1000);
        snapNaarAnker();
    }); 
}

/*
    draggable frame functions
*/

var h = window.innerHeight;
var w = window.innerWidth;
var output = "";

function randomFrames()
{   
    var a = []; // array to store the width of each element
    var maxW = 512;
    var maxH = 512;

    $(".draagbaar").each(function () 
    {
        a.push($(this)); 
    });

    for (var i = 1; i < a.length + 1; i++)
    {   
        console.log(i);
        $("#frame" + i).css({
            // "top": getRandomRange(60, h - 400) + "px", 
            // "left": getRandomRange(0, w - 400) + "px",
            "background-color": "rgb(" + getRandomRange(0, 255) + "," + getRandomRange(0, 255) + "," + getRandomRange(0, 255) + ")"
        });
    }
}
function selectFrame(element, stack)
{
    var a = [];

    $(stack).each(function ()
    {
        a.push($(this).css("z-index"))
    });

    console.log(a[0], a[1], a[2]);

    var maxZ = Array.max(a);
    console.log(maxZ);

    $(element).css({"z-index": maxZ + 1})
};

$(function() 
{
    $(".draagbaar").draggable({ stack: ".draagbaar" });
});

/*
    smoooth scroll function
*/

$(function() 
{
    $('a[href*=#]:not([href=#])').click(function() 
    {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
        {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice1 +']');
            
            if (target.length) 
            {
                $('html,body').animate(
                {
                    scrollTop: target.offset().top
                }, 1500);
                
                return false;
            }
        }
    });
});