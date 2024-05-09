Készíts "webáruházat" tetszőleges témában. 

Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

Az adatokat jelenítsd meg egy táblázatban!
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!
++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 


PUBLIKUS FELÜLET 
A publikus felületen div-ekben jelenítsük meg az adatokat. (az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!







Amilyen függvéneyket használok:
    kartyaLetrehoz():
          Létrehoz egy kártya divet az ADATLISTA minden elemeiből (kép, termékNev,ar) és eltárolja egy txt változóba.

    listaMegjelenit():
          Megjeleniti az index html-ben a "tartalom" class-al rendelkező divben a txt változót amit a kartyaLetrehoz ad visszatérési értékként

    
    Kosarba():
          a tartalom class-al rendelkező divben adott kártya "kosarbaRak" id-val rendelkező gombra kattintunk akkor megjelenití az aside-ban a "kosarTartalom"-ra elnevezett div-ben az árat és a nevét   
          a terméknek amit a korárba akarunk rakni.

    kosarTorles():
          Azokat a kártya termékeket amiket a kosárTartalomba raktunk kattintásra eltávolítja onnan.

    osszegSzamol():
            Kiszamolja az osszeget a kosar listában lévő $ar osszegekből és vissza ad egy osszeg változót
    osszegMegjelenit():
            Megjeleniti a #kosarOsszeg id-val rendelkező elembe az "osszeg" változót
    arSzerintSorrend():
    nevSzerintSorrend():
    
        
