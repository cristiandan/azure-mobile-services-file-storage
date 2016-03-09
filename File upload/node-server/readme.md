# Allow CORS
You have to enable cors on azure blob storage to be able to upload files from broswer

The simplest way is to install the [azure cli]
```sh
$ npm i azure-cli -g
```

Then execute the following (customize allowedOrigins if you need a specific domain)

```sh
$ azure storage cors set
  -a "storage-account"
  -k "storage-account-key"
  --blob/table/queue/file
  --cors "[{\"AllowedOrigins\":\"*\",\"AllowedMethods\":\"GET,POST\",\"MaxAgeInSeconds\":\"86400\",\"AllowedHeaders\":\"*\",\"ExposedHeaders\":\"*\"}]"`
```

# Add Storage name and Access key to AMS  
  
You also need the following setted in your azure mobile service's **application settings**
  
* STORAGE_ACCOUNT_NAME and AZURE_STORAGE_ACCOUNT with the name of you azure blob storage account name
* STORAGE_ACCOUNT_ACCESS_KEY and AZURE_STORAGE_ACCESS_KEY with the access key of your azure blob storage account
  
  
  
  
   [azure cli]: <https://www.npmjs.com/package/azure-cli>