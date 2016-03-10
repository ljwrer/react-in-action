/**
 * Created by Ray on 2016/3/10.
 */
var $=require("jquery");
$("#select").on("change",function(){
   alert(this.value);
});
$("#select").trigger("change");