const mealOptions = {
  breakfast: [
    { food: 'Омлет з овочами', img: 'https://img.tsn.ua/cached/637/tsn-671b840e81dae5015bc4c6345e63d1d0/thumbs/1200x630/38/3e/3b425e0e930b187d5c782c8cf1623e38.jpeg' },
    { food: 'Вівсянка з ягодами', img: 'https://health.24tv.ua/resources/photos/news/201708/854885.jpg?v=1658993720000' },
    { food: 'Сирники з медом', img: 'https://assets.dots.live/misteram-public/e4251f4c9a82c1df3b5722647b10fc56-826x0.png' },
    { food: 'Йогурт з горіхами', img: 'https://arguments.kyiv.ua/wp-content/uploads/2024/05/502.jpg' },
    { food: 'Смузі з бананом та шпинатом', img: 'https://img1.russianfood.com/dycontent/images_upl/426/big_425957.jpg' },
    { food: 'Тости з авокадо', img: 'https://klopotenko.com/wp-content/uploads/2021/07/avokado-tost_siteweb-1000x600.jpg?v=1720550187' },
    { food: 'Панкейки з медом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxxD0JkbwICuxqhm3EV4rMaNHPQtJTjXs-g&s' },
    { food: 'Каша з гарбузом', img: 'https://img.tsn.ua/cached/425/tsn-dcf0ded845fb4249b37e656be0b1987a/thumbs/1200x630/d9/9e/2dd7d50ce48089769e0bdb2fe11e9ed9.jpeg' },
    { food: 'Мюслі з молоком', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYsfzEvyjf0chuWwAeuFTXncaiaobpnRVvA&s' },
    { food: 'Чіа пудинг', img: 'https://klopotenko.com/wp-content/uploads/2021/07/chia-puding_siteweb-1000x600.jpg?v=1626259496' },
    { food: 'Блінці з ягодами', img: 'https://img.tsn.ua/cached/851/tsn-2caa9e2b3b3790ab31ffc1dec16b4315/thumbs/1200x630/00/60/0540e973a7f6389371eda4a243a06000.jpeg' },
    { food: 'Печені яблука з медом', img: 'https://gk-press.if.ua/wp-content/uploads/2021/10/egdaru-5miieyxcgelasknuuahmnvhhca2j5ann.jpg' },
    { food: 'Тости з яйцем і помідорами', img: 'https://img1.russianfood.com/dycontent/images_upl/528/big_527188.jpg' },
    { food: 'Кексики з морквою', img: 'https://img.cookorama.net/uploads/images/00/18/20/2018/04/28/79782a_780x.jpg' },
    { food: 'Вафлі з ягодами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf24Jn0T8Aiu9FtsxCt5nUEEUufQVdpsJCEg&s' },
    { food: 'Тост з лососем та крем-сиром', img: 'https://assets.dots.live/misteram-public/01884860-4f6a-700b-9ba1-606024895f2b-826x0.png' },
    { food: 'Пудинг з манго', img: 'https://i.ytimg.com/vi/vuV7d-7etLU/maxresdefault.jpg' },
    { food: 'Часникові грінки', img: 'https://nonna.com.ua/ua/image/catalog/menu2019/zakuski/hlebnyepalochki1.jpg' },
    { food: 'Творожна запіканка', img: 'https://klopotenko.com/wp-content/uploads/2022/06/tvorozhnaya-zapekanka_siteweb-1000x600.jpg?v=1720548971' },
    { food: 'Рис з фруктами', img: 'https://i.ytimg.com/vi/JNVyI8BX8Gc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCRE9-069TIlaTOaUvjSRZCNZ64hw' },
    //Ярослав
    { food: 'Бургер з яйцем', img: 'https://pesto-family.com/image/cache/catalog/211083-770x480.jpg' },
    { food: 'Гречка з овочами', img: 'https://lux.fm/uploads/media_news/2023/11/655de268166ad756630549.png?w=1200&h=675&fit=cover&output=webp&q=85' },
    { food: 'Часникові помідори на хлібі', img: 'https://cdn.smak.menu/images/max/5232/5232-cd190d32db1bfd3f9b21df8ae8b9a50c.jpg' },
    { food: 'Печені яйця в авокадо', img: 'https://img.tsn.ua/cached/582/tsn-2d42605a5d3a686abfa749ad9c360aad/thumbs/1200x630/54/a3/2b6f0dfd1bc5f259355a80597ac9a354.jpeg' },
    { food: 'Гранола з йогуртом', img: 'https://img.povar.ru/mobile/5e/0b/0d/b9/granola_s_iogurtom-600868.jpeg' },
    { food: 'Тортилья з куркою', img: 'https://bushe.com.ua/wp-content/uploads/2022/03/tortilla-chicken.jpeg' },
    { food: 'Фриттата з овочами', img: 'https://cdn.smak.menu/images/12308/12308-1a807f6c161a22f33b87bd0bf4bcb4e9.jpg' },
    { food: 'Випічка з чорницею', img: 'https://milkalliance.com.ua/blog/images/articles/blue4.jpg' },
    { food: 'Млинці з медом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_q3Hh_6jWohNcxnPVWVs-rZxIo0ajlXf-uw&s' },
    { food: 'Овочеві чіпси', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0YrUnJRi7ViUSy03DeV8IwTDC_oowevfXw&s' },
    //Ярослав
    { food: 'Тост з блакитним сиром та грушами', img: 'https://img-global.cpcdn.com/recipes/184b03fce93bc122/680x482cq70/tart-z-ghrushieiu-i-sirom-dorbliu-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Сирники з ягодами', img: 'https://blik.ua/img/news/Kulinariya/syrnyki.webp' },
    { food: 'Чорничний чіа пудинг', img: 'https://ladyindress.com.ua/wp-content/uploads/2023/04/5c0c5add56de731c4ffea02d743b55a6.jpg' },
    { food: 'Зелений смузі', img: 'https://i.obozrevatel.com/food/recipemain/2019/9/10/oblozhka-1.jpg?size=636x424' },
    { food: 'Бананові млинці', img: 'https://fayni-recepty.com.ua/wp-content/uploads/2020/12/mlyntsi-banan.jpg' },
    { food: 'Пельмені з сиром', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2_Z6xdFQZe6As17cx-gYVgPpmNmqXaUoKw&s' },
    { food: 'Грінки з авокадо та яйцем', img: 'https://kanaldim.tv/wp-content/uploads/2022/10/maxresdefault-24-820x461.jpg' },
    { food: 'Яйце бенедикт', img: 'https://klopotenko.com/wp-content/uploads/2018/03/jajca-benedikt_siteWeb-1.jpg' },
    { food: 'Рисова каша з яблуками', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jxID5Ot_rVF2uNUe-QNn5BzsZi_cRydgNQ&s' },
    { food: 'Печена курка з овочами', img: 'https://zaxid.net/resources/photos/news/500_DIR/202309/1571731_3015342.jpg?20230929162050' },
    { food: 'Гречка з грибами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuUMfwc9tYSLOEyKu9QCYCUsBliKQu1zPoA&s' },
    { food: 'Яйце, бекон та тости', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAjv5mT9BZzZkO3uxPLrC32II93t3MDkA-w&s' },
    { food: 'Молочний коктейль', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/1200px-Strawberry_milk_shake_%28cropped%29.jpg' },
    { food: 'Яйце-пашот з авокадо', img: 'https://cdn.smak.menu/images/2334/2334-211d100a3e1fb1e2ebb323967da69868.jpg' },
    { food: 'Тушковані овочі', img: 'https://img-global.cpcdn.com/recipes/51f5d3276599661a/680x482cq70/tushkovani-ovochi-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Фрукти з медом', img: 'https://beegarden.com.ua/img/recipes/13.jpg' },
    { food: 'Тост з яйцем та авокадо', img: 'https://www.liga.net/images/general/2020/09/28/20200928162706-3835.jpg?v=1601303641' },
    { food: 'Шакшука', img: 'https://klopotenko.com/wp-content/uploads/2018/02/shakshuka-ili-yaichnica-po-arabski_siteWeb.jpg' },
    { food: 'Тортилья з яйцем та овочами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1T_8bXqhAs-uEHXZZVk7mA8YfR6PkwFdFw&s' },
    { food: 'Бананові фріттати', img: 'https://agri-gator.com.ua/wp-content/uploads/2020/05/96008797_135444898070661_8443463030246735872_n.jpg' },
    { food: 'Пудинг з рисом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTil_Qo7YGCFTm3PH3GWrglhFgvmPdNPxDDwQ&s' },
    { food: 'Млинці з шоколадом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-NAERS7MD76ku9F3k4xpBqWqizJQ-rAziw&s' },
    { food: 'Кокосові батончики', img: 'https://vale-ukraine.com/wp-content/uploads/2021/04/6111.jpg' },
    { food: 'Грінки з бананом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkZ5q_ksh2aa4fbW8lAL8HUxTGlYYAkwYDA&s' },
    { food: 'Сендвіч з тунцем', img: 'https://mealtime.com.ua/storage/products/images/big/fv741VwB3WPMfXOBm8x6cSow1CfyKa3u34WKcCty.jpg' },
    { food: 'Бургер з індичкою', img: 'https://grill-pub.kr.ua/image/cache/catalog/stravs/burgers/3-1-1200x800.jpg' },
    { food: 'Яйце на грилі з беконом', img: 'https://cdn.smak.menu/images/12321/12321-538de38bbc41d35a092708dbaf734b43.jpg' },
    { food: 'Тост з чорним шоколадом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1FqrYMmXjgo2vc6xu8nOGLocpeMSiaU9ww&s' },
    { food: 'Гречка з медом', img: 'https://img.povar.ru/mobile/45/0c/a3/2a/grechnevaya_kasha_s_medom-597999.jpg' },
    { food: 'Рисові кульки', img: 'https://safaritrade.com.ua/wp-content/uploads/2021/12/000002522.jpg' }
  ],
  lunch: [
    { food: 'Куряче філе з гречкою', img: 'https://rice.ua/wp-content/uploads/2018/08/kurica_s_grechkoj_pod_smetannym_sousom.jpg' },
    { food: 'Суп-пюре з броколі', img: 'https://rud.ua/uploads/under_recipe/600%D1%85300-krem-sup-iz-brokoli_5fe47356c4d19.jpg' },
    { food: 'Плов з індичкою', img: 'https://img-global.cpcdn.com/recipes/2458041218a931bf/680x482cq70/plov-z-indichkoiu-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Салат з тунцем', img: 'https://images.unian.net/photos/2023_02/thumb_files/400_0_1677438237-1356.jpg?r=770918' },
    { food: 'Бургер з яловичиною та цільнозерновою булкою', img: 'https://img-global.cpcdn.com/recipes/de010ed93de66990/400x400cq70/photo.jpg' },
    { food: 'Кабачки з куркою', img: 'https://www.tablycjakalorijnosti.com.ua/file/image/recipe/2fec6dd4cbe743908014878569d07298/0000001000004775' },
    { food: 'Лазанья з овочами', img: 'https://telegraf.com.ua/static/storage/originals/b/3b/2558c115a4e8dc1da51a33ef532423bb.jpg' },
    { food: 'Шашлик з індички', img: 'https://i.obozrevatel.com/food/recipemain/2019/1/8/1131.jpg?size=636x424' },
    { food: 'Картопля з м’ясом', img: 'https://i.obozrevatel.com/food/recipemain/2019/4/22/u-4e910195971812b8569c5d460a34a901.jpg?size=636x424' },
    { food: 'Гречка з овочами', img: 'https://lux.fm/uploads/media_news/2023/11/655de268166ad756630549.png?w=1200&h=675&fit=cover&output=webp&q=85' },
    { food: 'Рис з овочами та куркою', img: 'https://znatnakurka.ua/sites/default/files/2024-02/rys2.jpeg' },
    { food: 'Салат «Цезар» з куркою', img: 'https://klopotenko.com/wp-content/uploads/2022/01/cezar-z-kyrkou-i-tomatamu_sitewebukr-1000x600.jpg?v=1720546600' },
    { food: 'Філе індички з кускусом', img: 'https://shuba.life/static/content/thumbs/544x544/9/ea/kk5w7q---c1x1x50px50p-up--80fff7e487226c925945c86425630ea9.jpg' },
    { food: 'Курячі нагетси з салатом', img: 'https://shuba.life/static/content/thumbs/1824x912/9/1b/gphxx2---c2x1x50px50p-up--2a3c90c7c46335bf861626fa175421b9.jpg' },
    { food: 'Бурий рис з овочами', img: 'https://i.ytimg.com/vi/F3UYsL6TIso/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCeHjmWkNmu_6gaWbSBSMjLj3BUrw' },
    { food: 'Суп з фрикадельками', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxalp_jdiNGPKSg1V7lE64acG7CfVweh8qlw&s' },
    { food: 'Овочеве рагу', img: 'https://img-global.cpcdn.com/recipes/67a93071cce9b960/680x482cq70/ovochievie-raghu-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Картопляне пюре з тефтелями', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaZtymiIKToFNMIM4KvcS0BsR4Wq4_XH35g&s' },
    { food: 'Фаршировані перці', img: 'https://storage.googleapis.com/tasty-recipes/66cf29b1da5856889cb1dfb9/recipe-T2BO9nK.jpg' },
    { food: 'Паста з томатним соусом і куркою', img: 'https://content-cdn.meta.ua/meta_news/72/01001gee-72ca_1280x720.jpeg' },
    { food: 'Запіканка з макаронів', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXkRJeaZFDSG_VYTQaUrWzG2eXY1f6zlr3Q&s' },
    { food: 'Тост з авокадо і куркою', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvuWxZjSOatFvUCxDobl_JO2lU8Aw3IX5iw&s' },
    { food: 'Бульйон з домашньою локшиною', img: 'https://www.smachno.in.ua/files/pershi/kuryachyj-bulyon/kuryachyj-bulyon.jpg' },
    { food: 'Фалафель з хумусом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEjdYjI4wsqUVC3mCc4cBPUjA1pF_OtNJzQ&s' },
    { food: 'Запечена картопля з грибами', img: 'https://img-global.cpcdn.com/recipes/8c57f9d1b8f05445/680x482cq70/zapiechiena-kartoplia-z-ghribami-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Печінка по-домашньому з цибулею', img: 'https://womanel.com/wp-content/uploads/2025/04/image-860x528.jpg' },
    { food: 'Котлети з гарніром', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqb_a7Cx8NUHmTMlFbO5110yfym_wzwXJmw&s' },
    { food: 'Гречані оладки з овочами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiocbVnzRxCHVxTZF-23onnKqFpMsm_Rzjg&s' },
    { food: 'Суп харчо', img: 'https://klopotenko.com/wp-content/uploads/2020/04/Harcho-z-grecymy-gorihamy_siteWebUkr.jpg?v=1587734176' },
    { food: 'Рибні котлети з пюре', img: 'https://assets.dots.live/misteram-public/01925154-1c20-71c6-9596-83d7e453752e-826x0.png' },
    { food: 'Паста з вершковим соусом та грибами', img: 'https://cdn.abo.media/upload/article/896t1ckn3zj4epohpuh5.jpg' },
    { food: 'Соте з індички', img: 'https://i.ytimg.com/vi/D1S4oJDG-6Y/hqdefault.jpg' },
    { food: 'Овочеві голубці', img: 'https://shashlik-market.ua/files/resized/products/ovoshnye-golubcy-min_optimized.800x550.jpeg' },
    { food: 'Салат з буряком і фетою', img: 'https://my-kitchen.in.ua/wp-content/uploads/2021/04/salat-z-buryakom-i-syrom-feta-scaled.jpg' },
    { food: 'Курячі рулетики з сиром', img: 'https://apostrophe.ua/uploads/image/29b02f807da15602e951477460b97a00.jpg' },
    { food: 'Суп з сочевиці', img: 'https://klopotenko.com/wp-content/uploads/2018/03/Sochevychnyj-sup-iz-kinzou_siteWebUkr.jpg' },
    { food: 'Печена кукурудза з сиром', img: 'https://i.ytimg.com/vi/EeJcOzVz1KQ/maxresdefault.jpg' },
    { food: 'Рисова запіканка з овочами', img: 'https://kamenskoe.city/uploads/news/redactor/3skvjjcb8xrbjru6.png' },
    { food: 'Курка в соусі теріякі з рисом', img: 'https://harchi.info/sites/default/files/recipes/2433/2433-teriyaki-chicken-bites-1.jpg' },
    { food: 'Картопляні деруни зі сметаною', img: 'https://fommi-foods.com/images/stories/virtuemart/product/deruny-smetana.jpg' },
    { food: 'Гречка з підливою', img: 'https://rice.ua/wp-content/uploads/2018/02/grechka_s_podlivoj.jpg' },
    { food: 'Філе лосося на грилі з овочами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibpYKFVf6-bHdwEDA1U8xu30r1inDD6KmzQ&s' },
    { food: 'Салат з кус-кусом та овочами', img: 'https://static.nv.ua/shared/system/Article/posters/002/930/994/original/2e87679d289ffd9b61488d6f71c25452.jpg?q=85&stamp=20240805142904&w=600' },
    { food: 'Овочеві млинці з куркою', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClxbNqkQD_EJVVQtEU87Ke9XkI-peyYVHsA&s' },
    //Ярослав
    { food: 'Суп з кабачком і рисом', img: 'https://img.povar.ru/mobile/f1/77/2c/9f/sup_s_risom_i_kabachkom-567701.JPG' },
    { food: 'Гуляш зі свинини з картоплею', img: 'https://klopotenko.com/wp-content/uploads/2024/01/hulyash-zi-svynyny-ta-kartopli-img.jpg?v=1720541994' },
    { food: 'Пельмені зі сметаною', img: 'https://img.postershop.me/12700/Products/3406351_1667831432.4909_original.jpeg' },
    { food: 'Паста з куркою та шпинатом', img: 'https://gk-press.if.ua/wp-content/uploads/2024/06/Pasta-z-kurkoyu-ta-shpynatom.jpg' },
    { food: 'Овочевий салат з моцарелою', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThR349bkmoAR-zLlSUz64vi3jBDOEoThygAw&s' },
    { food: 'Картопля фрі з курячими крильцями', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25iR6xze-O4RYB8TwwSA45dJq4HqGnsywWg&s' },
    { food: 'Буріто з яловичиною', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxslV4SQN1yo6kreMV8jqQAXX3Q4VY3gzitw&s' },
    { food: 'Курячі стегенця з рисом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7zLmHnFf5edrz6rwKg_cJxggJwUGBLEfIQ&s' },
    { food: 'Салат з печеним буряком та горіхами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1z6gQRGEQxqgYTxgb1XxsLwqvEmscqiynA&s' },
    { food: 'Курка карі з рисом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHJKMcdKuZyy6cPYp9orjmLTQ8G0eVc5P5Q&s' },
    { food: 'Омлет з овочами та сиром', img: 'https://milkalliance.com.ua/blog/media/k2/items/cache/8dfcf9615714a448ac03e0f92b733d6b_M.jpg' },
    { food: 'Тост з яйцем пашот та авокадо', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVyi83DHK_N1PPnHjZkJNRvagOaGI4kb5Sw&s' },
    { food: 'Котлета по-київськи з пюре', img: 'https://galya-baluvana.kiev.ua/wp-content/uploads/2023/12/kotleta-po-kyyivsky-.jpg' }
  //Ярослав
  ],
  dinner: [
    //Ярослав
    { food: 'Запечена риба з овочами', img: 'https://img.cookorama.net/uploads/images/00/00/99/2010/02/18/4b1fc9_780x.jpg' },
    { food: 'Гречані котлети', img: 'https://ptv.ua/mediafiles/gallery/x-VoQ.jpg' },
    { food: 'Салат з куркою і авокадо', img: 'https://img-global.cpcdn.com/recipes/819d610632fdd759/1200x630cq70/photo.jpg' },
    { food: 'Тушковані овочі з кіноа', img: 'https://img-global.cpcdn.com/recipes/57b8f427141a71d0/680x482cq70/midiyi-tushkovani-z-tsibulieiu-poriei-i-ovochami-z-kinoa-na-gharnir-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Сирники з яблуками', img: 'https://klopotenko.com/wp-content/uploads/2024/03/syrnyky-z-jablykamu-img.jpg?v=1720541203' },
    { food: 'Запечений баклажан з сиром', img: 'https://hyser.com.ua/crops/bfd967/620x0/1/0/2023/08/28/WuXPzIVbYZoinihfN9xO0Mn0DXmjOeSSGWbsx5F3.png' },
    { food: 'Курячі стегенця в духовці', img: 'https://images.unian.net/photos/2020_11/thumb_files/400_0_1606455561-4416.jpg?0.20309711051375468' },
    { food: 'Печені овочі з куркою', img: 'https://zaxid.net/resources/photos/news/500_DIR/202309/1571731_3015342.jpg?20230929162050' },
    { food: 'Тушкована телятина', img: 'https://img-global.cpcdn.com/recipes/bab6807ffd25d551/680x482cq70/tushkovana-tieliatina-z-ovochami-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Рис з овочами і яйцем', img: 'https://klopotenko.com/wp-content/uploads/2024/04/smajeniy-rys-img.jpg?v=1720540958' },
    { food: 'Лосось на грилі з овочами', img: 'https://dostavka.balkanskiydvoryk.com.ua/wp-content/uploads/2019/04/file-lososia-z-ovochamy.jpg' },
    { food: 'Куряча грудка в вершковому соусі', img: 'https://img.tsn.ua/cached/482/tsn-28424b79aaed18622b3ebc9e28e9f35e/thumbs/1200x630/f0/88/039153d54da35bcc13a996806b9e88f0.jpeg' },
    { food: 'Овочеве рагу з картоплею', img: 'https://itvmg.com/img/1000/20230715_4125.jpg' },
    { food: 'Стейк з яловичини з соусом', img: 'https://www.boim.com.ua/wp-content/uploads/2017/07/%D0%A1%D1%82%D0%B5%D0%B9%D0%BA-3-1200x800.jpg' },
    { food: 'Печені кабачки з сиром', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZ_q-jkMEVhjgXEn1HELlr1u2krdYq5e4Wg&s' },
    { food: 'Тефтелі в томатному соусі', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKppoAAk1vyL-aNkAWpALVN-YzgcVCVz3fZA&s' },
    //Ярослав
    { food: 'Паста Болоньєзе', img: 'https://i.obozrevatel.com/food/recipemain/2018/12/29/item4162.jpg?size=636x424' },
    { food: 'Картопляна запіканка з грибами', img: 'https://cdn.abo.media/upload/article/res/770-430/tpkpp6yesxbor6q843sz.jpg' },
    { food: 'Суп з куркою та локшиною', img: 'https://klopotenko.com/wp-content/uploads/2021/06/kyryachyi-sup-z-domashnou-lokshynou_sitewebukr.jpg?v=1624356388' },
    { food: 'Філе міньйон з пюре', img: 'https://assets.dots.live/misteram-public/018fe22b-d9ce-7225-b670-0f5466341936-826x0.png' },
    { food: 'Картопля з оселедцем', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ckx3Skp6TSQzGdGBChmpC_mqxfHOi1Ft_Q&s' },
    { food: 'М’ясна лазанья', img: 'https://badenbaden.com.ua/wp-content/uploads/2024/11/1536295-920x518.webp' },
    { food: 'Курячі рулетики з сиром', img: 'https://apostrophe.ua/uploads/image/29b02f807da15602e951477460b97a00.jpg' },
    { food: 'Гречка з тушкованою печінкою', img: 'https://cdn.vkusnoo.com.ua/images/15360/15360-grechka_s_pecheniu_v_multivarke1.jpg' },
    { food: 'Печені овочі з нутом', img: 'https://picantecooking.com/pictures/2016-08/eggplant-chickpea7-6404d3ffbdd5c925247284.jpg' },
    { food: 'Суп з сочевиці', img: 'https://eco-buffet.com/wp-content/uploads/2023/09/sup-1.png' },
    { food: 'Гуляш з яловичини', img: 'https://klopotenko.com/wp-content/uploads/2021/10/gulash_sitewebukr-1000x600.jpg?v=1633615180' },
    { food: 'Морська риба запечена з лимоном', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnI_BxGp4vGS7RafU4joYRK1u2Jfwq_wAh_g&s' },
    { food: 'Печінка з цибулею', img: 'https://i.ytimg.com/vi/3AOt8Kh9GF0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1_5H2EGIzyr_WIepEMF6Qt_dNsA' },
    { food: 'Соте з баклажанів', img: 'https://img-global.cpcdn.com/recipes/8add5d5c2e357233/680x482cq70/sotie-z-baklazhaniv-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Кус-кус з овочами', img: 'https://fitcurves.org/wp-content/uploads/2018/10/3-10-1024x625.jpg' },
    { food: 'Індичка в духовці з розмарином', img: 'https://suntimes.com.ua/images/2023/08/16/16-0-08-09-21_large.jpg' },
    { food: 'Рагу з куркою та квасолею', img: 'https://i.obozrevatel.com/food/recipemain/2019/1/3/varpr.jpg?size=636x424' },
    { food: 'Печені шампіньйони з сиром', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ3HbrAMgVVQNckLsCq7hT3cj0NsGzVElXg&s' },
    { food: 'Крем-суп з грибів', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuXjs5UvojQU2YWBpo6BHrDKdUuoEm5SySA&s' },
    { food: 'Тушкована капуста з ковбасками', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKBYPK4pSbL8CCrOwYqlaI8q_omgoCkhEdA&s' },
    { food: 'Плов з морквою та куркою', img: 'https://znatnakurka.ua/sites/default/files/2024-02/plov4-e1591169717419.jpeg' },
    { food: 'Овочевий крем-суп з вершками', img: 'https://img-global.cpcdn.com/recipes/1041c254d3b70ac7/680x482cq70/ovochievii-kriem-sup-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'М’ясо по-французьки', img: 'https://images.unian.net/photos/2023_02/thumb_files/400_0_1675954537-3583.jpg?r=445960' },
    { food: 'Філе судака з овочами', img: 'https://domaltbier.com.ua/wp-content/uploads/2022/02/file-sudaka-z-ovochami.jpg' },
    { food: 'Салат з кіноа та овочами', img: 'https://klopotenko.com/wp-content/uploads/2024/05/salat-z-kinoa-img.jpg?v=1720540747' },
    { food: 'Фрикадельки з рисом у соусі', img: 'https://images.unian.net/photos/2021_02/thumb_files/1200_0_1612516648-5391.jpg' },
    { food: 'Смажений тофу з овочами', img: 'https://cooking-img.nv.ua/cooking/recipe/8179/utRTbPILfh.webp?w=778' },
    { food: 'Котлети з індички з гречкою', img: 'https://databank.com.ua/images/2023/08/18/18-34-08-03-51_large.jpg' },
    { food: 'Смажена картопля з грибами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzW4gdXZb2_BhRaDPg_aLG5z962twEz7eIhQ&s' },
    { food: 'Бургер з куркою та овочами', img: 'https://kanapulka.com.ua/image/catalog/br001.jpg' },
    { food: 'Каша з печінкою та морквою', img: 'https://cdn.smak.menu/images/maxone/1724/1724-d0749a52e037897c9446ba0d1ef8f4e2.jpg' },
    { food: 'Риба з овочами на пару', img: 'https://img-global.cpcdn.com/recipes/9fe2748961005939/680x482cq70/riba-z-ovochami-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Картопляне пюре з м’ясними тюфтельками', img: 'https://shuba.life/static/content/thumbs/1824x912/c/16/eh7w5g---c2x1x50px50p-up--70ae82d866673b37c3378c69be14c16c.jpg' },
    { food: 'Мідії у вершковому соусі', img: 'https://cdn.metro-online.com/-/media/Project/MCW/UA_Metro/Blog/2021/04_2021/Midiyi-u-vershkovomu-sousi-smachna-strava-do-svyata-ta-na-kozhen-den/Metro_shop_45945928.jpg?h=440&iar=0&w=440&rev=ed8834f528354ae99adb7491998010cf&hash=951E564955B671F81E311805D64BF774' },
    { food: 'Овочі гриль з соєвим соусом', img: 'https://img-global.cpcdn.com/recipes/03d7e88753a4ad85/200x200cq70/ovochi-ghril-v-dukhovtsi-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Паста з морепродуктами', img: 'https://ribka.ua/image/cache/catalog/dishes/%D0%9F%D0%B0%D1%81%D1%82%D0%B0_%D1%81_%D0%BC%D0%BE%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0%D0%BC%D0%B8-1200x900.jpg' },
    { food: 'Котлета з картоплею та зеленню', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3b8pXVo7EQljCPdgo6WswgrzzA7ge6BXFRw&s' },
    { food: 'Соте з морепродуктів', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR808tX90H_xYFshfyfFXRkC11SJ5INeWsStg&s' },
    { food: 'Печені курячі стегенця з гірчицею', img: 'https://img-global.cpcdn.com/recipes/ee61cb4e9375b2b0/680x482cq70/zapiechieni-kuriachi-ghomilki-z-ghirchitsieiu-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' }
  ],
  snack: [
    { food: 'Банан і арахісова паста', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkBs3bCTY-yRVwOEaOgQzUwUm_Xh7iLWPFw&s' },
    { food: 'Фруктовий салат', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/800px-Fruktsallad_%28Fruit_salad%29.jpg' },
    { food: 'Горіхи та сухофрукти', img: 'https://filizhanka.com/images/news/news/gorihi-4.jpg' },
    { food: 'Протеїновий батончик', img: 'https://monsterlab.com.ua/content/images/41/480x480l50nn0/proteinovyy-batonchik-go-on-protein-33-50-g-60650686856353.jpg' },
    { food: 'Кефір з медом', img: 'https://vesti.dp.ua/wp-content/uploads/2017/12/%D0%BA%D0%B5%D1%84%D0%B8%D1%80.jpg' },
    { food: 'Йогурт з медом і ягодами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaihOBkVNt7BRQ-mxSzYrN_QtyzXF4YZMUlA&s' },
    { food: 'Авокадо з томатами', img: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/04/shutterstock_256536637_1648804665.jpeg' },
    { food: 'Сир з медом', img: 'https://sviymed.com/content/uploads/images/1%2826%29.jpg' },
    { food: 'Морквяні чіпси', img: 'https://i.obozrevatel.com/food/recipemain/2019/2/27/s1200.jpg?size=636x424' },
    { food: 'Гуакамоле з чипсами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlML7I0G1gerQNThoQLXaGaaqbD_0twVzFQ&s' },
    { food: 'Йогурт з ягодами', img: 'https://img-global.cpcdn.com/recipes/6bd17a8678386be2/680x482cq70/domashnii-ioghurt-s-iaghodami-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Батончик мюслі', img: 'https://molodo.com.ua/upload/resize_cache/webp/iblock/c78/460_460_1/2.webp' },
    { food: 'Гранола з молоком', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHk-XoNRIFvnI1t6z-8r9WSFnjnuuXr86cw&s' },
    { food: 'Фрукти нарізані (яблуко, банан, груша)', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTHP1CVXpozy_HuGSjNnt6G4w3iW0bsrCQw&s' },
    { food: 'Овочеві палички з хумусом', img: 'https://klymovska.com/wp-content/uploads/2022/07/young-vegetables-with-hummus.jpg' },
    { food: 'Грецький йогурт з медом і горіхами', img: 'https://kremen.today/wp-content/uploads/2015/09/wpid-r_342320150721222836.jpg' },
    { food: 'Сирники без цукру', img: 'https://www.tablycjakalorijnosti.com.ua/file/image/recipe/1423f64d42e24a47b78df4eab02a93e6/0000001000006943' },
    { food: 'Рисові хлібці з арахісовою пастою', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuv5Ega9zQiEUAvzPwxNPkdzB03MfsRwTE6A&s' },
    { food: 'Смузі з бананом та шпинатом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRujhsMratMGl5dbSBgEAgCv9w7L9JnE2qVQ&s' },
    { food: 'Сир твердий з виноградом', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPT8-du08JLcBdnJoxpVRf60bhbkGoVvzmA&s' },
    { food: 'Бутерброд з авокадо', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_99v9E1KZU4Bdh_HYhLnFQPxyshNzf-E76g&s' },
    { food: 'Тости з арахісовим маслом', img: 'https://cooking-img.nv.ua/cooking/recipe/10997/vIu5r6ZosH.webp?w=778' },
    { food: 'Круасани з сиром', img: 'https://img-global.cpcdn.com/recipes/b5c55ab9c882dc21/680x482cq70/kruasani-z-shinkoiu-ta-sirom-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Сир моцарела з томатами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Lq5fY2xM_vvuX5K_Axq0kWDzQxsIkSvnew&s' },
    { food: 'Оладки з кабачків', img: 'https://rud.ua/uploads/under_recipe/image1-46.jpg' },
    { food: 'Печене яблуко з корицею', img: 'https://images.unian.net/photos/2022_09/thumb_files/400_0_1662199737-6136.jpg?r=477069' },
    { food: 'Горіхова суміш', img: 'https://do-smaku.com.ua/wp-content/uploads/gorihova-sumish-500g.jpg' },
    { food: 'Кукурудзяні чіпси з сальсою', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pRj3ymOT6Hy4onx43KIMZNhLyDurQPfCjg&s' },
    { food: 'Домашні енергетичні кульки', img: 'https://www.epochtimes.com.ua/sites/default/files/field/image/12-2021/msg-487854730-56029.jpg' },
    { food: 'Запечене насіння гарбуза', img: 'https://img-global.cpcdn.com/recipes/9b039845a43df205/200x200cq70/sup-s-sochievitsieiu-ta-nasinniam-gharbuza-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Фруктові чіпси (яблучні)', img: 'https://images.prom.ua/3526212384_w300_h300_fruktovi-chipsi-z.jpg' },
    { food: 'Пудинг з чіа', img: 'https://www.nestle-cereals.com/ua/sites/g/files/qirczx1071/files/styles/1_1_768px_width/public/srh_recipes/8bebb1495a8c813b950459c9789627db.jpg.webp?itok=FZ34FONp' },
    { food: 'Палички з сиру сулугуні', img: 'https://www.rbc.ua/static/img/_/p/_palichki_facebook_com_prosto_shvidko_smachno_1200x675.jpg' },
    { food: 'Бананові панкейки', img: 'https://klopotenko.com/wp-content/uploads/2025/02/bananovi-pankeyky-img.jpg?v=1738914036' },
    { food: 'Мафіни з ягодами', img: 'https://zhenskiy.kyiv.ua/wp-content/uploads/2024/04/d3dc6e58-dca4d33b32f99924c873c32d1b86f240-1024x538.jpg' },
    { food: 'Печиво з вівсянкою', img: 'https://redpost.com.ua/content/documents/12537/1253629/images/ovsyanoe_pechene_s_bananom-184564.jpg' },
    { food: 'Омлет з овочами', img: 'https://img.tsn.ua/cached/637/tsn-671b840e81dae5015bc4c6345e63d1d0/thumbs/1200x630/38/3e/3b425e0e930b187d5c782c8cf1623e38.jpeg' },
    { food: 'Крекери з сиром', img: 'https://img.tsn.ua/cached/834/tsn-68a41e04dcd5a9f31ad7b42986ffb0f3/thumbs/1200x630/f3/d5/17430e3a61506793ff45464af6c2d5f3.jpeg' },
    { food: 'Морквяні палички з соусом', img: 'https://lux.fm/uploads/media_news/2023/08/64d0bcb3c8bf4902572057.png?w=1200&h=675&fit=cover&output=webp&q=85' },
    { food: 'Печені нутові кульки', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyw3kj2CR4qz2vyg6cfTPiillb2ZPiu1YLzA&s' },
    { food: 'Тости з тунцем', img: 'https://likein.ua/wp-content/uploads/2023/03/IMG_20230301_095229_009.jpg' },
    { food: 'Фруктовий салат', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/800px-Fruktsallad_%28Fruit_salad%29.jpg' },
    { food: 'Сушені фрукти (курага, родзинки)', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TvtMK56b3ouA3FgbHLiYGCDr0JBVvgLQaw&s' },
    { food: 'Яєчний рол з сиром', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY1BESaFM98V3hDlWoZ__QlvEIux8aDetsw&s' },
    { food: 'Міні-сендвічі з шинкою', img: 'https://kanapka.kiev.ua/wp-content/uploads/2015/03/Sendvichi-dostavka.jpg' },
    { food: 'Вафлі з фруктами', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Oj3kd7iwFj5iyJNg_i8TaDNU3ij1opUM5g&s' },
    { food: 'Сирна запіканка', img: 'https://klopotenko.com/wp-content/uploads/2022/06/tvorozhnaya-zapekanka_siteweb-1000x600.jpg?v=1720548971' },
    { food: 'Йогуртове морозиво', img: 'https://rud.ua/uploads/product/big/2023_Rozhok_150g-ZamYog_500x500-min_63d7b1d84cd43.png' },
    //Ярослав
    { food: 'Хліб з оливковою пастою', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5LYNm-xEUbE5NAmeT_dlZZ5x0nzp7an4mQ&s' },
    { food: 'Міні-лаваші з зеленню', img: 'https://img-global.cpcdn.com/recipes/df65273656522d5f/680x482cq70/konviertiki-z-lavasha-z-zielienniu-sirom-ta-tvoroghom-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' },
    { food: 'Кукурудзяні кульки', img: 'https://foodsales.com.ua/storage/img/CrispyCris%20mockup%20CHEESE.png' },
    { food: 'Крекери з авокадо', img: 'https://ist.say7.info/img0007/04/704_0192574_8773_1024.jpg' },
    { food: 'Сирна тарілка', img: 'https://img-global.cpcdn.com/recipes/be8dedc6f8a2245c/680x482cq70/sirna-tarilka-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg' }
    //Ярослав
  ]
};

const recipes = {
  'Омлет з овочами': '1. Візьми два яйця, вбий їх у миску. 2. Збивай яйця віночком або виделкою до однорідної маси. 3. Поріж овочі: помідори, болгарський перець, шпинат. 4. Розігрій сковороду на середньому вогні і додай трошки олії. 5. Вилий яєчну суміш на сковороду. 6. Додай овочі поверх омлету. 7. Смаж 4-5 хвилин, поки омлет не стане злегка золотистим знизу. 8. Переверни омлет і смаж ще 1-2 хвилини до готовності.',
  'Вівсянка з ягодами': '1. Візьми 1 чашку вівсянки і залий її 2 чашками молока (можна використовувати воду або рослинне молоко). 2. Доведи суміш до кипіння, потім знизь вогонь до середнього. 3. Варити вівсянку 5-7 хвилин, помішуючи час від часу. 4. Коли вівсянка стане м’якою, додай мед (1-2 чайні ложки за бажанням) та ягоди (малина, полуниця, чорниця тощо). 5. Перемішай і подавай до столу гарячою.',
  'Сирники з медом': '1. Візьми 300 г сиру (краще використовувати домашній, але можна й магазинний). 2. Додай 1 яйце, 2 столові ложки борошна, 1-2 столові ложки цукру (якщо хочеш солодші). 3. Добре перемішай до однорідної консистенції. 4. Сформуй невеликі кульки або кружечки, обваляй їх у борошні. 5. Розігрій сковороду з олією і обсмаж сирники на середньому вогні з обох боків до золотистої скоринки (приблизно по 3-4 хвилини з кожного боку). 6. Готові сирники виклади на тарілку і полий медом.',
  'Йогурт з горіхами': '1. Візьми 200 г натурального йогурту без добавок. 2. Додай 2-3 столові ложки горіхів (мигдаль, волоські, кешью або суміш різних горіхів). 3. Додай 1-2 чайні ложки меду або кленового сиропу для підсолоджування. 4. Перемішай все до однорідності. 5. Подавай як швидкий і корисний сніданок або перекус.',
  'Смузі з бананом та шпинатом': '1. Візьми 1 стиглий банан, наріж його на шматочки. 2. Поріж 1 чашку свіжого шпинату. 3. Вливай 200 мл кефіру або молока (можна використовувати рослинне молоко). 4. У блендер поклади банан, шпинат і налий рідину. 5. Збивай до отримання однорідної консистенції. 6. Подавай в стаканах, можна додати лід для охолодження.',
  'Тости з авокадо': '1. Підсмаж два шматки хліба (краще брати цільнозерновий). 2. Візьми 1 стиглий авокадо, поріж його навпіл, вийми кісточку і розімни м’якоть в пюре за допомогою вилки. 3. Намаж пюре з авокадо на підсмажені тости. 4. Приправ сіллю, перцем та лимонним соком для смаку. 5. Можна додати додатково помідори або яйце пашот зверху для більш ситного сніданку.',
  'Панкейки з медом': '1. Візьми 1 яйце і збий його з 150 мл молока або води. 2. Додай 150 г борошна, 1 чайну ложку розпушувача, 1 столову ложку цукру. 3. Збивай все до однорідної маси без грудочок. 4. Розігрій сковороду на середньому вогні і змасти її невеликою кількістю масла. 5. Викладай невеликі порції тіста на сковороду, смаж кожен панкейк по 2-3 хвилини з кожного боку до золотистої скоринки. 6. Подавай з медом або ягодами.',
  'Каша з гарбузом': '1. Візьми 1 чашку вівсянки і залий 2 чашками молока або води. 2. Розріж гарбуз і поріж його на кубики. 3. Варіть гарбуз в невеликій кількості води до м’якості, приблизно 10-15 хвилин. 4. Додай варену вівсянку до гарбуза і все добре перемішай. 5. Подавай з медом і додатковими горіхами або ягодами.',
  'Мюслі з молоком': '1. Візьми 1 чашку мюслі (можна купити готове або зробити самостійно, змішавши вівсянку, горіхи, сухофрукти). 2. Залий мюслі 1 чашкою молока (можна використовувати йогурт або рослинне молоко). 3. Дай настоятися протягом 5-10 хвилин. 4. Подавай як швидкий і поживний сніданок.',
  'Чіа пудинг': '1. Візьми 3 столові ложки насіння чіа і залий їх 200 мл молока (рослинного або коров’ячого). 2. Додай 1-2 чайні ложки меду або кленового сиропу. 3. Перемішай і залиш на ніч в холодильнику. 4. Вранці пудинг буде готовий. Подавай з ягодами або фруктами за смаком.',
  'Блінці з ягодами': '1. Візьми 200 мл молока, 2 яйця, 150 г борошна, 1 ст. ложку цукру та дрібку солі. 2. Все добре збий до однорідного тіста. 3. Розігрій сковороду з 1 ч. ложкою олії. 4. Наливай тісто порційно та обсмажуй кожен блінець по 1–2 хв з кожного боку до золотистості. 5. Подай з 100 г свіжих або заморожених ягід та за бажанням полий медом або йогуртом.',
  'Печені яблука з медом': '1. Візьми 4 середні яблука, виріж серцевину. 2. У мисці змішай 2 ст. ложки меду, 50 г подрібнених горіхів, 1 ч. ложку кориці. 3. Наповни яблука начинкою. 4. Виклади на форму для запікання та додай трохи води на дно. 5. Запікай при 180°C 25–30 хвилин. 6. Подавай теплими або охолодженими.',
  'Тости з яйцем і помідорами': '1. Підсмаж 2 шматочки хліба на сухій сковороді або в тостері. 2. Обсмаж 2 яйця на сковороді з 1 ч. ложкою олії до бажаного ступеня готовності. 3. Поріж 1 помідор кружальцями. 4. На кожен тост виклади яйце, помідор, трохи солі та перцю. 5. За бажанням додай зелень або скибочку авокадо.',
  'Кексики з морквою': '1. Натри 150 г моркви. 2. У мисці змішай 2 яйця, 100 г цукру, 80 мл олії, додай моркву. 3. Додай 150 г борошна, 1 ч. ложку розпушувача, дрібку кориці. 4. Перемішай до однорідності. 5. Розклади по формах для мафінів. 6. Випікай при 180°C 20–25 хв. 7. Перевір дерев’яною паличкою – якщо суха, готово.',
  'Вафлі з ягодами': '1. Візьми 2 яйця, 250 мл молока, 200 г борошна, 50 г розтопленого масла, 1 ст. ложку цукру, 1 ч. ложку розпушувача. 2. Все збий до однорідної маси. 3. Налий тісто у вафельницю та випікай 3–5 хвилин. 4. Подай з ягодами (100 г) та за бажанням – з йогуртом або медом.',
  'Тост з лососем та крем-сиром': '1. Підсмаж 2 шматочки цільнозернового хліба. 2. Намаж кожен тост 1 ст. ложкою крем-сиру. 3. Додай по 50 г слабосоленого лосося. 4. За бажанням посип дрібно нарізаним кропом, лимонною цедрою або додай кільця червоної цибулі.',
  'Пудинг з манго': '1. Змішай у мисці 200 мл кокосового молока, 3 ст. ложки насіння чіа, 1 ч. ложку меду. 2. Добре перемішай і залиш у холодильнику на 4 години або на ніч. 3. Перед подачею додай 100 г нарізаного манго зверху. 4. За бажанням – прикрась кокосовою стружкою або м’ятою.',
  'Часникові грінки': '1. Наріж 4 скибки батона. 2. Змішай 2 ст. ложки олії з 1 подрібненим зубчиком часнику. 3. Намаж олію на хліб. 4. Обсмаж грінки на сковороді з обох боків до золотистості або запікай у духовці 7–10 хв при 180°C.',
  'Творожна запіканка': '1. Візьми 400 г сиру, 2 яйця, 2 ст. ложки манки або борошна, 2 ст. ложки цукру, дрібку ваніліну. 2. Все перемішай до однорідності. 3. Перелий масу у форму, змащену маслом. 4. Випікай при 180°C 30–40 хв. 5. Дай трохи охолонути перед подачею. За бажанням – подавай зі сметаною чи ягодами.',
  'Рис з фруктами': '1. Відвари 100 г круглозернистого рису у 300 мл молока або води до м’якості (15–20 хв). 2. Додай 1 ст. ложку цукру або меду, дрібку солі. 3. Наріж 1 банан, 1 яблуко, додай 50 г родзинок або інших фруктів. 4. Перемішай і подавай теплим або охолодженим.',
  'Бургер з яйцем': '1. Підсмаж 1 булочку для бургера. 2. Обсмаж 1 яйце на сковороді. 3. На нижню частину булки виклади лист салату, 1 шматочок сиру, обсмажене яйце, скибочку помідора, бекон (за бажанням). 4. Накрий верхньою булкою. 5. Подай гарячим.',
  'Гречка з овочами': '1. Відвари 100 г гречки у підсоленій воді (200 мл) до готовності, приблизно 15–20 хв. 2. Наріж 1 моркву, 1 болгарський перець та 1 невелику цибулину. 3. Обсмаж овочі на 1 ст. ложці олії 5–7 хв. 4. Додай варену гречку до овочів, перемішай. 5. Посоли, поперчи за смаком. 6. Подавай гарячим, можна з зеленню.',
  'Часникові помідори на хлібі': '1. Наріж 1–2 помідори кружальцями. 2. Підсмаж 2 скибки хліба на сухій сковороді або в тостері. 3. Натри хліб 1 зубчиком часнику. 4. Виклади на хліб помідори, посоли і поперчи. 5. За бажанням – полий 1 ч. ложкою оливкової олії та посип базиліком.',
  'Печені яйця в авокадо': '1. Розріж 1 авокадо навпіл і видали кісточку. 2. Трохи вибери м’якоті, щоб утворилась ямка. 3. Вбий у кожну половинку по 1 маленькому яйцю. 4. Постав у форму та запікай при 190°C 15 хв. 5. Посоли, поперчи, прикрась зеленню або пармезаном.',
  'Гранола з йогуртом': '1. Насип у миску 150 г йогурту без добавок. 2. Додай 3–4 ст. ложки граноли. 3. Наріж половину банана, декілька ягід або інших фруктів. 4. Виклади зверху. 5. За бажанням додай 1 ч. ложку меду або горіхи.',
  'Тортилья з куркою': '1. Наріж 100 г вареної або обсмаженої курки. 2. На тортилью виклади курку, 2–3 скибки авокадо, порізаний помідор, трохи салату. 3. Додай 1 ст. ложку соусу (майонез, йогурт або гуакамоле). 4. Загорни в рулет. 5. Подавай холодною або трохи підігрій на сковороді.',
  'Фриттата з овочами': '1. Наріж 1 маленький кабачок, 1 помідор, 1/2 цибулини. 2. Обсмаж овочі 5 хв на сковороді з 1 ст. ложкою олії. 3. Збий 3 яйця, додай 50 мл молока, сіль, перець. 4. Вилий яєчну суміш до овочів. 5. Готуй на слабкому вогні під кришкою 8–10 хв або запікай в духовці 10 хв при 180°C.',
  'Випічка з чорницею': '1. У мисці змішай 2 яйця, 100 г цукру, 100 мл олії. 2. Додай 200 г борошна, 1 ч. ложку розпушувача. 3. Всип 100 г чорниці, перемішай. 4. Розклади тісто по формах для мафінів. 5. Випікай при 180°C 20–25 хв.',
  'Млинці з медом': '1. Візьми 250 мл молока, 2 яйця, 150 г борошна, дрібку солі. 2. Все збий до однорідного тіста. 3. Обсмаж млинці на змащеній сковороді з обох боків до золотистості. 4. Подавай гарячими, поливши медом (1–2 ч. ложки на порцію).',
  'Овочеві чіпси': '1. Наріж тонкими слайсами 1 буряк, 1 моркву, 1 картоплину. 2. Змішай з 1 ст. ложкою олії, сіллю і спеціями. 3. Виклади на деко. 4. Запікай при 180°C 15–20 хв до хрусткої скоринки. 5. Остуди перед подачею.',
  'Тост з блакитним сиром та грушами': '1. Підсмаж 1–2 скибки хліба. 2. Намаж по 1 ч. ложці меду. 3. Виклади по 2–3 скибочки груші. 4. Додай по 20–30 г блакитного сиру (дорблю). 5. За бажанням – трохи подрібнених горіхів або руколи.',
  'Сирники з ягодами': '1. Змішай 300 г сиру, 1 яйце, 2 ст. ложки цукру, 3 ст. ложки борошна. 2. Сформуй сирники. 3. Обсмаж з обох боків на середньому вогні до золотистості (по 2–3 хв з кожного боку). 4. Подавай з ягодами та сметаною.',
  'Чорничний чіа пудинг': '1. У банці змішай 200 мл молока, 3 ст. ложки чіа, 1 ч. ложку меду. 2. Перемішай і залиш на ніч у холодильнику. 3. Перед подачею додай 100 г чорниці (свіжої або пюре). 4. Можна прикрасити м’ятою або горіхами.',
  'Зелений смузі': '1. У блендері змішай 1 банан, 1 жменю шпинату, 1/2 зеленого яблука, 150 мл води або соку. 2. Додай 1 ч. ложку меду або насіння чіа (за бажанням). 3. Збий до однорідної маси. 4. Подавай одразу.',
  'Бананові млинці': '1. Розімни 1 стиглий банан. 2. Додай 1 яйце, 2 ст. ложки борошна, дрібку кориці. 3. Перемішай до однорідного тіста. 4. Смаж млинці на змащеній сковороді по 1–2 хв з кожного боку. 5. Подавай з медом або ягодами.',
  'Пельмені з сиром': '1. Змішай 200 г сиру, 1 жовток, 1 ч. ложку цукру для начинки. 2. Зроби тісто з 1 яйця, 200 г борошна, 80 мл води. 3. Розкачай, виріж кружечки, виклади начинку і сформуй пельмені. 4. Вари у підсоленій воді 5–6 хв після закипання. 5. Подавай зі сметаною.',
  'Грінки з авокадо та яйцем': '1. Підсмаж 2 скибки хліба. 2. Розімни 1 авокадо з дрібкою солі і соку лимона. 3. Намаж на хліб. 4. Зверху виклади варене яйце (нарізане або ціле). 5. Посип перцем і зеленню.',
  'Яйце бенедикт': '1. Приготуй голландський соус: збий 2 жовтки з 1 ч. ложкою лимонного соку, потім повільно додай 100 г розтопленого масла, постійно збиваючи. Посоли. 2. Підсмаж 2 скибки хліба або булочок. 3. Зроби яйце-пашот: в киплячу воду додай оцет, обережно введи яйце і вари 3 хв. 4. На тост виклади скибку шинки або лосося, потім яйце, зверху полий соусом.',
  'Рисова каша з яблуками': '1. В сотейнику з’єднай 100 г рису і 300 мл молока. Додай дрібку солі, 1 ч. ложку цукру. 2. Вари на слабкому вогні, періодично помішуючи, 20 хвилин. 3. Очисти 1 яблуко, наріж кубиками. 4. Додай яблуко за 5 хв до готовності, можна додати корицю або родзинки. 5. Подавай теплою, за бажанням – з медом або вершками.',
  'Печена курка з овочами': '1. Візьми 2 курячі стегенця або грудки. Натри сіллю, перцем, паприкою. 2. Наріж 2 картоплини, 1 моркву, 1 цибулину, 1 перець. 3. Виклади все у форму для запікання, збризни олією. 4. Запікай при 190°C 40–45 хв, періодично поливаючи соком з форми. 5. Подавай зі свіжою зеленню.',
  'Гречка з грибами': '1. Відвари 100 г гречки у підсоленій воді. 2. Наріж 150 г грибів (печериці), 1 цибулину. 3. Обсмаж цибулю до прозорості, додай гриби, готуй 10 хв до випарування рідини. 4. Змішай з гречкою, приправ сіллю, перцем. 5. Можна додати трохи вершкового масла перед подачею.',
  'Яйце, бекон та тости': '1. Обсмаж 2–3 скибки бекону до хрусткої скоринки. 2. Підсмаж 2 скибки хліба на сухій сковороді або в тостері. 3. Приготуй яйце (смажене, варене або пашот). 4. Виклади все на тарілку, посоли, поперчи. 5. За бажанням – додай скибку авокадо чи кетчуп.',
  'Молочний коктейль': '1. У блендері з’єднай 200 мл холодного молока, 1 морозиво (100 г), 1 банан або 2 ч. ложки какао/варення. 2. Збий до однорідності. 3. Перелий у склянку, прикрась збитими вершками або тертим шоколадом.',
  'Яйце-пашот з авокадо': '1. Зроби пашот: в киплячу воду додай 1 ч. ложку оцту, влий яйце та вари 2–3 хв. 2. Розімни авокадо з сіллю та лимонним соком. 3. Підсмаж скибку хліба. 4. Намаж авокадо, зверху виклади яйце. 5. Посип перцем, зеленню, насінням (за бажанням).',
  'Тушковані овочі': '1. Наріж 1 кабачок, 1 моркву, 1 баклажан, 1 перець, 1 цибулину. 2. Обсмаж спочатку цибулю, потім додай решту овочів. 3. Тушкуй під кришкою 20 хв, періодично помішуючи. 4. Додай сіль, перець, зелень, можна трохи томатної пасти.',
  'Фрукти з медом': '1. Наріж яблуко, банан, грушу або ягоди. 2. Виклади в тарілку. 3. Полий 1–2 ч. ложками меду. 4. За бажанням – додай грецькі горіхи або йогурт.',
  'Тост з яйцем та авокадо': '1. Підсмаж скибку хліба. 2. Намаж розім’яте авокадо, додай лимонний сік, сіль. 3. Приготуй яйце (смажене або пашот). 4. Виклади на авокадо. 5. Посип перцем і мікрозеленью.',
  'Шакшука': '1. Наріж 1 цибулю, 1 перець, обсмаж у сковороді. 2. Додай 2 помідори, трохи томатної пасти, спеції (паприка, кмин). 3. Тушкуй 10 хв. 4. Зроби заглиблення і обережно вбий 2–3 яйця. 5. Готуй під кришкою до бажаного стану яєць. Посип зеленню.',
  'Тортилья з яйцем та овочами': '1. Обсмаж 1 яйце. 2. Наріж помідор, огірок, листя салату. 3. Розігрій тортилью, виклади овочі, яйце. 4. Додай соус або тертий сир. 5. Загорни і подавай гарячим або холодним.',
  'Бананові фріттати': '1. Розімни 1 стиглий банан, додай 2 яйця, 1 ст. ложку вівсянки. 2. Перемішай до однорідної маси. 3. Смаж на невеликій кількості олії маленькими порціями по 2–3 хв з кожного боку. 4. Подавай з медом або йогуртом.',
  'Пудинг з рисом': '1. Відвари 100 г рису в молоці (300 мл) з дрібкою солі та цукру. 2. Додай 1 жовток, 1 ч. ложку ванільного цукру. 3. Переклади в форму, зверху посип корицею. 4. Запікай при 180°C 10–15 хв. 5. Подавай з ягодами.',
  'Млинці з шоколадом': '1. Змішай 2 яйця, 250 мл молока, 150 г борошна, 1 ч. ложку цукру. 2. Смаж млинці на змащеній сковороді. 3. Виклади по 1 ч. ложці шоколадної пасти або тертого шоколаду, загорни. 4. Подавай теплими.',
  'Кокосові батончики': '1. Змішай 100 г кокосової стружки, 50 г меду, 2 ст. ложки вершкового масла. 2. Додай 1–2 ст. ложки згущеного молока. 3. Сформуй батончики, постав у морозильник на 20 хв. 4. За бажанням – вмочи у розтоплений шоколад.',
  'Грінки з бананом': '1. Підсмаж скибки хліба. 2. Намаж арахісову пасту або масло. 3. Наріж банан, виклади зверху. 4. Полий медом або посип корицею.',
  'Сендвіч з тунцем': '1. Змішай 100 г консервованого тунця з 1 ч. ложкою майонезу, сіллю, перцем. 2. Наріж листя салату, помідор. 3. На скибку хліба виклади тунець, овочі. 4. Накрий іншою скибкою. 5. За бажанням – підсмаж у грилі.',
  'Бургер з індичкою': '1. Зроби котлету з 150 г фаршу індички, сіллю, перцем. 2. Обсмаж до готовності. 3. Підсмаж булочку, виклади салат, котлету, скибку помідора, соус. 4. Накрий верхньою частиною булки. 5. Подавай гарячим.',
  'Яйце на грилі з беконом': '1. Обсмаж бекон до хрусткої скоринки. 2. На змащеній сковороді гриль зроби яйце (сонечко). 3. Подавай на грінці з беконом, можна додати авокадо чи соус.',
  'Тост з чорним шоколадом': '1. Підсмаж хліб. 2. Намаж розтоплений чорний шоколад або поклади шматки плитки. 3. За бажанням – посип горіхами чи морською сіллю.',
  'Гречка з медом': '1. Відвари 100 г гречки. 2. Додай 1–2 ч. ложки меду. 3. Перемішай. 4. Подавай теплою з ягодами або фруктами.',
  'Рисові кульки': '1. Відвари 100 г рису. 2. Додай тертий сир, сіль, яйце. 3. Сформуй кульки. 4. Обваляй у сухарях і смаж до золотистості. 5. Подавай з соусом.',
  
  'Куряче філе з гречкою': '1. Відвари 1 чашку гречки: промий її, залий 2 чашками води, доведи до кипіння і варіть 10-12 хвилин. 2. Куряче філе натри сіллю, перцем та улюбленими спеціями. 3. Обсмаж курку на сковороді з обох боків до золотистої скоринки (приблизно 5-7 хвилин з кожного боку). 4. Подавай курку разом з готовою гречкою, прикрасивши зеленню або овочами.',
  'Суп-пюре з броколі': '1. Відвари 300 г броколі і 1 моркву в киплячій воді до м’якості (приблизно 15 хвилин). 2. Після того, як овочі стануть м’якими, зливай воду і переклади їх в блендер. 3. Додай 100 мл вершків або молока, сіль, перець і подрібни до пюре. 4. Якщо потрібно, розбав суп водою до бажаної консистенції. 5. Подавай гарячим з зеленню або сухариками.',
  'Плов з індичкою': '1. Обсмаж 1 цибулю і 1 моркву на олії до золотистої скоринки. 2. Додай 300 г нарізаної індички, обсмаж ще 5-7 хвилин. 3. Додай 1 чашку рису і 2 чашки води. 4. Додай сіль, перець, зірочки гвоздики та лавровий лист. 5. Тушкуй на маленькому вогні під кришкою 20-25 хвилин, поки рис не вбере всю воду.',
  'Салат з тунцем': '1. Візьми 1 банку тунця в олії або воді, злийте рідину. 2. Змішай тунець з нарізаними вареними яйцями, салатом та кукурудзою (по 1/2 чашки кожного інгредієнта). 3. Заправ салат оливковою олією і сіллю. 4. Подавай як легкий обід або вечерю.',
  'Бургер з яловичиною та булкою': '1. Зроби котлети з 300 г яловичого фаршу. Посоли, поперчи і сформуй котлети. 2. Обсмаж котлети на сковороді або грилі до бажаної готовності (приблизно 4-5 хвилин з кожного боку). 3. Підсмаж булки на сковороді. 4. Виклади котлету на булку, додай салат, помідори і соус за смаком. 5. Подавай з картоплею фрі або салатом.',
  'Кабачки з куркою': '1. Наріж 1 кабачок на кубики. 2. Обсмаж на сковороді з олією до м’якості. 3. Наріж 200 г курячого філе кубиками, посоли та поперчи. 4. Обсмаж курку на окремій сковороді до золотистої скоринки. 5. Змішай кабачки і курку, додаючи часник, зелень та спеції за смаком. Подавай гарячим.',
  'Лазанья з овочами': '1. Відвари 8 листків лазаньї. 2. Наріж 1 цукіні, 1 баклажан і 1 помідор на маленькі шматочки. 3. Обсмаж овочі на сковороді до м’якості. 4. Зроби соус: змішай томатну пасту, сіль, перець і базилік. 5. На форму виклади шари: соус, лазанья, овочі, повторюй, поки не закінчаться інгредієнти. Завершити соусом і натертим сиром. Запікай 30 хвилин при 180°C.',
  'Шашлик з індички': '1. Наріж 500 г індички на кубики. 2. Замаринуй м’ясо в суміші з олії, лимонного соку, часнику, солі та перцю на 2 години. 3. Нанизай м’ясо на шампури і обсмаж на мангалі або грилі до готовності (приблизно 10-15 хвилин). Подавай з овочами або соусом.',
  'Картопля з м’ясом': '1. Наріж 300 г свинини або яловичини на шматки. 2. Обсмаж м’ясо на сковороді до золотистої скоринки. 3. Додай до м’яса 3 картоплини, нарізані кубиками. 4. Залий воду, додай сіль, перець і спеції за смаком. Тушкуй до м’якості картоплі (приблизно 20-25 хвилин). Подавай гарячим.',
  'Гречка з овочами': '1. Відвари 1 чашку гречки. 2. Наріж 1 моркву, 1 цибулю і 1 болгарський перець. 3. Обсмаж овочі на сковороді до м’якості. 4. Змішай готову гречку з овочами, додай сіль, перець і зелень. Подавай гарячим.',
  'Рис з овочами та куркою': '1. Відвари 100 г довгозернистого рису у 200 мл підсоленої води до готовності (10–12 хвилин). 2. Наріж 200 г курячого філе кубиками, обсмаж на 1 ст.л. олії до золотистої скоринки (приблизно 7 хв). 3. Додай 100 г моркви, 50 г броколі та 50 г болгарського перцю (все нарізане) і тушкуй 5–7 хвилин. 4. Додай 1–2 ст.л. соєвого соусу, варений рис, перемішай і прогрій ще 2 хвилини. Подавай гарячим.',
  'Салат «Цезар» з куркою': '1. Обсмаж або запечи 150 г курячого філе з сіллю та перцем. 2. Наріж 100 г салату романо або айсберг, 5–6 помідорів чері, 30 г пармезану тонкими скибками. 3. Додай 30 г сухариків (краще домашніх). 4. Приготуй соус: змішай 2 ст.л. майонезу, 1 ч.л. гірчиці, 1 ч.л. лимонного соку, 1 зубчик часнику. 5. Змішай інгредієнти з соусом, виклади на тарілку і прикрась пармезаном.',
  'Філе індички з кускусом': '1. Кускус — 100 г, залий 150 мл окропу, накрий і залиш на 5 хв. 2. Наріж 200 г філе індички, замаринуй в 1 ч.л. оливкової олії, соку лимона, сіллі та перці. 3. Обсмаж філе 7–8 хвилин до готовності. 4. Змішай кускус з філе, додай 30 г зелені (петрушка, кінза), 1 ч.л. оливкової олії. Подавай гарячим або теплим.',
  'Курячі нагетси з салатом': '1. Наріж 200 г курячого філе смужками, посоли і поперчи. 2. Вмочи в збите яйце, обваляй у 50 г панірувальних сухарів. 3. Обсмаж на сковороді у 2 ст.л. олії до рум’яної скоринки (5–6 хв). 4. Приготуй салат з 100 г салатного міксу, 1 огірка, 5 помідорів чері. 5. Подавай нагетси з салатом і соусом (йогурт+гірчиця).',
  'Бурий рис з овочами': '1. Відвари 100 г бурого рису у 300 мл води до м’якості (30–35 хв). 2. Обсмаж 1 ст.л. олії 100 г моркви, 50 г броколі, 50 г кукурудзи. 3. Додай варений рис, 1 ст.л. соєвого соусу, сіль, перець. 4. Прогрій 2–3 хвилини на сковороді та подавай гарячим.',
  'Суп з фрикадельками': '1. Змішай 250 г фаршу (яловичого або курячого), 1 яйце, 1/4 натертої цибулі, сіль. Сформуй 12–15 фрикадельок. 2. У каструлі закип’яти 1,5 л води, додай 200 г картоплі, 100 г моркви, 50 г цибулі. 3. Через 5 хвилин обережно додай фрикадельки. Вари ще 10–12 хв. 4. Додай зелень і подавай гарячим.',
  'Овочеве рагу': '1. Наріж 200 г картоплі, 100 г моркви, 100 г кабачків, 50 г цибулі, 50 г перцю. 2. Обсмаж на 1 ст.л. олії цибулю, потім додай овочі. 3. Влий 100 мл води або томатного соку. 4. Накрий кришкою і тушкуй 25 хвилин. Додай зелень і спеції перед подачею.',
  'Картопляне пюре з тефтелями': '1. Звари 300 г картоплі, розімни з 30 г вершкового масла і 50 мл молока. 2. Зроби тефтелі з 300 г фаршу, 1 яйця, 30 г цибулі. 3. Обсмаж їх на сковороді, потім додай 100 мл води, накрий і тушкуй 15 хв. 4. Подавай з пюре і свіжою зеленню.',
  'Фаршировані перці': '1. Болгарський перець — 3 шт., обріж кришечки і видали насіння. 2. Начинка: 200 г фаршу + 100 г вареного рису + 30 г цибулі + спеції. 3. Наповни перці начинкою, виклади в каструлю, залий 200 мл томатного соку з водою 1:1. 4. Тушкуй 35–40 хвилин під кришкою на слабкому вогні.',
  'Паста з томатним соусом і куркою': '1. Відвари 150 г пасти у підсоленій воді. 2. Наріж 150 г курячого філе, обсмаж з 50 г цибулі. 3. Додай 150 мл томатного соусу, тушкуй 10 хв. 4. Додай пасту, перемішай, прогрій. Подавай з 20 г тертого сиру.',
  'Запіканка з макаронів': '1. Відвари 150 г макаронів. 2. Змішай з 100 г фаршу, 50 г смаженої цибулі, 100 мл вершків. 3. Виклади в форму, посип 50 г сиру. 4. Запікай 20 хв при 180°C.',
  'Тост з авокадо і куркою': '1. Підсмаж 2 скибки хліба. 2. Розімни половинку авокадо з 1 ч.л. лимонного соку. 3. Додай 100 г вареного або обсмаженого курячого філе, кілька шматочків помідора, сіль, перець. 4. Виклади на тости та подавай одразу.',
  'Бульйон з домашньою локшиною': '1. Вари 1 л курячого бульйону з 1 морквою, 1 цибулею, сіллю. 2. Додай 50–70 г локшини, вари ще 7 хв. 3. Прикрась петрушкою або кропом. Подавай гарячим.',
  'Фалафель з хумусом': '1. Замочи 150 г нуту на ніч. Зблендеруй з 30 г цибулі, 2 зубчиками часнику, зеленню, сіллю. 2. Сформуй кульки, обсмаж у великій кількості олії. 3. Подавай з 100 г хумусу та салатом або в лаваші.',
  'Запечена картопля з грибами': '1. Наріж 300 г картоплі та 150 г печериць. 2. Змішай з 2 ст.л. олії, 1 ч.л. спецій, виклади у форму. 3. Запікай 30 хв при 180°C. 4. Подавай зі сметаною або зеленню.',
  'Печінка по-домашньому з цибулею': '1. Замочи 300 г курячої печінки в молоці на 30 хв. 2. Наріж і обсмаж 100 г цибулі до м’якості. 3. Додай печінку, обсмаж 10–12 хв до готовності. 4. Посоли, поперчи, подавай з гарніром (пюре або каша).',
  'Котлети з гарніром': '1. Для котлет змішай 500 г фаршу (яловичого або свинячого), 1 яйце, 1 цибулю, сіль і перець за смаком. 2. Сформуй котлети і обсмаж їх на олії з обох боків до золотистої скоринки (по 5-7 хвилин з кожного боку). 3. Для гарніру відвари 300 г картоплі, розімни з 30 г масла і 50 мл молока до пюре. Подавай котлети з пюре та зеленню.',
  'Гречані оладки з овочами': '1. Зварити 100 г гречки до готовності. 2. Нарізати 50 г моркви та 50 г кабачків, обсмажити на 1 ст.л. олії до м’якості. 3. Змішай гречку з овочами, додай 1 яйце, 2 ст.л. борошна, сіль і перець. 4. Сформуй оладки і обсмаж їх на олії до золотистої скоринки з обох боків (по 3–4 хвилини з кожного боку). Подавай з сметаною або соусом.',
  'Суп харчо': '1. Відварити 300 г яловичини на кістці в 2 л води до готовності (1,5–2 години). 2. Додати 1 цибулю, 1 моркву, 100 г рису, 2 помідори, нарізані кубиками. 3. Варити ще 30 хвилин. 4. Додати 1 ч.л. аджики, сіль, перець, зелень, варити ще 10 хвилин. Подавай гарячим з кінзою.',
  'Рибні котлети з пюре': '1. Для котлет змішай 500 г філе риби (наприклад, тріски або лосося), 1 яйце, 2 ст.л. манної крупи, сіль і перець. 2. Сформуй котлети і обсмаж їх на олії з обох боків до золотистої скоринки (по 4–5 хвилин з кожного боку). 3. Для пюре відвари 300 г картоплі, розімни з 30 г масла і 50 мл молока. Подавай котлети з пюре.',
  'Паста з вершковим соусом та грибами': '1. Відвари 150 г пасти. 2. Обсмаж 100 г грибів (шампіньйонів або білих) з 1 цибулею на 1 ст.л. олії до м’якості. 3. Додай 100 мл вершків, сіль і перець, варити 5 хвилин. 4. Змішай пасту з соусом, прогрій 2 хвилини. Подавай з тертим пармезаном.',
  'Соте з індички': '1. Наріж 400 г філе індички смужками. 2. Обсмаж на 1 ст.л. олії до золотистої скоринки. 3. Додай 1 нарізану цибулю, 1 моркву, 100 г броколі, сіль, перець і тушкуй ще 10–12 хвилин. 4. Подавай гарячим з гарніром.',
  'Овочеві голубці': '1. Приготуй начинку: змішай 200 г відвареного рису, 100 г моркви, 50 г цибулі, сіль, перець. 2. Обдай 8-10 листків капусти окропом, наповни їх начинкою і загорни в рулетики. 3. Поклади голубці в каструлю, залий томатним соусом і тушкуй 30–35 хвилин. Подавай з зеленню.',
  'Салат з буряком і фетою': '1. Відвари 2 середніх буряка до готовності (40 хвилин), охлади, почисть та наріж кубиками. 2. Додай 100 г фети, 30 г волоських горіхів, 2 ст.л. оливкової олії. 3. Заправ сіллю, перцем, лимонним соком. Подавай охолодженим.',
  'Курячі рулетики з сиром': '1. Наріж 4 курячі філе навпіл, відбий молоточком до товщини 1 см. 2. У середину кожного філе поклади 1-2 скибки сиру (моцарела або твердий), згорни в рулетик. 3. Обсмаж на олії до золотистої скоринки (по 5 хвилин з кожного боку). Подавай гарячими.',
  'Суп з сочевиці': '1. Відвари 200 г червоної сочевиці в 1,5 л води до м’якості (20 хвилин). 2. Додай 1 цибулю, 1 моркву, 2 помідори, нарізані кубиками. 3. Варити ще 15 хвилин. 4. Додай сіль, перець, спеції за смаком. Подавай з зеленню.',
  'Печена кукурудза з сиром': '1. Відварити 4 качани кукурудзи до готовності (10–12 хвилин). 2. Викласти кукурудзу на деко, посипати 100 г тертого сиру, полити оливковою олією. 3. Запікати 10 хвилин при 180°C до золотистої скоринки. Подавай гарячою.',
  'Рисова запіканка з овочами': '1. Відвари 100 г рису. 2. Наріж 100 г моркви, 100 г броколі та 1 цибулю, обсмаж на 1 ст.л. олії. 3. Змішай рис з овочами, додай 100 г сиру, 2 яйця, сіль і перець. 4. Випікай в розігрітій духовці при 180°C 20 хвилин. Подавай гарячим.',
  'Курка в соусі теріякі з рисом': '1. Наріж 400 г курячого філе кубиками, обсмаж на олії до готовності. 2. Додай 50 мл соусу теріякі і тушкуй 5 хвилин. 3. Відвари 100 г рису. 4. Подавай курку з рисом, прикрась зеленню.',
  'Картопляні деруни зі сметаною': '1. Натри 4 картоплини на дрібній тертці, додай 1 яйце, 2 ст.л. борошна, сіль і перець. 2. Сформуй деруни і обсмаж на олії до золотистої скоринки з обох боків (по 3–4 хвилини з кожного боку). 3. Подавай з сметаною.',
  'Гречка з підливою': '1. Відвари 100 г гречки до готовності. 2. Для підливи обсмаж 1 цибулю до золотистої скоринки, додай 100 г сметани, 100 мл води, сіль і перець. 3. Прокип’ятити підливу 5 хвилин. 4. Подавай гречку з підливою.',
  'Філе лосося на грилі з овочами': '1. Посоли і поперчи 2 філе лосося. 2. Обсмаж на грилі 4–5 хвилин з кожного боку. 3. Наріж овочі (перець, баклажан, цукіні) і обсмаж їх на грилі. 4. Подавай лосось з овочами гарячим.',
  'Салат з кус-кусом та овочами': '1. Відвари 100 г кус-кусу згідно з інструкцією на упаковці. 2. Наріж 1 помідор, 1 огірок, 1/2 червоної цибулі, 1/2 перцю та 30 г оливок. 3. Змішай всі інгредієнти з готовим кус-кусом. 4. Заправ сіллю, перцем, оливковою олією та лимонним соком. Подавай охолодженим.',
  'Овочеві млинці з куркою': '1. Змішай 100 г тертої моркви, 100 г тертого кабачка, 2 ст.л. борошна, 1 яйце, сіль і перець. 2. Обсмаж млинці на сковороді до золотистої скоринки з обох боків. 3. Для начинки обсмаж 200 г курячого філе до готовності, наріж його смужками. 4. Подавай млинці з куркою, поливши соусом.',
  'Суп з кабачком і рисом': '1. Наріж 1 кабачок і 1 картоплю кубиками, обсмаж на олії до м’якості. 2. Додай 1 л води та 100 г рису, варіть до готовності рису. 3. Додай сіль, перець, за бажанням – зелень. Подавай гарячим.',
  'Гуляш зі свинини з картоплею': '1. Наріж 500 г свинини кубиками, обсмаж на олії до золотистої скоринки. 2. Додай 1 цибулю, 1 моркву, 2 картоплини, нарізані кубиками. 3. Залий 1,5 л води, додай сіль, перець, лавровий лист і варіть на малому вогні 1 годину. Подавай гарячим.',
  'Пельмені зі сметаною': '1. Відварити 500 г пельменів у киплячій воді до готовності (5-7 хвилин). 2. Подавати пельмені зі сметаною і посипати зеленою цибулею.',
  'Паста з куркою та шпинатом': '1. Відвари 150 г пасти. 2. Обсмаж 200 г курячого філе на олії до золотистої скоринки. 3. Додай 100 г шпинату, тушкуй 2 хвилини. 4. Додай 100 мл вершків, сіль, перець, з’єднай з пастою, прогрій 2 хвилини. Подавай з пармезаном.',
  'Овочевий салат з моцарелою': '1. Наріж 1 огірок, 1 помідор, 1/2 червоної цибулі. 2. Додай 100 г моцарели, розрізаної на кубики, 30 г оливок. 3. Заправ сіллю, перцем, оливковою олією та лимонним соком. Подавай охолодженим.',
  'Картопля фрі з курячими крильцями': '1. Наріж 3 картоплини смужками, обсмаж на олії до золотистої скоринки. 2. Курячі крильця замаринувати в соєвому соусі, меді, часнику та спеції, обсмажити до готовності. Подавай разом.',
  'Буріто з яловичиною': '1. Обсмаж 300 г яловичини, додай 1 нарізану цибулю, 1 помідор, спеції за смаком (кмин, чилі, сіль, перець). 2. Загорни в тортилью з листям салату, сиром, гуакамоле та сметаною. Подавай гарячим.',
  'Курячі стегенця з рисом': '1. Курячі стегенця посолити, поперчити, обсмажити на олії до золотистої скоринки. 2. Відварити 200 г рису. 3. Подавай стегенця з рисом, поливши соусом з тушкування курки.',
  'Салат з печеним буряком та горіхами': '1. Відвари 2 буряки, охлади, очисть та наріж кубиками. 2. Додай 30 г волоських горіхів, 50 г фети, 2 ст.л. оливкової олії. 3. Заправ сіллю, перцем, лимонним соком. Подавай охолодженим.',
  'Курка карі з рисом': '1. Обсмаж 500 г курячого філе до золотистої скоринки. 2. Додай 1 цибулю, 2 ст.л. карі-пасти, 100 мл кокосового молока. 3. Варіть на малому вогні 15 хвилин. 4. Відвари 100 г рису і подавай з карі куркою.',
  'Омлет з овочами та сиром': '1. Обсмаж 100 г нарізаних овочів (помідор, перець, шпинат) на олії до м’якості. 2. Збий 2 яйця з сіллю і перцем, вилий на овочі. 3. Додай 50 г тертого сиру і готуй омлет на малому вогні 5-7 хвилин. Подавай гарячим.',
  'Тост з яйцем пашот та авокадо': '1. Підсмаж 2 скибки хліба. 2. Приготуй яйця пашот (по 2-3 хвилини в окропі з оцтом). 3. На тости виклади нарізане авокадо, яйце пашот, посоли і поперчи. Подавай гарячим.',
  'Котлета по-київськи з пюре': '1. Куряче філе розріж на 2 частини, відбий молоточком, посоли, поперчи. 2. У середину поклади 50 г масла з часником і зеленню. 3. Обваляй у борошні, яйці та панірувальних сухарях, обсмаж у гарячій олії до золотистої скоринки. 4. Подавай з картопляним пюре.',


  'Запечена риба з овочами': '1. Візьми 300 г риби (лосось або тріска). 2. Посоли рибу, поперчи і змасти оливковою олією. 3. Наріж овочі: картоплю, цукіні, помідори, болгарський перець. 4. Поклади рибу і овочі на деко, посипати спеціями та запікати 25-30 хвилин при 180°C.',
  'Гречані котлети': '1. Відвари 1 чашку гречки. 2. Змішай її з 100 г тертого сиру, 1 яйцем, сіллю і перцем. 3. Сформуй котлети і обсмаж на сковороді до золотистої скоринки (приблизно 4-5 хвилин з кожного боку). Подавай з соусом або салатом.',
  'Салат з куркою і авокадо': '1. Наріж 200 г курячого філе та обсмаж його на сковороді до готовності. 2. Наріж 1 авокадо, 1 помідор і кілька листочків салату. 3. Змішай все в мисці, додай сіль, перець та оливкову олію. Подавай гарячим.',
  'Тушковані овочі з кіноа': '1. Відвари 1 чашку кіноа. 2. Наріж 1 моркву, 1 цукіні і 1 помідор. 3. Обсмаж овочі на сковороді, додаючи сіль, перець і спеції. 4. Змішай овочі з готовим кіноа, додавай зелень за смаком. Подавай гарячим.',
  'Сирники з яблуками': '1. Зроби тісто для сирників: змішай 300 г сиру, 1 яйце, 1 столову ложку цукру і 2-3 столові ложки борошна. 2. Додай нарізане яблуко. 3. Сформуй невеликі кульки або кружечки і обсмаж на сковороді з обох боків до золотистої скоринки. Подавай з медом або варенням.',
  'Запечений баклажан з сиром': '1. Наріж баклажан на колечка товщиною 1 см. 2. Посоли їх і залиш на 10 хвилин, щоб вийшла гіркота. 3. Після цього обмий баклажани, виклади їх на деко, посип тертим сиром і запікай 20-25 хвилин при 180°C.',
  'Курячі стегенця в духовці': '1. Натри 4 курячі стегенця сіллю, перцем та спеціями. 2. Виклади їх на деко і запікай при 180°C 30-40 хвилин, поки курка не стане золотистою та хрусткою.',
  'Печені овочі з куркою': '1. Наріж 1 куряче філе і 1 кабачок на шматочки. 2. Виклади овочі та курку на деко, додай часник, олію, сіль та перець. 3. Запікай все в духовці при 180°C протягом 25-30 хвилин.',
  'Тушкована телятина': '1. Наріж 500 г телятини на шматки. 2. Обсмаж м’ясо на сковороді до золотистої скоринки. 3. Додай цибулю, моркву, сіль, перець і спеції. 4. Тушкуй все на маленькому вогні протягом 1 години до м’якості м’яса.',
  'Рис з овочами і яйцем': '1. Відвари 1 чашку рису. 2. Обсмаж 1 моркву та 1 цибулю. 3. Додай до овочів 2 збиті яйця і готуй до їх готовності. 4. Змішай готовий рис з овочами та яйцем, додавай сіль, перець і спеції. Подавай гарячим.',
  'Запечена риба з овочами': '1. Візьми філе риби (наприклад, судак або лосось) – 500 г. 2. Поріж овочі: кабачок, перець, моркву, цибулю. 3. Виклади рибу у форму для запікання, посоли, поперчи, додай спеції (лимонний сік, розмарин). 4. Додай порізані овочі зверху або навколо риби. 5. Полий все оливковою олією. 6. Запікай у духовці при 180°C 25-30 хвилин. 7. Подавай гарячим зі свіжою зеленню.',
  'Гречані котлети': '1. Відвари 1 склянку гречки до готовності. 2. Подрібни 1 цибулину та обсмаж її на сковороді. 3. Змішай гречку, смажену цибулю, одне яйце та 2 ст. л. борошна. 4. Сформуй котлетки. 5. Обсмаж з обох боків до золотистої скоринки на середньому вогні. 6. Подавай з овочами або соусом за смаком.',
  'Салат з куркою і авокадо': '1. Відвари або обсмаж куряче філе (200 г) і поріж кубиками. 2. Наріж 1 авокадо, 1 помідор та кілька листків салату. 3. Змішай всі інгредієнти в мисці. 4. Додай сік половини лимона, сіль, перець, 1 ст. л. оливкової олії. 5. Добре перемішай. 6. Подавай охолодженим або кімнатної температури.',
  'Тушковані овочі з кіноа': '1. Відвари 1 склянку кіноа згідно інструкції. 2. Наріж овочі: цукіні, перець, моркву, броколі. 3. На пательні обсмаж цибулю та часник до м’якості. 4. Додай овочі, трішки води або овочевого бульйону, тушкуй 10-15 хвилин. 5. Приправ сіллю, перцем, спеціями за смаком. 6. Додай готову кіноа до овочів, перемішай. 7. Подавай гарячим.',
  'Сирники з яблуками': '1. Візьми 400 г домашнього сиру, 1 яйце, 2 ст. л. цукру, дрібку солі. 2. Додай 2-3 ст. л. борошна і натерте яблуко. 3. Перемішай все до однорідності. 4. Сформуй невеликі сирнички. 5. Обваляй їх у борошні. 6. Обсмаж на середньому вогні з двох боків до золотистої скоринки. 7. Подавай з медом або сметаною.',
  'Запечений баклажан з сиром': '1. Наріж баклажан кружечками, посоли і залиш на 15 хвилин, щоб прибрати гіркоту. 2. Промий і обсуши. 3. Виклади на деко, змащене олією. 4. Посип тертим сиром і улюбленими спеціями. 5. Запікай при 190°C 20-25 хвилин. 6. Подавай гарячим як закуску або гарнір.',
  'Курячі стегенця в духовці': '1. Візьми 4 курячі стегенця. 2. Замаринуй їх у суміші з оливкової олії, часнику, солі, перцю, паприки та трав (на 30 хв або більше). 3. Виклади у форму для запікання. 4. Запікай при 200°C приблизно 40-45 хвилин до рум’яної скоринки. 5. Подавай з гарніром за смаком.',
  'Печені овочі з куркою': '1. Наріж куряче філе або стегенця шматочками. 2. Наріж овочі: картоплю, моркву, броколі, кабачок. 3. Виклади усе у форму для запікання. 4. Посоли, поперчи, додай спеції і трохи олії. 5. Перемішай. 6. Запікай при 190°C 40-50 хвилин, періодично перемішуючи. 7. Подавай гарячим.',
  'Тушкована телятина': '1. Наріж телятину шматочками (500 г). 2. Обсмаж на пательні до рум’яної скоринки. 3. Додай подрібнену цибулю, моркву, часник. 4. Залий гарячою водою або бульйоном, додай лавровий лист, спеції. 5. Тушкуй під кришкою на малому вогні 1-1,5 години. 6. Подавай з гарніром.',
  'Рис з овочами і яйцем': '1. Відвари 1 склянку рису. 2. На сковороді обсмаж моркву, перець, горошок, кукурудзу. 3. Додай рис до овочів. 4. Вбий 2 яйця прямо на сковороду. 5. Перемішуй усе до готовності яйця. 6. Приправ сіллю, соєвим соусом за бажанням. 7. Подавай гарячим.',
  'Лосось на грилі з овочами': '1. Замаринуй стейки лосося в олії, лимонному соці, часнику, сіллю, перці. 2. Поріж овочі (перець, цукіні, баклажан). 3. Обсмаж лосося і овочі на грилі або гриль-сковороді по 4-5 хвилин з кожного боку. 4. Подавай разом, посипавши зеленню.',
  'Куряча грудка в вершковому соусі': '1. Розріж курячу грудку навпіл уздовж. 2. Обсмаж з обох боків до рум’яності. 3. Вийми м’ясо, в тій же сковороді обсмаж подрібнений часник. 4. Додай 200 мл вершків, сіль, перець. 5. Поверни курку в сковороду, тушкуй 10 хвилин на слабкому вогні. 6. Подавай з макаронами або овочами.',
  'Овочеве рагу з картоплею': '1. Наріж картоплю, моркву, капусту, цибулю, перець. 2. Обсмаж цибулю, моркву. 3. Додай інші овочі, залий водою або бульйоном. 4. Тушкуй під кришкою 30-40 хвилин. 5. Приправ сіллю, перцем, зеленню. 6. Подавай гарячим.',
  'Стейк з яловичини з соусом': '1. Обери якісний шматок яловичини (рибай, тендерлоїн). 2. Посоли, поперчи, залиш при кімнатній температурі 20 хв. 3. Розігрій сковороду до максимуму. 4. Смаж по 2-4 хвилини з кожного боку залежно від бажаного прожарювання. 5. Зроби соус: на тій самій сковороді обсмаж часник, додай вершки або вино, перець, гірчицю, прогрій. 6. Полий стейк соусом і подавай.',
  'Печені кабачки з сиром': '1. Наріж кабачки кружечками або скибками. 2. Посоли, поперчи, додай улюблені спеції. 3. Виклади на деко, застелене пергаментом. 4. Посип тертим твердим сиром. 5. Запікай у духовці при 190°C 20-25 хвилин до рум’яної скоринки. 6. Подавай теплими або охолодженими як закуску.',
  'Тефтелі в томатному соусі': '1. Змішай фарш (свинина/яловичина) з цибулею, яйцем, сіллю, перцем і трохи панірувальних сухарів. 2. Сформуй тефтелі. 3. Обсмаж їх до рум’яної скоринки. 4. Приготуй соус: обсмаж цибулю, додай томатну пасту, трохи води, сіль, цукор, спеції. 5. Влий соус до тефтель і тушкуй 20-25 хвилин. 6. Подавай з гарніром.',
  'Паста Болоньєзе': '1. Відвари пасту (спагеті або пенне) до готовності. 2. Обсмаж фарш із цибулею та морквою. 3. Додай томати (паста або свіжі), спеції, сіль, перець. 4. Тушкуй соус 15-20 хвилин. 5. Перемішай з пастою або подай зверху. 6. Посип тертим сиром.',
  'Картопляна запіканка з грибами': '1. Наріж картоплю тонкими скибками, гриби пластинками, цибулю півкільцями. 2. У змащену форму викладай шарами: картопля, гриби з цибулею, сіль, перець, повтори. 3. Залий сумішшю з вершків і яйця. 4. Запікай при 180°C близько 45 хвилин. 5. Посип сиром за 10 хв до кінця. 6. Подавай гарячою.',
  'Суп з куркою та локшиною': '1. Відвари курку на кістці до готовності, дістань, розбери на шматочки. 2. Додай у бульйон порізану моркву, цибулю, картоплю. 3. Через 10 хвилин – домашню або магазинну локшину. 4. Варити до готовності локшини. 5. Поверни курку. 6. Приправ сіллю, зеленню. 7. Подавай гарячим.',
  'Філе міньйон з пюре': '1. Обери якісне яловиче філе, загорни його ниткою. 2. Обсмаж по 2-3 хв з кожного боку на сильному вогні. 3. Доведи до готовності в духовці при 180°C ще 7-10 хв. 4. Для пюре: відвари картоплю, додай масло, молоко, збий. 5. Подавай філе на пюре, можна з соусом.',
  'Картопля з оселедцем': '1. Відвари молоду або звичайну картоплю в мундирі, остуди, почисть. 2. Наріж шматочками. 3. Наріж філе оселедця, червону цибулю півкільцями. 4. Все виклади на тарілку. 5. Полий олією, додай зелень. 6. Подавай як закуску або основну страву.',
  'М’ясна лазанья': '1. Приготуй соус Болоньєзе з фаршу та томатів. 2. Окремо зроби соус бешамель: розтопи масло, додай борошно, молоко, сіль, мускатний горіх. 3. У форму викладай шарами: листи лазаньї, м’ясний соус, бешамель, тертий сир. 4. Повтори кілька разів. 5. Запікай при 180°C 40 хвилин. 6. Дай постояти 10 хв перед подачею.',
  'Курячі рулетики з сиром': '1. Розріж куряче філе вздовж, відбий. 2. Посоли, поклади всередину скибку сиру, можна шинку або зелень. 3. Згорни рулетики, закріпи зубочистками. 4. Обсмаж до рум’яної скоринки, потім тушкуй або запікай 15 хв. 5. Подавай з гарніром.',
  'Гречка з тушкованою печінкою': '1. Відвари гречку. 2. Печінку промий, наріж шматочками, обсмаж до рум’яності. 3. Додай цибулю, моркву, обсмаж разом. 4. Додай трішки води, сіль, перець. 5. Тушкуй під кришкою 20 хв. 6. Подавай з гречкою.',
  'Печені овочі з нутом': '1. Наріж овочі (морква, цукіні, перець, броколі). 2. Додай консервований або відварений нут. 3. Змішай з олією, сіллю, спеціями. 4. Виклади на деко, запікай при 200°C 25-30 хв. 5. Подавай як гарнір або самостійну страву.',
  'Суп з сочевиці': '1. Обсмаж цибулю, моркву, часник. 2. Додай промиту червону сочевицю (1 склянку), 1,5 л води або бульйону. 3. Варити 20-25 хв до м’якості. 4. Приправ сіллю, перцем, додай лимонного соку. 5. Можна збити блендером або залишити шматочками. 6. Подавай з грінками.',
  'Гуляш з яловичини': '1. Наріж яловичину шматками. 2. Обсмаж м’ясо до рум’яності. 3. Додай цибулю, часник, томатну пасту, спеції (паприка, лавровий лист). 4. Залий водою або бульйоном. 5. Тушкуй під кришкою 1,5 години до м’якості. 6. Подавай з гарніром.',
  'Морська риба запечена з лимоном': '1. Очисти рибу (дорадо, тріску або іншу), зроби надрізи. 2. Посоли, поперчи, вклади лимонні скибки, зелень. 3. Збризни олією, загорни у фольгу. 4. Запікай при 180°C 25-30 хв. 5. Подавай гарячою зі свіжими овочами.',
  'Печінка з цибулею': '1. Наріж печінку скибками, замочи в молоці на 30 хв. 2. Обсуши, обваляй у борошні. 3. Обсмаж з обох боків 3-4 хв. 4. Окремо обсмаж цибулю кільцями до золотистості. 5. Змішай з печінкою, приправ сіллю, перцем. 6. Подавай з картоплею.',
  'Соте з баклажанів': '1. Наріж баклажани кубиками, посоли, залиш на 20 хв, потім промий. 2. Обсмаж на сковороді до м’якості. 3. Додай нарізані помідори, перець, часник. 4. Тушкуй 15-20 хв, додай зелень, спеції. 5. Подавай теплим або холодним.',
  'Кус-кус з овочами': '1. Залий кус-кус гарячою водою або бульйоном 1:1,5, накрий і залиш на 10 хв. 2. Тим часом обсмаж овочі: болгарський перець, моркву, кабачок, цибулю. 3. Змішай овочі з кус-кусом, додай оливкову олію, сіль, перець, зелень. 4. Подавай теплим або як салат.',
  'Індичка в духовці з розмарином': '1. Замаринуй індичку з часником, розмарином, лимонним соком, сіллю та перцем мінімум на 2 год. 2. Поклади в жаростійку форму, полий олією. 3. Запікай при 180°C приблизно 1,5–2 год залежно від розміру. 4. Поливай соком під час запікання. 5. Подавай з гарніром.',
  'Рагу з куркою та квасолею': '1. Обсмаж курку шматочками до золотистої скоринки. 2. Додай моркву, цибулю, перець, обсмаж ще кілька хвилин. 3. Додай консервовану або варену білу квасолю. 4. Влий томатний сік або пасту, приправ. 5. Тушкуй під кришкою 30 хвилин. 6. Подавай гарячим.',
  'Печені шампіньйони з сиром': '1. Вийми ніжки з великих грибів. 2. Змішай ніжки з тертим сиром, часником і зеленню. 3. Наповни капелюшки начинкою. 4. Виклади на деко, запікай при 180°C 20 хв. 5. Подавай гарячими як закуску.',
  'Крем-суп з грибів': '1. Обсмаж шампіньйони з цибулею до м’якості. 2. Додай трохи борошна, обсмаж, потім влий бульйон. 3. Вари 15 хв, додай вершки, сіль, перець. 4. Перебий блендером до кремової консистенції. 5. Подавай з сухариками.',
  'Тушкована капуста з ковбасками': '1. Наріж капусту, ковбаски кружечками, цибулю півкільцями. 2. Обсмаж ковбаски, додай цибулю, потім капусту. 3. Приправ сіллю, перцем, томатною пастою, додай трохи води. 4. Тушкуй під кришкою 40 хв, помішуючи. 5. Подавай гарячою.',
  'Плов з морквою та куркою': '1. Обсмаж курку кубиками до рум’яної скоринки. 2. Додай цибулю, моркву соломкою, обсмаж. 3. Висип промитий рис, залий водою 1:2. 4. Додай спеції для плову, сіль. 5. Готуй під кришкою на повільному вогні до готовності рису. 6. Залиш настоятись 10 хв.',
  'Овочевий крем-суп з вершками': '1. Обсмаж цибулю, моркву, картоплю, цвітну капусту. 2. Додай воду або бульйон, вари до м’якості. 3. Перебий блендером до однорідної маси. 4. Додай вершки, сіль, перець. 5. Подавай з грінками або зеленню.',
  'М’ясо по-французьки': '1. Наріж м’ясо скибками, відбий, посоли, поперчи. 2. Виклади у форму, зверху цибулю, майонез, сир. 3. За бажанням – картоплю кружечками під низ. 4. Запікай при 180°C 40 хв. 5. Подавай гарячим.',
  'Філе судака з овочами': '1. Наріж овочі (кабачок, морква, перець), виклади на дно форми. 2. Поклади філе судака зверху, приправ, полий лимонним соком. 3. Загорни у фольгу. 4. Запікай при 180°C 25 хв. 5. Подавай з зеленню.',
  'Салат з кіноа та овочами': '1. Відвари кіноа згідно інструкції. 2. Наріж огірки, помідори, перець, зелень. 3. Додай відварену кіноа. 4. Заправ оливковою олією, лимонним соком, сіллю. 5. Перемішай і подавай охолодженим.',
  'Фрикадельки з рисом у соусі': '1. Змішай фарш, варений рис, цибулю, яйце, спеції. 2. Сформуй кульки, обсмаж. 3. Зроби томатно-сметанний соус, залий фрикадельки. 4. Тушкуй 20 хв. 5. Подавай з гарніром.',
  'Смажений тофу з овочами': '1. Наріж тофу кубиками, обсмаж до рум’яної скоринки. 2. Окремо обсмаж овочі (броколі, морква, болгарський перець). 3. Додай соєвий соус, імбир, часник. 4. З’єднай з тофу, прогрій. 5. Подавай з рисом або самостійно.',
  'Котлети з індички з гречкою': '1. Змішай фарш з індички, варену гречку, цибулю, яйце, спеції. 2. Сформуй котлети. 3. Обсмаж до рум’яної скоринки. 4. Можна допекти в духовці ще 10 хв при 180°C. 5. Подавай з овочами.',
  'Смажена картопля з грибами': '1. Наріж картоплю соломкою, гриби пластинками. 2. Обсмаж картоплю до напівготовності. 3. Додай гриби, цибулю. 4. Приправ сіллю, перцем. 5. Смаж до золотистої скоринки. 6. Подавай гарячим.',
  'Бургер з куркою та овочами': '1. Зроби курячу котлету (фарш з цибулею, сіллю, спеціями), обсмаж. 2. Підготуй булочки, розріж і підсуши. 3. На нижню половинку виклади лист салату, котлету, помідор, огірок, соус. 4. Накрий верхньою частиною. 5. Подавай теплим.',
  'Каша з печінкою та морквою': '1. Відвари будь-яку кашу (пшоно, гречку, рис). 2. Окремо обсмаж печінку, додай цибулю, моркву. 3. Тушкуй до м’якості. 4. Змішай з кашею. 5. Приправ сіллю, перцем. 6. Подавай гарячою.',
  'Риба з овочами на пару': '1. Наріж овочі (броколі, моркву, кабачки) крупними шматками. 2. Посоли, приправ і виклади у пароварку разом з філе риби. 3. Готуй на пару 15–20 хв. 4. Перед подачею полий лимонним соком, посип зеленню.',
  'Картопляне пюре з м’ясними тюфтельками': '1. Зроби пюре: відвари картоплю, додай масло, молоко, розтовчи до однорідності. 2. Для тюфтельок: змішай фарш, цибулю, яйце, спеції, сформуй кульки. 3. Обсмаж і тушкуй у вершковому чи томатному соусі 20 хв. 4. Подавай з пюре, полив соусом.',
  'Мідії у вершковому соусі': '1. Промий мідії, перевір, щоб були закриті. 2. Обсмаж часник у вершковому маслі, додай біле вино, потім мідії. 3. Готуй під кришкою 5–7 хв, поки не відкриються. 4. Додай вершки, приправи. 5. Подай з хлібом або пастою.',
  'Овочі гриль з соєвим соусом': '1. Наріж овочі: баклажани, кабачки, перець, шампіньйони. 2. Замаринуй у соєвому соусі з часником і олією. 3. Обсмаж на грилі або сковороді-гриль по 3–4 хв з кожного боку. 4. Подавай теплими з кунжутом чи зеленню.',
  'Паста з морепродуктами': '1. Відвари спагеті або тальятеле до al dente. 2. Обсмаж часник, додай морепродукти (кальмари, креветки, мідії), готуй 3–5 хв. 3. Влий вершки або біле вино, приправ. 4. Додай пасту, перемішай. 5. Подавай з петрушкою.',
  'Котлета з картоплею та зеленню': '1. Приготуй м’ясну котлету з фаршу, цибулі, спецій, обсмаж до готовності. 2. Відвари або запеки картоплю, посип зеленню. 3. Подай котлету з гарніром, додай соус до смаку.',
  'Соте з морепродуктів': '1. Обсмаж часник, цибулю, перець. 2. Додай суміш морепродуктів, тушкуй 5–7 хв. 3. Влий томатний сік або біле вино, додай спеції. 4. Тушкуй ще 10 хв. 5. Подавай гарячим з рисом або багетом.',
  'Печені курячі стегенця з гірчицею': '1. Замаринуй стегенця в гірчиці, часнику, соєвому соусі, спеціях на 1–2 год. 2. Виклади у форму, полий залишками маринаду. 3. Запікай при 200°C 35–40 хв до рум’яності. 4. Подавай з овочами або картоплею.',

  'Банан і арахісова паста': '1. Наріж 1 банан на шматочки. 2. Намаж кожен шматочок банана арахісовою пастою. 3. Подавай як швидкий і корисний перекус.',
  'Фруктовий салат': '1. Наріж 1 яблуко, 1 банан, 1 апельсин і кілька ягід. 2. Перемішай всі інгредієнти в мисці. 3. Подавай як легкий і здоровий перекус.',
  'Горіхи та сухофрукти': '1. Змішай 1/4 чашки горіхів (мигдаль, кешью, волоські) з 1/4 чашки сухофруктів (родзинки, курага, фініки). 2. Подавай як корисний перекус.',
  'Протеїновий батончик': '1. Візьми готовий протеїновий батончик або зроби свій, змішавши вівсянку, мед, протеїн і горіхи. 2. Запечи в духовці або охлади в холодильнику. Подавай як перекус.',
  'Кефір з медом': '1. Візьми 1 чашку кефіру. 2. Додай 1 чайну ложку меду і перемішай до розчинення меду. Подавай як легкий і корисний перекус.',
  'Йогурт з медом і ягодами': '1. Візьми 200 г натурального йогурту. 2. Додай 1-2 чайні ложки меду і перемішай. 3. Додай ягоди за смаком (полуниця, малина, чорниця). Подавай як легкий перекус.',
  'Авокадо з томатами': '1. Наріж 1 авокадо і 1 помідор на кубики. 2. Змішай їх, додай сіль, перець та оливкову олію. Подавай як легкий і смачний перекус.',
  'Сир з медом': '1. Візьми 100 г сиру (можна використовувати бринзу або інший м’який сир). 2. Полий сир медом і подавай.',
  'Морквяні чіпси': '1. Наріж 2 моркви тонкими скибочками. 2. Виклади на деко, змасти олією і запікай при 180°C 15-20 хвилин до хрусткої консистенції.',
  'Гуакамоле з чипсами': '1. Наріж 1 авокадо і розімни його в пюре. 2. Додай сік 1 лимона, сіль, перець та подрібнений часник. 3. Подавай з кукурудзяними чипсами.',
  'Банан і арахісова паста': '1. Очисти 1 банан (150 г), наріж. 2. Додай 1 ст. л. (20 г) арахісової пасти зверху або як дип. Ідеально до чаю чи на перекус.',
  'Фруктовий салат': '1. Наріж яблуко (100 г), банан (100 г), ківі (50 г), апельсин (100 г). 2. Змішай і при бажанні додай 1 ч. л. меду або йогурт.',
  'Горіхи та сухофрукти': '1. Змішай волоські горіхи (20 г), мигдаль (20 г), родзинки (20 г), курагу (20 г). Ідеальна енергетична закуска (80–100 г загалом).',
  'Протеїновий батончик': '1. Візьми готовий батончик вагою 50 г. Гарний варіант на бігу або після тренування.',
  'Кефір з медом': '1. Налий у склянку 200 мл кефіру. 2. Додай 1 ч. л. (7 г) меду, перемішай. Можна охолодити перед подачею.',
  'Йогурт з медом і ягодами': '1. Візьми 150 г натурального йогурту. 2. Додай 1 ч. л. меду (7 г) і жменю ягід (50 г).',
  'Авокадо з томатами': '1. Наріж ½ авокадо (100 г) і 1–2 томати (150 г). 2. Додай щіпку солі, перцю, трохи оливкової олії. Подай як салат.',
  'Сир з медом': '1. Візьми 100 г м’якого сиру (творог або рікотта). 2. Полий 1 ч. л. меду (7 г), можна додати трохи горіхів.',
  'Морквяні чіпси': '1. Наріж моркву (150 г) тонкими слайсами, збризни олією. 2. Запікай при 160°C ~30 хв до хрусту. Посоли, додай спеції.',
  'Гуакамоле з чипсами': '1. Розімни 1 авокадо (150 г), додай сіль, лимонний сік, подрібнений часник. 2. Подавай з 30 г кукурудзяних чипсів.',
  'Йогурт з ягодами': '1. 150 г грецького йогурту + 50–70 г свіжих або заморожених ягід (чорниця, малина).',
  'Батончик мюслі': '1. Готовий батончик вагою 40–50 г. Ідеально для перекусу в дорозі.',
  'Гранола з молоком': '1. Насип 50 г граноли, залий 150 мл молока (рослинне або коров’яче). Можна додати трохи меду чи фруктів.',
  'Фрукти нарізані (яблуко, банан, груша)': '1. Наріж по 1 шт. яблука (100 г), банана (100 г), груші (100 г). Можна збризнути лимонним соком.',
  'Овочеві палички з хумусом': '1. Наріж моркву, селеру, огірок (загалом ~150 г). 2. Подай з 2 ст. л. хумусу (30 г).',
  'Грецький йогурт з медом і горіхами': '1. Візьми 150 г грецького йогурту, додай 1 ч. л. меду (7 г) і 1 ст. л. подрібнених горіхів (15–20 г).',
  'Сирники без цукру': '1. Змішай 200 г сиру, 1 яйце, 1 ст. л. манки. 2. Сформуй, обсмаж без цукру. Подавай зі сметаною або фруктами.',
  'Рисові хлібці з арахісовою пастою': '1. Візьми 2 рисові хлібці (по ~10 г), намаж по 1 ч. л. пасти на кожен (всього ~20 г пасти).',
  'Смузі з бананом та шпинатом': '1. Збий 1 банан (100 г), жменю шпинату (50 г), 150 мл води або молока, за бажанням — трохи меду.',
  'Сир твердий з виноградом': '1. Наріж 50 г сиру (типу гауда) + додай 100 г винограду. Контраст ідеальний!',
  'Бутерброд з авокадо': '1. Підсуши тост, намаш ½ авокадо (100 г), додай сіль, лимонний сік, можна яйце чи насіння.',
  'Тости з арахісовим маслом': '1. Підсуши 1–2 скибки хліба (50 г), намаш 1–2 ч. л. арахісової пасти (20–25 г).',
  'Круасани з сиром': '1. Підігрій круасан (60 г), розріж і додай 1–2 скибки сиру (30–40 г). Можна на сніданок.',
  'Сир моцарела з томатами': '1. Наріж 100 г моцарели і 1 великий томат (150 г), посоли, додай базилік, збризни оливковою олією.',
  'Оладки з кабачків': '1. Натрій 1 середній кабачок (300 г) на тертці. 2. Додай 1 яйце, 2 ст.л. борошна, сіль і перець за смаком. 3. Добре перемішай усе до однорідної маси. 4. Розігрій сковороду з невеликою кількістю олії. 5. Викладай ложкою тісто, формуючи оладки. 6. Смаж з обох боків по 2-3 хвилини до золотистої скоринки.',
  'Печене яблуко з корицею': '1. Візьми 1 велике яблуко, виріж серцевину. 2. Всередину поклади 1 ч.л. меду та 0.5 ч.л. кориці. 3. За бажанням додай кілька родзинок або горішків. 4. Запікай у духовці при 180°C приблизно 20 хвилин до м’якості.',
  'Горіхова суміш': '1. Змішай 20 г волоських горіхів, 20 г мигдалю, 30 г фініків або родзинок. 2. Можеш додати насіння гарбуза чи соняшника за бажанням. 3. Зберігай у герметичному контейнері. 4. Ідеально як перекус або до йогурту.',
  'Кукурудзяні чіпси з сальсою': '1. Візьми готові кукурудзяні чіпси (30-40 г). 2. Для сальси наріж дрібно 1 помідор, 1/4 цибулі, зелень, 0.5 перцю чилі. 3. Додай сік половини лайма або лимона, трохи солі. 4. Добре перемішай і подавай разом з чіпсами.',
  'Домашні енергетичні кульки': '1. Візьми 100 г фініків, 50 г вівсяних пластівців, 2 ст.л. арахісової пасти, 1 ст.л. какао. 2. Збий все в блендері до густої маси. 3. Сформуй кульки руками. 4. За бажанням обкачай у кокосовій стружці. 5. Постав у холодильник на 30 хвилин.',
  'Запечене насіння гарбуза': '1. Візьми 100 г сирого насіння гарбуза. 2. Додай 1 ч.л. оливкової олії, сіль і спеції за смаком (наприклад, паприка або часник). 3. Добре перемішай. 4. Розклади на деко і запікай при 160°C 15-20 хвилин, поки не стане хрумким.',
  'Фруктові чіпси (яблучні)': '1. Наріж яблуко дуже тонкими скибками (без серцевини). 2. Виклади на деко з пергаментом. 3. Посип легко корицею. 4. Суши в духовці при 100°C 1.5–2 години до хрусткого стану. 5. Дай охолонути.',
  'Пудинг з чіа': '1. Змішай 3 ст.л. насіння чіа з 1 склянкою рослинного або коров’ячого молока. 2. Додай 1 ч.л. меду або кленового сиропу. 3. Перемішай і залиш на 10 хв, потім знову перемішай. 4. Постав у холодильник мінімум на 4 години (краще на ніч). 5. Подавай з ягодами або фруктами.',
  'Палички з сиру сулугуні': '1. Наріж 100 г сулугуні смужками. 2. Обваляй у борошні, потім у збитому яйці, далі в сухарях. 3. Обсмаж на сковороді до золотистої скоринки або запікай при 180°C 10-12 хвилин.',
  'Бананові панкейки': '1. Розімни 1 стиглий банан. 2. Додай 1 яйце та 2 ст.л. вівсяних пластівців. 3. Добре перемішай. 4. Смаж на змащеній сковороді по 1-2 хв з кожного боку на середньому вогні.',
  'Мафіни з ягодами': '1. Розігрій духовку до 180°C. 2. У великій мисці змішай 200 г борошна, 1 ч.л. розпушувача, 1/2 ч.л. соди, 1/2 ч.л. кориці та дрібку солі. 3. В іншій мисці збий 1 яйце, додай 100 г цукру, 120 мл молока та 100 г розтопленого масла. 4. Додай сухі інгредієнти до рідких та перемішай до однорідної маси. 5. Додай 100 г ягід (чорниця, малина) і обережно перемішай. 6. Виклади тісто у формочки для мафінів і випікай 18-20 хвилин.',
  'Печиво з вівсянкою': '1. Розігрій духовку до 180°C. 2. У мисці змішай 100 г вівсянки, 100 г борошна, 1/2 ч.л. соди та дрібку солі. 3. Додай 100 г масла, 75 г цукру і 1 яйце. 4. Добре перемішай, додай 50 г родзинок або шоколадних чіпсів. 5. Виклади тісто ложкою на деко і випікай 10-12 хвилин.',
  'Омлет з овочами': '1. Візьми два яйця, вбий їх у миску. 2. Збивай яйця віночком або виделкою до однорідної маси. 3. Поріж овочі: помідори, болгарський перець, шпинат. 4. Розігрій сковороду на середньому вогні і додай трошки олії. 5. Вилий яєчну суміш на сковороду. 6. Додай овочі поверх омлету. 7. Смаж 4-5 хвилин, поки омлет не стане злегка золотистим знизу. 8. Переверни омлет і смаж ще 1-2 хвилини до готовності.',
  'Крекери з сиром': '1. Змішай 200 г борошна, 100 г сиру (пармезан або інший твердий сир), 1/2 ч.л. солі і 100 г масла. 2. Замісити тісто і залишити його на 30 хвилин у холодильнику. 3. Розкатай тісто в тонкий шар і наріж на квадратики або смужки. 4. Виклади на деко і випікай при 180°C 15-20 хвилин.',
  'Морквяні палички з соусом': '1. Очисти 2 морквини і наріж їх на палички. 2. Для соусу змішай 2 ст.л. майонезу, 1 ст.л. гірчиці і 1 ч.л. меду. 3. Подавай морквяні палички з соусом як легкий перекус.',
  'Печені нутові кульки': '1. Змішай 400 г консервованого нуту, 1/2 цибулі, 2 зубчики часнику, 1 ч.л. куміну та 1/2 ч.л. коріандру. 2. Подрібни все в блендері до однорідної маси. 3. Сформуй кульки та обваляй їх у борошні. 4. Обсмаж на олії або запікай при 180°C 20 хвилин.',
  'Тости з тунцем': '1. Візьми 2 шматочки хліба і підсмаж їх. 2. Змішай 1 консерву тунця з 1 ст.л. майонезу, 1/2 ч.л. гірчиці, сіллю і перцем за смаком. 3. Нанеси суміш тунця на підсмажений хліб і подавай.',
  'Фруктовий салат': '1. Наріж різні фрукти (яблука, банан, апельсин, виноград) на шматочки. 2. Перемішай їх в мисці і додай 1 ст.л. меду. 3. Подавай охолодженим.',
  'Сушені фрукти (курага, родзинки)': '1. Візьми курагу і родзинки. 2. Залиш їх на кілька годин на сонці або в сушарці для фруктів. 3. Зберігай у герметичному контейнері.',
  'Яєчний рол з сиром': '1. Вбий 2 яйця в миску і збий їх. 2. Розігрій сковороду, додай трохи масла і вилий яєчну суміш. 3. Коли омлет буде готовий, посип його тертим сиром (пармезан або моцарелла). 4. Скачай омлет в рол і подавай.',
  'Міні-сендвічі з шинкою': '1. Візьми кілька маленьких шматочків хліба. 2. На кожен шматочок поклади по кілька скибок шинки і листочок салату. 3. Склей сендвічі за допомогою зубочисток і подавай.',
  'Вафлі з фруктами': '1. Приготуй вафельне тісто (яйце, борошно, молоко, масло). 2. Спечи вафлі за допомогою вафельниці. 3. Подавай вафлі з ягодами або іншими фруктами.',
  'Сирна запіканка': '1. Змішай 500 г сиру, 2 яйця, 4 ст.л. цукру, 1 ч.л. ванільного цукру і 3 ст.л. манної крупи. 2. Вилий суміш у форму і запікай при 180°C 40-45 хвилин.',
  'Йогуртове морозиво': '1. Змішай 500 мл йогурту, 2 ст.л. меду та 1 ч.л. ванільного екстракту. 2. Перелий суміш у контейнер і постав у морозильник на 4 години. 3. Подавай, декоруючи свіжими ягодами.',
  'Хліб з оливковою пастою': '1. Приготуй хлібне тісто і випікай хліб. 2. Для пасти змішай оливки, каперси, оливкову олію і часник у блендері. 3. Подавати хліб з оливковою пастою як закуску.',
  'Міні-лаваші з зеленню': '1. Приготуй тісто для лаваша (борошно, вода, олія). 2. Тонко розкатай і випікай лаваші на сковороді. 3. Подавай зі свіжою зеленню (петрушка, кінза, базилік).',
  'Кукурудзяні кульки': '1. Змішай 200 г кукурудзяного борошна, 1 яйце, 100 мл молока, сіль і перець. 2. Сформуй кульки і обсмаж їх на олії до золотистої скоринки. 3. Подавай з соусом.',
  'Крекери з авокадо': '1. Розітри 1 авокадо в пюре. 2. Додай 1 ст.л. лимонного соку, сіль, перець за смаком. 3. Намаж пасту на крекери і подавай.',
  'Сирна тарілка': '1. Виклади на тарілку різні види сиру (брі, чеддер, моцарелла). 2. Додай трохи меду, горішків та фруктів (виноград, яблука). 3. Подавай до вина або як закуску.',
};


function calculateCalories() {
  const gender = document.getElementById('gender').value;
  const age = +document.getElementById('age').value;
  const height = +document.getElementById('height').value;
  const weight = +document.getElementById('weight').value;
  const activity = +document.getElementById('activity').value;
  const goal = document.getElementById('goal').value;

  if (!age || !height || !weight) return alert("Будь ласка, заповни всі поля!");

  let bmr = (gender === 'male')
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  let calories = bmr * activity;
  if (goal === 'lose') calories -= 300;
  else if (goal === 'gain') calories += 300;

  showMeals(calories);
  startGame();
}
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function showMeals(calories) {
  const results = document.getElementById('results');
  document.getElementById('form').style.display = 'none';
  results.innerHTML = `<h2>🔢 Твоя норма: ${Math.round(calories)} ккал</h2>`;

  const meals = [
    { name: '🍳 Сніданок', kcal: calories * 0.3, ...getRandomItem(mealOptions.breakfast) },
    { name: '🥗 Обід', kcal: calories * 0.4, ...getRandomItem(mealOptions.lunch) },
    { name: '🍲 Вечеря', kcal: calories * 0.25, ...getRandomItem(mealOptions.dinner) },
    { name: '🍎 Перекус', kcal: calories * 0.05, ...getRandomItem(mealOptions.snack) },
  ];

  meals.forEach((meal, index) => {
    const mealType = ['breakfast', 'lunch', 'dinner', 'snack'][index];
  
    results.innerHTML += `
      <div class="meal" id="${mealType}">
        <img src="${meal.img}" alt="${meal.food}" />
        <div class="meal-text">
          <strong>${meal.name}:</strong> ${meal.food} <br/>
          🔥 ${Math.round(meal.kcal)} ккал<br/>
          <button onclick="alert('📋 Рецепт: ${recipes[meal.food] || 'Невідомо'}')">📖 Рецепт</button>
          <button onclick="replaceMeal('${mealType}', ${Math.round(meal.kcal)})">🔁 Змінити</button>
        </div>
      </div>
    `;
  });  
}
function startGame() {
  document.getElementById('game').classList.remove('hidden');
  const quiz = document.getElementById('quiz');
  const food = getRandomItem(mealOptions.lunch);
  const correct = Math.floor(Math.random() * 200) + 250;
  const options = [
    correct,
    correct + 100,
    correct - 50,
    correct + 200
  ].sort(() => Math.random() - 0.5);

  quiz.innerHTML = `
    <img src="${food.img}" width="100%" style="border-radius: 12px; margin-bottom: 10px;">
    <p>Скільки калорій у "${food.food}"?</p>
    ${options.map(opt => `<button class="btn" onclick="checkAnswer(${opt}, ${correct})">${opt} ккал</button>`).join('<br><br>')}
  `;
}
function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert('✅ Правильно!');
  } else {
    alert(`❌ Неправильно! Правильна відповідь: ${correct} ккал`);
  }
}
document.querySelectorAll('.age-int, .height-int, .weight-int').forEach(input => {
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.blur();
    }
  });
});
let currentMealType = '';
let currentMealKcal = 0;
function replaceMeal(mealType, kcal) {
  currentMealType = mealType;
  currentMealKcal = kcal;

  const options = mealOptions[mealType];
  const optionsList = document.getElementById('mealOptionsList');

  optionsList.innerHTML = options.map(item => `
    <div class="food-card" onclick="selectMeal('${mealType}', '${item.food}', '${item.img}', ${kcal}); closeMealPopup();">
      <img src="${item.img}" alt="${item.food}" />
      <span>${item.food}</span>
    </div>
  `).join('');

  openMealPopup();
}
function openMealPopup() {
  document.getElementById('mealPopup').classList.remove('is-hidden');
}
function closeMealPopup() {
  document.getElementById('mealPopup').classList.add('is-hidden');
}
function selectMeal(mealType, food, img, kcal) {
  const mealContainer = document.getElementById(mealType);
  mealContainer.innerHTML = `
    <img src="${img}" alt="${food}" />
    <div class="meal-text">
      <strong>${mealType === 'breakfast' ? '🍳 Сніданок' :
                mealType === 'lunch' ? '🥗 Обід' :
                mealType === 'dinner' ? '🍲 Вечеря' : '🍎 Перекус'}:</strong> ${food} <br/>
      🔥 ${kcal} ккал<br/>
      <button onclick="alert('📋 Рецепт: ${recipes[food] || 'Невідомо'}')">📖 Рецепт</button>
      <button onclick="replaceMeal('${mealType}', ${kcal})">🔁 Змінити</button>
    </div>
  `;
}
document.getElementById('playGameBtn').addEventListener('click', () => {
  const food = getRandomItem(mealOptions.lunch); 
  const correct = Math.floor(Math.random() * 200) + 250;
  const options = [
    correct,
    correct + 100,
    correct - 50,
    correct + 200
  ].sort(() => Math.random() - 0.5);

  const gameHTML = `
    <img src="${food.img}" alt="${food.food}" style="width:100%; border-radius: 12px; margin-bottom: 10px;">
    <h3>Скільки калорій у "${food.food}"?</h3>
    ${options.map(opt => `<button class="btn" onclick="checkAnswer(${opt}, ${correct})">${opt} ккал</button>`).join('<br><br>')}
    <div id="gameControls" style="margin-top: 20px;"></div>
    <button class="btn danger" onclick="closeGameModal()">❌ Закрити</button>
  `;

  document.getElementById('gameContent').innerHTML = gameHTML;
  document.getElementById('gameModal').classList.add('show');

});
function checkAnswer(selected, correct) {
  const controls = document.getElementById('gameControls');
  if (selected === correct) {
    alert('✅ Правильно!');
  } else {
    alert(`❌ Неправильно! Правильна відповідь: ${correct} ккал`);
  }
  controls.innerHTML = `
    <button class="btn" onclick="document.getElementById('playGameBtn').click()">🔁 Продовжити</button>
  `;
}
function closeGameModal() {
  const modal = document.getElementById('gameModal');
  modal.classList.remove('show');
  modal.classList.add('is-hidden');
}

