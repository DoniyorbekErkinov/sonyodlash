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

    return {
        hrk
    }
}