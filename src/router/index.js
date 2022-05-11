import {wrap} from 'svelte-spa-router/wrap'
import List from '@/views/List.svelte'

export default {
  '/list': List,
  '/detail/:id': wrap({
    asyncComponent: () => import('@/views/Detail.svelte')
  })
}