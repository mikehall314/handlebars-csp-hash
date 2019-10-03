/**
 * Handlebars Helper for CSP Hashes
 *
 * @package handlebars-csp-hash
 * @author Mike Hall
 * @copyright Mike Hall
 */

"use strict";

const fs = require("fs");
const crypto = require("crypto");

function register(hbs) {
    hbs.registerHelper("csp-hash", (filename, algo) => {

        // If algo is not set, then set to SHA256
        if (typeof algo !== "string") {
            algo = "sha256";
        }

        // Test for valid algo
        algo = String(algo).toLowerCase();
        const validAlgorithms = ["sha256", "sha384", "sha512"];
        if (validAlgorithms.includes(algo) === false) {
            throw new Error("Invalid CSP algorithm: " + algo);
        }

        // Load and hash the file
        const content = fs.readFileSync(filename, "utf-8");
        const hash = crypto
            .createHash(algo)
            .update(content)
            .digest("base64");

        // Return the hash value
        return `${algo}-${hash}`;
    });
}

// Export the public API
Object.assign(module.exports, {register});
