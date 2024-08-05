import {ref} from "vue"

export const useMainComposible = () => {
    const hrk = ref({
        z: 0,
        t: 1,
        n: 2,
        m: 3,
        r: 4,
        l: 5,
        b: 6,
        k: 7,
        f: 8,
        g: 9
    })

    const majorLearnData = ref([
        {
            "order": "00",
            "value": "Zag'iZg'on",
            location: "Katta darvoza"
        },
        {
            "order": "01",
            "value": "ZonTik",
            location: "Eshik"
        },
        {
            "order": "02",
            "value": "ZaNjir",
            location: "FaceID"
        },
        {
            "order": "03",
            "value": "ZoMbi",
            location: "Daraxt"
        },
        {
            "order": "04",
            "value": "ZaR",
            location: "Suv sepgich"
        },
        {
            "order": "05",
            "value": "ZiL",
            location: "Oyna eshik"
        },
        {
            "order": "06",
            "value": "ZamBil",
            location: "3 talik FaceId"
        },
        {
            "order": "07",
            "value": "ZaKovat",
            location: "Stol tennis"
        },
        {
            "order": "08",
            "value": "ZeFir",
            location: "Shit"
        },
        {
            "order": "09",
            "value": "ZooloG",
            location: "Gardirob"
        },
        {
            "order": "10",
            "value": "TaroZi",
            location: "Konditsaner kontroller"
        },
        {
            "order": "11",
            "value": "To'Ti",
            location: "Ish joyim"
        },
        {
            "order": "12",
            "value": "TuNka",
            location: "Kutibxona"
        },
        {
            "order": "13",
            "value": "TeMir",
            location: "Ovqatlanish joyi"
        },
        {
            "order": "14",
            "value": "TaRvuz",
            location: "Xolodilnik"
        },
        {
            "order": "15",
            "value": "ToL",
            location: "Mikravalnovka"
        },
        {
            "order": "16",
            "value": "TaBletka",
            location: "Cooler"
        },
        {
            "order": "17",
            "value": "TiKon",
            location: "Server"
        },
        {
            "order": "18",
            "value": "TuFli",
            location: "Qabulxona"
        },
        {
            "order": "19",
            "value": "TiGr",
            location: "Rakvina tualet"
        },
        {
            "order": "20",
            "value": "nayza",
            location: ""
        },
        {
            "order": "21",
            "value": "nefrit",
            location: ""
        },
        {
            "order": "22",
            "value": "non",
            location: ""
        },
        {
            "order": "23",
            "value": "namatak",
            location: ""
        },
        {
            "order": "24",
            "value": "narvon",
            location: ""
        },
        {
            "order": "25",
            "value": "nil",
            location: ""
        },
        {
            "order": "26",
            "value": "noutbuk",
            location: ""
        },
        {
            "order": "27",
            "value": "nok",
            location: ""
        },
        {
            "order": "28",
            "value": "nefrit",
            location: ""
        },
        {
            "order": "29",
            "value": "negir",
            location: ""
        },
        {
            "order": "30",
            "value": "muz",
            location: ""
        },
        {
            "order": "31",
            "value": "mator",
            location: ""
        },
        {
            "order": "32",
            "value": "manti",
            location: ""
        },
        {
            "order": "33",
            "value": "maymun",
            location: ""
        },
        {
            "order": "34",
            "value": "marker",
            location: ""
        },
        {
            "order": "35",
            "value": "mol",
            location: ""
        },
        {
            "order": "36",
            "value": "MaktaB",
            location: ""
        },
        {
            "order": "37",
            "value": "MaKaron",
            location: ""
        },
        {
            "order": "38",
            "value": "MikraFon",
            location: ""
        },
        {
            "order": "39",
            "value": "MaGnit",
            location: ""
        },
        {
            "order": "40",
            "value": "RaZetka",
            location: ""
        },
        {
            "order": "41",
            "value": "RaTaTuy",
            location: ""
        },
        {
            "order": "42",
            "value": "RaNda",
            location: ""
        },
        {
            "order": "43",
            "value": "Ro'Mol",
            location: ""
        },
        {
            "order": "44",
            "value": "aRRa",
            location: ""
        },
        {
            "order": "45",
            "value": "RuL",
            location: ""
        },
        {
            "order": "46",
            "value": "RoBot",
            location: ""
        },
        {
            "order": "47",
            "value": "RaKeta",
            location: ""
        },
        {
            "order": "48",
            "value": "RaFiqa",
            location: ""
        },
        {
            "order": "49",
            "value": "RichaG",
            location: ""
        },
        {
            "order": "50",
            "value": "LaZer",
            location: ""
        },
        {
            "order": "51",
            "value": "LaTta",
            location: ""
        },
        {
            "order": "52",
            "value": "LeNta",
            location: ""
        },
        {
            "order": "53",
            "value": "LiMon",
            location: ""
        },
        {
            "order": "54",
            "value": "LoR",
            location: ""
        },
        {
            "order": "55",
            "value": "LoLa",
            location: ""
        },
        {
            "order": "56",
            "value": "LaB",
            location: ""
        },
        {
            "order": "57",
            "value": "LaylaK",
            location: ""
        },
        {
            "order": "58",
            "value": "LiFt",
            location: ""
        },
        {
            "order": "59",
            "value": "LaGan",
            location: ""
        },
        {
            "order": "60",
            "value": "BenZin",
            location: ""
        },
        {
            "order": "61",
            "value": "BuTilka",
            location: ""
        },
        {
            "order": "62",
            "value": "BaNan",
            location: ""
        },
        {
            "order": "63",
            "value": "BaMbuk",
            location: ""
        },
        {
            "order": "64",
            "value": "BaRg",
            location: ""
        },
        {
            "order": "65",
            "value": "BaLkon",
            location: ""
        },
        {
            "order": "66",
            "value": "BaraBan",
            location: ""
        },
        {
            "order": "67",
            "value": "BaKal",
            location: ""
        },
        {
            "order": "68",
            "value": "BuFet",
            location: ""
        },
        {
            "order": "69",
            "value": "BeGimot",
            location: ""
        },
        {
            "order": "70",
            "value": "Ko'Za",
            location: ""
        },
        {
            "order": "71",
            "value": "KeTmon",
            location: ""
        },
        {
            "order": "72",
            "value": "KoN",
            location: ""
        },
        {
            "order": "73",
            "value": "KeMa",
            location: ""
        },
        {
            "order": "74",
            "value": "KaRate",
            location: ""
        },
        {
            "order": "75",
            "value": "KaLit",
            location: ""
        },
        {
            "order": "76",
            "value": "KuBik",
            location: ""
        },
        {
            "order": "77",
            "value": "KaKtel",
            location: ""
        },
        {
            "order": "78",
            "value": "KaFan",
            location: ""
        },
        {
            "order": "79",
            "value": "KapGir",
            location: ""
        },
        {
            "order": "80",
            "value": "FaZo",
            location: ""
        },
        {
            "order": "81",
            "value": "FuTzal",
            location: ""
        },
        {
            "order": "82",
            "value": "FeN",
            location: ""
        },
        {
            "order": "83",
            "value": "FilM",
            location: ""
        },
        {
            "order": "84",
            "value": "FaRtug",
            location: ""
        },
        {
            "order": "85",
            "value": "FiL",
            location: ""
        },
        {
            "order": "86",
            "value": "FaBrika",
            location: ""
        },
        {
            "order": "87",
            "value": "FiziK",
            location: ""
        },
        {
            "order": "88",
            "value": "FotograF",
            location: ""
        },
        {
            "order": "89",
            "value": "FurGon",
            location: ""
        },
        {
            "order": "90",
            "value": "GaZeta",
            location: ""
        },
        {
            "order": "91",
            "value": "GiTara",
            location: ""
        },
        {
            "order": "92",
            "value": "GaNtel",
            location: ""
        },
        {
            "order": "93",
            "value": "GuMMa",
            location: ""
        },
        {
            "order": "94",
            "value": "GaRov",
            location: ""
        },
        {
            "order": "95",
            "value": "GiLos",
            location: ""
        },
        {
            "order": "96",
            "value": "GerB",
            location: ""
        },
        {
            "order": "97",
            "value": "GeKtar",
            location: ""
        },
        {
            "order": "98",
            "value": "GraFin",
            location: ""
        },
        {
            "order": "99",
            "value": "GuGurt",
            location: ""
        }
    ]);
    

    return {
        hrk,
        majorLearnData
    }
}