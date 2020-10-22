function showSum() {
  var min_total = 0;
  var max_total = 0;
  var tax = 0;
  var kyuyoshotoku = 0;
  var shotokukojyo = 0;
  var kazeishotoku = 0;
  var zeiritu = 0;
  var tax_all = 0;
  var tax_jyogai = 0;
  //累進課税で、税率は変わる
  var tax_per = 0.3;
  //法律が変わったときは値変更
  var iryouhi_per = 0.8;
  var shakaihoken_per = 0.8;
  var seimeihoken_per = 0.8;
  var tomobataraki_per = 0.3;
  var roun_per = 0.1;
  fObj = document.myFORM;
  kyuyoshotoku = eval(fObj[0].value) + eval(fObj[1].value);
  //共働きの場合は eval(fObj[5].value)を除いてtomobataraki_perの値をかけて
  //if (fObj[5].selected)
  shotokukojyo = eval(fObj[2].value) * iryouhi_per * 12 + eval(fObj[3].value) * shakaihoken_per * 12 + eval(fObj[4].value) * seimeihoken_per * 12 + eval(fObj[5].value);
  if (fObj[6].checked) shotokukojyo += eval(fObj[6].value);
  //if (fObj[0].checked) min_total += eval(fObj[0].value);
  kazeishotoku = kyuyoshotoku - shotokukojyo;
  tax_all = kazeishotoku * tax_per
  tax_jyogai = eval(fObj[7].value) + eval(fObj[8].value) * roun_per; //+ eval(fObj[9].value);
  //tax = tax_all - tax_jyogai
  //for (i = 1; i < 3; i++) {
  //  min_total += eval(fObj[i].value);
  //}
  //for (i = 0; i < 3; i++) if (fObj[i].selected) min_total += eval(fObj[i].value);
  var sum = ("あなたは現在、" + tax_all + "円の税金を納めています。あなたが確定申告した場合、" + tax_jyogai + "円程度の金額が返金される可能性があります。");
  //  + min_total + "円～" + max_total + "円程度の金額が返金される可能性があります。");
  console.log(sum);
  alert(sum);
}