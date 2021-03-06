import { parseURL, parseAuthority, parseHost } from "./url-parser";
import { Test } from "ts-toolbelt"
const { checks, check } = Test

type url = "http://admin:123456@github.com:8080"
type protocolRest = parseURL<url>['rest'];
type authorityRest = parseAuthority<protocolRest>["rest"];

//
type protocol = parseURL<url>['protocol'];
type authority = parseAuthority<protocolRest>["authority"];
type host = parseHost<authorityRest>;

checks([
    check<protocol, {
        protocol: "http";
    }, Test.Pass>(),

    check<authority, {
        username: "admin";
        password: "123456";
    }, Test.Pass>(),

    check<host, {
        name: "github.com";
        port: "8080";
    }, Test.Pass>(),
])