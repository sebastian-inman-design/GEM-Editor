<template>
  <router-view/>
</template>

<style lang="scss">
:root {

  /** Global Variables */
  --system-scrollbar-width: 14px;
  --editor-rulers-size: 20px;
  --editor-sidebar-width: 273px;
  --system-frame-padding: 24px;
  --system-toolbar-title-font-size: 12px;
  --system-font-family: "Poppins", sans-serif;
  --system-font-size: 16px;
  --system-toolbar-padding: 10px;
  --editor-toolbar-width: 42px;
  --editor-toolbar-padding: 7px;
  --editor-toolbar-button-size: calc(var(--editor-toolbar-width) - calc(var(--editor-toolbar-padding) * 2));
  --editor-toolbar-icon-size: 16px;
  --editor-rulers-size: 24px;

  /**
   * Global Color Variables.
   **/

  /** System Colors */
  --system-scrollbar-background: #2D2D2D;
  --system-scrollbar-handle: #4B4B4B;
  --system-accent-color: #FFAD21;
  --system-selection-color: #FFBB49;
  --system-toolbar-background-01: #363636;
  --system-toolbar-background-02: #2D2D2D;
  --system-toolbar-background-gradient: linear-gradient(var(--system-toolbar-background-01), var(--system-toolbar-background-02));
  --system-frame-color: #2D2D2D;
  --system-background-color: #1F1F1F;
  --system-toolbar-title-color: #E2E2E2;

  /** Fieldset Variables */
  --fieldset-background-color: #343434;
  --fieldset-border-color: #575757;

  /** Input Variables */
  --input-background-color: #2D2D2D;
  --input-highlight-color: #494949;
  --input-shadow-color: #282828;
  --input-border-color: #222222;
  --input-text-color: #E2E2E2;
  --input-border-radius: 1px;
  --input-font-size: 9px;
  --input-padding: 8px;
  --input-height: 24px;

  /** Select Variables */
  --select-background-color: #363636;

  --inactive-icon-color: #989898;
  --inactive-text-color: #6F6F6F;

  /** Editor Variables */
  --editor-grid-color: #2D2D2D;
  --editor-border-color: #1C1C1C;
  --editor-rulers-background: #343434;
  --editor-rulers-dashes: #484848;

  /** Sidebar Variables */
  --sidebar-tab-background-01: #2D2D2D;
  --sidebar-tab-background-02: #272727;
  --sidebar-tab-background-gradient: linear-gradient(var(--sidebar-tab-background-01), var(--sidebar-tab-background-02));
  --sidebar-panel-background: #292929;
  --sidebar-panel-header-footer: #383838;

  /** Prompt Variables */
  --prompt-background-color: #2D2D2D;
  --prompt-title-gradient: var(--system-toolbar-background-gradient);
  --prompt-border-color-outside: #010101;
  --prompt-border-color-inside: #575757;

}

*,
*::before,
*::after {
  backface-visibility: hidden;
  letter-spacing: 0.365px;
  box-sizing: border-box;
  user-select: none;
  outline: none;
}

::-webkit-scrollbar {
  width: var(--system-scrollbar-width);
}

::-webkit-scrollbar-track {
  background-color: var(--system-scrollbar-background);
}

::-webkit-scrollbar-corner {
  background-color: var(--system-scrollbar-background);
}

::-webkit-scrollbar-thumb {
    background-color: var(--system-scrollbar-handle);
    border: 3px solid transparent;
    background-clip: content-box;
    border-radius: 1000px;
}

input[type=number]::-webkit-inner-spin-button {
  appearance: none;
}

::selection {
  background-color: var(--system-selection-color);
  color: #FFFFFF;
}

html, body {
  background-color: var(--system-frame-color);
  overflow: hidden;
  height: 100vw;
  width: 100vw;
  padding: 0;
  margin: 0;
}

html {
  font-family: var(--system-font-family);
  font-size: var(--system-font-size);
}

[aria-hidden]:not(svg) {
  pointer-events: none !important;
  visibility: hidden !important;
  user-select: none !important;
  display: none !important;
}

fieldset {
  background-color: var(--fieldset-background-color);
  border: 1px solid var(--fieldset-border-color);
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  padding: 16px 32px;
  display: flex;
  legend {
    font-size: var(--input-font-size);
    color: var(--input-text-color);
    padding-right: 6px;
    margin-left: -22px;
    padding-left: 6px;
  }
  + fieldset {
    margin-top: 16px;
  }
}

.field {
  align-items: center;
  flex-direction: row;
  display: flex;
  small {
    font-size: var(--input-font-size);
    color: var(--inactive-text-color);
    margin-left: 16px;
    flex: 1 0 auto;
  }
  + .field {
    margin-top: 8px;
  }
}

label {
  font-size: var(--input-font-size);
  color: var(--input-text-color);
  flex-direction: row;
  flex: 0 1 auto;
  display: flex;
  width: auto;
  &.full-width {
    flex: 1 0 auto;
  }
  &::before {
    content: attr(data-text);
    height: var(--input-height);
    justify-content: flex-end;
    display: inline-flex;
    align-items: center;
    text-align: right;
    margin-right: 8px;
    max-width: 64px;
    flex: 1 0 64px;
    width: 64px;
  }
  input, textarea, select {
    display: inline-flex;
    flex: 0 1 auto;
  }
}

input, textarea, select, button[type] {
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  font-family: var(--system-font-family);
  font-size: var(--input-font-size);
  padding: 0 var(--input-padding);
  color: var(--input-text-color);
  height: var(--input-height);
  user-select: all;
  appearance: none;
  display: block;
  width: auto;
  margin: 0;
}

input, textarea {
  box-shadow: 0 1px 0 0 var(--input-highlight-color), inset 1px 0 0 0 var(--input-shadow-color), inset 0 3px 0 0 var(--input-shadow-color);
  background-color: var(--input-background-color);
}

input {
  width: 100%;
  &[type=number] {
    width: 48px;
  }
}

textarea {
  min-height: calc(var(--input-height) * 2);
  max-height: calc(var(--input-height) * 4);
  height: calc(var(--input-height) * 2);
  padding-top: 3px;
  resize: vertical;
  width: 100%;
}

select, button[type] {
  box-shadow: 0 1px 0 0 var(--input-highlight-color), inset 0 1px 0 0 var(--input-highlight-color);
  background-color: var(--select-background-color);
}

select {
  padding-right: calc(calc(var(--input-height) / 2) + var(--input-padding));
}

button[type] {
  display: inline-flex;
  justify-content: center;
  border-radius: 3px;
  user-select: none;
  padding: 0 12px;
  min-width: 72px;
  line-height: 0;
  &:active {
    background-color: var(--input-border-color);
  }
  + button {
    margin-left: 6px;
  }
}

#app {
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
}

</style>