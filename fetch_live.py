import urllib.request
import json

url = "https://pw.2snfjitu.workers.dev/api/pw/live"
data = json.dumps({"batchId": "698ad3519549b300a5e1cc6a"}).encode('utf-8')
headers = {'Content-Type': 'application/json'}
req = urllib.request.Request(url, data=data, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        print(response.read().decode('utf-8'))
except Exception as e:
    print(e)
