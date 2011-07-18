#ClassRotator.js

##A Mootools based class for loopable, slideshow-like instances.

ClassRotator applies ".current" class to the selected element & evenly applies ".next .next_#" or ".previous .previous_#" to its siblings. The rest is CSS.

For photo galleries, wizards, tutorials, step based ux patterns etc.


Usage

    //Instantiation
    
    var slideshow = new ClassRotator('slideshow',{
        'handle':'slide' //css class
    });
    
    
    //Functions
    
    slideshow.next();
    
    slideshow.previous();
    
    slideshow.selectItem(0); //Select the nth item
    
    slideshow.selectItem(element); //Select a specific slide
    
    
    //Properties
    
    slideshow.items; // Array of item elements in the slideshow
    
    
    //Events
    
    slideshow.addEvent('select',function(item_index){
       alert('currently showing item '+item_index);
    });