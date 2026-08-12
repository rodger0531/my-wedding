// vite-plugin-font ships `declare module '*.otf*?subsets'`, which TypeScript
// cannot match: a wildcard module pattern may contain at most one `*`.
// The `*.ttf?subsets` declaration it ships is well-formed, so only .otf needs
// patching here. Remove this once the plugin fixes its font.d.ts.
declare module '*.otf?subsets' {
  export * from '@konghayao/_font_'
}
