<script lang="ts">
  import { onMount } from "svelte";

  import typeWrite from "@utils/typewriter";
  import { toastStore } from "@stores/toast.svelte";

  import LogoSVG from "@components/media/LogoSVG.svelte";
  import ConexusLogoSVG from "@components/media/ConexusLogoSVG.svelte";
  import QuillSVG from "@components/media/QuillSVG.svelte";
  import OpenSVG from "@components/icons/Open.svelte";

  let tagline = $state<HTMLHeadingElement>();

  const startTyping = () =>
    setTimeout(() => typeWrite(tagline!, "Brand Assets"), 1500);

  onMount(startTyping);

  const copyColor = (color: string) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        toastStore.show(`Copied ${color} to clipboard!`);
      })
      .catch(() => {
        toastStore.show("Failed to copy color.", "error");
      });
  };
</script>

<section class="flex full-height">
  <header class="flex">
    <h1 bind:this={tagline}>Brand Assets</h1>

    <ul class="flex gap-8">
      <li>
        <p>Always represent the brand with accuracy and respect.</p>
      </li>
      <li>
        <p>
          Do not imply endorsement by saying things like “Powered by DGRS”
          without approval.
        </p>
      </li>
      <li>
        <p>Do not combine our logo with other logos or elements.</p>
      </li>
      <li>
        <p>Only use assets from this page.</p>
      </li>
    </ul>
  </header>

  <div class="brand-logos container">
    <h3>Logos</h3>
    <ul class="flex gap-8">
      <li>
        <p>Use the official logos only as provided.</p>
      </li>
      <li>
        <p>Do not alter, stretch, rotate, or apply effects.</p>
      </li>
      <li>
        <p>Keep clear space equal to the height of the “D” around the logo.</p>
      </li>
      <li>
        <p>Minimum size for digital use: 32px height.</p>
      </li>
    </ul>

    <div class="logos flex-row flex-wrap">
      <div class="flex">
        <span class="flex">
          <figure class="logo">
            <LogoSVG />
          </figure>
        </span>
        <span class="flex-row">
          <p>.SVG</p>
          <a
            class="button-anchor"
            href="/brand/dgrs-logo.svg"
            download="dgrs-labs-logo"
          >
            Download
          </a>
        </span>
      </div>

      <div class="flex">
        <span class="flex">
          <figure class="conexus">
            <ConexusLogoSVG />
          </figure>
        </span>
        <span class="flex-row">
          <p>.SVG</p>
          <a
            class="button-anchor"
            href="/brand/conexus-logo.svg"
            download="conexus-logo"
          >
            Download
          </a>
        </span>
      </div>

      <div class="flex">
        <span class="flex">
          <figure class="quill">
            <QuillSVG />
          </figure>
        </span>
        <span class="flex-row">
          <p>.SVG</p>
          <a
            class="button-anchor"
            href="/brand/conexus-quill.svg"
            download="conexus-quill"
          >
            Download
          </a>
        </span>
      </div>
    </div>
    <a class="button-anchor" href="/brand/dgrs-brand-assets.zip" download>
      Download All Assets (ZIP)
    </a>
  </div>

  <div class="brand-fonts container">
    <h3>Typography</h3>
    <ul class="flex gap-8">
      <li>
        <p>Use provided weights and styles. Do not substitute fonts.</p>
      </li>
      <li>
        <p><b>Hanken Grotesk</b> → Titles & Buttons</p>
      </li>
      <li>
        <p>
          <b>Source Serif 4</b> → Paragraphs, labels, and small headings (H5)
        </p>
      </li>
    </ul>
    <div class="fonts flex-row flex-wrap">
      <div class="flex sans">
        <span class="flex-row">
          <p class="example">Aa</p>
          <span class="flex">
            <p class="name">Hanken Grotesk</p>
            <p class="caption">from Google fonts</p>
          </span>
        </span>
        <a
          class="button-anchor"
          href="https://fonts.google.com/specimen/Hanken+Grotesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Typeface
          <OpenSVG />
        </a>
      </div>

      <div class="flex serif">
        <span class="flex-row">
          <p class="example">Aa</p>
          <span class="flex">
            <p class="name">Source Serif 4</p>
            <p class="caption">from Google fonts</p>
          </span>
        </span>
        <a
          class="button-anchor"
          href="https://fonts.google.com/specimen/Source+Serif+4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Typeface
          <OpenSVG />
        </a>
      </div>
    </div>
  </div>

  <div class="brand-colors container">
    <h3>Colors</h3>
    <ul class="flex gap-8">
      <li>
        <p>Use the exact brand palette provided in the color section.</p>
      </li>
      <li>
        <p>Do not introduce unapproved colors.</p>
      </li>
      <li>
        <p>Ensure sufficient contrast for accessibility.</p>
      </li>
    </ul>
    <div class="colors flex-row flex-wrap">
      <button class="flex void-btn" onclick={() => copyColor("#33E2E6")}>
        <figure class="cyan"></figure>
        <span class="flex-row">
          <code>#33E2E6</code>
          <p>Accent color</p>
        </span>
      </button>

      <button class="flex void-btn" onclick={() => copyColor("#3875FA")}>
        <figure class="light-blue"></figure>
        <span class="flex-row">
          <code>#3875FA</code>
          <p>Accent color</p>
        </span>
      </button>

      <button class="flex void-btn" onclick={() => copyColor("#2440BD")}>
        <figure class="blue"></figure>
        <span class="flex-row">
          <code>#2440BD</code>
          <p>Primary color</p>
        </span>
      </button>

      <button class="flex void-btn" onclick={() => copyColor("#161E5F")}>
        <figure class="navy"></figure>
        <span class="flex-row">
          <code>#161E5F</code>
          <p>Primary color</p>
        </span>
      </button>

      <button class="flex void-btn" onclick={() => copyColor("#010020")}>
        <figure class="dark-blue"></figure>
        <span class="flex-row">
          <code>#010020</code>
          <p>Background color</p>
        </span>
      </button>
    </div>
  </div>
