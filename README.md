# What is this?
This is a simple handlebars helper which will generate a
`Content-Security-Policy` hash for an inline script or style, which you can
drop into the header of your web page.

# Usage
```
npm install handlebars-csp-hash
```

In your handlebars template:
```handlebars
<meta
    http-equiv="Content-Security-Policy"
    content="default-src 'self'; style-src 'self' '{{{ csp-hash "build/inline.css" }}}' 'unsafe-inline'"
    >
```

# Options
By default it will generate a SHA256, but you can also use SHA384 or SHA512
```handlebars
{{ csp-hash "build/inline.css" "sha384" }}
```
