const airports = [
  {
    "value": "AAL", 
    "label": "Aalborg Airport"
  }, 
  {
    "value": "AAR", 
    "label": "Aarhus"
  }, 
  {
    "value": "ABZ", 
    "label": "Aberdeen"
  }, 
  {
    "value": "AGA", 
    "label": "Agadir"
  }, 
  {
    "value": "AXD", 
    "label": "Alexandropoulis"
  }, 
  {
    "value": "AHO", 
    "label": "Alghero"
  }, 
  {
    "value": "ALC", 
    "label": "Alicante"
  }, 
  {
    "value": "LEI", 
    "label": "Almeria"
  }, 
  {
    "value": "AOC", 
    "label": "Altenburg"
  }, 
  {
    "value": "AMS", 
    "label": "Amsterdam"
  }, 
  {
    "value": "AOI", 
    "label": "Ancona"
  }, 
  {
    "value": "AGH", 
    "label": "Angelholm"
  }, 
  {
    "value": "ANG", 
    "label": "Angoul\u00eame"
  }, 
  {
    "value": "ARW", 
    "label": "Arad"
  }, 
  {
    "value": "OVD", 
    "label": "Asturias"
  }, 
  {
    "value": "ATH", 
    "label": "Athens"
  }, 
  {
    "value": "SOB", 
    "label": "Balaton"
  }, 
  {
    "value": "BCN", 
    "label": "Barcelona T2"
  }, 
  {
    "value": "BRI", 
    "label": "Bari"
  }, 
  {
    "value": "BSL", 
    "label": "Basel"
  }, 
  {
    "value": "BFS", 
    "label": "Belfast"
  }, 
  {
    "value": "BHD", 
    "label": "Belfast (City)"
  }, 
  {
    "value": "EGC", 
    "label": "Bergerac"
  }, 
  {
    "value": "BER", 
    "label": "Berlin (Brandenburg)"
  }, 
  {
    "value": "SXF", 
    "label": "Berlin (Schonefeld) TD"
  }, 
  {
    "value": "BZR", 
    "label": "Beziers"
  }, 
  {
    "value": "BIQ", 
    "label": "Biarritz"
  }, 
  {
    "value": "BIO", 
    "label": "Bilbao"
  }, 
  {
    "value": "BLL", 
    "label": "Billund"
  }, 
  {
    "value": "BHX", 
    "label": "Birmingham"
  }, 
  {
    "value": "BLK", 
    "label": "Blackpool"
  }, 
  {
    "value": "BLQ", 
    "label": "Bologna"
  }, 
  {
    "value": "FRL", 
    "label": "Bologna (Forli)"
  }, 
  {
    "value": "BOD", 
    "label": "Bordeaux"
  }, 
  {
    "value": "BOH", 
    "label": "Bournemouth"
  }, 
  {
    "value": "BTS", 
    "label": "Bratislava"
  }, 
  {
    "value": "BRE", 
    "label": "Bremen"
  }, 
  {
    "value": "BES", 
    "label": "Brest"
  }, 
  {
    "value": "BDS", 
    "label": "Brindisi"
  }, 
  {
    "value": "BRS", 
    "label": "Bristol"
  }, 
  {
    "value": "BVE", 
    "label": "Brive (Souillac)"
  }, 
  {
    "value": "BRQ", 
    "label": "Brno"
  }, 
  {
    "value": "CRL", 
    "label": "Brussels (Charleroi)"
  }, 
  {
    "value": "BRU", 
    "label": "Brussels (Zaventem)"
  }, 
  {
    "value": "OTP", 
    "label": "Bucharest (Otopeni)"
  }, 
  {
    "value": "BUD", 
    "label": "Budapest T2B"
  }, 
  {
    "value": "BZG", 
    "label": "Bydgoszcz"
  }, 
  {
    "value": "CAG", 
    "label": "Cagliari"
  }, 
  {
    "value": "CCF", 
    "label": "Carcassonne"
  }, 
  {
    "value": "CWL", 
    "label": "Cardiff"
  }, 
  {
    "value": "CDT", 
    "label": "Castellon"
  }, 
  {
    "value": "CTA", 
    "label": "Catania (Fontanarossa)"
  }, 
  {
    "value": "CQM", 
    "label": "Ciudad Real"
  }, 
  {
    "value": "CFE", 
    "label": "Clermont (Ferrand)"
  }, 
  {
    "value": "CGN", 
    "label": "Cologne (Bonn)"
  }, 
  {
    "value": "CIY", 
    "label": "Comiso"
  }, 
  {
    "value": "CND", 
    "label": "Constanta"
  }, 
  {
    "value": "CPH", 
    "label": "Copenhagen T2"
  }, 
  {
    "value": "CFU", 
    "label": "Corfu"
  }, 
  {
    "value": "ORK", 
    "label": "Cork"
  }, 
  {
    "value": "CRA", 
    "label": "Craiova"
  }, 
  {
    "value": "CHQ", 
    "label": "Crete (Chania)"
  }, 
  {
    "value": "CRV", 
    "label": "Crotone"
  }, 
  {
    "value": "CUF", 
    "label": "Cuneo"
  }, 
  {
    "value": "DOL", 
    "label": "Deauville-Normandy"
  }, 
  {
    "value": "LDY", 
    "label": "Derry"
  }, 
  {
    "value": "DNR", 
    "label": "Dinard"
  }, 
  {
    "value": "DLE", 
    "label": "Dole"
  }, 
  {
    "value": "DSA", 
    "label": "Doncaster"
  }, 
  {
    "value": "DTM", 
    "label": "Dortmund"
  }, 
  {
    "value": "DUB", 
    "label": "Dublin T1"
  }, 
  {
    "value": "MME", 
    "label": "Durham Tees"
  }, 
  {
    "value": "DUS", 
    "label": "D\u00fcsseldorf"
  }, 
  {
    "value": "NRN", 
    "label": "D\u00fcsseldorf (Weeze)"
  }, 
  {
    "value": "EMA", 
    "label": "East Midlands"
  }, 
  {
    "value": "EDI", 
    "label": "Edinburgh"
  }, 
  {
    "value": "VDA", 
    "label": "Eilat (Ovda)"
  }, 
  {
    "value": "EIN", 
    "label": "Eindhoven"
  }, 
  {
    "value": "EBJ", 
    "label": "Esbjerg"
  }, 
  {
    "value": "ESU", 
    "label": "Essaouira"
  }, 
  {
    "value": "FAO", 
    "label": "Faro"
  }, 
  {
    "value": "FEZ", 
    "label": "Fez"
  }, 
  {
    "value": "FSC", 
    "label": "Figari"
  }, 
  {
    "value": "HHN", 
    "label": "Frankfurt (Hahn)"
  }, 
  {
    "value": "FRA", 
    "label": "Frankfurt International Airport"
  }, 
  {
    "value": "FDH", 
    "label": "Friedrichshafen"
  }, 
  {
    "value": "FUE", 
    "label": "Fuerteventura"
  }, 
  {
    "value": "GDN", 
    "label": "Gda\u0144sk"
  }, 
  {
    "value": "GOA", 
    "label": "Genoa"
  }, 
  {
    "value": "GRO", 
    "label": "Girona (Barcelona)"
  }, 
  {
    "value": "PIK", 
    "label": "Glasgow (Prestwick)"
  }, 
  {
    "value": "GLA", 
    "label": "Glasgow T2"
  }, 
  {
    "value": "GSE", 
    "label": "Gothenburg (City)"
  }, 
  {
    "value": "GOT", 
    "label": "Gottenburg Landvetter"
  }, 
  {
    "value": "LPA", 
    "label": "Gran Canaria"
  }, 
  {
    "value": "GRX", 
    "label": "Granada"
  }, 
  {
    "value": "GRZ", 
    "label": "Graz"
  }, 
  {
    "value": "GNB", 
    "label": "Grenoble"
  }, 
  {
    "value": "GRQ", 
    "label": "Groningen"
  }, 
  {
    "value": "HAM", 
    "label": "Hamburg"
  }, 
  {
    "value": "LBC", 
    "label": "Hamburg (L\u00fcbeck)"
  }, 
  {
    "value": "HAU", 
    "label": "Haugesund"
  }, 
  {
    "value": "HUY", 
    "label": "Humberside"
  }, 
  {
    "value": "IBZ", 
    "label": "Ibiza"
  }, 
  {
    "value": "INV", 
    "label": "Inverness"
  }, 
  {
    "value": "XRY", 
    "label": "Jerez"
  }, 
  {
    "value": "JKG", 
    "label": "Jonkoping (Axamo)"
  }, 
  {
    "value": "KLX", 
    "label": "Kalamata"
  }, 
  {
    "value": "KLR", 
    "label": "Kalmar"
  }, 
  {
    "value": "FKB", 
    "label": "Karlsruhe (Baden-Baden)"
  }, 
  {
    "value": "KSD", 
    "label": "Karlstad"
  }, 
  {
    "value": "KTW", 
    "label": "Katowice"
  }, 
  {
    "value": "KUN", 
    "label": "Kaunas"
  }, 
  {
    "value": "EFL", 
    "label": "Kefalonia"
  }, 
  {
    "value": "KIR", 
    "label": "Kerry"
  }, 
  {
    "value": "KBP", 
    "label": "Kiev-Borispol Airport"
  }, 
  {
    "value": "KLU", 
    "label": "Klagenfurt"
  }, 
  {
    "value": "NOC", 
    "label": "Knock"
  }, 
  {
    "value": "KGS", 
    "label": "Kos"
  }, 
  {
    "value": "KRK", 
    "label": "Krakow"
  }, 
  {
    "value": "KID", 
    "label": "Kristianstad"
  }, 
  {
    "value": "LRH", 
    "label": "La Rochelle"
  }, 
  {
    "value": "TER", 
    "label": "Lajes Airport"
  }, 
  {
    "value": "SUF", 
    "label": "Lamezia"
  }, 
  {
    "value": "ACE", 
    "label": "Lanzarote"
  }, 
  {
    "value": "LPP", 
    "label": "Lappeenranta"
  }, 
  {
    "value": "LCA", 
    "label": "Larnaca"
  }, 
  {
    "value": "LBG", 
    "label": "Le Bourget Airport"
  }, 
  {
    "value": "LBA", 
    "label": "Leeds Bradford"
  }, 
  {
    "value": "LEJ", 
    "label": "Leipzig (Halle)"
  }, 
  {
    "value": "LIL", 
    "label": "Lille"
  }, 
  {
    "value": "LIG", 
    "label": "Limoges"
  }, 
  {
    "value": "LNZ", 
    "label": "Linz"
  }, 
  {
    "value": "LIS", 
    "label": "Lisbon T2"
  }, 
  {
    "value": "LPL", 
    "label": "Liverpool"
  }, 
  {
    "value": "ILD", 
    "label": "Lleida"
  }, 
  {
    "value": "LCJ", 
    "label": "Lodz"
  }, 
  {
    "value": "LGW", 
    "label": "London (Gatwick)"
  }, 
  {
    "value": "LTN", 
    "label": "London (Luton)"
  }, 
  {
    "value": "STN", 
    "label": "London (Stansted)"
  }, 
  {
    "value": "LRT", 
    "label": "Lorient"
  }, 
  {
    "value": "LDE", 
    "label": "Lourdes"
  }, 
  {
    "value": "LUZ", 
    "label": "Lublin"
  }, 
  {
    "value": "LUX", 
    "label": "Luxembourg Airport"
  }, 
  {
    "value": "LYS", 
    "label": "Lyon Satolas Airport"
  }, 
  {
    "value": "MST", 
    "label": "Maastricht"
  }, 
  {
    "value": "MAD", 
    "label": "Madrid T1"
  }, 
  {
    "value": "CSO", 
    "label": "Magdeburg (Cochstedt)"
  }, 
  {
    "value": "MAH", 
    "label": "Mahon"
  }, 
  {
    "value": "AGP", 
    "label": "Malaga T2"
  }, 
  {
    "value": "MMX", 
    "label": "Malm\u00f6"
  }, 
  {
    "value": "MLA", 
    "label": "Malta"
  }, 
  {
    "value": "MAN", 
    "label": "Manchester T3"
  }, 
  {
    "value": "MBX", 
    "label": "Maribor"
  }, 
  {
    "value": "RAK", 
    "label": "Marrakesh"
  }, 
  {
    "value": "MRS", 
    "label": "Marseille MP2"
  }, 
  {
    "value": "FMM", 
    "label": "Memmingen"
  }, 
  {
    "value": "BGY", 
    "label": "Milan (Bergamo)"
  }, 
  {
    "value": "MXP", 
    "label": "Milan Malpensa T1"
  }, 
  {
    "value": "MPL", 
    "label": "Montpellier"
  }, 
  {
    "value": "FMO", 
    "label": "Munster"
  }, 
  {
    "value": "MJV", 
    "label": "Murcia"
  }, 
  {
    "value": "JMK", 
    "label": "Mykonos"
  }, 
  {
    "value": "NDR", 
    "label": "Nador"
  }, 
  {
    "value": "NTE", 
    "label": "Nantes"
  }, 
  {
    "value": "NAP", 
    "label": "Naples Airport"
  }, 
  {
    "value": "NCL", 
    "label": "Newcastle"
  }, 
  {
    "value": "NQY", 
    "label": "Newquay"
  }, 
  {
    "value": "NCE", 
    "label": "Nice T1"
  }, 
  {
    "value": "HER", 
    "label": "Nikos Kazantzakis Airport"
  }, 
  {
    "value": "INI", 
    "label": "Nis"
  }, 
  {
    "value": "NRK", 
    "label": "Norrk\u00f6ping"
  }, 
  {
    "value": "NWI", 
    "label": "Norwich Airport"
  }, 
  {
    "value": "NUE", 
    "label": "Nuremberg"
  }, 
  {
    "value": "FNI", 
    "label": "N\u00eemes"
  }, 
  {
    "value": "OLB", 
    "label": "Olbia"
  }, 
  {
    "value": "SZY", 
    "label": "Olsztyn-Mazury"
  }, 
  {
    "value": "OMR", 
    "label": "Oradea Airport"
  }, 
  {
    "value": "OSI", 
    "label": "Osijek"
  }, 
  {
    "value": "RYG", 
    "label": "Oslo (Rygge)"
  }, 
  {
    "value": "TRF", 
    "label": "Oslo (Torp)"
  }, 
  {
    "value": "OSL", 
    "label": "Oslo Airport"
  }, 
  {
    "value": "OST", 
    "label": "Ostend"
  }, 
  {
    "value": "OSR", 
    "label": "Ostrava"
  }, 
  {
    "value": "OUD", 
    "label": "Oujda"
  }, 
  {
    "value": "PLQ", 
    "label": "Palanga"
  }, 
  {
    "value": "PMO", 
    "label": "Palermo"
  }, 
  {
    "value": "PMI", 
    "label": "Palma Mallorca"
  }, 
  {
    "value": "PFO", 
    "label": "Paphos"
  }, 
  {
    "value": "PED", 
    "label": "Pardubice Airport"
  }, 
  {
    "value": "BVA", 
    "label": "Paris (Beauvais)"
  }, 
  {
    "value": "XCR", 
    "label": "Paris (Vatry)"
  }, 
  {
    "value": "PMF", 
    "label": "Parma"
  }, 
  {
    "value": "GPA", 
    "label": "Patras (Araxos)"
  }, 
  {
    "value": "PUF", 
    "label": "Pau"
  }, 
  {
    "value": "PGF", 
    "label": "Perpignan"
  }, 
  {
    "value": "PEG", 
    "label": "Perugia"
  }, 
  {
    "value": "PSR", 
    "label": "Pescara"
  }, 
  {
    "value": "PSA", 
    "label": "Pisa"
  }, 
  {
    "value": "PDV", 
    "label": "Plovdiv"
  }, 
  {
    "value": "TGD", 
    "label": "Podgorica"
  }, 
  {
    "value": "PIS", 
    "label": "Poitiers"
  }, 
  {
    "value": "PDL", 
    "label": "Ponta Delgada"
  }, 
  {
    "value": "OPO", 
    "label": "Porto"
  }, 
  {
    "value": "POZ", 
    "label": "Pozna\u0144"
  }, 
  {
    "value": "PRG", 
    "label": "Prague"
  }, 
  {
    "value": "PUY", 
    "label": "Pula"
  }, 
  {
    "value": "RBA", 
    "label": "Rabat"
  }, 
  {
    "value": "RNS", 
    "label": "Rennes"
  }, 
  {
    "value": "REU", 
    "label": "Reus (Barcelona)"
  }, 
  {
    "value": "RHO", 
    "label": "Rhodes"
  }, 
  {
    "value": "RIX", 
    "label": "Riga"
  }, 
  {
    "value": "RJK", 
    "label": "Rijeka"
  }, 
  {
    "value": "RMI", 
    "label": "Rimini"
  }, 
  {
    "value": "RDZ", 
    "label": "Rodez"
  }, 
  {
    "value": "CIA", 
    "label": "Rome (Ciampino)"
  }, 
  {
    "value": "FCO", 
    "label": "Rome (Fiumicino) T2"
  }, 
  {
    "value": "RLG", 
    "label": "Rostock"
  }, 
  {
    "value": "RVN", 
    "label": "Rovaniemi"
  }, 
  {
    "value": "RZE", 
    "label": "Rzesz\u00f3w"
  }, 
  {
    "value": "SZG", 
    "label": "Salzburg"
  }, 
  {
    "value": "SDR", 
    "label": "Santander"
  }, 
  {
    "value": "SCQ", 
    "label": "Santiago Comp."
  }, 
  {
    "value": "JTR", 
    "label": "Santorini"
  }, 
  {
    "value": "ABC", 
    "label": "Schedule Test ABC"
  }, 
  {
    "value": "SVQ", 
    "label": "Seville"
  }, 
  {
    "value": "SNN", 
    "label": "Shannon"
  }, 
  {
    "value": "SFT", 
    "label": "Skelleftea"
  }, 
  {
    "value": "VXO", 
    "label": "Smaland (Vaxjo)"
  }, 
  {
    "value": "LWO", 
    "label": "Snilow Airport"
  }, 
  {
    "value": "SOF", 
    "label": "Sofia T2"
  }, 
  {
    "value": "EBU", 
    "label": "St. Etienne"
  }, 
  {
    "value": "NYO", 
    "label": "Stockholm Skavsta"
  }, 
  {
    "value": "VST", 
    "label": "Stockholm Vasteras"
  }, 
  {
    "value": "SXB", 
    "label": "Strasbourg"
  }, 
  {
    "value": "STR", 
    "label": "Stuttgart"
  }, 
  {
    "value": "SZZ", 
    "label": "Szczecin"
  }, 
  {
    "value": "TLL", 
    "label": "Tallinn"
  }, 
  {
    "value": "TMP", 
    "label": "Tampere"
  }, 
  {
    "value": "TNG", 
    "label": "Tangier"
  }, 
  {
    "value": "TGM", 
    "label": "Targu Mures"
  }, 
  {
    "value": "TBS", 
    "label": "Tbilisi International Airport"
  }, 
  {
    "value": "TLV", 
    "label": "Tel Aviv Airport"
  }, 
  {
    "value": "TFN", 
    "label": "Tenerife (North)"
  }, 
  {
    "value": "TFS", 
    "label": "Tenerife (South)"
  }, 
  {
    "value": "SKG", 
    "label": "Thessaloniki"
  }, 
  {
    "value": "TSR", 
    "label": "Timisoara"
  }, 
  {
    "value": "TLN", 
    "label": "Toulon"
  }, 
  {
    "value": "TLS", 
    "label": "Toulouse"
  }, 
  {
    "value": "TUF", 
    "label": "Tours"
  }, 
  {
    "value": "TPS", 
    "label": "Trapani"
  }, 
  {
    "value": "TRS", 
    "label": "Trieste"
  }, 
  {
    "value": "TRN", 
    "label": "Turin"
  }, 
  {
    "value": "TKU", 
    "label": "Turku T2"
  }, 
  {
    "value": "VLC", 
    "label": "Valencia"
  }, 
  {
    "value": "VLL", 
    "label": "Valladolid"
  }, 
  {
    "value": "VAR", 
    "label": "Varna Airport"
  }, 
  {
    "value": "VCE", 
    "label": "Venice (Marco Polo)"
  }, 
  {
    "value": "TSF", 
    "label": "Venice (Treviso)"
  }, 
  {
    "value": "VRN", 
    "label": "Verona"
  }, 
  {
    "value": "VBS", 
    "label": "Verona (Brescia)"
  }, 
  {
    "value": "VGO", 
    "label": "Vigo"
  }, 
  {
    "value": "VNO", 
    "label": "Vilnius"
  }, 
  {
    "value": "VIT", 
    "label": "Vitoria (Bilbao)"
  }, 
  {
    "value": "VOL", 
    "label": "Volos"
  }, 
  {
    "value": "WAW", 
    "label": "Warsaw (Chopin)"
  }, 
  {
    "value": "WMI", 
    "label": "Warsaw (Modlin)"
  }, 
  {
    "value": "WRO", 
    "label": "Wroclaw"
  }, 
  {
    "value": "ZAD", 
    "label": "Zadar"
  }, 
  {
    "value": "ZTH", 
    "label": "Zakinthos"
  }, 
  {
    "value": "ZAZ", 
    "label": "Zaragoza"
  }, 
  {
    "value": "ZQW", 
    "label": "Zweibrucken"
  }
]

export default airports;
