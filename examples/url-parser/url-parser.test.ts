import { parseURL, parseAuthority, parseHost } from "./url-parser";

type url = "http://admin:123456@github.com:8080"
type protocolRest = parseURL<url>['rest'];
type authorityRest = parseAuthority<protocolRest>["rest"];

//
type protocol = parseURL<url>['protocol'];
type authority = parseAuthority<protocolRest>["authority"];
type host = parseHost<authorityRest>;