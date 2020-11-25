# Various implementations of UID (Unique Identifier)

This module provides all implementations.

<br>
  <p align="center">
<!--  
    <a href="https://www.npmjs.com/package/@uids/uids"><img alt="NPM module version" src="https://img.shields.io/npm/v/@uids/uids"></a>
    <a href="https://github.com/AlexanderLapygin/uids/actions?query=workflow%3Aci"><img alt="CI status" src="https://github.com/alexanderlapygin/uids/workflows/CI/badge.svg"></a>
-->      
    <a href="https://github.com/AlexanderLapygin/uids/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/AlexanderLapygin/uids"></a>  
<!--  
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@uids/uids.svg?style=flat"/>
    <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@uids/uids"/>
-->      
    <a href="https://github.com/AlexanderLapygin/uids/blob/master/LICENSE"><img alt="MIT License" src="https://img.shields.io/github/license/AlexanderLapygin/uids"></a>
  </p>
<br />

## Installing UIDs

To use UUID modules, all you need to do is install the `@uids/uids` package:

```sh
$ yarn add @uids/uids

# or

$ npm install @uids/uids
```

## Usage

At the moment, the library exposes such modules:

- `uid-local`
- `uid-nano`
- `uid-uuid`

For example, you can use the `uid-uuid` module like this:

```ts
import { UUID } from '@uids/uid-uuid'

const uid = new UUID()
//TBD
```
