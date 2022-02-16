<script lang="ts">
  import { getRandomElement } from "../utils/getRandomElement";
  import { createEventDispatcher } from "svelte";
  import truths from "../store/truth";

  const dispatch = createEventDispatcher<{ message: string }>();
  let possibleValues = $truths;

  function getTruth() {
    const text = getRandomElement($truths);
    possibleValues = possibleValues.filter((val) => val !== text);

    if (possibleValues.length <= 0) {
      possibleValues = $truths;
    }

    dispatch("message", text);
  }
</script>

<button on:click={getTruth}> Truth </button>

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
