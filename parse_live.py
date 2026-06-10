import json

with open('live.json', 'r', encoding='utf-16le') as f:
    data = json.load(f)

# The structure is usually data["data"]
print("Success:", data.get("success"))
classes = data.get("data", [])
print("Number of classes:", len(classes))
if len(classes) > 0:
    for c in classes[:5]:
        print(f"Title: {c.get('topic')}, Date: {c.get('date')}, Status: {c.get('status')}")
