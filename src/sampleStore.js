import {ref, computed} from 'vue'
import {defineStore, acceptHMRUpdate} from 'pinia'

import {gql, useQuery} from '@urql/vue';

const ids = [
    "cGVvcGxlOjE=",
    "cGVvcGxlOjI=",
    "cGVvcGxlOjM=",
    "cGVvcGxlOjQ=",
    "cGVvcGxlOjU=",
    "cGVvcGxlOjY=",
    "cGVvcGxlOjc="
]

export const useSampleStore = defineStore('sample', () => {
    const index = ref(0)
    const {data} = useQuery({
        query: gql`query($id: ID!) { person(id: $id){ name }}`,
        variables: computed(() => ({id: ids[index.value]}))
    })
    const name = computed(() => data.value?.person.name || "not xxx")
    return {index, name}
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSampleStore, import.meta.hot))
}