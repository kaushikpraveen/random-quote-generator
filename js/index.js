$(document).ready(function(){
  var i;
  
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20&callback=", function(a) {
      
    $('#quoteBtn').click(function(){
 
    i=Math.floor(Math.random() * a.length);
    //console.log(a[i].content);
    $("#quotes").html("<h1 class='fa fa-quote-left pull-left text-primary'></h1><br  /><h4 id='quoteContent' class='text-center' style='font-family:Sofia; color:green;'>"+ a[i].content + "</h4><p class='pull-right' style='font-family:Bad Script;font-style:italic;font-weight:bold; color:red;'>— " + a[i].title + "</p><br  /><h1 class='fa fa-quote-right pull-right text-primary'></h1><br  /><br  />");
             
   $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+a[i].content).attr('target', '_blank');   
});
    
});
  });