type url = "http://admin:123456@github.com:8080"
type protocol = parseURL<url>['protocol'];
type protocolRest = parseURL<url>['rest'];
type authority = parseAuthority<protocolRest>["authority"];
type authorityRest = parseAuthority<protocolRest>["rest"];
type host = parseHost<authorityRest>;