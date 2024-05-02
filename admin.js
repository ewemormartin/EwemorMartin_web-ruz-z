import { ADATLISTA } from "./adatok.js";
import { tablazatLetrehoz, tablazatMegjelenit } from "./adminFuggvenyek.js";



tablazatMegjelenit(tablazatLetrehoz(ADATLISTA))
