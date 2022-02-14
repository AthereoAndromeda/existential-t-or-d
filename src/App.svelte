<script lang="ts">
  import logo from "./assets/svelte.png";
  import DareButton from "./lib/DareButton.svelte";
  import TheBlockquote from "./lib/TheBlockquote.svelte";
  import TruthButton from "./lib/TruthButton.svelte";

  let text = "Choose either one!";

  function handleMessage(event: CustomEvent<string>) {
    text = event.detail;
  }
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Existential Truth-or-Dare!</h1>
  <p>Truth or dare with more spice!</p>

  <TruthButton on:message={handleMessage} />
  <DareButton on:message={handleMessage} />

  <!-- <h2>{text}</h2> -->
  <TheBlockquote>
    {text}
  </TheBlockquote>
</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
