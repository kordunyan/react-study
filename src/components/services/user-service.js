import sha256 from 'crypto-js/sha256';
import {USERS} from "../../constants/users";
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

export function storeToken(token) {
    localStorage.setItem('user-token', token);
}

export function generateToken(login, password) {
    return Base64.stringify(hmacSHA512(sha256(login + password), '32423845723jklsdjf'));
}

export function loginUser(login, password) {
    const user = USERS.find((it) => it.login === login && it.password === password);
    if (!user) {
        throw new Error('Incorrect login or password');
    }
    const token = generateToken(login, password);
    storeToken(token);
    return user;
}

export function logout() {
    localStorage.removeItem('user-token');
}

export function isLoggedIn() {
    return !!localStorage.getItem('user-token');
}
