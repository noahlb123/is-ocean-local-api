# Is Ocean Local API
Installation:
```
git clone https://github.com/noahlb123/is-ocean-local-api
cd is-ocean-local-api

npm init
npm install express body-parser is-sea
```
To run:
```
node index.js
```
Usage Example (Python):
```python
import requests

wrapper = {'latlon': [0,0]}
print(requests.post('http://127.0.0.1:4000/latlon', json=wrapper).json())
```
```python
{'result': True}
```
