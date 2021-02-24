import { parseURL } from "./url-parser-2";

import { Test } from "ts-toolbelt"
const { checks, check } = Test

type url = `http://admin:123456@github.com:8080`;
type result = parseURL<url>

checks([
    check<result, {
        name: "github.com";
        port: "8080";
        authority: {
            username: "admin";
            password: "123456";
        };
        protocol: "http";
    }, Test.Pass>(),
])