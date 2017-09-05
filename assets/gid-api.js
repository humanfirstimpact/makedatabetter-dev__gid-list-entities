

var ApiPath = {
    concepts: {
        "LOBS": "/lobs/",
        "CONCEPTS": "/lobs/{lob}/concepts",
        "APPLICATIONS": "/concepts/{concept}/applications",
        "DATABASES": "/concepts/{concept}/applications/{application}/databases",
        "SCHEMAS": "/concepts/{concept}/applications/{application}/databases/{database}/schemas",
        "TABLES": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables",
        "COLUMNS": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables/{table}/columns"
    },
    replace: function (url,key,val) {
        url.replace()
        return ApiPath;
    }
};


