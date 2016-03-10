require.ensure(["jquery"],function(require){
    var $=require("jquery");
    require("../../css/style.css");
    console.log("it's work");
    console.log(require("./../module/content/content.js"));
    alert($);
});