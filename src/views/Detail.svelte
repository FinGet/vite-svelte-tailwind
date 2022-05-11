<script>
  import {querystring} from 'svelte-spa-router';
  export let params = {}
</script>

<div>
  <p>params id is {params.id}</p> 
  <p>query is {$querystring}</p>
</div>