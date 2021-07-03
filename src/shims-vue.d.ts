/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare type Maybe<T> = T | undefined
declare type Nullable<T> = T | null
declare type CustomizedHTMLElement<T> = HTMLElement & T
declare type Indexable<T> = { [key: string]: T }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type $TODO = any
