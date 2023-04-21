import csv
import requests

def main():
    response = requests.get('http://127.0.0.1:8000/test/')
    print(response.content)

    # with open('./docs/uscities.csv','r') as file:
    #     doc = csv.DictReader(file)
    #     for city in doc:
    #         print(city)
    #         break

if __name__ == "__main__":
    main()