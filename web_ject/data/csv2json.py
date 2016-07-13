import csv
import json

csvfile = open('gogo.csv', 'r')
jsonfile = open('gogo.json', 'w')

fieldnames = ("Country","Magnitude")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)
