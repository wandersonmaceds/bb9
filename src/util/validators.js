import {
    isEmpty,
    isArray,
    isEmail,
    arrayNotContains,
}
from 'class-validator'

export function throwIfEmpty(field, message) {
    if(isEmpty(field)) {
        throw new Error(message);
    }
}

export function throwIfNotPresent(value, target, message) {
    if (!isArray(target)) {
        throw new Error(`${target} não é um array`);
    }
    
    if(arrayNotContains(target, [].concat(value))) {
        throw new Error(message);
    }
}

export function throwIfEmailNotValid(value, message) {
    if(!isEmail(value)) {
        throw new Error(message);
    }
}

export function throwIfIsNotArray(target, message) {
    if(!isArray(target)) {
        throw new Error(message);
    }
}