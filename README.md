## \<gid-list-entities\>

This data component is used for listing the details of various entities.

	<gid-list-entities
	 api-url='https://ql50yzu0fj.execute-api.us-east-1.amazonaws.com/dev'
	 concept = "100002" application = "100003" database = "100004" schema = "100005" table = 	  	"100007" entity="COLUMNS" entities={{entities}}>
	 </gid-list-entities>

In this component, 'entity' is a mandatory parameter. 

Rest of the parameters depends on what the user wants to fetch. For e.g. is the user wants to fetch the list of applications against a concept, the user has to provide the following parameters :
1. api-url
2. entity
3. concept i.e the concept id

If `api-url` is not provided, the component will display sample output for specified entity.

API endpoint:
	
  Let us assume that we want to fetch columns
  
    GET /concepts/{conceptId}/applications/{applicationId}/databases/{databaseId}/schemas/{schemaId}/tables/{tableId}/columns
    
Input:
- Concept Id
- Application Id
- Database Id
- Schema Id
- Table Id

Sample Input: 

    GET /concepts/100002/applications/100003/databases/100004/schemas/100005/tables/100007/columns

Output:
Details of th entity


The output of this components will be as follows:

{
	"columns": [{
		"id": "200001",
		"label": "id"
	}, {
		"id": "200009",
		"label": "ship-city"
	}]
}

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.