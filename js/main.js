$(function()
{ 
	/*Loop through all the articles*/
   $('.post').each(function()
   { 
	/* Parse date and split the string. In this case we use a simple space .split(" ") but it can be either like .split("/") depends the format of the date the server is spitting out. */   
    var str = $(this).data('date').split(" "); 
    
    /* At this example I want to cut the string month and use only the first three letters. In this case str[0] is day, str[1] is month and str[2] is year.*/
    var month = (str[1]); 
    
     /* Cut the first three letters from the string string and use a new variable cutString*/ 
    var cutString = (month.substring(0,3));  
   
	 /* Insert the string month inside our <span class="month"></span>  */
    $(this).find(".date .month").text(cutString);
    
     /* Insert the string day inside our <span class="day"></span> in this case is str[0]*/
    $(this).find(".date .day").text(str[0]);
   });
   
});

