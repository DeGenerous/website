<script lang="ts">
  import { T, useTask } from "@threlte/core";
  import { MeshLineGeometry, MeshLineMaterial } from "@threlte/extras";
  import { Vector3 } from "three";
  import { darkTheme } from "@stores/theme.svelte";

  let { cursor }: { cursor: Vector3 } = $props();
  let color = $darkTheme ? "#33e2e6" : "#3875fa";

  const count = 25;
  let front = $state<Vector3[]>(
    Array.from({ length: count }, () => new Vector3())
  );
  let back = $state<Vector3[]>(
    Array.from({ length: count }, () => new Vector3())
  );

  useTask((dt) => {
    // head
    back[0].copy(cursor);

    // smooth trail
    const alpha = Math.pow(1e-6, dt);
    for (let i = 1; i < count; i++) back[i].lerp(back[i - 1], alpha);

    // swap buffers
    const temp = front;
    front = back;
    back = temp;
  });
</script>

<T.Mesh>
  <MeshLineGeometry points={front} shape="taper" />
  <MeshLineMaterial width={4} {color} attenuate={false} />
</T.Mesh>
