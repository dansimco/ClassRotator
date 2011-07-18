ClassRotator = new Class({
  Implements: [Events,Options],
  options: {
    'handle': 'slide'
  },
  initialize: function(element,options){
    this.setOptions(options);
    this.element = document.id(element);
    this.items = this.element.getElements('.'+this.options.handle);
    this.buffer = Math.floor((this.items.length-1)/2)
    this.selectItem(0);
  },
  selectItem: function(item){
    this.items.set('class',this.options.handle);
    if ( typeOf(item) == 'element' ) {
      item_index = this.items.indexOf(item);
    } else {
      item_index = item.toInt();
    }
    this.index = item_index;
    this.fireEvent('select',this.index);
    
    this.items[item_index].addClass('current');
    this.buffer.times(function(index){
      index++;
      var target_index = item_index+index;
      if(target_index <= (this.items.length-1)){
        this.items[target_index].addClass('next next_'+index);
      } else {
        var adjusted_index = (target_index-this.items.length);
        this.items[adjusted_index].addClass('next next_'+index);
      }
    }.bind(this));
    var negative_index = 1;
    this.buffer.times(function(index){
      index++;
      var target_index = item_index-index;
      if(target_index >= 0){
        this.items[target_index].addClass('previous previous_'+index);
      } else {
        var adjusted_index = this.items.length-negative_index;
        negative_index++;
        this.items[adjusted_index].addClass('previous previous_'+index);
      }
    }.bind(this));
  },
  next: function(){
    var next_index = this.index+1;
    if(next_index == this.items.length) next_index = 0;
    this.selectItem(next_index);
  },
  previous: function(){
    var previous_index = this.index-1;
    if (previous_index < 0) previous_index = this.items.length-1;
    this.selectItem(previous_index);
  }
});