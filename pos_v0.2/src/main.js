function printInventory(inputs) {
    var Goods = parseGoods(inputs);

    console.log(stringfyGoods(Goods));
}

function parseGoods(inputs){
    var Goods = [];

    inputs.forEach(function(barcode){
        if (Goods[barcode]){
            Goods[barcode].count++;
        }else{
            Goods[barcode] = parseGoodItem(barcode);
        }
    })
    return Goods;
}

function parseGoodItem(barcode){
    var AllItems = loadAllItems();
    var GoodItem = {};

    AllItems.forEach(function(item){
        if (barcode==item.barcode){
            GoodItem.name = item.name;
            GoodItem.unit = item.unit;
            GoodItem.price = item.price;
            GoodItem.count = 1;
        }
    })
    return GoodItem;
}

function stringfyGoods(Goods){
    var Total = 0;
    var Output = "***<没钱赚商店>购物清单***\n";

    for (i in Goods){
        Output += "名称："+Goods[i].name+"，数量："+Goods[i].count+Goods[i].unit+"，单价："+Goods[i].price.toFixed(2)+"(元)，小计："+(Goods[i].count*Goods[i].price).toFixed(2)+"(元)\n";
        Total += Goods[i].count*Goods[i].price;
    }

    Output +=  "----------------------\n" + "总计："+Total.toFixed(2)+"(元)\n" + "**********************";
    return Output;
}