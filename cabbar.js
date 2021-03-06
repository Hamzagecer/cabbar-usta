// 1. Cabbar Usta sadece kirmizi ve siyah arabalari tamir etmektedir.
// 2. Sadece BMW, Audi ve VW markalarini kabul etmektedir.
// 3. BMW arabalarinda sadece kirmizi olanlari ve yas araligi 2010 ile 2019 arasindakileri kabul etmektedir.
// 4. Audi de ise sadece yas araligi 2005 ile 2010 veya 2014 ile 2020 arasindakileri kabul etmektedir.
// 5. VW de ise sadece siyah olanlari ve yas araligi 2001 ile 2018 arasindakileri kabul etmektedir.
// 6. Bu seneden itibaren de Cabbar Usta, 2020 cikisli siyah renkli BMWleri de kabul etmektedir.
// 7. 5 yildan uzun sureli sabit musterilerine ise, tum araba modellerinde (tum yas araligi ve tum renkler) hizmet vermektedir.


var marka = "bmw"
var model = 2018
var color = "red"
var client = 5

client=prompt("bizi tercih ettiginiz kacinci yiliniz ?");
if(client>4){
    console.log("5 yil uzeri musterilere ,tum araclarin hizmeti serbest")
}

else if((color=="red" || color=="black") && (marka=="bmw" || marka=="audi" || marka=="wv")){
    if (marka=="bmw" && color=="red" && 2009<model && model<2020||marka=="bmw" && color=="black" && model==2020){
        console.log("kayit formu oluşturuluyor..")
    }else if((marka=="audi" && 2004<model && model<2011) || (2013<model && model<2021)){
        console.log("kayit formu oluşturuluyor..")
    }else if(marka=="vw" && color=="black" && 2000<model && model<2019){
        console.log("kayit formu oluşturuluyor..")
    }
    else{
        console.log("kayıt formu olusturulamadı..")
    }

}