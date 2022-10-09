# linkedin-hubspot-bridge
Tool that transfers unread messages from linkedin to hubpot.

# Enable SSL

Run following:

```
openssl genrsa -out ca.key -des3 2048
openssl req -x509 -sha256 -new -nodes -days 3650 -key ca.key -out ca.pem
touch localhost.ext
```

Insert in `localhost` following content:

```
authorityKeyIdentifier = keyid,issuer
basicConstraints = CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
```

Then run following:

```
openssl genrsa -out localhost.key -des3 2048
openssl req -new -key localhost.key -out localhost.csr
openssl x509 -req -in localhost.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 3650 -sha256 -extfile localhost.ext -out localhost.crt
openssl rsa -in localhost.key -out localhost.decrypted.key
```

Then add certificate `ca.pem` and `localhost.crt` to chrome browser. For Mac users this video can help: https://www.youtube.com/watch?v=_PJc7RcMnw8

# Run app

```
node main.js
```

Then go to login page [https://127.0.0.1:3000/](https://127.0.0.1:3000/)
