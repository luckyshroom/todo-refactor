/**
 * @return {string}
 */
function DOMtoString(document) {
    let html = '', node = document.firstChild;
    while (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                html += node.outerHTML;
                break;
            case Node.TEXT_NODE:
                html += node.nodeValue;
                break;
            case Node.CDATA_SECTION_NODE:
                html += '<![CDATA[' + node.nodeValue + ']]>';
                break;
            case Node.COMMENT_NODE:
                html += '<!--' + node.nodeValue + '-->';
                break;
            case Node.DOCUMENT_TYPE_NODE:
                html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
                break;
        }
        node = node.nextSibling;
    }
    return html;
}

function getAsin(document) {
    let averageCustomerReviews = document.getElementById('averageCustomerReviews');
    return averageCustomerReviews != null ? averageCustomerReviews.getAttribute('data-asin') : null
}

export const ASIN_EXTRACTOR =
    'function getAsin(document) {\n' +
    '    let averageCustomerReviews = document.getElementById(\'averageCustomerReviews\');\n' +
    '    return averageCustomerReviews != null ? averageCustomerReviews.getAttribute(\'data-asin\') : null\n' +
    '}' +
    'chrome.runtime.sendMessage({action: "GET_ASIN", result: getAsin(document)})';