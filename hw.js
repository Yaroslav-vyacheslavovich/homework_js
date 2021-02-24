var goods = [
    {
        name: "Talisker",
        char: "10 years old",
        price: "4600",
        img: "0_0_cat.jpg",
        imgFull: "0_0_orig.jpg",
        id: "unit1",
        value: "0"
    },
    {
        name: "Benriach",
        char: "10 years old",
        price: "2600",
        img: "0_1_cat.jpg",
        imgFull: "0_1_orig.jpg",
        id: "unit2",
        value: "0"
    },
    {
        name: "Lagavulin",
        char: "16 years old",
        price: "6000",
        img: "0_2_cat.jpg",
        imgFull: "0_2_orig.jpg",
        id: "unit3",
        value: "0"
    },
    {
        name: "Drambuie",
        char: "n/a",
        price: "2000",
        img: "0_3_cat.jpg",
        id: "unit4",
        value: "0"
    },
]

var i = 0;
q = 3;
carousel();

function carousel() {

    units = document.querySelector("div.allgoods");
    for (n = 1; i <= goods.length, n <= q; i++, n++) {
        if (i >= goods.length)
            i = 0;
        else if (i < 0)
            i = i + goods.length;
        var unit = document.createElement("div");
        units.append(unit);
        unit.className = "units"
        var unitContent = document.createElement("div");
        unit.append(unitContent);
        unitContent.className = "unitcontent";
        var unitContentImg = document.createElement("img");
        unitContent.append(unitContentImg);
        unitContentImg.src = goods[i].img;
        unitContentImg.id = i;
        unitContentImg.onclick = imageSelection;
        var unitContentName = document.createElement("div");
        unitContent.append(unitContentName);
        unitContentName.innerHTML = goods[i].name;
        var unitContentChar = document.createElement("div");
        unitContent.append(unitContentChar);
        unitContentChar.innerHTML = goods[i].char;
        var unitContentPrice = document.createElement("div");
        unitContent.append(unitContentPrice);
        unitContentPrice.innerHTML = goods[i].price + "&nbspрублей";
        var unitBuy = document.createElement("div");
        unit.append(unitBuy);
        unitBuy.className = "unitbuy";
        unitBuy.innerHTML = "Купить";
        unitBuy.id = "unit" + (i + 1);
        unitBuy.onclick = cartCreate;
    }
}
arrowRight = document.querySelector("div.right_arrow");
arrowRight.onclick = function () {
    x = document.querySelector("div.allgoods");
    x.innerHTML = "";
    i = i + ((goods.length - 1) - q);
    carousel();
};
arrowLeft = document.querySelector("div.left_arrow");
arrowLeft.onclick = function () {
    x = document.querySelector("div.allgoods");
    x.innerHTML = "";
    i = i - (q - 1);
    carousel();
}
function cartCreate() {
    var cart = document.querySelector("div.cart");
    cart.innerHTML = "";
    for (ci = 0; ci < goods.length; ci++) {
        if (goods[ci].id == this.id) {
            goods[ci].value = +(goods[ci].value) + 1;
        }
    }
    var order = document.createElement("div");
    cart.append(order);
    order.className = "order";
    order.innerHTML = countBasket(goods);
    for (ci = 0; ci < goods.length; ci++) {
        if (goods[ci].value != 0) {
            var cartUnit = document.createElement("div")
            cart.append(cartUnit);
            cartUnit.className = "cartunit";
            cartUnit.innerHTML += goods[ci].name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + goods[ci].value + "&nbsp;&nbsp;&nbsp;&nbsp;<span class='minus'>-</span>";
            var minus = document.querySelector("span.minus");
            minus.className = goods[ci].name;
            minus.onclick = function () {
                for (ci = 0; ci < goods.length; ci++) {
                    this.querySelector("span")
                    if (goods[ci].name == this.className) {
                        goods[ci].value = +(goods[ci].value) - 1;
                        cartCreate();
                    }
                }
                order.innerHTML = countBasket(goods);
            }
        }
    }
}
function countBasket(mas) {
    var sum = 0;
    for (var item of mas) {
        sum += (item.value * item.price)
    }
    if (sum <= 0) {
        order.innerHTML;
    }
    return sum;
}
function imageSelection() {
    var gallery = document.querySelector("div.image");
    gallery.innerHTML = "";
    galleryList();
    for (im = 0; im <= this.id; im++) {
        if (im == this.id) {
            var image = document.createElement("img");
            image.id = "image" + im;
            gallery.append(image);
            image.src = goods[im].imgFull;
            // image.onerror = function () {
            //     gallery.append("такой картинки нет!");
            // }
        }
    }
}
function galleryList() {
    var gallery = document.querySelector("div.image");
    gallery.innerHTML = "<span class='left'>left</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='right'>right</span><br\>";
    galleryleft = document.querySelector("span.left");
    galleryleft.onclick = galleryClickLeft;
    galleryleft = document.querySelector("span.right");
    galleryleft.onclick = galleryClickRight;
}
function galleryClickLeft() {
    var clickLeft = document.querySelector("img");
    var mas = clickLeft.id.split('');
    var v = mas[5] - 1;
    if (v < 0) {
        v = goods.length - 1;
    }
    clickLeft.src = goods[v].imgFull;
    clickLeft.id = "image" + (v);
}
function galleryClickRight() {
    var clickRight = document.querySelector("img");
    var mas = clickRight.id.split('');
    var v = +(mas[5]) + 1;
    if (v >= goods.length) {
        v = 0;
    }
    clickRight.src = goods[v].imgFull;
    clickRight.id = "image" + (v);
}

