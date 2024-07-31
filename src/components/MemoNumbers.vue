<template>
    <div class="w-full h-full">
        <div class="flex flex-wrap gap-2 mt-4">
            <div v-for="(value, key) in majorLearnData" :key="key" class="bg-green-600 opacity-70 text-white tracking-wider text-xl p-2 rounded-md shadow-md">
                <div>{{ value.order }} -- {{ value.value }}</div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
const majorLearnData = ref([
    {
        "order": "00",
        "value": "Zag'izg'on"
    },
    {
        "order": "01",
        "value": "zontik"
    },
    {
        "order": "02",
        "value": "zanjir"
    },
    {
        "order": "03",
        "value": "zombi"
    },
    {
        "order": "04",
        "value": "zargar"
    },
    {
        "order": "05",
        "value": "zil"
    },
    {
        "order": "06",
        "value": "zambil"
    },
    {
        "order": "07",
        "value": "zakovat"
    },
    {
        "order": "08",
        "value": "zefir"
    },
    {
        "order": "09",
        "value": "zoolog"
    },
    {
        "order": "10",
        "value": "tarozi"
    },
    {
        "order": "11",
        "value": "to'ti"
    },
    {
        "order": "12",
        "value": "tunka"
    },
    {
        "order": "13",
        "value": "temir"
    },
    {
        "order": "14",
        "value": "tarvuz"
    },
    {
        "order": "15",
        "value": "tol"
    },
    {
        "order": "16",
        "value": "tabletka"
    },
    {
        "order": "17",
        "value": "tikan"
    },
    {
        "order": "18",
        "value": "tufli"
    },
    {
        "order": "19",
        "value": "tigr"
    },
    {
        "order": "20",
        "value": "nayza"
    },
    {
        "order": "21",
        "value": "nefrit"
    },
    {
        "order": "22",
        "value": "non"
    },
    {
        "order": "23",
        "value": "namatak"
    },
    {
        "order": "24",
        "value": "narvon"
    },
    {
        "order": "25",
        "value": "nil"
    },
    {
        "order": "26",
        "value": "noutbuk"
    },
    {
        "order": "27",
        "value": "nok"
    },
    {
        "order": "28",
        "value": "nefrit"
    },
    {
        "order": "29",
        "value": "negir"
    },
    {
        "order": "30",
        "value": "muz"
    },
    {
        "order": "31",
        "value": "mator"
    },
    {
        "order": "32",
        "value": "manti"
    },
    {
        "order": "33",
        "value": "maymun"
    },
    {
        "order": "34",
        "value": "marker"
    },
    {
        "order": "35",
        "value": "mol"
    },
    {
        "order": "36",
        "value": "MaktaB"
    },
    {
        "order": "37",
        "value": "MaKaron"
    },
    {
        "order": "38",
        "value": "MikraFon"
    },
    {
        "order": "39",
        "value": "MaGnit"
    },
    {
        "order": "40",
        "value": "RaZetka"
    },
    {
        "order": "41",
        "value": "RaTaTuy"
    },
    {
        "order": "42",
        "value": "RaNda"
    },
    {
        "order": "43",
        "value": "Ro'Mol"
    },
    {
        "order": "44",
        "value": "aRRa"
    },
    {
        "order": "45",
        "value": "RuL"
    },
    {
        "order": "46",
        "value": "RoBot"
    },
    {
        "order": "47",
        "value": "RaKeta"
    },
    {
        "order": "48",
        "value": "RaFiqa"
    },
    {
        "order": "49",
        "value": "RichaG"
    },
    {
        "order": "50",
        "value": "LaZer"
    },
    {
        "order": "51",
        "value": "LaTta"
    },
    {
        "order": "52",
        "value": "LeNta"
    },
    {
        "order": "53",
        "value": "LiMon"
    },
    {
        "order": "54",
        "value": "LoR"
    },
    {
        "order": "55",
        "value": "LoLa"
    },
    {
        "order": "56",
        "value": "LaB"
    },
    {
        "order": "57",
        "value": "LaylaK"
    },
    {
        "order": "58",
        "value": "LiFt"
    },
    {
        "order": "59",
        "value": "LaGan"
    },
    {
        "order": "60",
        "value": "BenZin"
    },
    {
        "order": "61",
        "value": "BuTilka"
    },
    {
        "order": "62",
        "value": "BaNan"
    },
    {
        "order": "63",
        "value": "BaMbuk"
    },
    {
        "order": "64",
        "value": "BaRg"
    },
    {
        "order": "65",
        "value": "BaLkon"
    },
    {
        "order": "66",
        "value": "BaraBan"
    },
    {
        "order": "67",
        "value": "BaKal"
    },
    {
        "order": "68",
        "value": "BuFet"
    },
    {
        "order": "69",
        "value": "BeGimot"
    },
    {
        "order": "70",
        "value": "Ko'Za"
    },
    {
        "order": "71",
        "value": "KeTmon"
    },
    {
        "order": "72",
        "value": "KoN"
    },
    {
        "order": "73",
        "value": "KeMa"
    },
    {
        "order": "74",
        "value": "KaRate"
    },
    {
        "order": "75",
        "value": "KaLit"
    },
    {
        "order": "76",
        "value": "KuBik"
    },
    {
        "order": "77",
        "value": "KaKtel"
    },
    {
        "order": "78",
        "value": "KaFan"
    },
    {
        "order": "79",
        "value": "KapGir"
    },
    {
        "order": "80",
        "value": "FaZo"
    },
    {
        "order": "81",
        "value": "FuTzal"
    },
    {
        "order": "82",
        "value": "FeN"
    },
    {
        "order": "83",
        "value": "FilM"
    },
    {
        "order": "84",
        "value": "FaRtug"
    },
    {
        "order": "85",
        "value": "FiL"
    },
    {
        "order": "86",
        "value": "FaBrika"
    },
    {
        "order": "87",
        "value": "FiziK"
    },
    {
        "order": "88",
        "value": "FotograF"
    },
    {
        "order": "89",
        "value": "FurGon"
    },
    {
        "order": "90",
        "value": "GaZeta"
    },
    {
        "order": "91",
        "value": "GiTara"
    },
    {
        "order": "92",
        "value": "GaNtel"
    },
    {
        "order": "93",
        "value": "GuMMa"
    },
    {
        "order": "94",
        "value": "GaRov"
    },
    {
        "order": "95",
        "value": "GiLos"
    },
    {
        "order": "96",
        "value": "GerB"
    },
    {
        "order": "97",
        "value": "GeKtar"
    },
    {
        "order": "98",
        "value": "GraFin"
    },
    {
        "order": "99",
        "value": "GuGurt"
    }
]);
</script>

<style scoped>
.list-container {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.list-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
