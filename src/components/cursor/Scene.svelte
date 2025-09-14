<script lang="ts">
  import { T } from "@threlte/core";
  import CursorLine from "./CursorLine.svelte";
  import { Vector3 } from "three";

  // cursor position in world space
  let cursor = new Vector3(0, 0, 0);

  // bind the actual THREE camera with bind:ref
  let camera = $state<any>(null);

  // temp vec
  const tmp = new Vector3();

  function handleMove(ev: PointerEvent) {
    if (!camera) return;

    // full-window mapping (Canvas is fixed full-screen)
    const w = Math.max(1, window.innerWidth);
    const h = Math.max(1, window.innerHeight);
    const ndcX = (ev.clientX / w) * 2 - 1;
    const ndcY = -(ev.clientY / h) * 2 + 1;

    // unproject from NDC to world
    tmp.set(ndcX, ndcY, 0).unproject(camera);
    tmp.z = 0;

    if (Number.isFinite(tmp.x) && Number.isFinite(tmp.y)) {
      cursor.copy(tmp);
    }
  }
</script>

<svelte:window on:pointermove={handleMove} />

<!-- Bind the THREE camera (not the Svelte component) -->
<T.OrthographicCamera makeDefault bind:ref={camera} position.z={10} zoom={50} />

<CursorLine {cursor} />
