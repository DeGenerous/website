<script lang="ts">
  import { T, useTask } from "@threlte/core";
  import { MeshLineGeometry, MeshLineMaterial } from "@threlte/extras";
  import { Vector3 } from "three";
  import { darkTheme } from "@stores/theme.svelte";

  let { cursor }: { cursor: Vector3 } = $props();
  let color = $darkTheme ? "#33e2e6" : "#3875fa";

  // Higher resolution for smooth curves
  const count = 50;

  let front = $state<Vector3[]>(Array.from({ length: count }, () => new Vector3()));
  let back = $state<Vector3[]>(Array.from({ length: count }, () => new Vector3()));

  // Head filter to avoid hard jumps when the mouse moves fast
  const head = new Vector3();

  // Tunables:
  // - Bigger = snappier; smaller = floatier
  const K_HEAD = 200; // how fast the head follows the cursor
  const K_TRAIL = 150; // how fast each segment follows the previous one

  useTask((dt) => {
    // frame-rate–independent smoothing: alpha in [0..1)
    const aHead = 1 - Math.exp(-K_HEAD * dt);
    const aTrail = 1 - Math.exp(-K_TRAIL * dt);

    // smooth the head toward the real cursor first
    head.lerp(cursor, aHead);

    // write head, then propagate down the chain
    back[0].copy(head);
    for (let i = 1; i < count; i++) {
      back[i].lerp(back[i - 1], aTrail);
    }

    // swap buffers so geometry sees a new reference each frame
    const tmp = front;
    front = back;
    back = tmp;
  });
</script>

<T.Mesh>
  <MeshLineGeometry points={front} shape="taper" />
  <MeshLineMaterial width={4} {color} attenuate={false} />
</T.Mesh>
