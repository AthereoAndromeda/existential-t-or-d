<script lang="ts">
  //   export let author: string;
</script>

<blockquote>
  <slot />
  <!-- <span>{author}</span> -->
</blockquote>

<style lang="scss">
  blockquote {
    font-size: 1.4em;
    width: 60%;
    margin: 50px auto;
    font-family: "Open Sans";
    font-style: italic;
    color: #555555;
    padding: 1.2em 30px 1.2em 75px;
    border-left: 8px solid #78c0a8;
    line-height: 1.6;
    position: relative;
    background: #ededed;

    &::before {
      font-family: Arial;
      content: "\201C";
      color: #78c0a8;
      font-size: 4em;
      position: absolute;
      left: 10px;
      top: -10px;
    }

    &::after {
      content: "";
    }

    // span {
    //   display: block;
    //   color: #333333;
    //   font-style: normal;
    //   font-weight: bold;
    //   margin-top: 1em;
    // }
  }
</style>
