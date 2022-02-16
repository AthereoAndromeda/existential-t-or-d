<script lang="ts">
  import { getRandomElement } from "../utils/getRandomElement";
  import { createEventDispatcher } from "svelte";
  import dares from "../store/dares";

  const dispatch = createEventDispatcher<{ message: string }>();
  let possibleValues = $dares;

  function getDare() {
    const text = getRandomElement(possibleValues);
    possibleValues = possibleValues.filter((val) => val !== text);

    if (possibleValues.length <= 0) {
      possibleValues = $dares;
    }

    dispatch("message", text);
  }
</script>

<button on:click={getDare}> Dare </button>

<style lang="scss">
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;

    &:focus {
      border: 2px solid #ff3e00;
    }

    &:active {
      background-color: rgba(255, 62, 0, 0.2);
    }
  }
</style>
