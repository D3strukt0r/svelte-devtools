<script>
  import { startPicker, stopPicker, selectedNode } from '../store';
  import Button from './Button.svelte';

  let active = false;
  let unsub = () => {};

  function click() {
    if (active) {
      active = false;
      stopPicker();
      return;
    }

    unsub();
    unsub = selectedNode.subscribe(node => {
      if (!active) return;
      active = false;
      unsub();

      setTimeout(
        () => node.dom && node.dom.scrollIntoView({ block: 'center' }),
        120
      );
    });
    active = true;
    startPicker();
  }
</script>

<Button on:click={click} {active}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path
      d="M3 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.6a1 1 0 1 1 0 2H3a3 3 0 0
      1-3-3V4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2.6a1 1 0 1 1-2 0V4a1 1 0 0
      0-1-1H3z"
    />
    <path
      d="M12.87 14.6c.3.36.85.4 1.2.1.36-.31.4-.86.1-1.22l-1.82-2.13 2.42-1a.3.3
      0 0 0 .01-.56L7.43 6.43a.3.3 0 0 0-.42.35l2.13 7.89a.3.3 0 0 0
      .55.07l1.35-2.28 1.83 2.14z"
    />
  </svg>
</Button>
