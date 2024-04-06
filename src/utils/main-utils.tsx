export const isLoggedIn = () => {
  return !!localStorage.getItem("accessToken");
};
export const getToken = () => {
  return localStorage.getItem("accessToken");
};
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};
export const storeLoginResponse = (loginResponse: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem("accessToken", loginResponse.accessToken);
  localStorage.setItem("refreshToken", loginResponse.refreshToken);
};

export const clearToken = () => {
  localStorage.removeItem("accessToken");
};
export const storeToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const loadUserFromStorage = () => {
  try {
    const user = localStorage.getItem("user");
    if (user === null) {
      return undefined;
    }
    return JSON.parse(user);
  } catch (err) {
    return undefined;
  }
};

export const getTokens = () => {
  try {
    const tokens = localStorage.getItem("tokens");
    if (tokens === null) {
      return undefined;
    }
    return JSON.parse(tokens);
  } catch (err) {
    return undefined;
  }
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

export const AREA_CODES = [
  {
    countryName: "Afghanistan",
    areaCode: "93",
    countryCode: "AF",
  },
  {
    countryName: "Aland Islands",
    areaCode: "358",
    countryCode: "AX",
  },
  {
    countryName: "Albania",
    areaCode: "355",
    countryCode: "AL",
  },
  {
    countryName: "Algeria",
    areaCode: "213",
    countryCode: "DZ",
  },
  {
    countryName: "AmericanSamoa",
    areaCode: "1684",
    countryCode: "AS",
  },
  {
    countryName: "Andorra",
    areaCode: "376",
    countryCode: "AD",
  },
  {
    countryName: "Angola",
    areaCode: "244",
    countryCode: "AO",
  },
  {
    countryName: "Anguilla",
    areaCode: "1264",
    countryCode: "AI",
  },
  {
    countryName: "Antarctica",
    areaCode: "672",
    countryCode: "AQ",
  },
  {
    countryName: "Antigua and Barbuda",
    areaCode: "1268",
    countryCode: "AG",
  },
  {
    countryName: "Argentina",
    areaCode: "54",
    countryCode: "AR",
  },
  {
    countryName: "Armenia",
    areaCode: "374",
    countryCode: "AM",
  },
  {
    countryName: "Aruba",
    areaCode: "297",
    countryCode: "AW",
  },
  {
    countryName: "Australia",
    areaCode: "61",
    countryCode: "AU",
  },
  {
    countryName: "Austria",
    areaCode: "43",
    countryCode: "AT",
  },
  {
    countryName: "Azerbaijan",
    areaCode: "994",
    countryCode: "AZ",
  },
  {
    countryName: "Bahamas",
    areaCode: "1242",
    countryCode: "BS",
  },
  {
    countryName: "Bahrain",
    areaCode: "973",
    countryCode: "BH",
  },
  {
    countryName: "Bangladesh",
    areaCode: "880",
    countryCode: "BD",
  },
  {
    countryName: "Barbados",
    areaCode: "1246",
    countryCode: "BB",
  },
  {
    countryName: "Belarus",
    areaCode: "375",
    countryCode: "BY",
  },
  {
    countryName: "Belgium",
    areaCode: "32",
    countryCode: "BE",
  },
  {
    countryName: "Belize",
    areaCode: "501",
    countryCode: "BZ",
  },
  {
    countryName: "Benin",
    areaCode: "229",
    countryCode: "BJ",
  },
  {
    countryName: "Bermuda",
    areaCode: "1441",
    countryCode: "BM",
  },
  {
    countryName: "Bhutan",
    areaCode: "975",
    countryCode: "BT",
  },
  {
    countryName: "Bolivia, Plurinational State of",
    areaCode: "591",
    countryCode: "BO",
  },
  {
    countryName: "Bosnia and Herzegovina",
    areaCode: "387",
    countryCode: "BA",
  },
  {
    countryName: "Botswana",
    areaCode: "267",
    countryCode: "BW",
  },
  {
    countryName: "Brazil",
    areaCode: "55",
    countryCode: "BR",
  },
  {
    countryName: "British Indian Ocean Territory",
    areaCode: "246",
    countryCode: "IO",
  },
  {
    countryName: "Brunei Darussalam",
    areaCode: "673",
    countryCode: "BN",
  },
  {
    countryName: "Bulgaria",
    areaCode: "359",
    countryCode: "BG",
  },
  {
    countryName: "Burkina Faso",
    areaCode: "226",
    countryCode: "BF",
  },
  {
    countryName: "Burundi",
    areaCode: "257",
    countryCode: "BI",
  },
  {
    countryName: "Cambodia",
    areaCode: "855",
    countryCode: "KH",
  },
  {
    countryName: "Cameroon",
    areaCode: "237",
    countryCode: "CM",
  },
  {
    countryName: "Canada",
    areaCode: "1",
    countryCode: "CA",
  },
  {
    countryName: "Cape Verde",
    areaCode: "238",
    countryCode: "CV",
  },
  {
    countryName: "Cayman Islands",
    areaCode: " 345",
    countryCode: "KY",
  },
  {
    countryName: "Central African Republic",
    areaCode: "236",
    countryCode: "CF",
  },
  {
    countryName: "Chad",
    areaCode: "235",
    countryCode: "TD",
  },
  {
    countryName: "Chile",
    areaCode: "56",
    countryCode: "CL",
  },
  {
    countryName: "China",
    areaCode: "86",
    countryCode: "CN",
  },
  {
    countryName: "Christmas Island",
    areaCode: "61",
    countryCode: "CX",
  },
  {
    countryName: "Cocos (Keeling) Islands",
    areaCode: "61",
    countryCode: "CC",
  },
  {
    countryName: "Colombia",
    areaCode: "57",
    countryCode: "CO",
  },
  {
    countryName: "Comoros",
    areaCode: "269",
    countryCode: "KM",
  },
  {
    countryName: "Congo",
    areaCode: "242",
    countryCode: "CG",
  },
  {
    countryName: "Congo, The Democratic Republic of the Congo",
    areaCode: "243",
    countryCode: "CD",
  },
  {
    countryName: "Cook Islands",
    areaCode: "682",
    countryCode: "CK",
  },
  {
    countryName: "Costa Rica",
    areaCode: "506",
    countryCode: "CR",
  },
  {
    countryName: "Cote d'Ivoire",
    areaCode: "225",
    countryCode: "CI",
  },
  {
    countryName: "Croatia",
    areaCode: "385",
    countryCode: "HR",
  },
  {
    countryName: "Cuba",
    areaCode: "53",
    countryCode: "CU",
  },
  {
    countryName: "Cyprus",
    areaCode: "357",
    countryCode: "CY",
  },
  {
    countryName: "Czech Republic",
    areaCode: "420",
    countryCode: "CZ",
  },
  {
    countryName: "Denmark",
    areaCode: "45",
    countryCode: "DK",
  },
  {
    countryName: "Djibouti",
    areaCode: "253",
    countryCode: "DJ",
  },
  {
    countryName: "Dominica",
    areaCode: "1767",
    countryCode: "DM",
  },
  {
    countryName: "Dominican Republic",
    areaCode: "1849",
    countryCode: "DO",
  },
  {
    countryName: "Ecuador",
    areaCode: "593",
    countryCode: "EC",
  },
  {
    countryName: "Egypt",
    areaCode: "20",
    countryCode: "EG",
  },
  {
    countryName: "El Salvador",
    areaCode: "503",
    countryCode: "SV",
  },
  {
    countryName: "Equatorial Guinea",
    areaCode: "240",
    countryCode: "GQ",
  },
  {
    countryName: "Eritrea",
    areaCode: "291",
    countryCode: "ER",
  },
  {
    countryName: "Estonia",
    areaCode: "372",
    countryCode: "EE",
  },
  {
    countryName: "Ethiopia",
    areaCode: "251",
    countryCode: "ET",
  },
  {
    countryName: "Falkland Islands (Malvinas)",
    areaCode: "500",
    countryCode: "FK",
  },
  {
    countryName: "Faroe Islands",
    areaCode: "298",
    countryCode: "FO",
  },
  {
    countryName: "Fiji",
    areaCode: "679",
    countryCode: "FJ",
  },
  {
    countryName: "Finland",
    areaCode: "358",
    countryCode: "FI",
  },
  {
    countryName: "France",
    areaCode: "33",
    countryCode: "FR",
  },
  {
    countryName: "French Guiana",
    areaCode: "594",
    countryCode: "GF",
  },
  {
    countryName: "French Polynesia",
    areaCode: "689",
    countryCode: "PF",
  },
  {
    countryName: "Gabon",
    areaCode: "241",
    countryCode: "GA",
  },
  {
    countryName: "Gambia",
    areaCode: "220",
    countryCode: "GM",
  },
  {
    countryName: "Georgia",
    areaCode: "995",
    countryCode: "GE",
  },
  {
    countryName: "Germany",
    areaCode: "49",
    countryCode: "DE",
  },
  {
    countryName: "Ghana",
    areaCode: "233",
    countryCode: "GH",
  },
  {
    countryName: "Gibraltar",
    areaCode: "350",
    countryCode: "GI",
  },
  {
    countryName: "Greece",
    areaCode: "30",
    countryCode: "GR",
  },
  {
    countryName: "Greenland",
    areaCode: "299",
    countryCode: "GL",
  },
  {
    countryName: "Grenada",
    areaCode: "1473",
    countryCode: "GD",
  },
  {
    countryName: "Guadeloupe",
    areaCode: "590",
    countryCode: "GP",
  },
  {
    countryName: "Guam",
    areaCode: "1671",
    countryCode: "GU",
  },
  {
    countryName: "Guatemala",
    areaCode: "502",
    countryCode: "GT",
  },
  {
    countryName: "Guernsey",
    areaCode: "44",
    countryCode: "GG",
  },
  {
    countryName: "Guinea",
    areaCode: "224",
    countryCode: "GN",
  },
  {
    countryName: "Guinea-Bissau",
    areaCode: "245",
    countryCode: "GW",
  },
  {
    countryName: "Guyana",
    areaCode: "595",
    countryCode: "GY",
  },
  {
    countryName: "Haiti",
    areaCode: "509",
    countryCode: "HT",
  },
  {
    countryName: "Holy See (Vatican City State)",
    areaCode: "379",
    countryCode: "VA",
  },
  {
    countryName: "Honduras",
    areaCode: "504",
    countryCode: "HN",
  },
  {
    countryName: "Hong Kong",
    areaCode: "852",
    countryCode: "HK",
  },
  {
    countryName: "Hungary",
    areaCode: "36",
    countryCode: "HU",
  },
  {
    countryName: "Iceland",
    areaCode: "354",
    countryCode: "IS",
  },
  {
    countryName: "India",
    areaCode: "91",
    countryCode: "IN",
  },
  {
    countryName: "Indonesia",
    areaCode: "62",
    countryCode: "ID",
  },
  {
    countryName: "Iran, Islamic Republic of Persian Gulf",
    areaCode: "98",
    countryCode: "IR",
  },
  {
    countryName: "Iraq",
    areaCode: "964",
    countryCode: "IQ",
  },
  {
    countryName: "Ireland",
    areaCode: "353",
    countryCode: "IE",
  },
  {
    countryName: "Isle of Man",
    areaCode: "44",
    countryCode: "IM",
  },
  {
    countryName: "Israel",
    areaCode: "972",
    countryCode: "IL",
  },
  {
    countryName: "Italy",
    areaCode: "39",
    countryCode: "IT",
  },
  {
    countryName: "Jamaica",
    areaCode: "1876",
    countryCode: "JM",
  },
  {
    countryName: "Japan",
    areaCode: "81",
    countryCode: "JP",
  },
  {
    countryName: "Jersey",
    areaCode: "44",
    countryCode: "JE",
  },
  {
    countryName: "Jordan",
    areaCode: "962",
    countryCode: "JO",
  },
  {
    countryName: "Kazakhstan",
    areaCode: "77",
    countryCode: "KZ",
  },
  {
    countryName: "Kenya",
    areaCode: "254",
    countryCode: "KE",
  },
  {
    countryName: "Kiribati",
    areaCode: "686",
    countryCode: "KI",
  },
  {
    countryName: "Korea, Democratic People's Republic of Korea",
    areaCode: "850",
    countryCode: "KP",
  },
  {
    countryName: "Korea, Republic of South Korea",
    areaCode: "82",
    countryCode: "KR",
  },
  {
    countryName: "Kuwait",
    areaCode: "965",
    countryCode: "KW",
  },
  {
    countryName: "Kyrgyzstan",
    areaCode: "996",
    countryCode: "KG",
  },
  {
    countryName: "Laos",
    areaCode: "856",
    countryCode: "LA",
  },
  {
    countryName: "Latvia",
    areaCode: "371",
    countryCode: "LV",
  },
  {
    countryName: "Lebanon",
    areaCode: "961",
    countryCode: "LB",
  },
  {
    countryName: "Lesotho",
    areaCode: "266",
    countryCode: "LS",
  },
  {
    countryName: "Liberia",
    areaCode: "231",
    countryCode: "LR",
  },
  {
    countryName: "Libyan Arab Jamahiriya",
    areaCode: "218",
    countryCode: "LY",
  },
  {
    countryName: "Liechtenstein",
    areaCode: "423",
    countryCode: "LI",
  },
  {
    countryName: "Lithuania",
    areaCode: "370",
    countryCode: "LT",
  },
  {
    countryName: "Luxembourg",
    areaCode: "352",
    countryCode: "LU",
  },
  {
    countryName: "Macao",
    areaCode: "853",
    countryCode: "MO",
  },
  {
    countryName: "Macedonia",
    areaCode: "389",
    countryCode: "MK",
  },
  {
    countryName: "Madagascar",
    areaCode: "261",
    countryCode: "MG",
  },
  {
    countryName: "Malawi",
    areaCode: "265",
    countryCode: "MW",
  },
  {
    countryName: "Malaysia",
    areaCode: "60",
    countryCode: "MY",
  },
  {
    countryName: "Maldives",
    areaCode: "960",
    countryCode: "MV",
  },
  {
    countryName: "Mali",
    areaCode: "223",
    countryCode: "ML",
  },
  {
    countryName: "Malta",
    areaCode: "356",
    countryCode: "MT",
  },
  {
    countryName: "Marshall Islands",
    areaCode: "692",
    countryCode: "MH",
  },
  {
    countryName: "Martinique",
    areaCode: "596",
    countryCode: "MQ",
  },
  {
    countryName: "Mauritania",
    areaCode: "222",
    countryCode: "MR",
  },
  {
    countryName: "Mauritius",
    areaCode: "230",
    countryCode: "MU",
  },
  {
    countryName: "Mayotte",
    areaCode: "262",
    countryCode: "YT",
  },
  {
    countryName: "Mexico",
    areaCode: "52",
    countryCode: "MX",
  },
  {
    countryName: "Micronesia, Federated States of Micronesia",
    areaCode: "691",
    countryCode: "FM",
  },
  {
    countryName: "Moldova",
    areaCode: "373",
    countryCode: "MD",
  },
  {
    countryName: "Monaco",
    areaCode: "377",
    countryCode: "MC",
  },
  {
    countryName: "Mongolia",
    areaCode: "976",
    countryCode: "MN",
  },
  {
    countryName: "Montenegro",
    areaCode: "382",
    countryCode: "ME",
  },
  {
    countryName: "Montserrat",
    areaCode: "1664",
    countryCode: "MS",
  },
  {
    countryName: "Morocco",
    areaCode: "212",
    countryCode: "MA",
  },
  {
    countryName: "Mozambique",
    areaCode: "258",
    countryCode: "MZ",
  },
  {
    countryName: "Myanmar",
    areaCode: "95",
    countryCode: "MM",
  },
  {
    countryName: "Namibia",
    areaCode: "264",
    countryCode: "NA",
  },
  {
    countryName: "Nauru",
    areaCode: "674",
    countryCode: "NR",
  },
  {
    countryName: "Nepal",
    areaCode: "977",
    countryCode: "NP",
  },
  {
    countryName: "Netherlands",
    areaCode: "31",
    countryCode: "NL",
  },
  {
    countryName: "Netherlands Antilles",
    areaCode: "599",
    countryCode: "AN",
  },
  {
    countryName: "New Caledonia",
    areaCode: "687",
    countryCode: "NC",
  },
  {
    countryName: "New Zealand",
    areaCode: "64",
    countryCode: "NZ",
  },
  {
    countryName: "Nicaragua",
    areaCode: "505",
    countryCode: "NI",
  },
  {
    countryName: "Niger",
    areaCode: "227",
    countryCode: "NE",
  },
  {
    countryName: "Nigeria",
    areaCode: "234",
    countryCode: "NG",
  },
  {
    countryName: "Niue",
    areaCode: "683",
    countryCode: "NU",
  },
  {
    countryName: "Norfolk Island",
    areaCode: "672",
    countryCode: "NF",
  },
  {
    countryName: "Northern Mariana Islands",
    areaCode: "1670",
    countryCode: "MP",
  },
  {
    countryName: "Norway",
    areaCode: "47",
    countryCode: "NO",
  },
  {
    countryName: "Oman",
    areaCode: "968",
    countryCode: "OM",
  },
  {
    countryName: "Pakistan",
    areaCode: "92",
    countryCode: "PK",
  },
  {
    countryName: "Palau",
    areaCode: "680",
    countryCode: "PW",
  },
  {
    countryName: "Palestinian Territory, Occupied",
    areaCode: "970",
    countryCode: "PS",
  },
  {
    countryName: "Panama",
    areaCode: "507",
    countryCode: "PA",
  },
  {
    countryName: "Papua New Guinea",
    areaCode: "675",
    countryCode: "PG",
  },
  {
    countryName: "Paraguay",
    areaCode: "595",
    countryCode: "PY",
  },
  {
    countryName: "Peru",
    areaCode: "51",
    countryCode: "PE",
  },
  {
    countryName: "Philippines",
    areaCode: "63",
    countryCode: "PH",
  },
  {
    countryName: "Pitcairn",
    areaCode: "872",
    countryCode: "PN",
  },
  {
    countryName: "Poland",
    areaCode: "48",
    countryCode: "PL",
  },
  {
    countryName: "Portugal",
    areaCode: "351",
    countryCode: "PT",
  },
  {
    countryName: "Puerto Rico",
    areaCode: "1939",
    countryCode: "PR",
  },
  {
    countryName: "Qatar",
    areaCode: "974",
    countryCode: "QA",
  },
  {
    countryName: "Romania",
    areaCode: "40",
    countryCode: "RO",
  },
  {
    countryName: "Russia",
    areaCode: "7",
    countryCode: "RU",
  },
  {
    countryName: "Rwanda",
    areaCode: "250",
    countryCode: "RW",
  },
  {
    countryName: "Reunion",
    areaCode: "262",
    countryCode: "RE",
  },
  {
    countryName: "Saint Barthelemy",
    areaCode: "590",
    countryCode: "BL",
  },
  {
    countryName: "Saint Helena, Ascension and Tristan Da Cunha",
    areaCode: "290",
    countryCode: "SH",
  },
  {
    countryName: "Saint Kitts and Nevis",
    areaCode: "1869",
    countryCode: "KN",
  },
  {
    countryName: "Saint Lucia",
    areaCode: "1758",
    countryCode: "LC",
  },
  {
    countryName: "Saint Martin",
    areaCode: "590",
    countryCode: "MF",
  },
  {
    countryName: "Saint Pierre and Miquelon",
    areaCode: "508",
    countryCode: "PM",
  },
  {
    countryName: "Saint Vincent and the Grenadines",
    areaCode: "1784",
    countryCode: "VC",
  },
  {
    countryName: "Samoa",
    areaCode: "685",
    countryCode: "WS",
  },
  {
    countryName: "San Marino",
    areaCode: "378",
    countryCode: "SM",
  },
  {
    countryName: "Sao Tome and Principe",
    areaCode: "239",
    countryCode: "ST",
  },
  {
    countryName: "Saudi Arabia",
    areaCode: "966",
    countryCode: "SA",
  },
  {
    countryName: "Senegal",
    areaCode: "221",
    countryCode: "SN",
  },
  {
    countryName: "Serbia",
    areaCode: "381",
    countryCode: "RS",
  },
  {
    countryName: "Seychelles",
    areaCode: "248",
    countryCode: "SC",
  },
  {
    countryName: "Sierra Leone",
    areaCode: "232",
    countryCode: "SL",
  },
  {
    countryName: "Singapore",
    areaCode: "65",
    countryCode: "SG",
  },
  {
    countryName: "Slovakia",
    areaCode: "421",
    countryCode: "SK",
  },
  {
    countryName: "Slovenia",
    areaCode: "386",
    countryCode: "SI",
  },
  {
    countryName: "Solomon Islands",
    areaCode: "677",
    countryCode: "SB",
  },
  {
    countryName: "Somalia",
    areaCode: "252",
    countryCode: "SO",
  },
  {
    countryName: "South Africa",
    areaCode: "27",
    countryCode: "ZA",
  },
  {
    countryName: "South Sudan",
    areaCode: "211",
    countryCode: "SS",
  },
  {
    countryName: "South Georgia and the South Sandwich Islands",
    areaCode: "500",
    countryCode: "GS",
  },
  {
    countryName: "Spain",
    areaCode: "34",
    countryCode: "ES",
  },
  {
    countryName: "Sri Lanka",
    areaCode: "94",
    countryCode: "LK",
  },
  {
    countryName: "Sudan",
    areaCode: "249",
    countryCode: "SD",
  },
  {
    countryName: "Suriname",
    areaCode: "597",
    countryCode: "SR",
  },
  {
    countryName: "Svalbard and Jan Mayen",
    areaCode: "47",
    countryCode: "SJ",
  },
  {
    countryName: "Swaziland",
    areaCode: "268",
    countryCode: "SZ",
  },
  {
    countryName: "Sweden",
    areaCode: "46",
    countryCode: "SE",
  },
  {
    countryName: "Switzerland",
    areaCode: "41",
    countryCode: "CH",
  },
  {
    countryName: "Syrian Arab Republic",
    areaCode: "963",
    countryCode: "SY",
  },
  {
    countryName: "Taiwan",
    areaCode: "886",
    countryCode: "TW",
  },
  {
    countryName: "Tajikistan",
    areaCode: "992",
    countryCode: "TJ",
  },
  {
    countryName: "Tanzania, United Republic of Tanzania",
    areaCode: "255",
    countryCode: "TZ",
  },
  {
    countryName: "Thailand",
    areaCode: "66",
    countryCode: "TH",
  },
  {
    countryName: "Timor-Leste",
    areaCode: "670",
    countryCode: "TL",
  },
  {
    countryName: "Togo",
    areaCode: "228",
    countryCode: "TG",
  },
  {
    countryName: "Tokelau",
    areaCode: "690",
    countryCode: "TK",
  },
  {
    countryName: "Tonga",
    areaCode: "676",
    countryCode: "TO",
  },
  {
    countryName: "Trinidad and Tobago",
    areaCode: "1868",
    countryCode: "TT",
  },
  {
    countryName: "Tunisia",
    areaCode: "216",
    countryCode: "TN",
  },
  {
    countryName: "Turkey",
    areaCode: "90",
    countryCode: "TR",
  },
  {
    countryName: "Turkmenistan",
    areaCode: "993",
    countryCode: "TM",
  },
  {
    countryName: "Turks and Caicos Islands",
    areaCode: "1649",
    countryCode: "TC",
  },
  {
    countryName: "Tuvalu",
    areaCode: "688",
    countryCode: "TV",
  },
  {
    countryName: "Uganda",
    areaCode: "256",
    countryCode: "UG",
  },
  {
    countryName: "Ukraine",
    areaCode: "380",
    countryCode: "UA",
  },
  {
    countryName: "United Arab Emirates",
    areaCode: "971",
    countryCode: "AE",
  },
  {
    countryName: "United Kingdom",
    areaCode: "44",
    countryCode: "GB",
  },
  {
    countryName: "United States",
    areaCode: "1",
    countryCode: "US",
  },
  {
    countryName: "Uruguay",
    areaCode: "598",
    countryCode: "UY",
  },
  {
    countryName: "Uzbekistan",
    areaCode: "998",
    countryCode: "UZ",
  },
  {
    countryName: "Vanuatu",
    areaCode: "678",
    countryCode: "VU",
  },
  {
    countryName: "Venezuela, Bolivarian Republic of Venezuela",
    areaCode: "58",
    countryCode: "VE",
  },
  {
    countryName: "Vietnam",
    areaCode: "84",
    countryCode: "VN",
  },
  {
    countryName: "Virgin Islands, British",
    areaCode: "1284",
    countryCode: "VG",
  },
  {
    countryName: "Virgin Islands, U.S.",
    areaCode: "1340",
    countryCode: "VI",
  },
  {
    countryName: "Wallis and Futuna",
    areaCode: "681",
    countryCode: "WF",
  },
  {
    countryName: "Yemen",
    areaCode: "967",
    countryCode: "YE",
  },
  {
    countryName: "Zambia",
    areaCode: "260",
    countryCode: "ZM",
  },
  {
    countryName: "Zimbabwe",
    areaCode: "263",
    countryCode: "ZW",
  },
];
