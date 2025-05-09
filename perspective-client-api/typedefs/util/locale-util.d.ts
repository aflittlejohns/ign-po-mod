/// <reference types="numeral" />
import { Moment } from 'moment-timezone';
import { Locale, LocaleSpecification } from "moment";
/**
 * A singleton service to wrap the implementation of NumeralJS' application of locales.  Needed so we have control
 * over the local codes that are used to register the rules against. The shorthand (2 digit) codes are used to match
 * as closely as possible to the Locale java class, and the BCP 47 (5 digit) codes are included because they are
 * commonly used as well.
 */
export declare class NumeralLocaleService {
    private static singletonInstance;
    private numeral;
    private locale;
    private constructor();
    static get(numeral: Numeral): NumeralLocaleService;
    setLocale(localeCode: string): void;
    getLocale(): string | undefined;
    localeDataExists(): boolean;
    private registerBulgarianLocale;
    private registerChineseLocale;
    private registerCzechLocale;
    private registerDanishLocale;
    private registerGermanLocale;
    private registerSwitzerlandLocale;
    private registerAustralianLocale;
    private registerUSALocale;
    private registerUnitedKingdomLocale;
    private registerSouthAfricanLocale;
    private registerSpanishLocale;
    private registerSpainLocale;
    private registerEstonianLocale;
    private registerFinnishLocale;
    private registerFrenchLocale;
    private registerFrenchCanadianLocale;
    private registerFrenchCHLocale;
    private registerHungarianLocale;
    private registerItalianLocale;
    private registerJapaneseLocale;
    private registerLatvianLocale;
    private registerDutchLocale;
    private registerDutchBelgiumLocale;
    private registerNorwegianLocale;
    private registerPolishLocale;
    private registerPortugueseLocale;
    private registerPortugueseBrazilLocale;
    private registerUkranianLocale;
    private registerUkranianUkraineLocale;
    private registerRussianLocale;
    private registerSlovakianLocale;
    private registerSlovenianLocale;
    private registerSwedishLocale;
    private registerThaiLocale;
    private registerTurkishLocale;
    private registerVietnameseLocale;
}
/**
 * A singleton service to wrap the implementation of MomentJS' application of locales.  This is needed for the same
 * reason as the locale service that wraps NumeralJS, and additionally to keep the locale codes for both services
 * in sync.
 */
