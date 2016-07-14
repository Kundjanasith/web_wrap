import csv
import json

csvfile = open('lln.csv', 'r')
jsonfile = open('lln.json', 'w')

fieldnames = ("Country","Magnitude")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)
