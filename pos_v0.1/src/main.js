//TODO: Please write code in this file.
function printInventory(inputs) {
    var Goods = new Array();
    var Total = 0.0;

    for (var i=0; i<inputs.length; i++){
        if (Goods[inputs[i].barcode]){
            Goods[inputs[i].barcode].number++;
        }
        else{
            Goods[inputs[i].barcode] = new Object();
            Goods[inputs[i].barcode].name = inputs[i].name;
            Goods[inputs[i].barcode].unit = inputs[i].unit;
            Goods[inputs[i].barcode].price = inputs[i].price;
            Goods[inputs[i].barcode].number = 1;
        }
    }

    var Output = "***<没钱赚商店>购物清单***\n";
    for (i in Goods){
       Output += "名称："+Goods[i].name+"，数量："+Goods[i].number+Goods[i].unit+"，单价："+Goods[i].price.toFixed(2)+"(元)，小计："+(Goods[i].number*Goods[i].price).toFixed(2)+"(元)\n";
        Total += Goods[i].number*Goods[i].price;
    }

    Output +=  '----------------------\n' + "总计："+Total.toFixed(2)+"(元)\n" + '**********************';

    console.log(Output);
}