export declare class MomentLocaleService {
    private static singletonInstance;
    private moment;
    private locale;
    private constructor();
    static get(moment: MomentWithLocale): MomentLocaleService;
    setLocale(localeCode: string): void;
    getLocale(): string | undefined;
    localeDataExists(localeCode: string): boolean;
    /**
     * To register the `en-us` locale, simply use the rules from the default `en` locale
     */
    private registerEnglishUSLocale;
    private registerAfrikaansLocale;
    private registerArabicLocale;
    private registerArabicAlgeriaLocale;
    private registerArabicKuwaitLocale;
    private registerArabicLybiaLocale;
    private registerArabicMoroccoLocale;
    private registerArabicSaudiArabiaLocale;
    private registerArabicTunisiaLocale;
    private registerAzerbaijaniLocale;
    private registerBelarusianLocale;
    private registerBulgarianLocale;
    private registerBamaraLocale;
    private registerBengaliLocale;
    private registerTibetanLocale;
    private registerBretonLocale;
    private registerBosnianLocale;
    private registerCatalanLocale;
    private registerCzechLocale;
    private registerChuvashLocale;
    private registerWelshLocale;
    private registerDanishLocale;
    private registerGermanLocale;
    private registerGermanAustriaLocale;
    private registerGermanSwitzerlandLocale;
    private registerMaldivianLocale;
    private registerGreekLocale;
    private registerEnglishAustralianLocale;
    private registerEnglishCanadianLocale;
    private registerEnglishUnitedKingdomLocale;
    private registerEnglishIrelandLocale;
    private registerEnglishNewZealandLocale;
    private registerEsperantoLocale;
    private registerSpanishLocale;
    private registerSpanishDominicanRepublicLocale;
    private registerSpanishUnitedStatesLocale;
    private registerEstonianLocale;
    private registerBasqueLocale;
    private registerPersianLocale;
    private registerFinnishLocale;
    private registerFaroeseLocale;
    private registerFrenchLocale;
    private registerFrenchCanadianLocale;
    private registerFrenchSwitzerlandLocale;
    private registerFrisianLocale;
    private registerScottishGaelicLocale;
    private registerGalicianLocale;
    private registerKonkaniLocale;
    private registerGujaratiLocale;
    private registerHebrewLocale;
    private registerHindiLocale;
    private registerCroatianLocale;
    private registerHungarianLocale;
    private registerArmenianLocale;
    private registerIndonesianLocale;
    private registerIcelandicLocale;
    private registerItalianLocale;
    private registerJapaneseLocale;
    private registerJavaneseLocale;
    private registerGeorgianLocale;
    private registerKazakhLocale;
    private registerCambodianLocale;
    private registerKannadaLocale;
    private registerKoreanLocale;
    private registerKyrgyzLocale;
    private registerLuxembourgishLocale;
    private registerLaoLocale;
    private registerLithuanianLocale;
    private registerLatvianLocale;
    private registerMontenegrinLocale;
    private registerMaoriLocale;
    private registerMacedonianLocale;
    private registerMalayalamLocale;
    private registerMarathiLocale;
    private registerMalayLocale;
    private registerMalteseLocale;
    private registerBurmeseLocale;
    private registerNorwegianBokmalLocale;
    private registerNepaleseLocale;
    private registerDutchLocale;
    private registerDutchBelgiumLocale;
    private registerNynorskLocale;
    private registerPunjabiLocale;
    private registerPolishLocale;
    private registerPortugueseLocale;
    private registerPortugueseBrazilLocale;
    private registerRomanianLocale;
    private registerRussianLocale;
    private registerSindhiLocale;
    private registerNorthernSamiLocale;
    private registerSinhaleseLocale;
    private registerSlovakLocale;
    private registerSlovenianLocale;
    private registerAlbanianLocale;
    private registerSerbianLocale;
    private registerSerbianCyrillicLocale;
    private registerSiSwatiLocale;
    private registerSwedishLocale;
    private registerSwahiliLocale;
    private registerTamilLocale;
    private registerTeluguLocale;
    private registerTetunDiliLocale;
    private registerThaiLocale;
    private registerTagalogLocale;
    private registerKlingonLocale;
    private registerTurkishLocale;
    private registerTalossanLocale;
    private registerCentralAtlasTamazightLocale;
    private registerCentralAtlasTamazightLatinLocale;
    private registerUkrainianLocale;
    private registerUrduLocale;
    private registerUzbekLocale;
    private registerUzbekLatinLocale;
    private registerVietnameseLocale;
    private registerPseudoLocale;
    private registerYorubaNigeriaLocale;
    private registerChineseLocale;
    private registerChineseHongKongLocale;
    private registerChineseTaiwanLocale;
}
/**
 * Including this interface from NumeralJS so the passed in reference to this class can be typed.  Should
 * have been exported by the library...
 */
interface Numeral {
    (value?: any): Numeral;
    version: string;
    isNumeral: boolean;
    options: NumeralJSOptions;
    /**
     * This function sets the current locale.  If no arguments are passed in,
     * it will simply return the current global locale key.
     */
    locale(key?: string): string;
    /**
     * This function provides access to the loaded locale data.  If
     * no arguments are passed in, it will simply return the current
     * global locale object.
     *
     * @param key Locale key, e.g 'es' for a spanish locale definition
     */
    localeData(key?: string): NumeralJSLocale;
    /**
     * Registers a language definition or a custom format definition.
     *
     * @param what Allowed values are: either 'format' or 'locale'
     * @param key The key of the registerd type, e.g. 'de' for a german locale definition
     * @param value The locale definition or the format definitiion
     */
    register(what: RegisterType, key: string, value: NumeralJSLocale | NumeralJsFormat): NumeralJSLocale | NumeralJsFormat;
    zeroFormat(format: string): void;
    nullFormat(format: string): void;
    defaultFormat(format: string): void;
    clone(): Numeral;
    format(inputString?: string, roundingFunction?: RoundingFunction): string;
    unformat(inputString: string): number;
    value(): number;
    valueOf(): number;
    set(value: any): Numeral;
    add(value: any): Numeral;
    subtract(value: any): Numeral;
    multiply(value: any): Numeral;
    divide(value: any): Numeral;
    difference(value: any): number;
    validate(value: any, culture: any): boolean;
}
/**
 * Adding additional locale definitions to the Moment typedef.  Functions exist, just not captured in the typedef.
 */
export interface MomentWithLocale extends Moment {
    defineLocale(language: string, localeSpec: LocaleSpecification | null): Locale;
    updateLocale(language: string, localeSpec?: LocaleSpecification | null): Locale;
    locale(): string;
    locale(language: string, localeSpec?: LocaleSpecification | null): void;
}
export {};
