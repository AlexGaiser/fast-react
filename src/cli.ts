#!/usr/bin/env node

import { clone } from './services/utils.service';

const args = clone(process.argv.slice(2));
console.log('hello from fast react');
console.log('args are', args);