</section>

<style lang="scss">
  @use "/src/styles/mixins" as *;

  section {
    @include respond-up(quad-hd) {
      flex-flow: row wrap;
      max-width: calc(100% - 200px);
      align-items: flex-start;

      header {
        width: 100%;
      }

      div {
        margin-inline: 0;

        &.brand-fonts {
          > div {
            flex-direction: column;

            div {
              width: 100%;
            }
          }
        }
      }
    }

    .brand-logos {
      > div {
        div {
          gap: 0;
          border-radius: 0.5rem;
          fill: $dark-blue;
          @include light-blue(0.1);
          @include gray-border;

          figure {
            width: 100%;

            &.quill {
              width: 50%;
            }

            @include respond-up(tablet) {
              width: auto;
              height: 5rem;
            }
          }

          span {
            width: 100%;

            &.flex {
              padding: 2rem;
            }

            &.flex-row {
              padding: 1rem;
              justify-content: space-between;
              border-bottom-left-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
              @include gray(0.25);
            }

            p {
              font-weight: bold;
              font-family: $font-sans;
            }
          }

          &:hover {
            fill: $light-blue;
          }
        }

        @include respond-up(small-desktop) {
          max-width: 50rem;
        }
      }
    }

    .brand-fonts {
      > div {
        p {
          font-family: inherit;
          transition: color 0.3s ease-in-out;
        }

        div {
          width: 100%;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: left;
          @include light-blue(0.1);
          @include dark-blue(1, text);
          @include gray-border;

          &.sans {
            font-family: $font-sans;
          }

          &.serif {
            font-family: $font-serif;
          }

          @include respond-up(tablet) {
            width: auto;
          }

          a {
            font-family: $font-sans;
            stroke: $white;
          }

          span {
            .example {
              font-size: 5rem;
              font-weight: bold;
            }

            span {
              align-items: flex-start;
              gap: 0;

              .name {
                font-size: 1.5rem;
                font-weight: 600;
              }

              .caption {
                opacity: 0.5;
              }
            }
          }

          &:hover {
            @include light-blue(1, text);
          }
        }
      }
    }

    .brand-colors {
      @include respond-up(full-hd) {
        max-width: calc(100% - 200px);
      }

      div {
        p,
        code {
          transition: color 0.3s ease-in-out;
        }

        button {
          width: 100%;
          border-radius: 0.5rem;
          gap: 0;
          cursor: pointer;
          @include light-blue(0.1);
          @include gray-border;

          @include respond-up(tablet) {
            width: 20rem;
          }

          &:hover {
            @include light-blue(1, text);
          }

          figure {
            width: 100%;
            height: 10rem;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;

            &.cyan {
              @include cyan;
            }

            &.light-blue {
              @include light-blue;
            }

            &.blue {
              @include blue;
            }

            &.navy {
              @include navy;
            }

            &.dark-blue {
              @include dark-blue;
            }
          }

          span {
            width: 100%;
            justify-content: space-between;
            padding: 1rem;
          }
        }
      }
    }
  }

  :global(body.dark) {
    .brand-logos {
      > div {
        div {
          fill: $white;
          @include navy;

          &:hover {
            fill: $cyan;
          }
        }
      }
    }

    .brand-fonts {
      > div {
        div {
          @include white-txt;
          @include navy;

          a {
            stroke: $dark-blue;
          }

          &:hover {
            @include cyan(1, text);
          }
        }
      }
    }

    .brand-colors {
      div {
        button {
          @include white-txt;
          @include navy;

          &:hover {
            @include cyan(1, text);
          }
        }
      }
    }
  }
</style>
