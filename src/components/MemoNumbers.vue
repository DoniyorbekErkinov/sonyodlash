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
        "value": ""
    },
    {
        "order": "37",
        "value": ""
    },
    {
        "order": "38",
        "value": ""
    },
    {
        "order": "39",
        "value": ""
    },
    {
        "order": "40",
        "value": ""
    },
    {
        "order": "41",
        "value": ""
    },
    {
        "order": "42",
        "value": ""
    },
    {
        "order": "43",
        "value": ""
    },
    {
        "order": "44",
        "value": ""
    },
    {
        "order": "45",
        "value": ""
    },
    {
        "order": "46",
        "value": ""
    },
    {
        "order": "47",
        "value": ""
    },
    {
        "order": "48",
        "value": ""
    },
    {
        "order": "49",
        "value": ""
    },
    {
        "order": "50",
        "value": ""
    },
    {
        "order": "51",
        "value": ""
    },
    {
        "order": "52",
        "value": ""
    },
    {
        "order": "53",
        "value": ""
    },
    {
        "order": "54",
        "value": ""
    },
    {
        "order": "55",
        "value": ""
    },
    {
        "order": "56",
        "value": ""
    },
    {
        "order": "57",
        "value": ""
    },
    {
        "order": "58",
        "value": ""
    },
    {
        "order": "59",
        "value": ""
    },
    {
        "order": "60",
        "value": ""
    },
    {
        "order": "61",
        "value": ""
    },
    {
        "order": "62",
        "value": ""
    },
    {
        "order": "63",
        "value": ""
    },
    {
        "order": "64",
        "value": ""
    },
    {
        "order": "65",
        "value": ""
    },
    {
        "order": "66",
        "value": ""
    },
    {
        "order": "67",
        "value": ""
    },
    {
        "order": "68",
        "value": ""
    },
    {
        "order": "69",
        "value": ""
    },
    {
        "order": "70",
        "value": ""
    },
    {
        "order": "71",
        "value": ""
    },
    {
        "order": "72",
        "value": ""
    },
    {
        "order": "73",
        "value": ""
    },
    {
        "order": "74",
        "value": ""
    },
    {
        "order": "75",
        "value": ""
    },
    {
        "order": "76",
        "value": ""
    },
    {
        "order": "77",
        "value": ""
    },
    {
        "order": "78",
        "value": ""
    },
    {
        "order": "79",
        "value": ""
    },
    {
        "order": "80",
        "value": ""
    },
    {
        "order": "81",
        "value": ""
    },
    {
        "order": "82",
        "value": ""
    },
    {
        "order": "83",
        "value": ""
    },
    {
        "order": "84",
        "value": ""
    },
    {
        "order": "85",
        "value": ""
    },
    {
        "order": "86",
        "value": ""
    },
    {
        "order": "87",
        "value": ""
    },
    {
        "order": "88",
        "value": ""
    },
    {
        "order": "89",
        "value": ""
    },
    {
        "order": "90",
        "value": ""
    },
    {
        "order": "91",
        "value": ""
    },
    {
        "order": "92",
        "value": ""
    },
    {
        "order": "93",
        "value": ""
    },
    {
        "order": "94",
        "value": ""
    },
    {
        "order": "95",
        "value": ""
    },
    {
        "order": "96",
        "value": ""
    },
    {
        "order": "97",
        "value": ""
    },
    {
        "order": "98",
        "value": ""
    },
    {
        "order": "99",
        "value": ""
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
