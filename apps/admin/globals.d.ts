// CSS module declarations
declare module '*.css' {
  const content: any;
  export default content;
}

// Global CSS side-effect imports
declare namespace NodeCSSGlobal {
  interface CSSModuleClasses {}
}