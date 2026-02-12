import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  HeartPulse, 
  Baby, 
  Microscope, 
  Smile, 
  Award,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { ServiceItem, PriceItem, TeamMember, InsurancePartner } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'preventive',
    title: 'Vstupní vyšetření',
    description: 'Komplexní anamnéza, klinické vyšetření a panoramatický rentgen (OPG) pro stanovení přesného léčebného plánu.',
    icon: <Stethoscope className="w-8 h-8 text-[#793f66]" />
  },
  {
    id: 'hygiene',
    title: 'Dentální hygiena',
    description: 'Profesionální čištění, odstranění zubního kamene a individuální instruktáž domácí péče o chrup.',
    icon: <Sparkles className="w-8 h-8 text-[#793f66]" />
  },
  {
    id: 'airflow',
    title: 'Air Flow',
    description: 'Šetrné pískování zubů pro odstranění pigmentací od kávy, čaje či kouření a vyhlazení povrchu zubů.',
    icon: <Smile className="w-8 h-8 text-[#793f66]" />
  },
  {
    id: 'whitening',
    title: 'Bělení zubů',
    description: 'Zářivý úsměv díky bezpečným metodám ordinačního i domácího bělení pod dohledem specialistů.',
    icon: <Award className="w-8 h-8 text-[#793f66]" />
  },
  {
    id: 'esthetics',
    title: 'Estetická stomatologie',
    description: 'Vysoce estetické kompozitní výplně, keramické fasety a korunky, které nerozeznáte od vlastních zubů.',
    icon: <HeartPulse className="w-8 h-8 text-[#793f66]" />
  },
  {
    id: 'implants',
    title: 'Zubní implantáty',
    description: 'Trvalé řešení chybějících zubů pomocí moderních titanových náhrad s vysokou úspěšností vhojení.',
    icon: <Microscope className="w-8 h-8 text-[#793f66]" />
  }
];

export const PRICES: PriceItem[] = [
  { name: 'Preventivní prohlídka', price: 'ZDARMA' },
  { name: 'Vstupní konzultace', price: 'cca 2 000 Kč' },
  { name: 'Dentální hygiena', price: 'cca 1 990 Kč' },
  { name: 'Bělení zubů', price: '5 990 – 9 890 Kč' },
  { name: 'Fotokompozitní výplň', price: '1 590 – 3 490 Kč' },
  { name: 'Keramická korunka', price: 'cca 12 290 Kč' },
  { name: 'Implantace', price: '18 900 – 21 900 Kč' }
];

