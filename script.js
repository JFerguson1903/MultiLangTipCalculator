// BillBeforeTip variable that pulls what was entered into the field
let BillBeforeTip = $("#BillBeforeTip").val();

let TipSlider = $("#TipSlider").val();

let TipQuickSelect = $("#TipQuickSelect").val();

var TipPercent = 10;
var TipPercentDecimal = TipPercent/100;
var Amount = 78.35;
var TipAmount = Math.round(((Amount * TipPercentDecimal) + Number.EPSILON) * 100) / 100;
var TotalBill = Math.round(((TipAmount + Amount) + Number.EPSILON) * 100) / 100;

console.log(TipPercentDecimal);

// function for calculating tip after percent is selected


// https://codepen.io/nerooc/pen/WNQJRKP - used as basis for Language selector
$(function(){
  $('.selectpicker').selectpicker();
});