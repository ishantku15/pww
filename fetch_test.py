import urllib.request
import json
import sys

url = "https://pw.2snfjitu.workers.dev/api/pw/live"
data = json.dumps({"batchId": "698ad3519549b300a5e1cc6a"}).encode('utf-8')
headers = {'Content-Type': 'application/json'}
req = urllib.request.Request(url, data=data, headers=headers)

try:
    with urllib.request.urlopen(req, timeout=10) as response:
        content = response.read().decode('utf-8')
        print(content[:500])
        parsed = json.loads(content)
        print("KEYS:", parsed.keys())
        if 'success' in parsed:
            print("SUCCESS VALUE:", parsed['success'])
        else:
            print("SUCCESS KEY NOT FOUND")
            
        if 'data' in parsed:
            print("DATA TYPE:", type(parsed['data']))
            print("DATA LENGTH:", len(parsed['data']))
except Exception as e:
    print("ERROR:", e)
