<template>
  <router-view/>
</template>

<style lang="scss">
:root {

  /** 
   * Global Size Variables.
   **/

  --system-scrollbar-width: 14px;
  --editor-rulers-size: 20px;
  --editor-sidebar-width: 260px;
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
   * Dark Mode Color Variables.
   **/

  --system-scrollbar-background: #2D2D2D;
  --system-scrollbar-handle: #4B4B4B;
  --system-accent-color: #FFAD21;
  --system-toolbar-background-01: #363636;
  --system-toolbar-background-02: #2D2D2D;
  --system-toolbar-background-gradient: linear-gradient(var(--system-toolbar-background-01), var(--system-toolbar-background-02));
  --system-frame-color: #2D2D2D;
  --system-background-color: #1F1F1F;
  --system-toolbar-title-color: #E2E2E2;
  --editor-grid-color: #636363;
  --editor-border-color: #1C1C1C;
  --editor-rulers-background: #343434;
  --editor-rulers-dashes: #484848;

  --inactive-icon-color: #989898;

  --sidebar-tab-background-01: #2D2D2D;
  --sidebar-tab-background-02: #272727;
  --sidebar-tab-background-gradient: linear-gradient(var(--sidebar-tab-background-01), var(--sidebar-tab-background-02));
  --sidebar-panel-background: #292929;
  --sidebar-panel-header-footer: #383838;

}

*,
*::before,
*::after {

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

[aria-hidden="true"]:not(svg) {
  visibility: hidden !important;
  display: none !important;
}

input, textarea {

  user-select: all;

}

select {
  box-shadow: inset 0 1px 0 0 #565656;
  background-color: #363636;
  border: 1px solid #222222;
  border-radius: 1px;
  color: #797979;
  appearance: none;
  padding: 0 6px;
  font-size: 10px;
  height: 20px;
  margin: 0;
}

#app {

  flex-direction: column;
  overflow: hidden;
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;

  &[theme="light"] {

    --system-accent-color: #FFAD21;
    --system-toolbar-background-01: #E1E1E1;
    --system-toolbar-background-02: #C9C9C9;
    --system-toolbar-background-gradient: linear-gradient(var(--system-toolbar-background-01), var(--system-toolbar-background-02));
    --system-frame-color: #C9C9C9;
    --system-background-color: #E9E9E9;
    --system-toolbar-title-color: #E2E2E2;
    --editor-grid-color: #636363;
    --editor-border-color: #AAAAAA;
    --editor-rulers-background: #343434;
    --sidebar-tab-background-01: #C9C9C9;
    --sidebar-tab-background-02: #AAAAAA;
    --sidebar-tab-background-gradient: linear-gradient(var(--sidebar-tab-background-01), var(--sidebar-tab-background-02));

  }

}
</style>