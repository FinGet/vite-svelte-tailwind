<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Router, {link} from 'svelte-spa-router';
  import routes from './router/index.js'
  import Toasts from '@/components/Toast/Toasts.svelte';
  import {addToast} from '@/components/Toast/toastStore.js';
  const handleToast = () => {
    addToast('hello world')
  }
</script>

<main>
  <Router {routes} />
  
  <a href="javascript;" class="font-medium text-xl underline text-red-400" use:link={'/list'}>To List</a>
  <a href="javascript;" class="font-medium text-xl underline text-red-400" use:link={'/detail/1?name=finget'}>To Detail</a>

  <div class="p-4 bg-gray-600 w-1/2 rounded text-white mx-auto active:opacity-70" on:click={handleToast}>消息提示</div>
  
  <!-- <img src={logo} alt="Svelte Logo" /> -->
  <h1>Hello world!</h1>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
  <Toasts/>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