export const TEAM: TeamMember[] = [
  {
    name: 'MDDr. Jana Beranovská',
    role: 'Vedoucí lékařka, majitelka',
    description: 'Navrátit pacientům zdraví prostřednictvím zdravých zubů a dásní a zároveň estetický prostředek - modelování nových tvarů zubů, vytváření krásného úsměvu a tím zkvalitnění života běžného člověka, který se chce na svět usmívat.',
    image: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'MDDr. Michal Navrátil',
    role: 'Stomatochirurg',
    description: 'Jako spolupracující stomatochirurg s klinikou SMILE FACTORY na oddělení stomatologické chirurgie u SV. ANNY se snažím svým pacientům poskytovat ošetření bezbolestně, rychle a šetrně.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'MDDr. Kateřina Johnson',
    role: 'Zubní lékařka',
    description: 'Mít krásný a funkční chrup je zásadní pro celkové zdraví i společenské postavení. Kladu důraz na to, aby se správné návyky a ošetření pěstovaly již od dětství.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'MDDr. Jana Přibylová',
    role: 'Zubní lékařka',
    description: 'S úsměvem jde všechno líp a proto jsem si vybrala SMILE FACTORY. Ráda jsem součástí týmu, který dělá váš úsměv hezčí.',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'MDDr. Alica Klieštiková',
    role: 'Zubní lékařka',
    description: 'Svojou prácou chcem pozitívne vplývať na život pacientov, pretože zuby a dutina ústna úzko súvisia so zdravím človeka. Chcem pomáhať nielen fyzicky, ale aj psychicky, keďže zdravé zuby skrášľujú úsmev a zvyšujú sebavedomie.',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'MDDr. Barbora Křivanová',
    role: 'Zubní lékařka',
    description: 'Stomatologie pro mě byla jasná volba kvůli spojení kreativity, možnosti neustálého rozvoje nových postupů a technologií a práce s lidmi. Svým pacientům poskytuji ošetření dle nejnovějších poznatků a hlavně tak, aby to nebolelo.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Linda Rotterová, DiS.',
    role: 'Dentální hygienistka',
    description: 'Již během studia asistenta zubního technika jsem si uvědomila, že bych se ráda stala dentální hygienistkou a mohla tak pomáhat udržovat ústa v co nejlepší kondici až do pozdního stáří.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Aneta Valnohová, DiS.',
    role: 'Dentální hygienistka',
    description: 'Pomáhat lidem mě bavilo odjakživa. Proto jsem si vybrala cestu zdravotnictví, kde mohu spojit péči o zdraví s každodenní komunikací s lidmi. Věřím, že prevence je základ.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Hana Motáňová, DiS.',
    role: 'Dentální hygienistka',
    description: 'Při pohledu na člověka je úsměv první, čeho si všímám. Ráda lidem pomáhám udržovat dutinu ústní zdravou a bez obtíží, aby jim v rozdávání úsměvů už nic nebránilo.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Bc. Gabriela Latzková',
    role: 'Dentální hygienistka',
    description: 'Od mala mě fascinovala práce mého zubaře a dentální hygienistky, což mi velice usnadnilo výběr vysoké školy. Mým cílem je nejen poskytovat kvalitní péči o zuby a dásně, ale také vytvářet pohodlné a přátelské prostředí pro naše pacienty.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Valentýna Lohniská',
    role: 'Back Office',
    description: 'Na zdraví a zdravý životní styl jsem dbala od malička. Důležitost kvalitních zubařů, či ordinací jsem si uvědomila již v mládí, kdy jsem sama vyhledávala péči odborníků, aby mi pomohli.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Veronika Maixnerová',
    role: 'Recepční',
    description: 'Na recepci přijdu s lidmi do prvního kontaktu, proto je důležité udělat dobrý dojem a ten nejlépe vytváří zdravý a krásný úsměv.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Gabriela Shromáždilová',
    role: 'Recepční',
    description: 'Pocházím z podhůří Jeseníků, kde lidem není dopřán takový komfort, jako právě tady. Na recepci s pacienty navazuji první kontakt a tudíž mohu říci, že: „ne šaty, ale zuby dělají člověka“.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Lucie Hejcmanová',
    role: 'Zubní instrumentářka',
    description: 'Profesionální podpora lékaře při zákrocích a zajištění hladkého chodu ordinace s důrazem na sterilitu a pohodlí pacienta.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Andrea Horáčková',
    role: 'Zdravotní sestra',
    description: 'Péče o pacienty a asistence u křesla s úsměvem a empatií pro zmírnění případných obav z ošetření.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Monika Jetlíbková',
    role: 'Zdravotní sestra',
    description: 'Odborná asistence a lidský přístup jsou klíčové pro spokojenost našich pacientů během každé návštěvy.',
    image: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Lucie Gottwaldová',
    role: 'Zdravotní sestra',
    description: 'Zajištění maximálního komfortu pro pacienta a profesionální příprava na všechny typy stomatologických výkonů.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const INSURANCES: InsurancePartner[] = [
  { name: 'Všeobecná zdravotní pojišťovna (111)', id: 'vzp' },
  { name: 'ZP Ministerstva vnitra (211)', id: 'zpmv' },
  { name: 'Vojenská zdravotní pojišťovna (201)', id: 'vozp' },
  { name: 'Česká průmyslová pojišťovna (205)', id: 'cpp' },
  { name: 'Oborová zdravotní pojišťovna (207)', id: 'ozp' },
  { name: 'Revírní bratrská pokladna (213)', id: 'rbp' }
];