# tablelike-table-cbm

A <abbr title="client-base module">CBM</abbr> for the [tablelike DF](https://github.com/server-state/specs/blob/master/arch/data-formats.md#tabletable-like) that provides a table visualization of said data structure.

It can get installed with

```shell script
yarn add @server-state/tablelike-table-cbm
```

and then registered in the *client-base*'s `component-registry.js` like this:

```js
import Table from '@server-state/tablelike-table-cbm'

const components = {
    [...],
    table: Table
}
```
